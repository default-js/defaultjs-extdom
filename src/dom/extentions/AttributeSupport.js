import Extender from "../../utils/Extender";

const support = Extender("AttributeSupport", (Prototype) => {
	/**
	 * Gets or sets attributes of this element.
	 *
	 * attr() returns all attributes as an object, attr(name) the value of a single
	 * one. With a second argument the attribute is set, with null or undefined it
	 * gets removed.
	 *
	 * Values are stringified by setAttribute, so attr(name, 0) sets "0". Only null
	 * and undefined remove an attribute - 0, false and "" are regular values.
	 *
	 * @param {string} [aName] - the attribute name
	 * @param {*} [aValue] - the new value, null or undefined removes the attribute
	 * @returns {Object<string,string>|string|Element} all attributes, the value of the requested attribute (null when it does not exist), or this when an attribute was set or removed
	 */
	Prototype.attr = function () {
		if (arguments.length == 0) {
			const result = {};
			this.getAttributeNames().forEach((name) => {
				result[name] = this.getAttribute(name);
			});
			return result;
		} else if (arguments.length == 1) return this.getAttribute(arguments[0]);
		else if (arguments[1] == null) this.removeAttribute(arguments[0]);
		else this.setAttribute(arguments[0], arguments[1]);

		return this;
	};
});
export default support;
