import Extender from "../../utils/Extender";

const DEFAULT_TIMEOUT = 100;
const support = Extender("EventSupport", (Prototype) => {
	const addEventListener = Prototype.addEventListener;
	const getEventHandles = (element) => {
		if (!element.___EVENTHANDLES___) {
			const handles = [];
			element.___EVENTHANDLES___ = {
				append: (events, handle, wrapper, option) => {
					events.forEach((event) => {
						handles.push({ event: event, handle: handle, wrapper: wrapper, option: option });
						addEventListener.call(element, event, wrapper, option);
					});
				},
				remove: (events, handle) => {
					const items = handles.filter((item) => (!events ? true : events.indexOf(item.event) >= 0) && (!handle ? true : handle == item.handle));
					items.forEach((item) => {
						const index = handles.indexOf(item);
						removeEventListener.call(element, item.event, item.wrapper);
						handles.splice(index, 1);
					});
				},
			};
		}

		return element.___EVENTHANDLES___;
	};

	const getTriggerTimeouts = (element) => {
		if (!element.___EVENTTRIGGERTIMEOUTS___) element.___EVENTTRIGGERTIMEOUTS___ = {};

		return element.___EVENTTRIGGERTIMEOUTS___;
	};

	Prototype.addEventListener = function (aEvent, aHandle, aOption) {
		if (typeof aOption === "boolean") Prototype.on.call(this, aEvent, aHandle, { capture: aOption, once: false, passive: false });
		else if (typeof aOption === "object") Prototype.on.call(this, aEvent, aHandle, aOption);
		else Prototype.on.call(this, aEvent, aHandle);
	};

	Prototype.on = function () {
		if (arguments.length < 2) throw new Error("Too less arguments!");

		const args = Array.from(arguments);
		let events = typeof args[0] === "string" ? args.shift().split(/(\s+)|(\s*,\s*)/) : args.shift();
		const filter = typeof args[0] === "string" ? args.shift() : null;
		const handle = args.shift();
		const option = typeof args[0] !== "undefined" ? args.shift() : { capture: false, once: false, passive: false };
		const wrapper = function (aEvent) {
			if (filter) {
				const target = event.target;
				if (typeof target.is === "function" && !aEvent.target.is(filter)) return true;
			}
			const result = handle.apply(handle, arguments);
			if (option.once) getEventHandles(aEvent.currentTarget).remove([aEvent.type], handle);
			return result;
		};
		getEventHandles(this).append(events, handle, wrapper, option);

		return this;
	};

	const removeEventListener = Prototype.removeEventListener;
	Prototype.removeEventListener = function () {
		return Prototype.removeOn.apply(this, arguments);
	};

	Prototype.removeOn = function () {
		const args = Array.from(arguments);
		const events = typeof args[0] === "string" ? args.shift().split(/(\s+)|(\s*,\s*)/) : null;
		const handle = typeof args[0] === "function" ? args.shift() : null;
		getEventHandles(this).remove(events, handle);
	};

	Prototype.trigger = function () {
		const args = Array.from(arguments);
		const timeout = typeof args[0] === "number" ? args.shift() : -1;
		if (timeout >= 0) {
			const type = args[0];
			const timeouts = getTriggerTimeouts(this);
			const timeoutid = timeouts[type];
			if (timeoutid) clearTimeout(timeoutid);

			timeouts[type] = setTimeout(() => {
				delete timeouts[type];
				this.trigger.apply(this, args);
			}, timeout);
		} else {
			const type = args.shift();
			const delegate = args[0] instanceof Event ? args.shift() : null;
			const data = args.length >= 1 ? (args.length == 0 ? args.shift() : args) : delegate;
			const event = data ? new CustomEvent(type, { bubbles: true, cancelable: true, detail: data }) : new Event(type, { bubbles: true, cancelable: true });

			if (delegate) event.delegatedEvent = delegate;
			this.dispatchEvent(event);
		}
		return this;
	};
});
export default support;
