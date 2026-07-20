import Extender from "../../utils/Extender";

/**
 * Builds a list function by delegating to the array function of the same name.
 *
 * The list is copied into an array first. That copy is what makes these functions
 * safe on a live HTMLCollection: nodes may be moved or removed while iterating,
 * without the iteration skipping the entries that shift into their place.
 *
 * @param {string} aName - the name of the array function
 * @returns {Function} a function behaving like the array function of that name
 */
const arrayFunction = (aName) =>
	function () {
		return Array.prototype[aName].apply(Array.from(this), arguments);
	};

const support = Extender("ListSupport", (Prototype) => {
	/**
	 * @param {*} aNode - the node to look for
	 * @param {number} [aStart] - the index to start at
	 * @returns {number} the index of the node, or -1
	 */
	Prototype.indexOf = arrayFunction("indexOf");

	/**
	 * @param {*} aNode - the node to look for
	 * @param {number} [aStart] - the index to start at
	 * @returns {boolean} whether the list contains the node
	 */
	Prototype.includes = arrayFunction("includes");

	/**
	 * Calls the function for each node.
	 *
	 * @param {function(Node,number,Node[]):void} aFunction - called with node, index and the copied list
	 */
	Prototype.forEach = arrayFunction("forEach");

	/**
	 * @param {function(Node,number,Node[]):*} aFunction
	 * @returns {Array} the results, an array as the results are not nodes anymore
	 */
	Prototype.map = arrayFunction("map");

	/**
	 * @param {function(Node,number,Node[]):boolean} aFunction
	 * @returns {boolean} whether the function matches at least one node
	 */
	Prototype.some = arrayFunction("some");

	/**
	 * @param {function(Node,number,Node[]):boolean} aFunction
	 * @returns {boolean} whether the function matches every node
	 */
	Prototype.every = arrayFunction("every");

	/**
	 * @param {function(*,Node,number,Node[]):*} aFunction
	 * @param {*} [aInitialValue]
	 * @returns {*} the accumulated result
	 */
	Prototype.reduce = arrayFunction("reduce");

	/**
	 * Filters the list.
	 *
	 * Unlike map this keeps the type of the list - a NodeList returns a NodeList, a
	 * HTMLCollection returns a HTMLCollection - so a filtered list can be used like
	 * any other one. The result is a new list, it is not live anymore.
	 *
	 * @param {function(Node,number,Node[]):boolean} aFunction
	 * @returns {NodeList|HTMLCollection} the matching nodes
	 */
	Prototype.filter = function () {
		const result = Array.prototype.filter.apply(Array.from(this), arguments);

		return this.constructor.from(result);
	};

	/**
	 * @returns {Node|undefined} the first node, or undefined when the list is empty
	 */
	Prototype.first = function () {
		if (this.length > 0) return this[0];
	};

	/**
	 * @returns {Node|undefined} the last node, or undefined when the list is empty
	 */
	Prototype.last = function () {
		if (this.length > 0) return this[this.length - 1];
	};
});
export default support;