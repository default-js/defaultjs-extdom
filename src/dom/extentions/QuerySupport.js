import Extender from "../../utils/Extender";

const PARENTTOKEN = ":parent";
const QUOTES = ["\"", "'"];

/**
 * Strips the optional quotes around a sub selector.
 *
 * Quoting is not needed anymore, as the selector is read by counting brackets
 * instead of matching a pattern, but it stays supported.
 *
 * @param {string} subquery
 * @returns {string} the sub selector, empty when there is none
 */
const cleanupSubSelector = (subquery) => {
	if (typeof subquery !== "string") return "";
	subquery = subquery.trim();
	if ((subquery.startsWith('"') && subquery.endsWith('"')) || (subquery.startsWith("'") && subquery.endsWith("'"))) subquery = subquery.substring(1, subquery.length - 1);
	return subquery.trim();
};

/**
 * Finds the :parent token of a selector.
 *
 * Only a token on bracket level zero and outside of quotes counts, so neither
 * [data=":parent"] nor :not(:parent) is taken for one.
 *
 * @param {string} aSelector
 * @returns {number} the index of the token, or -1
 */
const indexOfParentToken = (aSelector) => {
	let quote = null;
	let depth = 0;
	for (let i = 0; i < aSelector.length; i++) {
		const char = aSelector[i];
		if (quote) {
			if (char === quote && aSelector[i - 1] !== "\\") quote = null;
		} else if (QUOTES.includes(char)) quote = char;
		else if (char === "(") depth++;
		else if (char === ")") depth--;
		else if (depth === 0 && aSelector.startsWith(PARENTTOKEN, i)) return i;
	}

	return -1;
};

/**
 * Reads a bracket group by counting brackets, so a nested group like
 * div:has(p):not(span) is read as a whole.
 *
 * @param {string} aSelector
 * @param {number} aStart - the index of the opening bracket
 * @returns {{content: string, end: number}} the content of the group and the index behind it
 * @throws {Error} when the group is not closed
 */
const readGroup = (aSelector, aStart) => {
	let quote = null;
	let depth = 0;
	for (let i = aStart; i < aSelector.length; i++) {
		const char = aSelector[i];
		if (quote) {
			if (char === quote && aSelector[i - 1] !== "\\") quote = null;
		} else if (QUOTES.includes(char)) quote = char;
		else if (char === "(") depth++;
		else if (char === ")" && --depth === 0) return { content: aSelector.substring(aStart + 1, i), end: i + 1 };
	}

	throw new Error("Invalid query!");
};

/**
 * Splits a selector at its :parent token.
 *
 * @param {string} aSelector
 * @returns {{prefix: string, selector: string, suffix: string}|null} the parts, or null when there is no token
 * @throws {Error} when the bracket group of the token is not closed
 */
const splitParentQuery = (aSelector) => {
	const index = indexOfParentToken(aSelector);
	if (index < 0) return null;

	const after = index + PARENTTOKEN.length;
	const group = aSelector[after] === "(" ? readGroup(aSelector, after) : { content: "", end: after };

	return {
		prefix: aSelector.substring(0, index).trim(),
		selector: cleanupSubSelector(group.content),
		suffix: aSelector.substring(group.end).trim()
	};
};

/**
 * Executes a selector, resolving the :parent pseudo selector.
 *
 * :parent returns the parent of the element, :parent(selector) the next ancestor
 * matching the selector. Everything before the token selects the elements to
 * start from, everything behind it is searched within the parents found.
 *
 * @param {HTMLElement} aElement
 * @param {string} aSelector
 * @returns {NodeList|undefined} the result, undefined when a step found nothing
 */
const queryExecuter = function (aElement, aSelector) {
	const query = splitParentQuery(aSelector);
	if (!query) return aElement.querySelectorAll(aSelector);

	let result = aElement;
	if (query.prefix.length > 0) {
		result = aElement.querySelectorAll(query.prefix);
		if (result.length == 0) return;
	}

	result = result.parent(query.selector.length > 0 ? query.selector : null);
	if (!result) return;

	return query.suffix.length > 0 ? result.find(query.suffix) : result;
};

/**
 * Normalizes selectors to a list of non empty strings.
 *
 * Empty selectors are skipped rather than thrown at, other than in the sibling
 * functions for event types and class names: an empty selector carries no intent
 * and just contributes nothing, while a non string is a mistake and throws.
 * Selectors are not split, comma separated lists are left for querySelectorAll.
 *
 * @param {string|Iterable<string>} theSelectors
 * @returns {string[]} the trimmed selectors, empty ones removed
 * @throws {Error} when there is no selector or one is not a string
 */
const toSelector = function (theSelectors) {
	if(theSelectors == null) throw new Error("Invalid query!");

	const selectors = typeof theSelectors === "string" ? [theSelectors] : Array.from(theSelectors);

	return selectors
		.map((selector) => {
				if(typeof selector !== "string") throw new Error("Invalid query!");
				return selector.trim();
			})
		.filter((selector) => selector.length > 0);
}


