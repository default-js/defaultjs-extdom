
export const GLOBAL = window || global || self || {};

const Utils = {
	global : GLOBAL,
	globalVar : function(aName, aInitValue){
		if(arguments.length === 2 && typeof GLOBAL[aName] === "undefined")
			GLOBAL[aName] = aInitValue;
		
		return GLOBAL[aName];		
	}
};

export default Utils;