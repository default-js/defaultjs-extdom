const UUIDTEMPLATE = 'xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx';
export const uuid = function() {
	return UUIDTEMPLATE.replace(/[xy]/g, function(c) {
		let r = Math.random() * 16 | 0
		let v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
};

export const domId = function() {
	return "dom-id-" + uuid();
};

/**
 * Creates a detached div containing the text.
 */
export const div = function(aText) {
	return create("<div>" + aText + "</div>").first();
};

/**
 * Lists the text content of all child nodes, in order.
 */
export const texts = function(aNode) {
	return Array.from(aNode.childNodes, (child) => child.textContent);
};

export default { uuid, domId, div, texts };