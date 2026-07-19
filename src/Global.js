import Utils, {GLOBAL} from "./utils/Utils";
import { READYEVENT } from "./dom/extentions/ReadyEventSupport";

GLOBAL.defaultjs = GLOBAL.defaultjs || {};
GLOBAL.defaultjs.extdom = GLOBAL.defaultjs.extdom || {
	VERSION : "${version}",
	READYEVENT : READYEVENT,
	utils : {
		Utils: Utils
	}
};

GLOBAL.find = function() {
	return document.find.apply(document, arguments);
};

GLOBAL.ready = function() {
	return document.ready.apply(document, arguments);
};

GLOBAL.create = function(aContent, asTemplate) {
	if (typeof arguments[0] !== "string")
		throw new Error("The first argument must be a string!");
	
	const template = document.createElement("template");
	template.innerHTML = aContent;
	if(asTemplate)
		return template;
	
	return document.importNode(template.content, true).childNodes;
};

GLOBAL.script = function(aFile, aTarget) {
	if(aFile instanceof Array)
		return Promise.all(aFile.map(file => GLOBAL.script(file, aTarget)));
	
	if(typeof aFile === "string")	
		return new Promise((r,e) => {
			const script = document.createElement("script");
			script.async = true;
			script.onload = function(){r()};
			script.onerror = function(){throw new Error("load error!")};
			!aTarget ? document.body.append(script) : aTarget.append(script);
			script.src = aFile;
		});
	else
		return Promise.reject("First parameter must be an array of strings or a string!");
};