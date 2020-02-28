import Extender from "../../utils/Extender";
const support = Extender("EventSupport", Prototype => {
	const getEventHandles = element => {
		if(!element.___EVENTHANDLES___){
			const handles = []
			element.___EVENTHANDLES___ = {
				append : (events, handle, wrapper, option) => {
					events.forEach(event => {
						handles.push({event : event,handle : handle, wrapper : wrapper, option: option});
						addEventListener.call(element, event, wrapper, option);			
					});		
				},					
				remove : (events, handle) => {
					const items = handles.filter(item => (!events ? true : events.indexOf(item.event) >= 0) && (!handle ? true : handle == item.handle));
					items.forEach(item => {
						const index = handles.indexOf(item);
						removeEventListener.call(element, item.event, item.wrapper);
						handles.splice(index, 1);
					});	
				}
			};
		}
		
		return element.___EVENTHANDLES___;
	};
	
	const addEventListener = Prototype.addEventListener;	
	Prototype.addEventListener = function(aEvent, aHandle, aOption){
		Prototype.on.call(this, aEvent, aHandle, typeof aOption === "boolean" ? {capture : aOption, once : false, passive : false} : aOption);
	};
	
	Prototype.on = function() {
		if (arguments.length < 2)
			throw new Error("Too less arguments!");
		
		const args = Array.from(arguments);
		const events = args.shift().split(/(\s+)|(\s*,\s*)/);
		const filter = typeof args[0] === "string" ? args.shift() : null;
		const handle = args.shift();
		const option = typeof args[0] !== "undefined" ? args.shift() : {capture : false, once : false, passive : false};
		const wrapper = function(aEvent) {
			if(filter) {
				const type = aEvent.target.nodeType;
				if(!type 
					&& (type == Node.DOCUMENT_TYPE_NODE || type == Node.DOCUMENT_FRAGMENT_NODE)
					&& !aEvent.target.is(filter))
					return;
			}
			const result = handle.apply(handle, arguments);
			if(option.once)
				getEventHandles(aEvent.currentTarget).remove([aEvent.type], handle);
			return result;
		};
		getEventHandles(this).append(events, handle, wrapper, option);
		
		return this;
	};
	
	const removeEventListener = Prototype.removeEventListener;
	Prototype.removeEventListener = function(){
		return Prototype.removeOn.apply(this, arguments);
	};
	
	Prototype.removeOn = function(){
		const args = Array.from(arguments);
		const events = typeof args[0] === "string"  ? args.shift().split(/(\s+)|(\s*,\s*)/) : null;
		const handle = typeof args[0] === "function" ? args.shift() : null;		
		getEventHandles(this).remove(events, handle);
	};
	
	Prototype.trigger = function() {
		const args = Array.from(arguments);
		const type = args.shift();
		const delegate = args[0] instanceof Event ? args.shift() : null
		const data = args.length > 1 ? args : delegate;
		const event = data ? new CustomEvent(type, { "bubbles": true, "cancelable": true, detail: data }) : new Event(type, { "bubbles": true, "cancelable": true });

		if (delegate)
			event.delegatedEvent = delegate;

		this.dispatchEvent(event);
		return this;
	};
});
export default support;
