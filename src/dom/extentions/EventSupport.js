import Extender from "../../utils/Extender";
const support = Extender("EventSupport", function(Prototype) {
		
	Prototype.on = function() {
		if (arguments.length < 2)
			throw new Error("Too less arguments!");

		const args = Array.from(arguments);
		const events = args.shift().split(/(\s+)|(\s*,\s*)/);
		const filter = typeof args[0] === "string" ? args.shift() : undefined;
		const callback = args.shift();
		events.forEach(event => {
			this.addEventListener( event, function(){
				return callback.apply(callback, arguments);
			}, {capture : false, once : false, passive : false});			
		});		
		return this;
	};
	
	
	Prototype.removeOn = function(aEvent, aCallback){
		const events = aEvent.split(/(\s+)|(\s*,\s*)/);
		events.forEach(event =>	Prototype.removeEventListener.apply(this, event, aCallback));
	};
	
	Prototype.trigger = function(){
		const args = Array.from(arguments);		
		const type = args.shift();		
		const data = args.length > 1 ? args.shift() : null;
		const event = !data ? new CustomEvent(type,  { bubbles: true, cancelable: true, detail: data }) : new Event(type, true, true); 
		
		if(data instanceof Event)
			event.delegatedEvent =  data;
		
		this.dispatchEvent(event);
		return this;
	};
});
export default support;
