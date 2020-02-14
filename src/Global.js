import Utils from "./utils/Utils";

Utils.global.defaultjs = Utils.global.defaultjs || {};
Utils.global.defaultjs.extdom = Utils.global.defaultjs.extdom || {
	VERSION : "${version}",
	utils : {
		Utils: Utils
	}
};

const parser = new DOMParser();

Utils.global.find = function() {
	return document.find.apply(document, arguments);
};

Utils.global.ready = function() {
	return document.ready.apply(document, arguments);
};

Utils.global.create = function(aContent, aContentType) {
	if (typeof arguments[0] !== "string")
		throw new Error("The first argument must be a string!");
	
	const parsed = parser.parseFromString(arguments[0].trim(), arguments[1] || "text/html");
	const frag = document.createDocumentFragment();
	frag.append(parsed.head.childNodes);
	frag.append(parsed.body.childNodes);
	return frag.childNodes;
};