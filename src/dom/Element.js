import extendPrototype from "../utils/ExtendPrototype";
import QuerySupport from "./extentions/QuerySupport";
import AttributeSupport from "./extentions/AttributeSupport";
import ManipulationSupport from "./extentions/ManipulationSupport";

extendPrototype(Element,QuerySupport, AttributeSupport, ManipulationSupport);
//
//Element.prototype.val = function() {
//	let result = new Map();		
//	let inputs = this.find("input", "select", "textarea");
//	if(inputs){	
//		inputs.forEach(function(node){
//			let value = node.val();
//			if(typeof value !== "undefined" && value != null)
//				result.set((node.name || node.id || node.selector()), node.val());
//		});	
//		return result;
//	}
//};