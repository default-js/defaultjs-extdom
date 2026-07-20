import Extender from "../../utils/Extender";
const support = Extender("DataSupport", Prototype => {

	/**
	 * Reads all data- attributes of a node into a plain object.
	 *
	 * @param {Node} element
	 * @returns {Object<string,string>} the dataset of the node, empty when it has none
	 */
	const loadData = (element) => {
		const data = {};
		if (typeof element.dataset !== "undefined")
			for (const name in element.dataset)
				data[name] = element.dataset[name];
		return data;
	}

	/**
	 * Gets or sets the data of this node.
	 *
	 * The first call reads the data- attributes into a cache, which is kept on the
	 * node from then on. That cache is detached from the dom: later attribute
	 * changes are not seen and written values are not reflected back. data(true)
	 * reads the attributes again.
	 *
	 * Reloading merges, it does not sync - a value removed from the dom stays in
	 * the cache, as it can not be told apart from a value that never came from the
	 * dom.
	 *
	 * @param {string|boolean} [aName] - a name to read or write, or a boolean to read all data, reloading the attributes first when true
	 * @param {*} [aValue] - the new value, null or undefined removes the name
	 * @returns {Object<string,*>|*|Node} all data, the value of the given name, or this when a value was written
	 * @throws {Error} when the first argument is neither a string nor a boolean
	 */
	Prototype.data = function() {
		const data = loadData(this);
		this.data = (function() {
			if (arguments.length == 0)
				return data;
			const arg1 = arguments[0];
			const type = typeof arg1;
			if(type === "boolean"){
				if(arg1)
					Object.assign(data, loadData(this));
				return data;
			}

			if(type !== "string")
				throw new Error("data() expects a string or boolean as first argument or no arguments at all");
			
			if (arguments.length == 1)
				return data[arg1];
			else if (arguments[1] == null)
				delete data[arguments[0]];
			else
				data[arguments[0]] = arguments[1];

			return this;
		}).bind(this);

		return this.data.apply(null, arguments);
	};
});
export default support;