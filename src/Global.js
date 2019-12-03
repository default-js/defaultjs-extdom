import Utils from "./utils/Utils";

const de = Utils.globalVar("de", {});
de.titus = de.titus || {};
de.titus.dom = de.titus.dom || {};
de.titus.dom.api = de.titus.dom.api || {};
if(typeof de.titus.dom.api.extention === "undefined") {
	de.titus.dom.api.extention = {
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

		let parsed = parser.parseFromString(arguments[0].trim(), arguments[1] || "text/html");
		let nodes = parsed.body.childNodes;
		let frag = document.createDocumentFragment();
		frag.append(nodes);
		return frag.childNodes;
	};
}