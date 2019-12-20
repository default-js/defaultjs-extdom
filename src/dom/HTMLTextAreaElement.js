import extendPrototype from "../utils/ExtendPrototype";
import Extender from "../utils/Extender";


extendPrototype(HTMLTextAreaElement,Extender("ValueSupport", function(Prototype) {	
	Prototype.val = function() {
		if(arguments.length == 0)
			return this.value;
		else
			this.value = arguments[0]
			
		return this;
	};	
}));