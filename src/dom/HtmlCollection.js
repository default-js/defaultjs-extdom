import extendPrototype from "../utils/ExtendPrototype";
import DelegaterBuilder from "../utils/DelegaterBuilder";
import ListSupport from "./extentions/ListSupport";

extendPrototype(HTMLCollection, ListSupport);

HTMLCollection.prototype.applyTo = function () {
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

HTMLCollection.prototype.val = function () {
	if (arguments.length == 0) {
		const result = new Map();
		for (const node of this) {
			if (typeof node.val === "function") {
				const value = node.val();
				if (value != null) result.set(node.name || node.id || node.selector(), value);
			}
		}
		return result;
	} else HTMLCollection.prototype.applyTo.apply(this, ["val"].concat(Array.from(arguments)));

	return this;
};

HTMLCollection.from = function () {
	const args = Array.from(arguments);
	const data = {};
	let counter = 0;

	while (args.length > 0) {
		const arg = args.shift();
		if (typeof arg !== "undefined" && arg != null) {
			if (arg instanceof HTMLElement) data[counter++] = { value: arg, enumerable: true };
			else if (typeof arg[Symbol.iterator] === "function") {
				for (let item of arg) {
					if (item instanceof HTMLElement) {
						data[counter++] = { value: item, enumerable: true };
					}
				}
			}
		}
	}

	data.length = { value: counter };
	return Object.create(HTMLCollection.prototype, data);
};

DelegaterBuilder(
	function (aFunctionName, theArguments) {
		let results = [];
		this.forEach((node) => {
			if (node && typeof node[aFunctionName] === "function") {
				let result = node[aFunctionName].apply(node, theArguments);
				if (result != null) {
					if (result instanceof HTMLCollection) results = results.concat(Array.from(result));
					else results.push(result);
				}
			}
		});

		if (results.length === 0) return undefined;
		else if (results[0] instanceof HTMLElement || results[0] instanceof HTMLCollection) 
			return HTMLCollection.from(results);
		else return results;
	},
	HTMLCollection.prototype,
	Node.prototype,
	HTMLElement.prototype,
	HTMLInputElement.prototype,
	Element.prototype,
	EventTarget.prototype,
);
