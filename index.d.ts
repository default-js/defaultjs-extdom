// Type definitions for @default-js/defaultjs-extdom
// Extends the native dom prototypes - importing the lib is enough, there is
// nothing to instantiate.

export {};

declare global {
	/**
	 * Content accepted by the insert functions. A string is parsed as html, lists
	 * and arrays are taken item by item, so any mix can be passed.
	 */
	type ExtDomContent = Node | NodeList | HTMLCollection | string | ExtDomContent[];

	/** Event types, separated by whitespaces, commas or both. */
	type ExtDomEventTypes = string | string[];

	/** Class names, whitespace separated lists of them, or arrays of both. */
	type ExtDomClassNames = string | string[];

	/** The options of addEventListener, a boolean is taken as capture. */
	type ExtDomEventOptions = boolean | AddEventListenerOptions;

	interface EventTarget {
		/**
		 * Adds a handle to one or more events.
		 *
		 * @throws with less than two arguments or invalid event types
		 */
		on(theEvents: ExtDomEventTypes, aHandle: (event: Event) => any, theOptions?: ExtDomEventOptions): this;
		/**
		 * Adds a handle to one or more events, called only when the target of the
		 * event matches the selector.
		 */
		on(theEvents: ExtDomEventTypes, aSelector: string, aHandle: (event: Event) => any, theOptions?: ExtDomEventOptions): this;

		/**
		 * Removes a handle from some or all of its events. A handle registered by
		 * several calls of on() is removed from all of them.
		 */
		removeOn(aHandle: (event: Event) => any, theEvents?: ExtDomEventTypes): this;

		/**
		 * Dispatches a bubbling, cancelable and composed CustomEvent. A leading
		 * number delays the event and replaces a pending one of the same type.
		 */
		trigger(aType: string, ...theData: any[]): this;
		trigger(aTimeout: number, aType: string, ...theData: any[]): this;
	}

	interface Node {
		/** Removes all child nodes. */
		empty(): this;

		/** Gets the inner html. */
		html(): string;
		/** Gets the outer html when true, the inner html when false. */
		html(asOuterHtml: boolean): string;
		/**
		 * Replaces all children by the given content.
		 *
		 * @throws by invalid content, the existing content is kept in that case
		 */
		html(...theContent: ExtDomContent[]): this;

		/**
		 * Replaces this node by the content, or - with more arguments - the first
		 * one, a child of this node, by the content following it.
		 *
		 * @throws without arguments or by invalid content
		 */
		replace(...theContent: ExtDomContent[]): this;

		/**
		 * Gets or sets the data of this node.
		 *
		 * - `data()` gives all data as an object
		 * - `data(true)` reads the data- attributes again and gives all data
		 * - `data(name)` gives the value of a name
		 * - `data(name, value)` sets it and returns the node, null removes the name
		 *
		 * Typed as any on purpose: Text, Comment and `<object>` carry a native `data`
		 * property, which shadows this function on those nodes - a stricter type here
		 * would make lib.dom itself fail to compile.
		 *
		 * @throws when the first argument is neither a string nor a boolean
		 */
		data: any;

		/**
		 * The live NodeList of child nodes, same as childNodes.
		 *
		 * Typed as any on purpose: `<template>` carries a native `content` property,
		 * which shadows this function on a template element.
		 */
		content: any;
	}

	interface ParentNode {
		/**
		 * Appends the content as last children.
		 *
		 * @throws by invalid content
		 */
		append(...theContent: ExtDomContent[]): this;

		/**
		 * Inserts the content as first children.
		 *
		 * @throws by invalid content
		 */
		prepend(...theContent: ExtDomContent[]): this;
	}

	interface ChildNode {
		/**
		 * Inserts the content directly before this node.
		 *
		 * @throws when this node has no parent node or by invalid content
		 */
		before(...theContent: ExtDomContent[]): this;

		/**
		 * Inserts the content directly after this node.
		 *
		 * @throws when this node has no parent node or by invalid content
		 */
		after(...theContent: ExtDomContent[]): this;
	}

	interface Element {
		/**
		 * Searches nodes by one or more selectors. Supports the pseudo selector
		 * `:parent(selector)`.
		 *
		 * @throws by a selector beside a string
		 */
		find(...theSelectors: string[]): NodeList;

		/** Checks whether this node matches at least one of the selectors. */
		is(...theSelectors: (string | string[])[]): boolean;

		/**
		 * The parent node, or the next ancestor matching a selector.
		 *
		 * @throws by an invalid selector
		 */
		parent(aSelector?: string | boolean, ignoreShadowRoot?: boolean): Node | null;

		/** All ancestors from the nearest upwards, matching a selector when given. */
		parents(aSelector?: string | boolean, ignoreShadowRoot?: boolean): NodeList;

		/**
		 * The nodes closest to this one by their distance in the tree, searching the
		 * own subtree first and then widening upwards.
		 *
		 * This is not the native closest(), which walks up only.
		 */
		closests(aQuery: string): NodeList;

		/** The first node of closests(). */
		closest(aQuery: string): any;

		/** Searches the query at this node, below it, or above it - in that order. */
		nested(aQuery: string): NodeList;

		/** A selector addressing this node. */
		selector(): string | undefined;

		/** Gets all attributes as an object. */
		attr(): Record<string, string>;
		/** Gets the value of an attribute. */
		attr(aName: string): string | null;
		/** Sets an attribute, null or undefined removes it. */
		attr(aName: string, aValue: any): this;
	}

	interface Document {
		find(...theSelectors: string[]): NodeList;
		is(...theSelectors: (string | string[])[]): boolean;
		parent(aSelector?: string | boolean, ignoreShadowRoot?: boolean): Node | null;
		parents(aSelector?: string | boolean, ignoreShadowRoot?: boolean): NodeList;
		closests(aQuery: string): NodeList;
		nested(aQuery: string): NodeList;
		selector(): undefined;

		/**
		 * Registers a function for the ready event, triggered once the dom is parsed.
		 * A function registered afterwards still runs.
		 */
		ready(aFunction: (event?: Event) => any, once?: boolean): this;
	}

	interface DocumentFragment {
		find(...theSelectors: string[]): NodeList;
		is(...theSelectors: (string | string[])[]): boolean;
		parent(aSelector?: string | boolean, ignoreShadowRoot?: boolean): Node | null;
		parents(aSelector?: string | boolean, ignoreShadowRoot?: boolean): NodeList;
		closests(aQuery: string): NodeList;
		closest(aQuery: string): any;
		nested(aQuery: string): NodeList;
		selector(): undefined;
	}

	interface HTMLElement {
		/**
		 * Adds class names.
		 *
		 * @throws when a name is empty or not a string
		 */
		addClass(...theClasses: ExtDomClassNames[]): this;

		/**
		 * Removes class names.
		 *
		 * @throws when a name is empty or not a string
		 */
		removeClass(...theClasses: ExtDomClassNames[]): this;

		/**
		 * Toggles class names. The force parameter of classList.toggle is not
		 * supported - a boolean is not a class name and throws.
		 *
		 * @throws when a name is empty or not a string
		 */
		toggleClass(...theClasses: ExtDomClassNames[]): this;

		/**
		 * Shows the element by restoring the display captured before it was hidden.
		 *
		 * Typed as any on purpose: `<dialog>` carries a native `show` method, which
		 * shadows this function on a dialog element.
		 */
		show: any;

		/** Hides the element by setting its display to none. */
		hide(): this;

		/** Shows the element when it is hidden, hides it otherwise. */
		toggleShow(): this;
	}

	interface HTMLInputElement {
		/**
		 * Gets the value. A checkbox gives its checked state or its value, a radio
		 * gives its value only when checked and undefined when not.
		 */
		val(): any;
		/** Sets the value and triggers an event. */
		val(...theValue: any[]): this;
	}

	interface HTMLSelectElement {
		/** Gets the values of all selected options. */
		val(): string[];
		/** Selects the options by the given values and triggers a changed event. */
		val(...theValue: (string | string[])[]): this;
	}

	interface HTMLTextAreaElement {
		/** Gets the value. */
		val(): string;
		/** Sets the value and triggers an input event. */
		val(aValue: any): this;
	}

	interface NodeList {
		/** The first node, undefined when the list is empty. */
		first(): Node | undefined;
		/** The last node, undefined when the list is empty. */
		last(): Node | undefined;

		indexOf(aNode: any, aStart?: number): number;
		includes(aNode: any, aStart?: number): boolean;
		map<T>(aFunction: (node: Node, index: number, list: Node[]) => T): T[];
		some(aFunction: (node: Node, index: number, list: Node[]) => boolean): boolean;
		every(aFunction: (node: Node, index: number, list: Node[]) => boolean): boolean;
		reduce<T>(aFunction: (result: T, node: Node, index: number, list: Node[]) => T, aInitialValue?: T): T;

		/** Filters the list, keeping its type - the result stays a NodeList. */
		filter(aFunction: (node: Node, index: number, list: Node[]) => boolean): NodeList;

		/**
		 * Applies a function or a method to each node and collects the results,
		 * skipping null results.
		 */
		applyTo(calling: ((node: Node, ...theArguments: any[]) => any) | string, ...theArguments: any[]): any[];

		/** The values of the nodes by their name, id or selector. */
		val(): Map<string, any>;
		/** Sets the value on every node. */
		val(...theValue: any[]): this;

		// delegated calls - every function of a node can be called on the list
		find(...theSelectors: string[]): NodeList;
		parent(aSelector?: string | boolean, ignoreShadowRoot?: boolean): NodeList;
		parents(aSelector?: string | boolean, ignoreShadowRoot?: boolean): NodeList;
		closests(aQuery: string): NodeList;
		nested(aQuery: string): NodeList;
		attr(aName: string): any;
		attr(aName: string, aValue: any): NodeList;
		data(aName?: string | boolean, aValue?: any): any;
		addClass(...theClasses: ExtDomClassNames[]): NodeList;
		removeClass(...theClasses: ExtDomClassNames[]): NodeList;
		toggleClass(...theClasses: ExtDomClassNames[]): NodeList;
		hide(): NodeList;
		toggleShow(): NodeList;
		empty(): NodeList;
		html(...theContent: ExtDomContent[]): any;
		append(...theContent: ExtDomContent[]): NodeList;
		prepend(...theContent: ExtDomContent[]): NodeList;
		before(...theContent: ExtDomContent[]): NodeList;
		after(...theContent: ExtDomContent[]): NodeList;
		remove(): any;
		on(theEvents: ExtDomEventTypes, aHandle: (event: Event) => any, theOptions?: ExtDomEventOptions): NodeList;
		on(theEvents: ExtDomEventTypes, aSelector: string, aHandle: (event: Event) => any, theOptions?: ExtDomEventOptions): NodeList;
		removeOn(aHandle: (event: Event) => any, theEvents?: ExtDomEventTypes): NodeList;
		trigger(aType: string, ...theData: any[]): NodeList;
	}

	interface HTMLCollection {
		first(): Element | undefined;
		last(): Element | undefined;

		indexOf(aNode: any, aStart?: number): number;
		includes(aNode: any, aStart?: number): boolean;
		forEach(aFunction: (node: Element, index: number, list: Element[]) => void): void;
		map<T>(aFunction: (node: Element, index: number, list: Element[]) => T): T[];
		some(aFunction: (node: Element, index: number, list: Element[]) => boolean): boolean;
		every(aFunction: (node: Element, index: number, list: Element[]) => boolean): boolean;
		reduce<T>(aFunction: (result: T, node: Element, index: number, list: Element[]) => T, aInitialValue?: T): T;

		/** Filters the list, keeping its type - the result stays a HTMLCollection. */
		filter(aFunction: (node: Element, index: number, list: Element[]) => boolean): HTMLCollection;

		applyTo(calling: ((node: Element, ...theArguments: any[]) => any) | string, ...theArguments: any[]): any[];

		val(): Map<string, any>;
		val(...theValue: any[]): this;

		// delegated calls
		find(...theSelectors: string[]): NodeList;
		parent(aSelector?: string | boolean, ignoreShadowRoot?: boolean): HTMLCollection;
		parents(aSelector?: string | boolean, ignoreShadowRoot?: boolean): HTMLCollection;
		closests(aQuery: string): HTMLCollection;
		nested(aQuery: string): HTMLCollection;
		attr(aName: string): any;
		attr(aName: string, aValue: any): HTMLCollection;
		data(aName?: string | boolean, aValue?: any): any;
		addClass(...theClasses: ExtDomClassNames[]): HTMLCollection;
		removeClass(...theClasses: ExtDomClassNames[]): HTMLCollection;
		toggleClass(...theClasses: ExtDomClassNames[]): HTMLCollection;
		hide(): HTMLCollection;
		toggleShow(): HTMLCollection;
		empty(): HTMLCollection;
		append(...theContent: ExtDomContent[]): HTMLCollection;
		prepend(...theContent: ExtDomContent[]): HTMLCollection;
		before(...theContent: ExtDomContent[]): HTMLCollection;
		after(...theContent: ExtDomContent[]): HTMLCollection;
		remove(): any;
		on(theEvents: ExtDomEventTypes, aHandle: (event: Event) => any, theOptions?: ExtDomEventOptions): HTMLCollection;
		removeOn(aHandle: (event: Event) => any, theEvents?: ExtDomEventTypes): HTMLCollection;
		trigger(aType: string, ...theData: any[]): HTMLCollection;
	}

	/** Short for `document.find(...)`. */
	function find(...theSelectors: string[]): NodeList;

	/** Short for `document.ready(...)`. */
	function ready(aFunction: (event?: Event) => any, once?: boolean): Document;

	/**
	 * Parses an html string into nodes.
	 *
	 * @throws when the content is not a string
	 */
	function create(aContent: string): NodeList;
	function create(aContent: string, asTemplate: false): NodeList;
	function create(aContent: string, asTemplate: true): HTMLTemplateElement;

	/** Loads one or more scripts, resolving once they are loaded. */
	function script(aFile: string | string[], aTarget?: Node): Promise<any>;

	const defaultjs: {
		extdom: {
			/** The version of the lib. */
			VERSION: string;
			/** The event type of the ready event, `"defaultjs--event--ready"`. */
			READYEVENT: string;
		};
	};
}
