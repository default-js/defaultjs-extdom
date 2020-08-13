import Utils from "./utils/Utils";

Utils.global.defaultjs = Utils.global.defaultjs || {};
Utils.global.defaultjs.extdom = Utils.global.defaultjs.extdom || {
	VERSION : "${version}",
	utils : {
		Utils: Utils
	}
};

Utils.global.find = function() {
	return document.find.apply(document, arguments);
};

Utils.global.ready = function() {
	return document.ready.apply(document, arguments);
};

Utils.global.create = function(aContent, asTemplate) {
	if (typeof arguments[0] !== "string")
		throw new Error("The first argument must be a string!");
	
	const template = document.createElement("template");
	template.innerHTML = aContent;
	if(asTemplate)
		return template;
	
	return document.importNode(template.content, true).childNodes;
};

Utils.global.script = function(aFile, aTarget) {
	if(aFile instanceof Array)
		return Promise.all(aFile.map(file => Utils.global.script(file, aTarget)));
	
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