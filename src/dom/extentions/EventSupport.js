import Extender from "../../utils/Extender";
const support = Extender("EventSupport", function(Prototype) {
	const getEventHandles = element => {
		if(!element.___EVENTHANDLES___)
			element.___EVENTHANDLES___ = [];
		
		return element.___EVENTHANDLES___;
	};
	
	Prototype.on = function() {
		if (arguments.length < 2)
			throw new Error("Too less arguments!");
		
		const args = Array.from(arguments);
		const events = args.shift().split(/(\s+)|(\s*,\s*)/);
		const filter = typeof args[0] === "string" ? args.shift() : undefined;
		const handle = args.shift();
		const eventhandles = getEventHandles(this);
		events.forEach(event => {
			const wrapper = function(){
				return handle.apply(handle, arguments);
			};
			eventhandles.push({event : event,handle : handle,wrapper : wrapper});
			this.addEventListener( event, wrapper, {capture : false, once : false, passive : false});			
		});		
		return this;
	};
	
	
	Prototype.removeOn = function(){
		const args = Array.from(arguments);
		const eventhandles = getEventHandles(this);
		const events = typeof args[0] === "string"  ? args.shift().split(/(\s+)|(\s*,\s*)/) : null;
		const handle = typeof args[0] === "function" ? args.shift() : null;
		
		const items = eventhandles.filter(item => (!events ? true : events.indexOf(item.event) >= 0) && (!handle ? true : handle == item.handle));
		items.forEach(item => {
			const index = eventhandles.indexOf(item);
			this.removeEventListener(item.event, item.wrapper);
			eventhandles.splice(index, 1);
		});
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
