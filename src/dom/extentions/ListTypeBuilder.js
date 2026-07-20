import extendPrototype from "../../utils/ExtendPrototype";
import DelegaterBuilder from "../../utils/DelegaterBuilder";
import ListSupport from "./ListSupport";

/**
 * Sets up a dom list type - NodeList or HTMLCollection - the same way.
 *
 * The two only differ by their own type and the element type they hold, so this
 * builds both from those two parameters: it applies ListSupport, adds applyTo,
 * val and the static from, and wires the delegation that lets a list forward
 * every method of its elements.
 *
 * @param {Function} ListType - the list type, NodeList or HTMLCollection
 * @param {Function} ElementType - the type of the items, Node or HTMLElement
 */
const buildListType = (ListType, ElementType) => {
	extendPrototype(ListType, ListSupport);

	/**
	 * Applies a function or a method to each item and collects the results.
	 *
	 * A function is called with the item followed by the extra arguments. A string
	 * is taken as the name of a method to call on each item with those arguments.
	 * Null results are skipped.
	 *
	 * @param {Function|string} calling - a function to call, or the name of a method
	 * @param {...*} theArguments - passed to the function or method
	 * @returns {Array} the collected results
	 */
	ListType.prototype.applyTo = function () {
		const args = Array.from(arguments);
		const calling = args.shift();
		const isFunction = typeof calling === "function";
		const results = [];
		for (let i = 0; i < this.length; i++) {
			const node = this[i];
			let result;
			if (isFunction) result = calling.apply(null, [node].concat(args));
			else if (typeof node[calling] === "function") result = node[calling].apply(node, args);

			if (result != null) results.push(result);
		}

		return results;
	};

	/**
	 * Reads or writes the value of the items.
	 *
	 * Without arguments the values are collected into a Map, keyed by the name, id
	 * or selector of each item - items without a value are left out, so an unchecked
	 * radio does not overwrite the selected one of its group. With arguments the
	 * value is set on every item.
	 *
	 * @param {...*} [theValue] - the value to set on the items
	 * @returns {Map<string,*>|ListType} the values by key, or this when a value was set
	 */
	ListType.prototype.val = function () {
		if (arguments.length == 0) {
			const result = new Map();
			for (const node of this) {
				if (typeof node.val === "function") {
					const value = node.val();
					if (value != null) result.set(node.name || node.id || node.selector(), value);
				}
			}
			return result;
		} else this.applyTo("val", ...arguments);

		return this;
	};

	/**
	 * Builds a list from nodes, other lists and arrays of them.
	 *
	 * Every argument that is an item is taken, an iterable is read item by item, so
	 * any mix can be passed. Anything that is not an item is left out. The result is
	 * a plain list, not a live one.
	 *
	 * @param {...(ElementType|Iterable)} theItems
	 * @returns {ListType} a new list of the items
	 */
	ListType.from = function () {
		const args = Array.from(arguments);
		const data = {};
		let counter = 0;

		while (args.length > 0) {
			const arg = args.shift();
			if (arg != null) {
				if (arg instanceof ElementType) data[counter++] = { value: arg, enumerable: true };
				else if (typeof arg[Symbol.iterator] === "function") {
					for (let item of arg) {
						if (item instanceof ElementType) data[counter++] = { value: item, enumerable: true };
					}
				}
			}
		}

		data.length = { value: counter };
		return Object.create(ListType.prototype, data);
	};

	DelegaterBuilder(
		function (aFunctionName, theArguments) {
			let results = [];
			this.forEach((node) => {
				if (node && typeof node[aFunctionName] === "function") {
					const result = node[aFunctionName].apply(node, theArguments);
					if (result != null) {
						if (result instanceof ListType) results = results.concat(Array.from(result));
						else results.push(result);
					}
				}
			});

			if (results.length === 0) return undefined;
			else if (results[0] instanceof ElementType || results[0] instanceof ListType) return ListType.from(results);
			else return results;
		},
		ListType.prototype,
		Node.prototype,
		HTMLElement.prototype,
		HTMLInputElement.prototype,
		Element.prototype,
		EventTarget.prototype,
	);
};

export default buildListType;