const support = Extender("QuerySupport", (Prototype) => {
	/**
	 * Searches nodes by one or more selectors.
	 *
	 * Selector lists separated by comma are left to querySelectorAll, which knows
	 * them and gets the commas inside brackets and quotes right. The results of
	 * several selectors are collected in the order they were given, without
	 * removing the nodes a second selector finds again.
	 *
	 * @param {...string} theSelectors - selectors, empty ones are skipped
	 * @returns {NodeList} the nodes found, empty when there are none
	 * @throws {Error} by a selector beside a string
	 */
	Prototype.find = function () {
		const nodes = [];
		const selectors = toSelector(arguments);
		for(let selector of selectors){
			const result = queryExecuter(this, selector);
			if (result) nodes.push(result);
		}

		return NodeList.from(...nodes);
	};

	/**
	 * Checks whether this node matches at least one of the selectors.
	 *
	 * A Document and a DocumentFragment never match, as they can not be selected -
	 * that also covers a ShadowRoot, which is a DocumentFragment.
	 *
	 * @param {...(string|string[])} theSelectors - selectors, given one by one or as a list
	 * @returns {boolean} whether one of the selectors matches
	 * @throws {DOMException} by an invalid selector
	 */
	Prototype.is = function () {
		if (this instanceof Document || this instanceof DocumentFragment) return false;
		else if (arguments.length == 1) {
			if (typeof arguments[0] === "string") return this.matches(arguments[0]);
			else if (typeof arguments[0].length === "number") {
				let filter = arguments[0];
				for (let i = 0; i < filter.length; i++) if (this.matches(filter[i])) return true;
			}
		} else if (arguments.length > 1) return this.is(Array.from(arguments));

		return false;
	};

	/**
	 * Returns the parent of this node, or the next ancestor matching a selector.
	 *
	 * An invalid selector is not caught: it would return the parent reached so far,
	 * which is indistinguishable from a match, while a selector matching nothing
	 * correctly returns null. Letting it throw keeps those two apart.
	 *
	 * @param {string|boolean} [selector] - a selector to look for, or the ignoreShadowRoot flag
	 * @param {boolean} [ignoreShadowRoot] - continue at the host of a shadow root instead of stopping
	 * @returns {Node|null} the parent, the matching ancestor, or null when there is none
	 * @throws {DOMException} by an invalid selector
	 */
	Prototype.parent = function (selector, ignoreShadowRoot) {
		if (!this.parentNode) return null;
		ignoreShadowRoot = typeof selector === "boolean" ? selector : ignoreShadowRoot;
		selector = typeof selector === "string" ? selector : null;

		let parent = this.parentNode;
		if (parent instanceof ShadowRoot && ignoreShadowRoot) parent = parent.host;

		if (selector) return parent.is(selector) ? parent : parent.parent(selector, ignoreShadowRoot);

		return parent;
	};

	/**
	 * Collects the ancestors of this node, from the nearest one upwards.
	 *
	 * With a selector only the matching ancestors are collected, as every step
	 * walks up to the next match.
	 *
	 * @param {string|boolean} [selector] - a selector to look for, or the ignoreShadowRoot flag
	 * @param {boolean} [ignoreShadowRoot] - continue at the host of a shadow root instead of stopping
	 * @returns {NodeList} the ancestors, empty when there are none
	 * @throws {DOMException} by an invalid selector
	 */
	Prototype.parents = function () {
		const result = new Array();
		let parent = Prototype.parent.apply(this, arguments);
		while (parent) {
			result.push(parent);
			parent = Prototype.parent.apply(parent, arguments);
		}

		return NodeList.from(result);
	};

	/**
	 * Builds a selector addressing this node.
	 *
	 * An id ends the selector, as it already identifies the node. Otherwise the tag
	 * name is used and the path continues at the parent. A position is only added
	 * when the parent has more than one element child, and it counts all of them -
	 * that is what :nth-child does, unlike :nth-of-type.
	 *
	 * The id is not escaped, so an id needing it gives an invalid selector.
	 *
	 * @returns {string|undefined} the selector, undefined for a Document or DocumentFragment
	 */
	Prototype.selector = function () {
		if (this instanceof Document || this instanceof DocumentFragment) return undefined;
		else if (this.id) return "#" + this.id;
		else {
			let selector = this.tagName.toLowerCase();
			const parent = this.parent();
			if (parent) {
				if(parent.children.length > 1) {
					const index = parent.children.indexOf(this);
					selector = `${selector}:nth-child(${index + 1})`;
				}
				const parentSelector = parent.selector();
				return parentSelector != null ? `${parentSelector} > ${selector}` : selector;
			}
			return selector;
		}
	};

	/**
	 * Returns the first node of closests().
	 *
	 * @param {string} aQuery
	 * @returns {Node|undefined} the first node found, or undefined
	 */
	Prototype.closest = function (aQuery) {
		return this.closests(aQuery).first();
	};

	/**
	 * Searches the nodes closest to this one by their distance in the tree.
	 *
	 * The subtree of this node is searched first, then the subtree of the parent,
	 * and so on upwards - the search widens in rings until a level has matches, and
	 * those are returned. So the result may be a child, a sibling, a cousin or an
	 * ancestor, depending on where the first match appears.
	 *
	 * Distance is meant in both directions here, other than in the native closest(),
	 * which only walks up and returns an ancestor.
	 *
	 * @param {string} aQuery
	 * @returns {NodeList} the matches of the closest level having any, empty when there are none
	 */
	Prototype.closests = function (aQuery) {
		const result = this.find(aQuery);
		if (result.length != 0) return result;

		const parent = this.parentElement;
		if (parent) return parent.closests(aQuery);

		return NodeList.from([]);
	};

	/**
	 * Searches the query at this node, below it, or above it - in that order.
	 *
	 * This node itself is checked first, then its subtree, and only then the
	 * ancestors. Unlike closests() the search does not widen in rings: it never
	 * looks into the subtree of an ancestor, so a sibling is not found.
	 *
	 * @param {string} aQuery
	 * @returns {NodeList} this node, the nodes below it, or the matching ancestor, empty when there is none
	 */
	Prototype.nested = function (aQuery) {
		if (this.is(aQuery)) return NodeList.from(this);

		let nested = this.find(aQuery);
		if (nested && nested.length > 0) return nested;
		else return NodeList.from(this.parent(aQuery));
	};
});
export default support;
