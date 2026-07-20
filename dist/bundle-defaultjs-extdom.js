/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Global.js":
/*!***********************!*\
  !*** ./src/Global.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Utils */ "./src/utils/Utils.js");
/* harmony import */ var _dom_extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/extentions/ReadyEventSupport */ "./src/dom/extentions/ReadyEventSupport.js");



_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.defaultjs = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.defaultjs || {};
_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.defaultjs.extdom = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.defaultjs.extdom || {
	VERSION : "2.0.0",
	READYEVENT : _dom_extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_1__.READYEVENT,
	utils : {
		Utils: _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"]
	}
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.find = function() {
	return document.find.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.ready = function() {
	return document.ready.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.create = function(aContent, asTemplate) {
	if (typeof arguments[0] !== "string")
		throw new Error("The first argument must be a string!");
	
	const template = document.createElement("template");
	template.innerHTML = aContent;
	if(asTemplate)
		return template;
	
	return document.importNode(template.content, true).childNodes;
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.script = function(aFile, aTarget) {
	if(aFile instanceof Array)
		return Promise.all(aFile.map(file => _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.script(file, aTarget)));
	
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

/***/ }),

/***/ "./src/dom/Document.js":
/*!*****************************!*\
  !*** ./src/dom/Document.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./src/dom/extentions/ReadyEventSupport.js");
/**
 * Adds query and ready functions to Document, and triggers the ready event.
 *
 * The event is triggered once the dom is parsed. A ready function registered
 * after that is not lost, as ready() triggers the event again when the document
 * is already complete.
 */




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Document, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

document.addEventListener("DOMContentLoaded", () => document.trigger(_extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__.READYEVENT));





/***/ }),

/***/ "./src/dom/DocumentFragment.js":
/*!*************************************!*\
  !*** ./src/dom/DocumentFragment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./src/dom/extentions/ManipulationSupport.js");
/**
 * Adds query and content functions to DocumentFragment.
 *
 * A ShadowRoot is a DocumentFragment, so a shadow root can be searched and filled
 * the same way as the fragment create() returns.
 */




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(DocumentFragment, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);






/***/ }),

/***/ "./src/dom/Element.js":
/*!****************************!*\
  !*** ./src/dom/Element.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/AttributeSupport */ "./src/dom/extentions/AttributeSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./src/dom/extentions/ManipulationSupport.js");
/**
 * Adds query, attribute and content functions to Element.
 *
 * Query and attribute functions need a selectable node, which is why they sit
 * here and not on Node. ManipulationSupport is applied again although Element
 * inherits it from Node - that puts the functions on Element as own properties,
 * where the extensions of the more specific html types can find them.
 */





(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Element,_extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./src/dom/EventTarget.js":
/*!********************************!*\
  !*** ./src/dom/EventTarget.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/EventSupport */ "./src/dom/extentions/EventSupport.js");
/**
 * Adds the event functions to EventTarget.
 *
 * EventTarget is the root of everything dispatching events, not only of the dom,
 * so on(), removeOn() and trigger() are available on every node, on the document
 * and on the window alike.
 */



(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(EventTarget, _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/dom/HTMLElement.js":
/*!********************************!*\
  !*** ./src/dom/HTMLElement.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/HtmlClassSupport */ "./src/dom/extentions/HtmlClassSupport.js");
/* harmony import */ var _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ShowHideSupport */ "./src/dom/extentions/ShowHideSupport.js");
/**
 * Adds class and visibility functions to HTMLElement.
 *
 * Both work on the style and the classList of a html element, which is why they
 * sit here and not on Element - an svg element has neither in the same way.
 */





(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLElement, _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/dom/HTMLInputElement.js":
/*!*************************************!*\
  !*** ./src/dom/HTMLInputElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./src/dom/extentions/ValueSupport.js");
/**
 * Adds val() to HTMLInputElement.
 *
 * ValueSupport picks the handling by the type of the input, so a checkbox and a
 * radio are read by their checked state while every other input is read by its
 * value.
 */




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLInputElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/dom/HTMLSelectElement.js":
/*!**************************************!*\
  !*** ./src/dom/HTMLSelectElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./src/dom/extentions/ValueSupport.js");
/**
 * Adds val() to HTMLSelectElement.
 *
 * ValueSupport reads a select by its selected options, so val() gives an array of
 * their values and takes one to select them again.
 */




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLSelectElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/dom/HTMLTextAreaElement.js":
/*!****************************************!*\
  !*** ./src/dom/HTMLTextAreaElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./src/dom/extentions/ValueSupport.js");
/**
 * Adds val() to HTMLTextAreaElement.
 *
 * A textarea matches none of the special input types, so ValueSupport falls back
 * to reading and writing its value - and triggers an input event when it is set,
 * the same as any other field.
 */




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLTextAreaElement, _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/dom/HtmlCollection.js":
/*!***********************************!*\
  !*** ./src/dom/HtmlCollection.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extentions_ListTypeBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extentions/ListTypeBuilder */ "./src/dom/extentions/ListTypeBuilder.js");
/**
 * Builds HTMLCollection as a list of html elements.
 *
 * Same as NodeList, only holding html elements - a live collection like children
 * therefore keeps its type when it is filtered.
 */


(0,_extentions_ListTypeBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLCollection, HTMLElement);


/***/ }),

/***/ "./src/dom/Node.js":
/*!*************************!*\
  !*** ./src/dom/Node.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/DataSupport */ "./src/dom/extentions/DataSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./src/dom/extentions/ManipulationSupport.js");
/**
 * Adds data and content functions to Node.
 *
 * Node is the common base of elements, text nodes and fragments, so data() and
 * the insert functions work on all of them, not only on elements.
 */




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Node,_extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__["default"],_extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/dom/NodeList.js":
/*!*****************************!*\
  !*** ./src/dom/NodeList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extentions_ListTypeBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extentions/ListTypeBuilder */ "./src/dom/extentions/ListTypeBuilder.js");
/**
 * Builds NodeList as a list of nodes.
 *
 * Besides the list functions this gives a NodeList every function of a node, by
 * delegation - calling one applies it to each node and collects the results.
 */


(0,_extentions_ListTypeBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])(NodeList, Node);


/***/ }),

/***/ "./src/dom/extentions/AttributeSupport.js":
/*!************************************************!*\
  !*** ./src/dom/extentions/AttributeSupport.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("AttributeSupport", (Prototype) => {
	/**
	 * Gets or sets attributes of this element.
	 *
	 * attr() returns all attributes as an object, attr(name) the value of a single
	 * one. With a second argument the attribute is set, with null or undefined it
	 * gets removed.
	 *
	 * Values are stringified by setAttribute, so attr(name, 0) sets "0". Only null
	 * and undefined remove an attribute - 0, false and "" are regular values.
	 *
	 * @param {string} [aName] - the attribute name
	 * @param {*} [aValue] - the new value, null or undefined removes the attribute
	 * @returns {Object<string,string>|string|Element} all attributes, the value of the requested attribute (null when it does not exist), or this when an attribute was set or removed
	 */
	Prototype.attr = function () {
		if (arguments.length == 0) {
			const result = {};
			this.getAttributeNames().forEach((name) => {
				result[name] = this.getAttribute(name);
			});
			return result;
		} else if (arguments.length == 1) return this.getAttribute(arguments[0]);
		else if (arguments[1] == null) this.removeAttribute(arguments[0]);
		else this.setAttribute(arguments[0], arguments[1]);

		return this;
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);


/***/ }),

/***/ "./src/dom/extentions/DataSupport.js":
/*!*******************************************!*\
  !*** ./src/dom/extentions/DataSupport.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("DataSupport", Prototype => {

	/**
	 * Reads all data- attributes of a node into a plain object.
	 *
	 * @param {Node} element
	 * @returns {Object<string,string>} the dataset of the node, empty when it has none
	 */
	const loadData = (element) => {
		const data = {};
		if (typeof element.dataset !== "undefined")
			for (const name in element.dataset)
				data[name] = element.dataset[name];
		return data;
	}

	/**
	 * Gets or sets the data of this node.
	 *
	 * The first call reads the data- attributes into a cache, which is kept on the
	 * node from then on. That cache is detached from the dom: later attribute
	 * changes are not seen and written values are not reflected back. data(true)
	 * reads the attributes again.
	 *
	 * Reloading merges, it does not sync - a value removed from the dom stays in
	 * the cache, as it can not be told apart from a value that never came from the
	 * dom.
	 *
	 * @param {string|boolean} [aName] - a name to read or write, or a boolean to read all data, reloading the attributes first when true
	 * @param {*} [aValue] - the new value, null or undefined removes the name
	 * @returns {Object<string,*>|*|Node} all data, the value of the given name, or this when a value was written
	 * @throws {Error} when the first argument is neither a string nor a boolean
	 */
	Prototype.data = function() {
		const data = loadData(this);
		this.data = (function() {
			if (arguments.length == 0)
				return data;
			const arg1 = arguments[0];
			const type = typeof arg1;
			if(type === "boolean"){
				if(arg1)
					Object.assign(data, loadData(this));
				return data;
			}

			if(type !== "string")
				throw new Error("data() expects a string or boolean as first argument or no arguments at all");
			
			if (arguments.length == 1)
				return data[arg1];
			else if (arguments[1] == null)
				delete data[arguments[0]];
			else
				data[arguments[0]] = arguments[1];

			return this;
		}).bind(this);

		return this.data.apply(null, arguments);
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./src/dom/extentions/EventSupport.js":
/*!********************************************!*\
  !*** ./src/dom/extentions/EventSupport.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const EVENTSPLITER = /\s*,\s*|\s+/;
const DEFAULT_OPTIONS = { capture: false, once: false, passive: false, signal: undefined };

/**
 * Everything this extension keeps per element. A WeakMap holds it outside of the
 * element, so nothing is exposed on the dom and it is released with the element.
 *
 * Wrappers and handles are mapped in both directions: a wrapper needs to find its
 * registration while an event runs, and removeOn needs to find all wrappers of a
 * handle. Handles are mapped to a set of wrappers, not to a single one, so the
 * same handle can be registered any number of times without the registrations
 * overwriting each other.
 *
 * @typedef {Object} ElementData
 * @property {Map<string,number>} eventTriggerTimeouts - running trigger timeouts by event type
 * @property {Map<Function,Registration>} wrapperHandleMap - registration of each wrapper
 * @property {Map<Function,Set<Function>>} handleWrapperMap - all wrappers of a handle
 */

/**
 * One call of on().
 *
 * @typedef {Object} Registration
 * @property {Function} handle - the function given to on()
 * @property {Set<string>} events - the event types still registered, listeners get removed one by one
 * @property {Object} options - the options the listener was added with, needed to remove it again
 */

const ELEMENTDATA = new WeakMap();

/**
 * @param {EventTarget} element
 * @returns {ElementData} the data of the element, created on first access
 */
const getElementData = (element) => {
	if (!ELEMENTDATA.has(element))
		ELEMENTDATA.set(element, {
			eventTriggerTimeouts: new Map(),
			wrapperHandleMap: new Map(),
			handleWrapperMap: new Map()
		});

	return ELEMENTDATA.get(element);
};

const getWrapperHandleMap = (element) => {
	return getElementData(element).wrapperHandleMap;
};

const getHandleWrapperMap = (element) => {
	return getElementData(element).handleWrapperMap;
};

const getTriggerTimeouts = (element) => {
	return getElementData(element).eventTriggerTimeouts;
};

/**
 * Registers a wrapper in both directions.
 *
 * @param {EventTarget} anElement
 * @param {Function} aHandle - the function given to on()
 * @param {Function} aWrapper - the listener actually added to the element
 * @param {Iterable<string>} theEvents
 * @param {Object} theOptions - kept to remove the listener with the same options later
 * @throws {Error} when the wrapper is already registered, which can not happen as long as on() creates a new one per call
 */
const registrateHandleWrapper = (anElement, aHandle, aWrapper, theEvents, theOptions) => {
	const wrapperHandleMap = getWrapperHandleMap(anElement);
	if (!wrapperHandleMap.has(aWrapper)) wrapperHandleMap.set(aWrapper, { handle: aHandle, events: new Set(theEvents), options: theOptions });
	else throw new Error("Wrapper already registered for this element!");

	const handleWrapperMap = getHandleWrapperMap(anElement);
	let wrapperSet = handleWrapperMap.get(aHandle);
	if (!wrapperSet) {
		wrapperSet = new Set();
		handleWrapperMap.set(aHandle, wrapperSet);
	}	
	wrapperSet.add(aWrapper);	
};

/**
 * Removes a wrapper from some or all of its events.
 *
 * The registration is dropped from both maps as soon as no event is left, so a
 * wrapper that still listens to other events stays known.
 *
 * @param {EventTarget} aElement
 * @param {Function} aWrapper
 * @param {Iterable<string>} [theEvents] - the events to remove, all of them when omitted
 */
const removeWrapper = (aElement, aWrapper, theEvents) => {
	const wrapperHandleMap = getWrapperHandleMap(aElement);
	if(!wrapperHandleMap.has(aWrapper)) throw new Error("Wrapper not registered for this element!");
	const { events, options, handle } = wrapperHandleMap.get(aWrapper);
	const removedEvents = theEvents || events;
	for (let event of removedEvents) {
		if (events.has(event)) {
			events.delete(event);
			aElement.removeEventListener(event, aWrapper, options);
		}
	}
	//Cleanup the wrapperHandleMap and handleWrapperMap if no events left for this wrapper
	if (events.size === 0){
		wrapperHandleMap.delete(aWrapper);
		const handleWrapperMap = getHandleWrapperMap(aElement);
		const wrapperSet = handleWrapperMap.get(handle);
		wrapperSet.delete(aWrapper);
		if (wrapperSet.size === 0)
			handleWrapperMap.delete(handle);
	}
};

/**
 * @param {boolean|Object} [options] - a boolean is taken as capture, an object is merged into the defaults
 * @returns {Object} always a new object, never the shared defaults
 */
const toEventOptions = (options) => {
	if (options == null) return Object.assign({}, DEFAULT_OPTIONS);
	else if (typeof options === "boolean") return Object.assign({}, DEFAULT_OPTIONS, { capture: options });
	else return Object.assign({}, DEFAULT_OPTIONS, options);
};

/**
 * Normalizes event types to a flat list.
 *
 * Types are separated by whitespaces, commas or both, in a string as well as
 * within the entries of an array - so ["click", "focus blur"] gives three types.
 *
 * A string gets trimmed before it is split, because the empty entries a leading
 * or trailing separator produces are artifacts of splitting, not something the
 * caller asked for. An empty entry inside an array is the opposite case: it was
 * written down and therefore throws.
 *
 * @param {string|Iterable<string>} theEvents
 * @returns {string[]} the event types, never empty
 * @throws {Error} when no type is left or an entry is not a non empty string
 */
const toEventTypes = (theEvents) => {
	if(theEvents == null) throw new Error("Event types are required!");	
	
	const events = typeof theEvents === "string" ? theEvents.trim().split(EVENTSPLITER) : theEvents;
	if (typeof events[Symbol.iterator] !== "function") throw new Error("Invalid event types!");
	if(events.length === 0) throw new Error("Event types are required!");

	const result = [];

	for (let event of events) {
		if (typeof event !== "string") throw new Error("Invalid event types!");
		event = event.trim();
		if (event.length === 0) throw new Error("Invalid event types!");
		result.push(...event.split(EVENTSPLITER));
	}
	return result;
};

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("EventSupport", (Prototype) => {
	/**
	 * Adds a handle to one or more events.
	 *
	 * The handle is not added as listener itself, it gets wrapped. That wrapper
	 * applies the selector and handles the once option, which keeps removeOn able
	 * to find every registration of a handle.
	 *
	 * With a selector the handle is only called when the target of the event
	 * matches it. Together with once this needs care: the browser consumes a once
	 * listener on the first event, even when the selector did not match, so the
	 * wrapper registers itself again in that case and waits for a matching event.
	 *
	 * @param {string|Iterable<string>} theEvents - event types, separated by whitespaces or commas
	 * @param {string} [aSelector] - only call the handle when the target of the event matches
	 * @param {Function} aHandle - called with the event
	 * @param {boolean|Object} [theOptions] - a boolean is taken as capture, otherwise the options of addEventListener
	 * @returns {EventTarget} this
	 * @throws {Error} by less than two arguments or invalid event types
	 */
	Prototype.on = function () {
		if (arguments.length < 2) throw new Error("Too less arguments!");

		const args = Array.from(arguments);
		const events = toEventTypes(args.shift());
		const elementSelector = typeof args[0] === "string" ? args.shift() : null;
		const handle = args.shift();
		const option = toEventOptions(args.shift());
		const element = this;
		const wrapper = function(event) {
			const { target, type } = event;
			if (elementSelector && typeof target.is === "function" && !target.is(elementSelector)) {
				if (option.once) element.addEventListener(type, wrapper, option); // re-register the wrapper for the next event
				return;
			} else {
				if (option.once) removeWrapper(element, wrapper, [type]);
				const result = handle.apply(null, arguments);				
				return result;
			}
		};

		registrateHandleWrapper(this, handle, wrapper, events, option);

		for (let event of events) {
			this.addEventListener(event, wrapper, option);
		}

		return this;
	};

	/**
	 * Removes a handle from some or all of its events.
	 *
	 * A handle registered by several calls of on() is removed from all of them.
	 *
	 * @param {Function} aHandle - the function given to on()
	 * @param {string|Iterable<string>} [theEvents] - the events to remove, all of them when omitted
	 * @returns {EventTarget} this
	 * @throws {Error} by invalid event types
	 */
	Prototype.removeOn = function (aHandle, theEvents) {
		const events = theEvents ? toEventTypes(theEvents) : null;
		const handleWrapperMap = getHandleWrapperMap(this);
		const wrapperSet = handleWrapperMap.get(aHandle);	
		if (wrapperSet) {
			for (let wrapper of wrapperSet)
				removeWrapper(this, wrapper, events);
		}

		return this;
	};

	/**
	 * Dispatches a bubbling, cancelable and composed CustomEvent.
	 *
	 * A leading number delays the event by that many milliseconds and replaces a
	 * delayed event of the same type that is still pending, so a repeatedly
	 * triggered event is dispatched once after things came to rest.
	 *
	 * One data argument becomes event.detail as it is, several become an array of
	 * them. A leading Event is taken as the event this one is delegated from and
	 * is available as event.delegatedEvent.
	 *
	 * @param {number} [aTimeout] - milliseconds to delay the event
	 * @param {string} aType - the event type
	 * @param {Event} [aDelegatedEvent] - the event this one is triggered for
	 * @param {...*} [theData] - becomes event.detail
	 * @returns {EventTarget} this
	 */
	Prototype.trigger = function () {
		const args = Array.from(arguments);
		const timeout = typeof args[0] === "number" ? args.shift() : -1;
		if (timeout >= 0) {
			const type = args[0];
			const timeouts = getTriggerTimeouts(this);
			const timeoutid = timeouts.get(type);
			if (timeoutid) clearTimeout(timeoutid);

			timeouts.set(type, setTimeout(() => {
				timeouts.delete(type);
				this.trigger.apply(this, args);
			}, timeout));
		} else {
			const type = args.shift();
			const delegate = args[0] instanceof Event ? args.shift() : null;
			const data = args.length >= 1 ? (args.length == 1 ? args.shift() : args) : delegate;
			const event = new CustomEvent(type, { bubbles: true, cancelable: true, composed: true, detail: data });

			if (delegate) event.delegatedEvent = delegate;
			this.dispatchEvent(event);
		}
		return this;
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);


/***/ }),

/***/ "./src/dom/extentions/HtmlClassSupport.js":
/*!************************************************!*\
  !*** ./src/dom/extentions/HtmlClassSupport.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const CLASSSPLITER = /\s+/;

/**
 * Normalizes class names to a flat list.
 *
 * Names are separated by whitespaces, in a string as well as within the entries
 * of an array - so ["a", "b c"] gives three names.
 *
 * A string gets trimmed before it is split, because the empty entries a leading
 * or trailing whitespace produces are artifacts of splitting. An empty entry
 * written down by the caller throws instead, as does anything that is not a
 * string - classList would only report those as an unusable token, or silently
 * take a boolean as a class named "true".
 *
 * @param {string|string[]} theClasses
 * @returns {Iterable<string>} the class names, never empty
 * @throws {Error} when no name is left or an entry is not a non empty string
 */
const toClassNames = (theClasses) => {
	if (theClasses == null) throw new Error("Class names are required!");

	const classes = typeof theClasses === "string" ? theClasses.trim().split(CLASSSPLITER) : theClasses;
	if (typeof classes[Symbol.iterator] !== "function") throw new Error("Invalid class names!");
	if (classes.length === 0) throw new Error("Class names are required!");

	const result = [];
	for (let clazz of classes) {
		if (typeof clazz !== "string") throw new Error("Invalid class names!");
		clazz = clazz.trim();
		if (clazz.length === 0) throw new Error("Invalid class names!");
		result.push(...clazz.split(CLASSSPLITER));
	}
	
	return result;
};

/**
 * Builds a class function, as add, remove and toggle only differ by the method
 * they call on the classList.
 *
 * @param {string} aName - the name of the classList method
 * @returns {function(...(string|string[])):Element} a function taking any mix of names, lists of names and arrays of both
 */
const classListFunction = (aName) =>
	function () {
		const classes = toClassNames(Array.from(arguments).flat());
		classes.forEach((clazz) => this.classList[aName](clazz));

		return this;
	};

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("HtmlClassSupport", (Prototype) => {
	/**
	 * Adds class names to this element.
	 *
	 * @param {...(string|string[])} theClasses - names, whitespace separated lists of names, or arrays of both
	 * @returns {Element} this
	 * @throws {Error} by invalid class names
	 */
	Prototype.addClass = classListFunction("add");

	/**
	 * Removes class names from this element. Names not present are ignored.
	 *
	 * @param {...(string|string[])} theClasses - names, whitespace separated lists of names, or arrays of both
	 * @returns {Element} this
	 * @throws {Error} by invalid class names
	 */
	Prototype.removeClass = classListFunction("remove");

	/**
	 * Toggles class names of this element, each one on its own.
	 *
	 * The force parameter of classList.toggle is not supported - a boolean is not
	 * a class name and therefore throws.
	 *
	 * @param {...(string|string[])} theClasses - names, whitespace separated lists of names, or arrays of both
	 * @returns {Element} this
	 * @throws {Error} by invalid class names
	 */
	Prototype.toggleClass = classListFunction("toggle");
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./src/dom/extentions/ListSupport.js":
/*!*******************************************!*\
  !*** ./src/dom/extentions/ListSupport.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


/**
 * Builds a list function by delegating to the array function of the same name.
 *
 * The list is copied into an array first. That copy is what makes these functions
 * safe on a live HTMLCollection: nodes may be moved or removed while iterating,
 * without the iteration skipping the entries that shift into their place.
 *
 * @param {string} aName - the name of the array function
 * @returns {Function} a function behaving like the array function of that name
 */
const arrayFunction = (aName) =>
	function () {
		return Array.prototype[aName].apply(Array.from(this), arguments);
	};

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ListSupport", (Prototype) => {
	/**
	 * @param {*} aNode - the node to look for
	 * @param {number} [aStart] - the index to start at
	 * @returns {number} the index of the node, or -1
	 */
	Prototype.indexOf = arrayFunction("indexOf");

	/**
	 * @param {*} aNode - the node to look for
	 * @param {number} [aStart] - the index to start at
	 * @returns {boolean} whether the list contains the node
	 */
	Prototype.includes = arrayFunction("includes");

	/**
	 * Calls the function for each node.
	 *
	 * @param {function(Node,number,Node[]):void} aFunction - called with node, index and the copied list
	 */
	Prototype.forEach = arrayFunction("forEach");

	/**
	 * @param {function(Node,number,Node[]):*} aFunction
	 * @returns {Array} the results, an array as the results are not nodes anymore
	 */
	Prototype.map = arrayFunction("map");

	/**
	 * @param {function(Node,number,Node[]):boolean} aFunction
	 * @returns {boolean} whether the function matches at least one node
	 */
	Prototype.some = arrayFunction("some");

	/**
	 * @param {function(Node,number,Node[]):boolean} aFunction
	 * @returns {boolean} whether the function matches every node
	 */
	Prototype.every = arrayFunction("every");

	/**
	 * @param {function(*,Node,number,Node[]):*} aFunction
	 * @param {*} [aInitialValue]
	 * @returns {*} the accumulated result
	 */
	Prototype.reduce = arrayFunction("reduce");

	/**
	 * Filters the list.
	 *
	 * Unlike map this keeps the type of the list - a NodeList returns a NodeList, a
	 * HTMLCollection returns a HTMLCollection - so a filtered list can be used like
	 * any other one. The result is a new list, it is not live anymore.
	 *
	 * @param {function(Node,number,Node[]):boolean} aFunction
	 * @returns {NodeList|HTMLCollection} the matching nodes
	 */
	Prototype.filter = function () {
		const result = Array.prototype.filter.apply(Array.from(this), arguments);

		return this.constructor.from(result);
	};

	/**
	 * @returns {Node|undefined} the first node, or undefined when the list is empty
	 */
	Prototype.first = function () {
		if (this.length > 0) return this[0];
	};

	/**
	 * @returns {Node|undefined} the last node, or undefined when the list is empty
	 */
	Prototype.last = function () {
		if (this.length > 0) return this[this.length - 1];
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./src/dom/extentions/ListTypeBuilder.js":
/*!***********************************************!*\
  !*** ./src/dom/extentions/ListTypeBuilder.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/DelegaterBuilder */ "./src/utils/DelegaterBuilder.js");
/* harmony import */ var _ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListSupport */ "./src/dom/extentions/ListSupport.js");




/**
 * Sets up a dom list type - NodeList or HTMLCollection - the same way.
 *
 * The two only differ by their own type and the element type they hold, so this
 * builds both from those two parameters: it applies ListSupport, adds applyTo,
 * val and the static from, and wires the delegation that lets a list forward
 * every method of its elements.
 *
 * @param {Function} ListType - the list type, NodeList or HTMLCollection
 * @param {Function} ElementType - the type of the items, Node or HTMLElement
 */
const buildListType = (ListType, ElementType) => {
	(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(ListType, _ListSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

	/**
	 * Applies a function or a method to each item and collects the results.
	 *
	 * A function is called with the item followed by the extra arguments. A string
	 * is taken as the name of a method to call on each item with those arguments.
	 * Null results are skipped.
	 *
	 * @param {Function|string} calling - a function to call, or the name of a method
	 * @param {...*} theArguments - passed to the function or method
	 * @returns {Array} the collected results
	 */
	ListType.prototype.applyTo = function () {
		const args = Array.from(arguments);
		const calling = args.shift();
		const isFunction = typeof calling === "function";
		const results = [];
		for (let i = 0; i < this.length; i++) {
			const node = this[i];
			let result;
			if (isFunction) result = calling.apply(null, [node].concat(args));
			else if (typeof node[calling] === "function") result = node[calling].apply(node, args);

			if (result != null) results.push(result);
		}

		return results;
	};

	/**
	 * Reads or writes the value of the items.
	 *
	 * Without arguments the values are collected into a Map, keyed by the name, id
	 * or selector of each item - items without a value are left out, so an unchecked
	 * radio does not overwrite the selected one of its group. With arguments the
	 * value is set on every item.
	 *
	 * @param {...*} [theValue] - the value to set on the items
	 * @returns {Map<string,*>|ListType} the values by key, or this when a value was set
	 */
	ListType.prototype.val = function () {
		if (arguments.length == 0) {
			const result = new Map();
			for (const node of this) {
				if (typeof node.val === "function") {
					const value = node.val();
					if (value != null) result.set(node.name || node.id || node.selector(), value);
				}
			}
			return result;
		} else this.applyTo("val", ...arguments);

		return this;
	};

	/**
	 * Builds a list from nodes, other lists and arrays of them.
	 *
	 * Every argument that is an item is taken, an iterable is read item by item, so
	 * any mix can be passed. Anything that is not an item is left out. The result is
	 * a plain list, not a live one.
	 *
	 * @param {...(ElementType|Iterable)} theItems
	 * @returns {ListType} a new list of the items
	 */
	ListType.from = function () {
		const args = Array.from(arguments);
		const data = {};
		let counter = 0;

		while (args.length > 0) {
			const arg = args.shift();
			if (arg != null) {
				if (arg instanceof ElementType) data[counter++] = { value: arg, enumerable: true };
				else if (typeof arg[Symbol.iterator] === "function") {
					for (let item of arg) {
						if (item instanceof ElementType) data[counter++] = { value: item, enumerable: true };
					}
				}
			}
		}

		data.length = { value: counter };
		return Object.create(ListType.prototype, data);
	};

	(0,_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(
		function (aFunctionName, theArguments) {
			let results = [];
			this.forEach((node) => {
				if (node && typeof node[aFunctionName] === "function") {
					const result = node[aFunctionName].apply(node, theArguments);
					if (result != null) {
						if (result instanceof ListType) results = results.concat(Array.from(result));
						else results.push(result);
					}
				}
			});

			if (results.length === 0) return undefined;
			else if (results[0] instanceof ElementType || results[0] instanceof ListType) return ListType.from(results);
			else return results;
		},
		ListType.prototype,
		Node.prototype,
		HTMLElement.prototype,
		HTMLInputElement.prototype,
		Element.prototype,
		EventTarget.prototype,
	);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildListType);


/***/ }),

/***/ "./src/dom/extentions/ManipulationSupport.js":
/*!***************************************************!*\
  !*** ./src/dom/extentions/ManipulationSupport.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


/**
 * Content accepted by the insert functions.
 *
 * @typedef {Node|NodeList|HTMLCollection|Content[]|string} Content
 */

/**
 * Normalizes content to a flat list of nodes.
 *
 * Strings are parsed to nodes by the global create(), lists and arrays are taken
 * item by item, so any mix of them can be passed. Lists are read into an array
 * before anything is inserted, because inserting a node removes it from the list
 * it came from - iterating that list while inserting would skip every other node.
 *
 * Strings are not trimmed and an empty one is accepted: unlike event types or
 * class names, whitespace is content. "   " becomes a text node, "" becomes no
 * node at all. Only the absence of any argument is an error.
 *
 * @param {...Content} theContent
 * @returns {Node[]} the nodes, empty when the content produced none
 * @throws {Error} when there is no content at all or an item is not content
 */
const toNodes = function () {
	const content = Array.from(arguments).flat(Infinity);
	if (content.length === 0) throw new Error("Content is required!");

	return content
		.map((item) => {
			if (item instanceof Node) return item;
			if (item instanceof NodeList || item instanceof HTMLCollection) return Array.from(item);
			if (typeof item === "string") return Array.from(create(item));

			throw new Error("Invalid content!");
		})
		.flat();
};

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ManipulationSupport", Prototype => {
	/**
	 * Removes all child nodes.
	 *
	 * @returns {Node} this
	 */
	Prototype.empty = function(){
		const nodes = this.childNodes;
		while(nodes.length != 0)			
			nodes[0].remove(true);
		
		return this;
	};
	
	/**
	 * @returns {NodeList} the live list of child nodes
	 */
	Prototype.content = function(){
		return this.childNodes;
	};	
	
	/**
	 * Gets or sets the markup of this node.
	 *
	 * html() returns the innerHTML, html(true) the outerHTML and html(false) the
	 * innerHTML. Any other argument replaces all children by the given content.
	 *
	 * @param {...(boolean|Content)} theContent - null or undefined throws
	 * @returns {string|Node} the markup, or this when content was set
	 */
	Prototype.html = function(){
		if(arguments.length == 0)
			return this.innerHTML;
		else if(arguments.length == 1 && typeof arguments[0] === "boolean")
			if(arguments[0])
				return this.outerHTML;
			else
				return this.innerHTML;
		else {
			const nodes = toNodes(Array.from(arguments));
			this.empty();
			nodes.forEach(node => this.appendChild(node));
		}

		return this;
	};
	
	/**
	 * Appends the content as last children.
	 *
	 * @param {...Content} theContent
	 * @returns {Node} this
	 * @throws {Error} by invalid content
	 */
	Prototype.append = function(){
		toNodes(Array.from(arguments)).forEach(node => this.appendChild(node));

		return this;
	};

	/**
	 * Inserts the content as first children.
	 *
	 * @param {...Content} theContent
	 * @returns {Node} this
	 * @throws {Error} by invalid content
	 */
	Prototype.prepend = function(){
		const nodes = toNodes(Array.from(arguments));
		const first = this.firstChild;
		nodes.forEach(node => this.insertBefore(node, first));

		return this;
	};

	/**
	 * Replaces a node by the given content.
	 *
	 * Called with one argument, this node is replaced within its parent node.
	 * Called with more, the first one - a child of this node - is replaced by the
	 * content following it.
	 *
	 * @param {...Content} theContent - the new content, or the old node followed by the new content
	 * @returns {Node} this, even when this node was the replaced one
	 * @throws {Error} when called without arguments or by invalid content
	 */
	Prototype.replace = function(){
		if(arguments.length < 1)
			throw new Error("Insufficient arguments! One or two nodes required!");

		const parent = arguments.length == 1 ? this.parentNode : this;
		const oldNode = arguments.length == 1 ? this : arguments[0];
		const nodes = toNodes(arguments.length == 1 ? arguments[0] : Array.from(arguments).slice(1));

		nodes.forEach(node => parent.insertBefore(node, oldNode));
		oldNode.remove();

		return this;
	};

	/**
	 * Inserts the content directly after this node.
	 *
	 * @param {...Content} theContent
	 * @returns {Node} this
	 * @throws {Error} when this node has no parent node or by invalid content
	 */
	Prototype.after = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes after this node! Parent node not available!");

		const parent = this.parentNode;
		const next = this.nextSibling;
		toNodes(Array.from(arguments)).forEach(node => parent.insertBefore(node, next));

		return this;
	};

	/**
	 * Inserts the content directly before this node.
	 *
	 * @param {...Content} theContent
	 * @returns {Node} this
	 * @throws {Error} when this node has no parent node or by invalid content
	 */
	Prototype.before = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes before this node! Parent node not available!");

		const parent = this.parentNode;
		toNodes(Array.from(arguments)).forEach(node => parent.insertBefore(node, this));

		return this;
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./src/dom/extentions/QuerySupport.js":
/*!********************************************!*\
  !*** ./src/dom/extentions/QuerySupport.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const PARENTTOKEN = ":parent";
const QUOTES = ["\"", "'"];

/**
 * Strips the optional quotes around a sub selector.
 *
 * Quoting is not needed anymore, as the selector is read by counting brackets
 * instead of matching a pattern, but it stays supported.
 *
 * @param {string} subquery
 * @returns {string} the sub selector, empty when there is none
 */
const cleanupSubSelector = (subquery) => {
	if (typeof subquery !== "string") return "";
	subquery = subquery.trim();
	if ((subquery.startsWith('"') && subquery.endsWith('"')) || (subquery.startsWith("'") && subquery.endsWith("'"))) subquery = subquery.substring(1, subquery.length - 1);
	return subquery.trim();
};

/**
 * Finds the :parent token of a selector.
 *
 * Only a token on bracket level zero and outside of quotes counts, so neither
 * [data=":parent"] nor :not(:parent) is taken for one.
 *
 * @param {string} aSelector
 * @returns {number} the index of the token, or -1
 */
const indexOfParentToken = (aSelector) => {
	let quote = null;
	let depth = 0;
	for (let i = 0; i < aSelector.length; i++) {
		const char = aSelector[i];
		if (quote) {
			if (char === quote && aSelector[i - 1] !== "\\") quote = null;
		} else if (QUOTES.includes(char)) quote = char;
		else if (char === "(") depth++;
		else if (char === ")") depth--;
		else if (depth === 0 && aSelector.startsWith(PARENTTOKEN, i)) return i;
	}

	return -1;
};

/**
 * Reads a bracket group by counting brackets, so a nested group like
 * div:has(p):not(span) is read as a whole.
 *
 * @param {string} aSelector
 * @param {number} aStart - the index of the opening bracket
 * @returns {{content: string, end: number}} the content of the group and the index behind it
 * @throws {Error} when the group is not closed
 */
const readGroup = (aSelector, aStart) => {
	let quote = null;
	let depth = 0;
	for (let i = aStart; i < aSelector.length; i++) {
		const char = aSelector[i];
		if (quote) {
			if (char === quote && aSelector[i - 1] !== "\\") quote = null;
		} else if (QUOTES.includes(char)) quote = char;
		else if (char === "(") depth++;
		else if (char === ")" && --depth === 0) return { content: aSelector.substring(aStart + 1, i), end: i + 1 };
	}

	throw new Error("Invalid query!");
};

/**
 * Splits a selector at its :parent token.
 *
 * @param {string} aSelector
 * @returns {{prefix: string, selector: string, suffix: string}|null} the parts, or null when there is no token
 * @throws {Error} when the bracket group of the token is not closed
 */
const splitParentQuery = (aSelector) => {
	const index = indexOfParentToken(aSelector);
	if (index < 0) return null;

	const after = index + PARENTTOKEN.length;
	const group = aSelector[after] === "(" ? readGroup(aSelector, after) : { content: "", end: after };

	return {
		prefix: aSelector.substring(0, index).trim(),
		selector: cleanupSubSelector(group.content),
		suffix: aSelector.substring(group.end).trim()
	};
};

/**
 * Executes a selector, resolving the :parent pseudo selector.
 *
 * :parent returns the parent of the element, :parent(selector) the next ancestor
 * matching the selector. Everything before the token selects the elements to
 * start from, everything behind it is searched within the parents found.
 *
 * @param {HTMLElement} aElement
 * @param {string} aSelector
 * @returns {NodeList|undefined} the result, undefined when a step found nothing
 */
const queryExecuter = function (aElement, aSelector) {
	const query = splitParentQuery(aSelector);
	if (!query) return aElement.querySelectorAll(aSelector);

	let result = aElement;
	if (query.prefix.length > 0) {
		result = aElement.querySelectorAll(query.prefix);
		if (result.length == 0) return;
	}

	result = result.parent(query.selector.length > 0 ? query.selector : null);
	if (!result) return;

	return query.suffix.length > 0 ? result.find(query.suffix) : result;
};

/**
 * Normalizes selectors to a list of non empty strings.
 *
 * Empty selectors are skipped rather than thrown at, other than in the sibling
 * functions for event types and class names: an empty selector carries no intent
 * and just contributes nothing, while a non string is a mistake and throws.
 * Selectors are not split, comma separated lists are left for querySelectorAll.
 *
 * @param {string|Iterable<string>} theSelectors
 * @returns {string[]} the trimmed selectors, empty ones removed
 * @throws {Error} when there is no selector or one is not a string
 */
const toSelector = function (theSelectors) {
	if(theSelectors == null) throw new Error("Invalid query!");

	const selectors = typeof theSelectors === "string" ? [theSelectors] : Array.from(theSelectors);

	return selectors
		.map((selector) => {
				if(typeof selector !== "string") throw new Error("Invalid query!");
				return selector.trim();
			})
		.filter((selector) => selector.length > 0);
}


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("QuerySupport", (Prototype) => {
	/**
	 * Searches nodes by one or more selectors.
	 *
	 * Selector lists separated by comma are left to querySelectorAll, which knows
	 * them and gets the commas inside brackets and quotes right. The results of
	 * several selectors are collected in the order they were given, without
	 * removing the nodes a second selector finds again.
	 *
	 * @param {...string} theSelectors - selectors, empty ones are skipped
	 * @returns {NodeList} the nodes found, empty when there are none
	 * @throws {Error} by a selector beside a string
	 */
	Prototype.find = function () {
		const nodes = [];
		const selectors = toSelector(arguments);
		for(let selector of selectors){
			const result = queryExecuter(this, selector);
			if (result) nodes.push(result);
		}

		return NodeList.from(...nodes);
	};

	/**
	 * Checks whether this node matches at least one of the selectors.
	 *
	 * A Document and a DocumentFragment never match, as they can not be selected -
	 * that also covers a ShadowRoot, which is a DocumentFragment.
	 *
	 * @param {...(string|string[])} theSelectors - selectors, given one by one or as a list
	 * @returns {boolean} whether one of the selectors matches
	 * @throws {DOMException} by an invalid selector
	 */
	Prototype.is = function () {
		if (this instanceof Document || this instanceof DocumentFragment) return false;
		else if (arguments.length == 1) {
			if (typeof arguments[0] === "string") return this.matches(arguments[0]);
			else if (typeof arguments[0].length === "number") {
				let filter = arguments[0];
				for (let i = 0; i < filter.length; i++) if (this.matches(filter[i])) return true;
			}
		} else if (arguments.length > 1) return this.is(Array.from(arguments));

		return false;
	};

	/**
	 * Returns the parent of this node, or the next ancestor matching a selector.
	 *
	 * An invalid selector is not caught: it would return the parent reached so far,
	 * which is indistinguishable from a match, while a selector matching nothing
	 * correctly returns null. Letting it throw keeps those two apart.
	 *
	 * @param {string|boolean} [selector] - a selector to look for, or the ignoreShadowRoot flag
	 * @param {boolean} [ignoreShadowRoot] - continue at the host of a shadow root instead of stopping
	 * @returns {Node|null} the parent, the matching ancestor, or null when there is none
	 * @throws {DOMException} by an invalid selector
	 */
	Prototype.parent = function (selector, ignoreShadowRoot) {
		if (!this.parentNode) return null;
		ignoreShadowRoot = typeof selector === "boolean" ? selector : ignoreShadowRoot;
		selector = typeof selector === "string" ? selector : null;

		let parent = this.parentNode;
		if (parent instanceof ShadowRoot && ignoreShadowRoot) parent = parent.host;

		if (selector) return parent.is(selector) ? parent : parent.parent(selector, ignoreShadowRoot);

		return parent;
	};

	/**
	 * Collects the ancestors of this node, from the nearest one upwards.
	 *
	 * With a selector only the matching ancestors are collected, as every step
	 * walks up to the next match.
	 *
	 * @param {string|boolean} [selector] - a selector to look for, or the ignoreShadowRoot flag
	 * @param {boolean} [ignoreShadowRoot] - continue at the host of a shadow root instead of stopping
	 * @returns {NodeList} the ancestors, empty when there are none
	 * @throws {DOMException} by an invalid selector
	 */
	Prototype.parents = function () {
		const result = new Array();
		let parent = Prototype.parent.apply(this, arguments);
		while (parent) {
			result.push(parent);
			parent = Prototype.parent.apply(parent, arguments);
		}

		return NodeList.from(result);
	};

	/**
	 * Builds a selector addressing this node.
	 *
	 * An id ends the selector, as it already identifies the node. Otherwise the tag
	 * name is used and the path continues at the parent. A position is only added
	 * when the parent has more than one element child, and it counts all of them -
	 * that is what :nth-child does, unlike :nth-of-type.
	 *
	 * The id is not escaped, so an id needing it gives an invalid selector.
	 *
	 * @returns {string|undefined} the selector, undefined for a Document or DocumentFragment
	 */
	Prototype.selector = function () {
		if (this instanceof Document || this instanceof DocumentFragment) return undefined;
		else if (this.id) return "#" + this.id;
		else {
			let selector = this.tagName.toLowerCase();
			const parent = this.parent();
			if (parent) {
				if(parent.children.length > 1) {
					const index = parent.children.indexOf(this);
					selector = `${selector}:nth-child(${index + 1})`;
				}
				const parentSelector = parent.selector();
				return parentSelector != null ? `${parentSelector} > ${selector}` : selector;
			}
			return selector;
		}
	};

	/**
	 * Returns the first node of closests().
	 *
	 * @param {string} aQuery
	 * @returns {Node|undefined} the first node found, or undefined
	 */
	Prototype.closest = function (aQuery) {
		return this.closests(aQuery).first();
	};

	/**
	 * Searches the nodes closest to this one by their distance in the tree.
	 *
	 * The subtree of this node is searched first, then the subtree of the parent,
	 * and so on upwards - the search widens in rings until a level has matches, and
	 * those are returned. So the result may be a child, a sibling, a cousin or an
	 * ancestor, depending on where the first match appears.
	 *
	 * Distance is meant in both directions here, other than in the native closest(),
	 * which only walks up and returns an ancestor.
	 *
	 * @param {string} aQuery
	 * @returns {NodeList} the matches of the closest level having any, empty when there are none
	 */
	Prototype.closests = function (aQuery) {
		const result = this.find(aQuery);
		if (result.length != 0) return result;

		const parent = this.parentElement;
		if (parent) return parent.closests(aQuery);

		return NodeList.from([]);
	};

	/**
	 * Searches the query at this node, below it, or above it - in that order.
	 *
	 * This node itself is checked first, then its subtree, and only then the
	 * ancestors. Unlike closests() the search does not widen in rings: it never
	 * looks into the subtree of an ancestor, so a sibling is not found.
	 *
	 * @param {string} aQuery
	 * @returns {NodeList} this node, the nodes below it, or the matching ancestor, empty when there is none
	 */
	Prototype.nested = function (aQuery) {
		if (this.is(aQuery)) return NodeList.from(this);

		let nested = this.find(aQuery);
		if (nested && nested.length > 0) return nested;
		else return NodeList.from(this.parent(aQuery));
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);


/***/ }),

/***/ "./src/dom/extentions/ReadyEventSupport.js":
/*!*************************************************!*\
  !*** ./src/dom/extentions/ReadyEventSupport.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "READYEVENT": () => (/* binding */ READYEVENT),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


/**
 * The type of the event triggered once the document is ready.
 *
 * @type {string}
 */
const READYEVENT = "defaultjs--event--ready";

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ReadyEventSupport", Prototype => {
	/**
	 * Registers a function for the ready event of the document.
	 *
	 * The ready event is triggered once the dom is parsed. When the document is
	 * already complete the event is triggered right away, so a function registered
	 * late still runs. That trigger reaches every ready listener, so functions
	 * registered earlier run again on each late registration.
	 *
	 * @param {Function} aFunction - called on the ready event
	 * @param {boolean} [once] - remove the function after the next ready event
	 * @returns {Document} this
	 */
	Prototype.ready = function(aFunction, once){
		this.on(READYEVENT, aFunction, once ? { once: true } : undefined);
		if(document.readyState == "complete")
			this.trigger(READYEVENT);

		return this;
	};

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./src/dom/extentions/ShowHideSupport.js":
/*!***********************************************!*\
  !*** ./src/dom/extentions/ShowHideSupport.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const HIDEVALUE = "none";

/**
 * Whether the element is hidden by its own inline display, a display coming from
 * a css rule is not seen.
 *
 * @param {HTMLElement} element
 * @returns {boolean}
 */
const isHidden = (element) => {
	return element.style.display === HIDEVALUE
};

/**
 * Replaces show and hide on the element by versions bound to it, capturing the
 * display to restore on show.
 *
 * The display is read once, on the first show or hide, and kept from then on -
 * the bound methods shadow the prototype, so init does not run again. A display
 * set directly afterwards is not picked up. When the element is hidden at that
 * first call the captured value is the empty string, falling back to the css.
 *
 * @param {HTMLElement} element
 * @returns {HTMLElement} the element
 */
const init = (element) => {
	let display = !isHidden(element) ? element.style.display : "";

	element.show = (function(){
		this.style.display = display;
		return this;
	}).bind(element);

	element.hide = (function(){
		this.style.display = HIDEVALUE;
		return this;
	}).bind(element);

	return element;
};


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ShowHideSupport", Prototype => {
	/**
	 * Shows the element by restoring the display captured before it was hidden.
	 *
	 * @returns {HTMLElement} this
	 */
	Prototype.show = function() {
		return init(this).show.apply(null, arguments)
	};

	/**
	 * Hides the element by setting its display to none.
	 *
	 * @returns {HTMLElement} this
	 */
	Prototype.hide = function() {
		return init(this).hide.apply(null, arguments)
	};

	/**
	 * Shows the element when it is hidden, hides it otherwise.
	 *
	 * Only an inline display of none counts as hidden, so an element hidden by a
	 * css rule is hidden inline first before it shows.
	 *
	 * @returns {HTMLElement} this
	 */
	Prototype.toggleShow = function() {
		return isHidden(this) ? this.show() : this.hide();
	};

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./src/dom/extentions/ValueSupport.js":
/*!********************************************!*\
  !*** ./src/dom/extentions/ValueSupport.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


/**
 * Value handling for one kind of input element.
 *
 * @typedef {Object} InputType
 * @property {string} selector - matches the elements handled by this type
 * @property {function():*} get - reads the value of the element
 * @property {function(*):void} set - writes the value to the element
 */

/**
 * Shared setter of checkbox and radio, both are set by their checked state.
 *
 * @param {boolean|string|string[]} aValue - a boolean is applied directly, a string or an array of strings checks the element when its value matches
 */
const checkedSetter = function(aValue){
	if(typeof aValue === "boolean")
		this.checked = aValue;
	else if(typeof aValue === "string")
		this.checked = this.value == aValue;
	else if(Array.isArray(aValue))
		this.checked = aValue.indexOf(this.value) >= 0;

	this.trigger("changed");
};

/**
 * The first type with a matching selector handles the element.
 *
 * @type {InputType[]}
 */
const InputTypes = [
	{
		selector : "select",
		/**
		 * @returns {string[]} the values of all selected options
		 */
		get : function(){
			const result = [];
			this.find("option").forEach(option => {
				if(option.selected)
					result.push(option.value);
			});			
			return result;
		},
		set : function(){				
			let values = [];
			const args = Array.from(arguments);
			let arg = args.shift();
			while(arg){
				if(Array.isArray(arg))
					values = values.concat(arg);
				else
					values.push(arg);
				
				arg = args.shift();
			}
			this.value = values;
			this.find("option").forEach(option => option.selected = values.indexOf(option.value) >= 0);
			this.trigger("changed");
		}
	},
	{
		selector : "input[type=\"checkbox\"]",
		/**
		 * A checkbox is independent, so an unchecked one reports false - it is off,
		 * which is a value of its own.
		 *
		 * @returns {boolean|string|undefined} the checked state without a value attribute, otherwise the value when checked
		 */
		get : function(){
			if(!this.hasAttribute("value"))
				return this.checked;
			else if(this.checked)
				return this.value;
		},
		set : checkedSetter
	},
	{
		selector : "input[type=\"radio\"]",
		/**
		 * All radios of a group share one name and only one of them can be checked,
		 * so an unchecked radio returns undefined instead of false - it carries no
		 * value, it just is not the selected one. This is what keeps the unchecked
		 * radios from overwriting the value of their group, once the results of a
		 * whole group get collected by name.
		 *
		 * @returns {boolean|string|undefined} true or the value when checked, undefined otherwise
		 */
		get : function(){
			if(this.checked)
				return this.hasAttribute("value") ? this.value : true;
		},
		set : checkedSetter
	}
];

/**
 * Fallback for all elements without a matching InputType.
 *
 * @type {InputType}
 */
const DefaultInputType = {
		get : function(){
			return this.value;
		},
		set : function(aValue){
			this.value = aValue;
			this.trigger("input");
		}
};

/**
 * @param {Element} aElement
 * @returns {InputType} the first matching type, or DefaultInputType
 */
const getInputType = function(aElement){
	for(let i = 0; i < InputTypes.length; i++)
		if(aElement.is(InputTypes[i].selector))
			return InputTypes[i];		
	return DefaultInputType;
};


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ValueSupport", Prototype => {
	/**
	 * Gets or sets the value of this element.
	 *
	 * What a value is depends on the element: a select returns the values of all
	 * its selected options, a checkbox its checked state or its value, a radio a
	 * value only when it is checked, every other element its value.
	 *
	 * @param {...*} [aValue] - the new value, the accepted types depend on the element
	 * @returns {*|Element} the value of the element, or this when a value was set
	 */
	Prototype.val = function() {
		let type = getInputType(this);
		if(arguments.length == 0)
			return type.get.apply(this, arguments);
		else
			type.set.apply(this, arguments);
			
		return this;
	};	
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_EventTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/EventTarget */ "./src/dom/EventTarget.js");
/* harmony import */ var _dom_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/Node */ "./src/dom/Node.js");
/* harmony import */ var _dom_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/Element */ "./src/dom/Element.js");
/* harmony import */ var _dom_Document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/Document */ "./src/dom/Document.js");
/* harmony import */ var _dom_DocumentFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/DocumentFragment */ "./src/dom/DocumentFragment.js");
/* harmony import */ var _dom_HTMLElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/HTMLElement */ "./src/dom/HTMLElement.js");
/* harmony import */ var _dom_HTMLInputElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/HTMLInputElement */ "./src/dom/HTMLInputElement.js");
/* harmony import */ var _dom_HTMLTextAreaElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/HTMLTextAreaElement */ "./src/dom/HTMLTextAreaElement.js");
/* harmony import */ var _dom_HTMLSelectElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/HTMLSelectElement */ "./src/dom/HTMLSelectElement.js");
/* harmony import */ var _dom_NodeList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/NodeList */ "./src/dom/NodeList.js");
/* harmony import */ var _dom_HtmlCollection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/HtmlCollection */ "./src/dom/HtmlCollection.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Global */ "./src/Global.js");














/***/ }),

/***/ "./src/utils/DelegaterBuilder.js":
/*!***************************************!*\
  !*** ./src/utils/DelegaterBuilder.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Adds delegating methods to a prototype, one for each method of the target
 * prototypes.
 *
 * This is how a NodeList gets the methods of a Node: for every method name found
 * on the targets, a function is put on the source that hands the call to the
 * callback, together with that name. The callback then decides what to do - for a
 * list it applies the method to each node and collects the results.
 *
 * A name already on the source is left alone, so its own methods win. Only value
 * methods are taken, accessors are skipped, as their descriptor has no value.
 *
 * @param {function(string, Arguments):*} callback - called as method, with the name and the arguments
 * @param {Object} source - the prototype the delegating methods are added to
 * @param {...Object} theTargets - the prototypes whose method names are delegated
 */
const DelegaterBuilder = function() {
	const args = Array.from(arguments);
	const callback = args.shift();
	const source = args.shift();
	args.forEach( target =>{
		Object.getOwnPropertyNames(target)
		.forEach(name => {
			const prop = Object.getOwnPropertyDescriptor(target, name);
			if (typeof source[name] === "undefined" && typeof prop.value === "function")
				source[name] = function(){
					return callback.call(this, name, arguments);
				};
		});
	});

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DelegaterBuilder);

/***/ }),

/***/ "./src/utils/ExtendPrototype.js":
/*!**************************************!*\
  !*** ./src/utils/ExtendPrototype.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Applies extensions to the prototype of a type.
 *
 * @param {Function} aType - the type whose prototype gets extended
 * @param {...function(Function):void} theExtenders - the wrapped extensions to apply, in order
 */
const extendPrototype = function(){
	const args = Array.from(arguments);
	const type = args.shift();
	while(args.length > 0){
		const extender = args.shift();
		extender(type);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extendPrototype);

/***/ }),

/***/ "./src/utils/Extender.js":
/*!*******************************!*\
  !*** ./src/utils/Extender.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.js");


/**
 * Which extension is applied to which type, kept on the global object so it is
 * shared across separate loads of the library.
 *
 * @type {Object<string, Object<string, boolean>>}
 */
const EXTENSIONS_MAP = _Utils__WEBPACK_IMPORTED_MODULE_0__["default"].globalVar("___DOM_API_EXTENSION_MAP___", {});

/**
 * Wraps an extension so it applies to the prototype of a type only once.
 *
 * The returned function is what extendPrototype() calls with a type. Applying the
 * same named extension to the same type again is a no-op with a warning, so
 * loading the library twice does not patch the prototypes twice.
 *
 * @param {string} aName - the name of the extension, unique per type
 * @param {function(Object):void} aExtention - adds the members to the prototype
 * @returns {function(Function):void} a function applying the extension to a type
 */
const Extender = function(aName, aExtention){
	return function(aType){
		const {name, prototype} = aType;
		let extensions = EXTENSIONS_MAP[name];
		if(!extensions)
			extensions = EXTENSIONS_MAP[name] = {};		
		
		if(!extensions[aName]){
			extensions[aName] = true;
			aExtention(prototype);
		}
		else
			console.warn(`Duplicated load of extension \"${aName}\"!`);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Extender);

/***/ }),

/***/ "./src/utils/Utils.js":
/*!****************************!*\
  !*** ./src/utils/Utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLOBAL": () => (/* binding */ GLOBAL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/**
 * The global object of the current environment.
 *
 * Detected with typeof guards, because a bare reference to an undeclared name
 * throws instead of being falsy - so a plain window || global chain would break
 * everywhere window is missing, not fall through. globalThis covers the browser,
 * node and workers, the rest stays as a fallback for older runtimes.
 *
 * @type {Object}
 */
const GLOBAL = typeof globalThis !== "undefined" ? globalThis :
	typeof window !== "undefined" ? window :
	typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g :
	typeof self !== "undefined" ? self : {};

const Utils = {
	/**
	 * The global object, same as GLOBAL.
	 *
	 * @type {Object}
	 */
	global : GLOBAL,

	/**
	 * Reads a variable from the global object, initializing it once when a value
	 * is given and none is set yet.
	 *
	 * Used to share state between separate loads of the library, which each have
	 * their own module scope but the one global object in common.
	 *
	 * @param {string} aName - the name on the global object
	 * @param {*} [aInitValue] - the value to set when the name is still undefined
	 * @returns {*} the value on the global object
	 */
	globalVar : function(aName, aInitValue){
		if(arguments.length === 2 && typeof GLOBAL[aName] === "undefined")
			GLOBAL[aName] = aInitValue;

		return GLOBAL[aName];
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ "./src/index.js");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksR0FBRztBQUNmLGNBQWMsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLOzs7Ozs7VUMzQ3BCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS8uL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS8uL3NyYy9kb20vRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS8uL3NyYy9kb20vRG9jdW1lbnRGcmFnbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9FbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL0V2ZW50VGFyZ2V0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL0hUTUxFbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL0hUTUxJbnB1dEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS8uL3NyYy9kb20vSFRNTFNlbGVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS8uL3NyYy9kb20vSFRNTFRleHRBcmVhRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9IdG1sQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9Ob2RlLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL05vZGVMaXN0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9leHRlbnRpb25zL0RhdGFTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9leHRlbnRpb25zL0xpc3RTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL2V4dGVudGlvbnMvTGlzdFR5cGVCdWlsZGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS8uL3NyYy91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvdXRpbHMvRXh0ZW5kUHJvdG90eXBlLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvdXRpbHMvRXh0ZW5kZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS8uL3NyYy91dGlscy9VdGlscy5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbHMsIHtHTE9CQUx9IGZyb20gXCIuL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IFJFQURZRVZFTlQgfSBmcm9tIFwiLi9kb20vZXh0ZW50aW9ucy9SZWFkeUV2ZW50U3VwcG9ydFwiO1xyXG5cclxuR0xPQkFMLmRlZmF1bHRqcyA9IEdMT0JBTC5kZWZhdWx0anMgfHwge307XHJcbkdMT0JBTC5kZWZhdWx0anMuZXh0ZG9tID0gR0xPQkFMLmRlZmF1bHRqcy5leHRkb20gfHwge1xyXG5cdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcclxuXHRSRUFEWUVWRU5UIDogUkVBRFlFVkVOVCxcclxuXHR1dGlscyA6IHtcclxuXHRcdFV0aWxzOiBVdGlsc1xyXG5cdH1cclxufTtcclxuXHJcbkdMT0JBTC5maW5kID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmZpbmQuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5HTE9CQUwucmVhZHkgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQucmVhZHkuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5HTE9CQUwuY3JlYXRlID0gZnVuY3Rpb24oYUNvbnRlbnQsIGFzVGVtcGxhdGUpIHtcclxuXHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nIVwiKTtcclxuXHRcclxuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBhQ29udGVudDtcclxuXHRpZihhc1RlbXBsYXRlKVxyXG5cdFx0cmV0dXJuIHRlbXBsYXRlO1xyXG5cdFxyXG5cdHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpLmNoaWxkTm9kZXM7XHJcbn07XHJcblxyXG5HTE9CQUwuc2NyaXB0ID0gZnVuY3Rpb24oYUZpbGUsIGFUYXJnZXQpIHtcclxuXHRpZihhRmlsZSBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKGFGaWxlLm1hcChmaWxlID0+IEdMT0JBTC5zY3JpcHQoZmlsZSwgYVRhcmdldCkpKTtcclxuXHRcclxuXHRpZih0eXBlb2YgYUZpbGUgPT09IFwic3RyaW5nXCIpXHRcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocixlKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XHJcblx0XHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbigpe3IoKX07XHJcblx0XHRcdHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJsb2FkIGVycm9yIVwiKX07XHJcblx0XHRcdCFhVGFyZ2V0ID8gZG9jdW1lbnQuYm9keS5hcHBlbmQoc2NyaXB0KSA6IGFUYXJnZXQuYXBwZW5kKHNjcmlwdCk7XHJcblx0XHRcdHNjcmlwdC5zcmMgPSBhRmlsZTtcclxuXHRcdH0pO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChcIkZpcnN0IHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgYSBzdHJpbmchXCIpO1xyXG59OyIsIi8qKlxyXG4gKiBBZGRzIHF1ZXJ5IGFuZCByZWFkeSBmdW5jdGlvbnMgdG8gRG9jdW1lbnQsIGFuZCB0cmlnZ2VycyB0aGUgcmVhZHkgZXZlbnQuXHJcbiAqXHJcbiAqIFRoZSBldmVudCBpcyB0cmlnZ2VyZWQgb25jZSB0aGUgZG9tIGlzIHBhcnNlZC4gQSByZWFkeSBmdW5jdGlvbiByZWdpc3RlcmVkXHJcbiAqIGFmdGVyIHRoYXQgaXMgbm90IGxvc3QsIGFzIHJlYWR5KCkgdHJpZ2dlcnMgdGhlIGV2ZW50IGFnYWluIHdoZW4gdGhlIGRvY3VtZW50XHJcbiAqIGlzIGFscmVhZHkgY29tcGxldGUuXHJcbiAqL1xyXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFF1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgUmVhZHlFdmVudFN1cHBvcnQsIHsgUkVBRFlFVkVOVCB9IGZyb20gXCIuL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShEb2N1bWVudCwgUXVlcnlTdXBwb3J0LCBSZWFkeUV2ZW50U3VwcG9ydCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiBkb2N1bWVudC50cmlnZ2VyKFJFQURZRVZFTlQpKTtcclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIEFkZHMgcXVlcnkgYW5kIGNvbnRlbnQgZnVuY3Rpb25zIHRvIERvY3VtZW50RnJhZ21lbnQuXHJcbiAqXHJcbiAqIEEgU2hhZG93Um9vdCBpcyBhIERvY3VtZW50RnJhZ21lbnQsIHNvIGEgc2hhZG93IHJvb3QgY2FuIGJlIHNlYXJjaGVkIGFuZCBmaWxsZWRcclxuICogdGhlIHNhbWUgd2F5IGFzIHRoZSBmcmFnbWVudCBjcmVhdGUoKSByZXR1cm5zLlxyXG4gKi9cclxuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnRGcmFnbWVudCwgUXVlcnlTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTtcclxuXHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBBZGRzIHF1ZXJ5LCBhdHRyaWJ1dGUgYW5kIGNvbnRlbnQgZnVuY3Rpb25zIHRvIEVsZW1lbnQuXHJcbiAqXHJcbiAqIFF1ZXJ5IGFuZCBhdHRyaWJ1dGUgZnVuY3Rpb25zIG5lZWQgYSBzZWxlY3RhYmxlIG5vZGUsIHdoaWNoIGlzIHdoeSB0aGV5IHNpdFxyXG4gKiBoZXJlIGFuZCBub3Qgb24gTm9kZS4gTWFuaXB1bGF0aW9uU3VwcG9ydCBpcyBhcHBsaWVkIGFnYWluIGFsdGhvdWdoIEVsZW1lbnRcclxuICogaW5oZXJpdHMgaXQgZnJvbSBOb2RlIC0gdGhhdCBwdXRzIHRoZSBmdW5jdGlvbnMgb24gRWxlbWVudCBhcyBvd24gcHJvcGVydGllcyxcclxuICogd2hlcmUgdGhlIGV4dGVuc2lvbnMgb2YgdGhlIG1vcmUgc3BlY2lmaWMgaHRtbCB0eXBlcyBjYW4gZmluZCB0aGVtLlxyXG4gKi9cclxuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IEF0dHJpYnV0ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9BdHRyaWJ1dGVTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEVsZW1lbnQsUXVlcnlTdXBwb3J0LCBBdHRyaWJ1dGVTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTsiLCIvKipcbiAqIEFkZHMgdGhlIGV2ZW50IGZ1bmN0aW9ucyB0byBFdmVudFRhcmdldC5cbiAqXG4gKiBFdmVudFRhcmdldCBpcyB0aGUgcm9vdCBvZiBldmVyeXRoaW5nIGRpc3BhdGNoaW5nIGV2ZW50cywgbm90IG9ubHkgb2YgdGhlIGRvbSxcbiAqIHNvIG9uKCksIHJlbW92ZU9uKCkgYW5kIHRyaWdnZXIoKSBhcmUgYXZhaWxhYmxlIG9uIGV2ZXJ5IG5vZGUsIG9uIHRoZSBkb2N1bWVudFxuICogYW5kIG9uIHRoZSB3aW5kb3cgYWxpa2UuXG4gKi9cbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xuaW1wb3J0IEV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0V2ZW50U3VwcG9ydFwiO1xuXG5leHRlbmRQcm90b3R5cGUoRXZlbnRUYXJnZXQsIEV2ZW50U3VwcG9ydCk7IiwiLyoqXHJcbiAqIEFkZHMgY2xhc3MgYW5kIHZpc2liaWxpdHkgZnVuY3Rpb25zIHRvIEhUTUxFbGVtZW50LlxyXG4gKlxyXG4gKiBCb3RoIHdvcmsgb24gdGhlIHN0eWxlIGFuZCB0aGUgY2xhc3NMaXN0IG9mIGEgaHRtbCBlbGVtZW50LCB3aGljaCBpcyB3aHkgdGhleVxyXG4gKiBzaXQgaGVyZSBhbmQgbm90IG9uIEVsZW1lbnQgLSBhbiBzdmcgZWxlbWVudCBoYXMgbmVpdGhlciBpbiB0aGUgc2FtZSB3YXkuXHJcbiAqL1xyXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEh0bWxDbGFzc1N1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0XCI7XHJcbmltcG9ydCBTaG93SGlkZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTEVsZW1lbnQsIEh0bWxDbGFzc1N1cHBvcnQsIFNob3dIaWRlU3VwcG9ydCk7IiwiLyoqXHJcbiAqIEFkZHMgdmFsKCkgdG8gSFRNTElucHV0RWxlbWVudC5cclxuICpcclxuICogVmFsdWVTdXBwb3J0IHBpY2tzIHRoZSBoYW5kbGluZyBieSB0aGUgdHlwZSBvZiB0aGUgaW5wdXQsIHNvIGEgY2hlY2tib3ggYW5kIGFcclxuICogcmFkaW8gYXJlIHJlYWQgYnkgdGhlaXIgY2hlY2tlZCBzdGF0ZSB3aGlsZSBldmVyeSBvdGhlciBpbnB1dCBpcyByZWFkIGJ5IGl0c1xyXG4gKiB2YWx1ZS5cclxuICovXHJcbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxJbnB1dEVsZW1lbnQsVmFsdWVTdXBwb3J0KTsiLCIvKipcclxuICogQWRkcyB2YWwoKSB0byBIVE1MU2VsZWN0RWxlbWVudC5cclxuICpcclxuICogVmFsdWVTdXBwb3J0IHJlYWRzIGEgc2VsZWN0IGJ5IGl0cyBzZWxlY3RlZCBvcHRpb25zLCBzbyB2YWwoKSBnaXZlcyBhbiBhcnJheSBvZlxyXG4gKiB0aGVpciB2YWx1ZXMgYW5kIHRha2VzIG9uZSB0byBzZWxlY3QgdGhlbSBhZ2Fpbi5cclxuICovXHJcbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxTZWxlY3RFbGVtZW50LFZhbHVlU3VwcG9ydCk7IiwiLyoqXHJcbiAqIEFkZHMgdmFsKCkgdG8gSFRNTFRleHRBcmVhRWxlbWVudC5cclxuICpcclxuICogQSB0ZXh0YXJlYSBtYXRjaGVzIG5vbmUgb2YgdGhlIHNwZWNpYWwgaW5wdXQgdHlwZXMsIHNvIFZhbHVlU3VwcG9ydCBmYWxscyBiYWNrXHJcbiAqIHRvIHJlYWRpbmcgYW5kIHdyaXRpbmcgaXRzIHZhbHVlIC0gYW5kIHRyaWdnZXJzIGFuIGlucHV0IGV2ZW50IHdoZW4gaXQgaXMgc2V0LFxyXG4gKiB0aGUgc2FtZSBhcyBhbnkgb3RoZXIgZmllbGQuXHJcbiAqL1xyXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MVGV4dEFyZWFFbGVtZW50LCBWYWx1ZVN1cHBvcnQpO1xyXG4iLCIvKipcbiAqIEJ1aWxkcyBIVE1MQ29sbGVjdGlvbiBhcyBhIGxpc3Qgb2YgaHRtbCBlbGVtZW50cy5cbiAqXG4gKiBTYW1lIGFzIE5vZGVMaXN0LCBvbmx5IGhvbGRpbmcgaHRtbCBlbGVtZW50cyAtIGEgbGl2ZSBjb2xsZWN0aW9uIGxpa2UgY2hpbGRyZW5cbiAqIHRoZXJlZm9yZSBrZWVwcyBpdHMgdHlwZSB3aGVuIGl0IGlzIGZpbHRlcmVkLlxuICovXG5pbXBvcnQgYnVpbGRMaXN0VHlwZSBmcm9tIFwiLi9leHRlbnRpb25zL0xpc3RUeXBlQnVpbGRlclwiO1xuXG5idWlsZExpc3RUeXBlKEhUTUxDb2xsZWN0aW9uLCBIVE1MRWxlbWVudCk7XG4iLCIvKipcclxuICogQWRkcyBkYXRhIGFuZCBjb250ZW50IGZ1bmN0aW9ucyB0byBOb2RlLlxyXG4gKlxyXG4gKiBOb2RlIGlzIHRoZSBjb21tb24gYmFzZSBvZiBlbGVtZW50cywgdGV4dCBub2RlcyBhbmQgZnJhZ21lbnRzLCBzbyBkYXRhKCkgYW5kXHJcbiAqIHRoZSBpbnNlcnQgZnVuY3Rpb25zIHdvcmsgb24gYWxsIG9mIHRoZW0sIG5vdCBvbmx5IG9uIGVsZW1lbnRzLlxyXG4gKi9cclxuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEYXRhU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0RhdGFTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGUsRGF0YVN1cHBvcnQsTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiLyoqXG4gKiBCdWlsZHMgTm9kZUxpc3QgYXMgYSBsaXN0IG9mIG5vZGVzLlxuICpcbiAqIEJlc2lkZXMgdGhlIGxpc3QgZnVuY3Rpb25zIHRoaXMgZ2l2ZXMgYSBOb2RlTGlzdCBldmVyeSBmdW5jdGlvbiBvZiBhIG5vZGUsIGJ5XG4gKiBkZWxlZ2F0aW9uIC0gY2FsbGluZyBvbmUgYXBwbGllcyBpdCB0byBlYWNoIG5vZGUgYW5kIGNvbGxlY3RzIHRoZSByZXN1bHRzLlxuICovXG5pbXBvcnQgYnVpbGRMaXN0VHlwZSBmcm9tIFwiLi9leHRlbnRpb25zL0xpc3RUeXBlQnVpbGRlclwiO1xuXG5idWlsZExpc3RUeXBlKE5vZGVMaXN0LCBOb2RlKTtcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkF0dHJpYnV0ZVN1cHBvcnRcIiwgKFByb3RvdHlwZSkgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIEdldHMgb3Igc2V0cyBhdHRyaWJ1dGVzIG9mIHRoaXMgZWxlbWVudC5cclxuXHQgKlxyXG5cdCAqIGF0dHIoKSByZXR1cm5zIGFsbCBhdHRyaWJ1dGVzIGFzIGFuIG9iamVjdCwgYXR0cihuYW1lKSB0aGUgdmFsdWUgb2YgYSBzaW5nbGVcclxuXHQgKiBvbmUuIFdpdGggYSBzZWNvbmQgYXJndW1lbnQgdGhlIGF0dHJpYnV0ZSBpcyBzZXQsIHdpdGggbnVsbCBvciB1bmRlZmluZWQgaXRcclxuXHQgKiBnZXRzIHJlbW92ZWQuXHJcblx0ICpcclxuXHQgKiBWYWx1ZXMgYXJlIHN0cmluZ2lmaWVkIGJ5IHNldEF0dHJpYnV0ZSwgc28gYXR0cihuYW1lLCAwKSBzZXRzIFwiMFwiLiBPbmx5IG51bGxcclxuXHQgKiBhbmQgdW5kZWZpbmVkIHJlbW92ZSBhbiBhdHRyaWJ1dGUgLSAwLCBmYWxzZSBhbmQgXCJcIiBhcmUgcmVndWxhciB2YWx1ZXMuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2FOYW1lXSAtIHRoZSBhdHRyaWJ1dGUgbmFtZVxyXG5cdCAqIEBwYXJhbSB7Kn0gW2FWYWx1ZV0gLSB0aGUgbmV3IHZhbHVlLCBudWxsIG9yIHVuZGVmaW5lZCByZW1vdmVzIHRoZSBhdHRyaWJ1dGVcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0PHN0cmluZyxzdHJpbmc+fHN0cmluZ3xFbGVtZW50fSBhbGwgYXR0cmlidXRlcywgdGhlIHZhbHVlIG9mIHRoZSByZXF1ZXN0ZWQgYXR0cmlidXRlIChudWxsIHdoZW4gaXQgZG9lcyBub3QgZXhpc3QpLCBvciB0aGlzIHdoZW4gYW4gYXR0cmlidXRlIHdhcyBzZXQgb3IgcmVtb3ZlZFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRcdFx0dGhpcy5nZXRBdHRyaWJ1dGVOYW1lcygpLmZvckVhY2goKG5hbWUpID0+IHtcclxuXHRcdFx0XHRyZXN1bHRbbmFtZV0gPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHNbMV0gPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkRhdGFTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlYWRzIGFsbCBkYXRhLSBhdHRyaWJ1dGVzIG9mIGEgbm9kZSBpbnRvIGEgcGxhaW4gb2JqZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOb2RlfSBlbGVtZW50XHJcblx0ICogQHJldHVybnMge09iamVjdDxzdHJpbmcsc3RyaW5nPn0gdGhlIGRhdGFzZXQgb2YgdGhlIG5vZGUsIGVtcHR5IHdoZW4gaXQgaGFzIG5vbmVcclxuXHQgKi9cclxuXHRjb25zdCBsb2FkRGF0YSA9IChlbGVtZW50KSA9PiB7XHJcblx0XHRjb25zdCBkYXRhID0ge307XHJcblx0XHRpZiAodHlwZW9mIGVsZW1lbnQuZGF0YXNldCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0Zm9yIChjb25zdCBuYW1lIGluIGVsZW1lbnQuZGF0YXNldClcclxuXHRcdFx0XHRkYXRhW25hbWVdID0gZWxlbWVudC5kYXRhc2V0W25hbWVdO1xyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIG9yIHNldHMgdGhlIGRhdGEgb2YgdGhpcyBub2RlLlxyXG5cdCAqXHJcblx0ICogVGhlIGZpcnN0IGNhbGwgcmVhZHMgdGhlIGRhdGEtIGF0dHJpYnV0ZXMgaW50byBhIGNhY2hlLCB3aGljaCBpcyBrZXB0IG9uIHRoZVxyXG5cdCAqIG5vZGUgZnJvbSB0aGVuIG9uLiBUaGF0IGNhY2hlIGlzIGRldGFjaGVkIGZyb20gdGhlIGRvbTogbGF0ZXIgYXR0cmlidXRlXHJcblx0ICogY2hhbmdlcyBhcmUgbm90IHNlZW4gYW5kIHdyaXR0ZW4gdmFsdWVzIGFyZSBub3QgcmVmbGVjdGVkIGJhY2suIGRhdGEodHJ1ZSlcclxuXHQgKiByZWFkcyB0aGUgYXR0cmlidXRlcyBhZ2Fpbi5cclxuXHQgKlxyXG5cdCAqIFJlbG9hZGluZyBtZXJnZXMsIGl0IGRvZXMgbm90IHN5bmMgLSBhIHZhbHVlIHJlbW92ZWQgZnJvbSB0aGUgZG9tIHN0YXlzIGluXHJcblx0ICogdGhlIGNhY2hlLCBhcyBpdCBjYW4gbm90IGJlIHRvbGQgYXBhcnQgZnJvbSBhIHZhbHVlIHRoYXQgbmV2ZXIgY2FtZSBmcm9tIHRoZVxyXG5cdCAqIGRvbS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfGJvb2xlYW59IFthTmFtZV0gLSBhIG5hbWUgdG8gcmVhZCBvciB3cml0ZSwgb3IgYSBib29sZWFuIHRvIHJlYWQgYWxsIGRhdGEsIHJlbG9hZGluZyB0aGUgYXR0cmlidXRlcyBmaXJzdCB3aGVuIHRydWVcclxuXHQgKiBAcGFyYW0geyp9IFthVmFsdWVdIC0gdGhlIG5ldyB2YWx1ZSwgbnVsbCBvciB1bmRlZmluZWQgcmVtb3ZlcyB0aGUgbmFtZVxyXG5cdCAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLCo+fCp8Tm9kZX0gYWxsIGRhdGEsIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gbmFtZSwgb3IgdGhpcyB3aGVuIGEgdmFsdWUgd2FzIHdyaXR0ZW5cclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbmVpdGhlciBhIHN0cmluZyBub3IgYSBib29sZWFuXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSBsb2FkRGF0YSh0aGlzKTtcclxuXHRcdHRoaXMuZGF0YSA9IChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0Y29uc3QgYXJnMSA9IGFyZ3VtZW50c1swXTtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IHR5cGVvZiBhcmcxO1xyXG5cdFx0XHRpZih0eXBlID09PSBcImJvb2xlYW5cIil7XHJcblx0XHRcdFx0aWYoYXJnMSlcclxuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oZGF0YSwgbG9hZERhdGEodGhpcykpO1xyXG5cdFx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZih0eXBlICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImRhdGEoKSBleHBlY3RzIGEgc3RyaW5nIG9yIGJvb2xlYW4gYXMgZmlyc3QgYXJndW1lbnQgb3Igbm8gYXJndW1lbnRzIGF0IGFsbFwiKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdFx0cmV0dXJuIGRhdGFbYXJnMV07XHJcblx0XHRcdGVsc2UgaWYgKGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHRcdGRlbGV0ZSBkYXRhW2FyZ3VtZW50c1swXV07XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRkYXRhW2FyZ3VtZW50c1swXV0gPSBhcmd1bWVudHNbMV07XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0pLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IEVWRU5UU1BMSVRFUiA9IC9cXHMqLFxccyp8XFxzKy87XHJcbmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHsgY2FwdHVyZTogZmFsc2UsIG9uY2U6IGZhbHNlLCBwYXNzaXZlOiBmYWxzZSwgc2lnbmFsOiB1bmRlZmluZWQgfTtcclxuXHJcbi8qKlxyXG4gKiBFdmVyeXRoaW5nIHRoaXMgZXh0ZW5zaW9uIGtlZXBzIHBlciBlbGVtZW50LiBBIFdlYWtNYXAgaG9sZHMgaXQgb3V0c2lkZSBvZiB0aGVcclxuICogZWxlbWVudCwgc28gbm90aGluZyBpcyBleHBvc2VkIG9uIHRoZSBkb20gYW5kIGl0IGlzIHJlbGVhc2VkIHdpdGggdGhlIGVsZW1lbnQuXHJcbiAqXHJcbiAqIFdyYXBwZXJzIGFuZCBoYW5kbGVzIGFyZSBtYXBwZWQgaW4gYm90aCBkaXJlY3Rpb25zOiBhIHdyYXBwZXIgbmVlZHMgdG8gZmluZCBpdHNcclxuICogcmVnaXN0cmF0aW9uIHdoaWxlIGFuIGV2ZW50IHJ1bnMsIGFuZCByZW1vdmVPbiBuZWVkcyB0byBmaW5kIGFsbCB3cmFwcGVycyBvZiBhXHJcbiAqIGhhbmRsZS4gSGFuZGxlcyBhcmUgbWFwcGVkIHRvIGEgc2V0IG9mIHdyYXBwZXJzLCBub3QgdG8gYSBzaW5nbGUgb25lLCBzbyB0aGVcclxuICogc2FtZSBoYW5kbGUgY2FuIGJlIHJlZ2lzdGVyZWQgYW55IG51bWJlciBvZiB0aW1lcyB3aXRob3V0IHRoZSByZWdpc3RyYXRpb25zXHJcbiAqIG92ZXJ3cml0aW5nIGVhY2ggb3RoZXIuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEVsZW1lbnREYXRhXHJcbiAqIEBwcm9wZXJ0eSB7TWFwPHN0cmluZyxudW1iZXI+fSBldmVudFRyaWdnZXJUaW1lb3V0cyAtIHJ1bm5pbmcgdHJpZ2dlciB0aW1lb3V0cyBieSBldmVudCB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7TWFwPEZ1bmN0aW9uLFJlZ2lzdHJhdGlvbj59IHdyYXBwZXJIYW5kbGVNYXAgLSByZWdpc3RyYXRpb24gb2YgZWFjaCB3cmFwcGVyXHJcbiAqIEBwcm9wZXJ0eSB7TWFwPEZ1bmN0aW9uLFNldDxGdW5jdGlvbj4+fSBoYW5kbGVXcmFwcGVyTWFwIC0gYWxsIHdyYXBwZXJzIG9mIGEgaGFuZGxlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE9uZSBjYWxsIG9mIG9uKCkuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlZ2lzdHJhdGlvblxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBoYW5kbGUgLSB0aGUgZnVuY3Rpb24gZ2l2ZW4gdG8gb24oKVxyXG4gKiBAcHJvcGVydHkge1NldDxzdHJpbmc+fSBldmVudHMgLSB0aGUgZXZlbnQgdHlwZXMgc3RpbGwgcmVnaXN0ZXJlZCwgbGlzdGVuZXJzIGdldCByZW1vdmVkIG9uZSBieSBvbmVcclxuICogQHByb3BlcnR5IHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgb3B0aW9ucyB0aGUgbGlzdGVuZXIgd2FzIGFkZGVkIHdpdGgsIG5lZWRlZCB0byByZW1vdmUgaXQgYWdhaW5cclxuICovXHJcblxyXG5jb25zdCBFTEVNRU5UREFUQSA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtFdmVudFRhcmdldH0gZWxlbWVudFxyXG4gKiBAcmV0dXJucyB7RWxlbWVudERhdGF9IHRoZSBkYXRhIG9mIHRoZSBlbGVtZW50LCBjcmVhdGVkIG9uIGZpcnN0IGFjY2Vzc1xyXG4gKi9cclxuY29uc3QgZ2V0RWxlbWVudERhdGEgPSAoZWxlbWVudCkgPT4ge1xyXG5cdGlmICghRUxFTUVOVERBVEEuaGFzKGVsZW1lbnQpKVxyXG5cdFx0RUxFTUVOVERBVEEuc2V0KGVsZW1lbnQsIHtcclxuXHRcdFx0ZXZlbnRUcmlnZ2VyVGltZW91dHM6IG5ldyBNYXAoKSxcclxuXHRcdFx0d3JhcHBlckhhbmRsZU1hcDogbmV3IE1hcCgpLFxyXG5cdFx0XHRoYW5kbGVXcmFwcGVyTWFwOiBuZXcgTWFwKClcclxuXHRcdH0pO1xyXG5cclxuXHRyZXR1cm4gRUxFTUVOVERBVEEuZ2V0KGVsZW1lbnQpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0V3JhcHBlckhhbmRsZU1hcCA9IChlbGVtZW50KSA9PiB7XHJcblx0cmV0dXJuIGdldEVsZW1lbnREYXRhKGVsZW1lbnQpLndyYXBwZXJIYW5kbGVNYXA7XHJcbn07XHJcblxyXG5jb25zdCBnZXRIYW5kbGVXcmFwcGVyTWFwID0gKGVsZW1lbnQpID0+IHtcclxuXHRyZXR1cm4gZ2V0RWxlbWVudERhdGEoZWxlbWVudCkuaGFuZGxlV3JhcHBlck1hcDtcclxufTtcclxuXHJcbmNvbnN0IGdldFRyaWdnZXJUaW1lb3V0cyA9IChlbGVtZW50KSA9PiB7XHJcblx0cmV0dXJuIGdldEVsZW1lbnREYXRhKGVsZW1lbnQpLmV2ZW50VHJpZ2dlclRpbWVvdXRzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyBhIHdyYXBwZXIgaW4gYm90aCBkaXJlY3Rpb25zLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBhbkVsZW1lbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gYUhhbmRsZSAtIHRoZSBmdW5jdGlvbiBnaXZlbiB0byBvbigpXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFXcmFwcGVyIC0gdGhlIGxpc3RlbmVyIGFjdHVhbGx5IGFkZGVkIHRvIHRoZSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7SXRlcmFibGU8c3RyaW5nPn0gdGhlRXZlbnRzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGVPcHRpb25zIC0ga2VwdCB0byByZW1vdmUgdGhlIGxpc3RlbmVyIHdpdGggdGhlIHNhbWUgb3B0aW9ucyBsYXRlclxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiB0aGUgd3JhcHBlciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQsIHdoaWNoIGNhbiBub3QgaGFwcGVuIGFzIGxvbmcgYXMgb24oKSBjcmVhdGVzIGEgbmV3IG9uZSBwZXIgY2FsbFxyXG4gKi9cclxuY29uc3QgcmVnaXN0cmF0ZUhhbmRsZVdyYXBwZXIgPSAoYW5FbGVtZW50LCBhSGFuZGxlLCBhV3JhcHBlciwgdGhlRXZlbnRzLCB0aGVPcHRpb25zKSA9PiB7XHJcblx0Y29uc3Qgd3JhcHBlckhhbmRsZU1hcCA9IGdldFdyYXBwZXJIYW5kbGVNYXAoYW5FbGVtZW50KTtcclxuXHRpZiAoIXdyYXBwZXJIYW5kbGVNYXAuaGFzKGFXcmFwcGVyKSkgd3JhcHBlckhhbmRsZU1hcC5zZXQoYVdyYXBwZXIsIHsgaGFuZGxlOiBhSGFuZGxlLCBldmVudHM6IG5ldyBTZXQodGhlRXZlbnRzKSwgb3B0aW9uczogdGhlT3B0aW9ucyB9KTtcclxuXHRlbHNlIHRocm93IG5ldyBFcnJvcihcIldyYXBwZXIgYWxyZWFkeSByZWdpc3RlcmVkIGZvciB0aGlzIGVsZW1lbnQhXCIpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVXcmFwcGVyTWFwID0gZ2V0SGFuZGxlV3JhcHBlck1hcChhbkVsZW1lbnQpO1xyXG5cdGxldCB3cmFwcGVyU2V0ID0gaGFuZGxlV3JhcHBlck1hcC5nZXQoYUhhbmRsZSk7XHJcblx0aWYgKCF3cmFwcGVyU2V0KSB7XHJcblx0XHR3cmFwcGVyU2V0ID0gbmV3IFNldCgpO1xyXG5cdFx0aGFuZGxlV3JhcHBlck1hcC5zZXQoYUhhbmRsZSwgd3JhcHBlclNldCk7XHJcblx0fVx0XHJcblx0d3JhcHBlclNldC5hZGQoYVdyYXBwZXIpO1x0XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBhIHdyYXBwZXIgZnJvbSBzb21lIG9yIGFsbCBvZiBpdHMgZXZlbnRzLlxyXG4gKlxyXG4gKiBUaGUgcmVnaXN0cmF0aW9uIGlzIGRyb3BwZWQgZnJvbSBib3RoIG1hcHMgYXMgc29vbiBhcyBubyBldmVudCBpcyBsZWZ0LCBzbyBhXHJcbiAqIHdyYXBwZXIgdGhhdCBzdGlsbCBsaXN0ZW5zIHRvIG90aGVyIGV2ZW50cyBzdGF5cyBrbm93bi5cclxuICpcclxuICogQHBhcmFtIHtFdmVudFRhcmdldH0gYUVsZW1lbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gYVdyYXBwZXJcclxuICogQHBhcmFtIHtJdGVyYWJsZTxzdHJpbmc+fSBbdGhlRXZlbnRzXSAtIHRoZSBldmVudHMgdG8gcmVtb3ZlLCBhbGwgb2YgdGhlbSB3aGVuIG9taXR0ZWRcclxuICovXHJcbmNvbnN0IHJlbW92ZVdyYXBwZXIgPSAoYUVsZW1lbnQsIGFXcmFwcGVyLCB0aGVFdmVudHMpID0+IHtcclxuXHRjb25zdCB3cmFwcGVySGFuZGxlTWFwID0gZ2V0V3JhcHBlckhhbmRsZU1hcChhRWxlbWVudCk7XHJcblx0aWYoIXdyYXBwZXJIYW5kbGVNYXAuaGFzKGFXcmFwcGVyKSkgdGhyb3cgbmV3IEVycm9yKFwiV3JhcHBlciBub3QgcmVnaXN0ZXJlZCBmb3IgdGhpcyBlbGVtZW50IVwiKTtcclxuXHRjb25zdCB7IGV2ZW50cywgb3B0aW9ucywgaGFuZGxlIH0gPSB3cmFwcGVySGFuZGxlTWFwLmdldChhV3JhcHBlcik7XHJcblx0Y29uc3QgcmVtb3ZlZEV2ZW50cyA9IHRoZUV2ZW50cyB8fCBldmVudHM7XHJcblx0Zm9yIChsZXQgZXZlbnQgb2YgcmVtb3ZlZEV2ZW50cykge1xyXG5cdFx0aWYgKGV2ZW50cy5oYXMoZXZlbnQpKSB7XHJcblx0XHRcdGV2ZW50cy5kZWxldGUoZXZlbnQpO1xyXG5cdFx0XHRhRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBhV3JhcHBlciwgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vQ2xlYW51cCB0aGUgd3JhcHBlckhhbmRsZU1hcCBhbmQgaGFuZGxlV3JhcHBlck1hcCBpZiBubyBldmVudHMgbGVmdCBmb3IgdGhpcyB3cmFwcGVyXHJcblx0aWYgKGV2ZW50cy5zaXplID09PSAwKXtcclxuXHRcdHdyYXBwZXJIYW5kbGVNYXAuZGVsZXRlKGFXcmFwcGVyKTtcclxuXHRcdGNvbnN0IGhhbmRsZVdyYXBwZXJNYXAgPSBnZXRIYW5kbGVXcmFwcGVyTWFwKGFFbGVtZW50KTtcclxuXHRcdGNvbnN0IHdyYXBwZXJTZXQgPSBoYW5kbGVXcmFwcGVyTWFwLmdldChoYW5kbGUpO1xyXG5cdFx0d3JhcHBlclNldC5kZWxldGUoYVdyYXBwZXIpO1xyXG5cdFx0aWYgKHdyYXBwZXJTZXQuc2l6ZSA9PT0gMClcclxuXHRcdFx0aGFuZGxlV3JhcHBlck1hcC5kZWxldGUoaGFuZGxlKTtcclxuXHR9XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtib29sZWFufE9iamVjdH0gW29wdGlvbnNdIC0gYSBib29sZWFuIGlzIHRha2VuIGFzIGNhcHR1cmUsIGFuIG9iamVjdCBpcyBtZXJnZWQgaW50byB0aGUgZGVmYXVsdHNcclxuICogQHJldHVybnMge09iamVjdH0gYWx3YXlzIGEgbmV3IG9iamVjdCwgbmV2ZXIgdGhlIHNoYXJlZCBkZWZhdWx0c1xyXG4gKi9cclxuY29uc3QgdG9FdmVudE9wdGlvbnMgPSAob3B0aW9ucykgPT4ge1xyXG5cdGlmIChvcHRpb25zID09IG51bGwpIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMpO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcImJvb2xlYW5cIikgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgeyBjYXB0dXJlOiBvcHRpb25zIH0pO1xyXG5cdGVsc2UgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyk7XHJcbn07XHJcblxyXG4vKipcclxuICogTm9ybWFsaXplcyBldmVudCB0eXBlcyB0byBhIGZsYXQgbGlzdC5cclxuICpcclxuICogVHlwZXMgYXJlIHNlcGFyYXRlZCBieSB3aGl0ZXNwYWNlcywgY29tbWFzIG9yIGJvdGgsIGluIGEgc3RyaW5nIGFzIHdlbGwgYXNcclxuICogd2l0aGluIHRoZSBlbnRyaWVzIG9mIGFuIGFycmF5IC0gc28gW1wiY2xpY2tcIiwgXCJmb2N1cyBibHVyXCJdIGdpdmVzIHRocmVlIHR5cGVzLlxyXG4gKlxyXG4gKiBBIHN0cmluZyBnZXRzIHRyaW1tZWQgYmVmb3JlIGl0IGlzIHNwbGl0LCBiZWNhdXNlIHRoZSBlbXB0eSBlbnRyaWVzIGEgbGVhZGluZ1xyXG4gKiBvciB0cmFpbGluZyBzZXBhcmF0b3IgcHJvZHVjZXMgYXJlIGFydGlmYWN0cyBvZiBzcGxpdHRpbmcsIG5vdCBzb21ldGhpbmcgdGhlXHJcbiAqIGNhbGxlciBhc2tlZCBmb3IuIEFuIGVtcHR5IGVudHJ5IGluc2lkZSBhbiBhcnJheSBpcyB0aGUgb3Bwb3NpdGUgY2FzZTogaXQgd2FzXHJcbiAqIHdyaXR0ZW4gZG93biBhbmQgdGhlcmVmb3JlIHRocm93cy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd8SXRlcmFibGU8c3RyaW5nPn0gdGhlRXZlbnRzXHJcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gdGhlIGV2ZW50IHR5cGVzLCBuZXZlciBlbXB0eVxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiBubyB0eXBlIGlzIGxlZnQgb3IgYW4gZW50cnkgaXMgbm90IGEgbm9uIGVtcHR5IHN0cmluZ1xyXG4gKi9cclxuY29uc3QgdG9FdmVudFR5cGVzID0gKHRoZUV2ZW50cykgPT4ge1xyXG5cdGlmKHRoZUV2ZW50cyA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJFdmVudCB0eXBlcyBhcmUgcmVxdWlyZWQhXCIpO1x0XHJcblx0XHJcblx0Y29uc3QgZXZlbnRzID0gdHlwZW9mIHRoZUV2ZW50cyA9PT0gXCJzdHJpbmdcIiA/IHRoZUV2ZW50cy50cmltKCkuc3BsaXQoRVZFTlRTUExJVEVSKSA6IHRoZUV2ZW50cztcclxuXHRpZiAodHlwZW9mIGV2ZW50c1tTeW1ib2wuaXRlcmF0b3JdICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZXZlbnQgdHlwZXMhXCIpO1xyXG5cdGlmKGV2ZW50cy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIkV2ZW50IHR5cGVzIGFyZSByZXF1aXJlZCFcIik7XHJcblxyXG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cclxuXHRmb3IgKGxldCBldmVudCBvZiBldmVudHMpIHtcclxuXHRcdGlmICh0eXBlb2YgZXZlbnQgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZXZlbnQgdHlwZXMhXCIpO1xyXG5cdFx0ZXZlbnQgPSBldmVudC50cmltKCk7XHJcblx0XHRpZiAoZXZlbnQubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGV2ZW50IHR5cGVzIVwiKTtcclxuXHRcdHJlc3VsdC5wdXNoKC4uLmV2ZW50LnNwbGl0KEVWRU5UU1BMSVRFUikpO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRXZlbnRTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHQvKipcclxuXHQgKiBBZGRzIGEgaGFuZGxlIHRvIG9uZSBvciBtb3JlIGV2ZW50cy5cclxuXHQgKlxyXG5cdCAqIFRoZSBoYW5kbGUgaXMgbm90IGFkZGVkIGFzIGxpc3RlbmVyIGl0c2VsZiwgaXQgZ2V0cyB3cmFwcGVkLiBUaGF0IHdyYXBwZXJcclxuXHQgKiBhcHBsaWVzIHRoZSBzZWxlY3RvciBhbmQgaGFuZGxlcyB0aGUgb25jZSBvcHRpb24sIHdoaWNoIGtlZXBzIHJlbW92ZU9uIGFibGVcclxuXHQgKiB0byBmaW5kIGV2ZXJ5IHJlZ2lzdHJhdGlvbiBvZiBhIGhhbmRsZS5cclxuXHQgKlxyXG5cdCAqIFdpdGggYSBzZWxlY3RvciB0aGUgaGFuZGxlIGlzIG9ubHkgY2FsbGVkIHdoZW4gdGhlIHRhcmdldCBvZiB0aGUgZXZlbnRcclxuXHQgKiBtYXRjaGVzIGl0LiBUb2dldGhlciB3aXRoIG9uY2UgdGhpcyBuZWVkcyBjYXJlOiB0aGUgYnJvd3NlciBjb25zdW1lcyBhIG9uY2VcclxuXHQgKiBsaXN0ZW5lciBvbiB0aGUgZmlyc3QgZXZlbnQsIGV2ZW4gd2hlbiB0aGUgc2VsZWN0b3IgZGlkIG5vdCBtYXRjaCwgc28gdGhlXHJcblx0ICogd3JhcHBlciByZWdpc3RlcnMgaXRzZWxmIGFnYWluIGluIHRoYXQgY2FzZSBhbmQgd2FpdHMgZm9yIGEgbWF0Y2hpbmcgZXZlbnQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xJdGVyYWJsZTxzdHJpbmc+fSB0aGVFdmVudHMgLSBldmVudCB0eXBlcywgc2VwYXJhdGVkIGJ5IHdoaXRlc3BhY2VzIG9yIGNvbW1hc1xyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbYVNlbGVjdG9yXSAtIG9ubHkgY2FsbCB0aGUgaGFuZGxlIHdoZW4gdGhlIHRhcmdldCBvZiB0aGUgZXZlbnQgbWF0Y2hlc1xyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGFIYW5kbGUgLSBjYWxsZWQgd2l0aCB0aGUgZXZlbnRcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW58T2JqZWN0fSBbdGhlT3B0aW9uc10gLSBhIGJvb2xlYW4gaXMgdGFrZW4gYXMgY2FwdHVyZSwgb3RoZXJ3aXNlIHRoZSBvcHRpb25zIG9mIGFkZEV2ZW50TGlzdGVuZXJcclxuXHQgKiBAcmV0dXJucyB7RXZlbnRUYXJnZXR9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgbGVzcyB0aGFuIHR3byBhcmd1bWVudHMgb3IgaW52YWxpZCBldmVudCB0eXBlc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHJcblx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0Y29uc3QgZXZlbnRzID0gdG9FdmVudFR5cGVzKGFyZ3Muc2hpZnQoKSk7XHJcblx0XHRjb25zdCBlbGVtZW50U2VsZWN0b3IgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IGFyZ3Muc2hpZnQoKSA6IG51bGw7XHJcblx0XHRjb25zdCBoYW5kbGUgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRjb25zdCBvcHRpb24gPSB0b0V2ZW50T3B0aW9ucyhhcmdzLnNoaWZ0KCkpO1xyXG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXM7XHJcblx0XHRjb25zdCB3cmFwcGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0Y29uc3QgeyB0YXJnZXQsIHR5cGUgfSA9IGV2ZW50O1xyXG5cdFx0XHRpZiAoZWxlbWVudFNlbGVjdG9yICYmIHR5cGVvZiB0YXJnZXQuaXMgPT09IFwiZnVuY3Rpb25cIiAmJiAhdGFyZ2V0LmlzKGVsZW1lbnRTZWxlY3RvcikpIHtcclxuXHRcdFx0XHRpZiAob3B0aW9uLm9uY2UpIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCB3cmFwcGVyLCBvcHRpb24pOyAvLyByZS1yZWdpc3RlciB0aGUgd3JhcHBlciBmb3IgdGhlIG5leHQgZXZlbnRcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKG9wdGlvbi5vbmNlKSByZW1vdmVXcmFwcGVyKGVsZW1lbnQsIHdyYXBwZXIsIFt0eXBlXSk7XHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gaGFuZGxlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHRcdFx0XHRcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJlZ2lzdHJhdGVIYW5kbGVXcmFwcGVyKHRoaXMsIGhhbmRsZSwgd3JhcHBlciwgZXZlbnRzLCBvcHRpb24pO1xyXG5cclxuXHRcdGZvciAobGV0IGV2ZW50IG9mIGV2ZW50cykge1xyXG5cdFx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHdyYXBwZXIsIG9wdGlvbik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUmVtb3ZlcyBhIGhhbmRsZSBmcm9tIHNvbWUgb3IgYWxsIG9mIGl0cyBldmVudHMuXHJcblx0ICpcclxuXHQgKiBBIGhhbmRsZSByZWdpc3RlcmVkIGJ5IHNldmVyYWwgY2FsbHMgb2Ygb24oKSBpcyByZW1vdmVkIGZyb20gYWxsIG9mIHRoZW0uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhSGFuZGxlIC0gdGhlIGZ1bmN0aW9uIGdpdmVuIHRvIG9uKClcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xJdGVyYWJsZTxzdHJpbmc+fSBbdGhlRXZlbnRzXSAtIHRoZSBldmVudHMgdG8gcmVtb3ZlLCBhbGwgb2YgdGhlbSB3aGVuIG9taXR0ZWRcclxuXHQgKiBAcmV0dXJucyB7RXZlbnRUYXJnZXR9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgaW52YWxpZCBldmVudCB0eXBlc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5yZW1vdmVPbiA9IGZ1bmN0aW9uIChhSGFuZGxlLCB0aGVFdmVudHMpIHtcclxuXHRcdGNvbnN0IGV2ZW50cyA9IHRoZUV2ZW50cyA/IHRvRXZlbnRUeXBlcyh0aGVFdmVudHMpIDogbnVsbDtcclxuXHRcdGNvbnN0IGhhbmRsZVdyYXBwZXJNYXAgPSBnZXRIYW5kbGVXcmFwcGVyTWFwKHRoaXMpO1xyXG5cdFx0Y29uc3Qgd3JhcHBlclNldCA9IGhhbmRsZVdyYXBwZXJNYXAuZ2V0KGFIYW5kbGUpO1x0XHJcblx0XHRpZiAod3JhcHBlclNldCkge1xyXG5cdFx0XHRmb3IgKGxldCB3cmFwcGVyIG9mIHdyYXBwZXJTZXQpXHJcblx0XHRcdFx0cmVtb3ZlV3JhcHBlcih0aGlzLCB3cmFwcGVyLCBldmVudHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc3BhdGNoZXMgYSBidWJibGluZywgY2FuY2VsYWJsZSBhbmQgY29tcG9zZWQgQ3VzdG9tRXZlbnQuXHJcblx0ICpcclxuXHQgKiBBIGxlYWRpbmcgbnVtYmVyIGRlbGF5cyB0aGUgZXZlbnQgYnkgdGhhdCBtYW55IG1pbGxpc2Vjb25kcyBhbmQgcmVwbGFjZXMgYVxyXG5cdCAqIGRlbGF5ZWQgZXZlbnQgb2YgdGhlIHNhbWUgdHlwZSB0aGF0IGlzIHN0aWxsIHBlbmRpbmcsIHNvIGEgcmVwZWF0ZWRseVxyXG5cdCAqIHRyaWdnZXJlZCBldmVudCBpcyBkaXNwYXRjaGVkIG9uY2UgYWZ0ZXIgdGhpbmdzIGNhbWUgdG8gcmVzdC5cclxuXHQgKlxyXG5cdCAqIE9uZSBkYXRhIGFyZ3VtZW50IGJlY29tZXMgZXZlbnQuZGV0YWlsIGFzIGl0IGlzLCBzZXZlcmFsIGJlY29tZSBhbiBhcnJheSBvZlxyXG5cdCAqIHRoZW0uIEEgbGVhZGluZyBFdmVudCBpcyB0YWtlbiBhcyB0aGUgZXZlbnQgdGhpcyBvbmUgaXMgZGVsZWdhdGVkIGZyb20gYW5kXHJcblx0ICogaXMgYXZhaWxhYmxlIGFzIGV2ZW50LmRlbGVnYXRlZEV2ZW50LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IFthVGltZW91dF0gLSBtaWxsaXNlY29uZHMgdG8gZGVsYXkgdGhlIGV2ZW50XHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFUeXBlIC0gdGhlIGV2ZW50IHR5cGVcclxuXHQgKiBAcGFyYW0ge0V2ZW50fSBbYURlbGVnYXRlZEV2ZW50XSAtIHRoZSBldmVudCB0aGlzIG9uZSBpcyB0cmlnZ2VyZWQgZm9yXHJcblx0ICogQHBhcmFtIHsuLi4qfSBbdGhlRGF0YV0gLSBiZWNvbWVzIGV2ZW50LmRldGFpbFxyXG5cdCAqIEByZXR1cm5zIHtFdmVudFRhcmdldH0gdGhpc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGNvbnN0IHRpbWVvdXQgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJudW1iZXJcIiA/IGFyZ3Muc2hpZnQoKSA6IC0xO1xyXG5cdFx0aWYgKHRpbWVvdXQgPj0gMCkge1xyXG5cdFx0XHRjb25zdCB0eXBlID0gYXJnc1swXTtcclxuXHRcdFx0Y29uc3QgdGltZW91dHMgPSBnZXRUcmlnZ2VyVGltZW91dHModGhpcyk7XHJcblx0XHRcdGNvbnN0IHRpbWVvdXRpZCA9IHRpbWVvdXRzLmdldCh0eXBlKTtcclxuXHRcdFx0aWYgKHRpbWVvdXRpZCkgY2xlYXJUaW1lb3V0KHRpbWVvdXRpZCk7XHJcblxyXG5cdFx0XHR0aW1lb3V0cy5zZXQodHlwZSwgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGltZW91dHMuZGVsZXRlKHR5cGUpO1xyXG5cdFx0XHRcdHRoaXMudHJpZ2dlci5hcHBseSh0aGlzLCBhcmdzKTtcclxuXHRcdFx0fSwgdGltZW91dCkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0Y29uc3QgZGVsZWdhdGUgPSBhcmdzWzBdIGluc3RhbmNlb2YgRXZlbnQgPyBhcmdzLnNoaWZ0KCkgOiBudWxsO1xyXG5cdFx0XHRjb25zdCBkYXRhID0gYXJncy5sZW5ndGggPj0gMSA/IChhcmdzLmxlbmd0aCA9PSAxID8gYXJncy5zaGlmdCgpIDogYXJncykgOiBkZWxlZ2F0ZTtcclxuXHRcdFx0Y29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBjb21wb3NlZDogdHJ1ZSwgZGV0YWlsOiBkYXRhIH0pO1xyXG5cclxuXHRcdFx0aWYgKGRlbGVnYXRlKSBldmVudC5kZWxlZ2F0ZWRFdmVudCA9IGRlbGVnYXRlO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7XHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IENMQVNTU1BMSVRFUiA9IC9cXHMrLztcclxuXHJcbi8qKlxyXG4gKiBOb3JtYWxpemVzIGNsYXNzIG5hbWVzIHRvIGEgZmxhdCBsaXN0LlxyXG4gKlxyXG4gKiBOYW1lcyBhcmUgc2VwYXJhdGVkIGJ5IHdoaXRlc3BhY2VzLCBpbiBhIHN0cmluZyBhcyB3ZWxsIGFzIHdpdGhpbiB0aGUgZW50cmllc1xyXG4gKiBvZiBhbiBhcnJheSAtIHNvIFtcImFcIiwgXCJiIGNcIl0gZ2l2ZXMgdGhyZWUgbmFtZXMuXHJcbiAqXHJcbiAqIEEgc3RyaW5nIGdldHMgdHJpbW1lZCBiZWZvcmUgaXQgaXMgc3BsaXQsIGJlY2F1c2UgdGhlIGVtcHR5IGVudHJpZXMgYSBsZWFkaW5nXHJcbiAqIG9yIHRyYWlsaW5nIHdoaXRlc3BhY2UgcHJvZHVjZXMgYXJlIGFydGlmYWN0cyBvZiBzcGxpdHRpbmcuIEFuIGVtcHR5IGVudHJ5XHJcbiAqIHdyaXR0ZW4gZG93biBieSB0aGUgY2FsbGVyIHRocm93cyBpbnN0ZWFkLCBhcyBkb2VzIGFueXRoaW5nIHRoYXQgaXMgbm90IGFcclxuICogc3RyaW5nIC0gY2xhc3NMaXN0IHdvdWxkIG9ubHkgcmVwb3J0IHRob3NlIGFzIGFuIHVudXNhYmxlIHRva2VuLCBvciBzaWxlbnRseVxyXG4gKiB0YWtlIGEgYm9vbGVhbiBhcyBhIGNsYXNzIG5hbWVkIFwidHJ1ZVwiLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gdGhlQ2xhc3Nlc1xyXG4gKiBAcmV0dXJucyB7SXRlcmFibGU8c3RyaW5nPn0gdGhlIGNsYXNzIG5hbWVzLCBuZXZlciBlbXB0eVxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiBubyBuYW1lIGlzIGxlZnQgb3IgYW4gZW50cnkgaXMgbm90IGEgbm9uIGVtcHR5IHN0cmluZ1xyXG4gKi9cclxuY29uc3QgdG9DbGFzc05hbWVzID0gKHRoZUNsYXNzZXMpID0+IHtcclxuXHRpZiAodGhlQ2xhc3NlcyA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJDbGFzcyBuYW1lcyBhcmUgcmVxdWlyZWQhXCIpO1xyXG5cclxuXHRjb25zdCBjbGFzc2VzID0gdHlwZW9mIHRoZUNsYXNzZXMgPT09IFwic3RyaW5nXCIgPyB0aGVDbGFzc2VzLnRyaW0oKS5zcGxpdChDTEFTU1NQTElURVIpIDogdGhlQ2xhc3NlcztcclxuXHRpZiAodHlwZW9mIGNsYXNzZXNbU3ltYm9sLml0ZXJhdG9yXSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNsYXNzIG5hbWVzIVwiKTtcclxuXHRpZiAoY2xhc3Nlcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIkNsYXNzIG5hbWVzIGFyZSByZXF1aXJlZCFcIik7XHJcblxyXG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdGZvciAobGV0IGNsYXp6IG9mIGNsYXNzZXMpIHtcclxuXHRcdGlmICh0eXBlb2YgY2xhenogIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY2xhc3MgbmFtZXMhXCIpO1xyXG5cdFx0Y2xhenogPSBjbGF6ei50cmltKCk7XHJcblx0XHRpZiAoY2xhenoubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNsYXNzIG5hbWVzIVwiKTtcclxuXHRcdHJlc3VsdC5wdXNoKC4uLmNsYXp6LnNwbGl0KENMQVNTU1BMSVRFUikpO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkcyBhIGNsYXNzIGZ1bmN0aW9uLCBhcyBhZGQsIHJlbW92ZSBhbmQgdG9nZ2xlIG9ubHkgZGlmZmVyIGJ5IHRoZSBtZXRob2RcclxuICogdGhleSBjYWxsIG9uIHRoZSBjbGFzc0xpc3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhTmFtZSAtIHRoZSBuYW1lIG9mIHRoZSBjbGFzc0xpc3QgbWV0aG9kXHJcbiAqIEByZXR1cm5zIHtmdW5jdGlvbiguLi4oc3RyaW5nfHN0cmluZ1tdKSk6RWxlbWVudH0gYSBmdW5jdGlvbiB0YWtpbmcgYW55IG1peCBvZiBuYW1lcywgbGlzdHMgb2YgbmFtZXMgYW5kIGFycmF5cyBvZiBib3RoXHJcbiAqL1xyXG5jb25zdCBjbGFzc0xpc3RGdW5jdGlvbiA9IChhTmFtZSkgPT5cclxuXHRmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBjbGFzc2VzID0gdG9DbGFzc05hbWVzKEFycmF5LmZyb20oYXJndW1lbnRzKS5mbGF0KCkpO1xyXG5cdFx0Y2xhc3Nlcy5mb3JFYWNoKChjbGF6eikgPT4gdGhpcy5jbGFzc0xpc3RbYU5hbWVdKGNsYXp6KSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkh0bWxDbGFzc1N1cHBvcnRcIiwgKFByb3RvdHlwZSkgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIEFkZHMgY2xhc3MgbmFtZXMgdG8gdGhpcyBlbGVtZW50LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi4oc3RyaW5nfHN0cmluZ1tdKX0gdGhlQ2xhc3NlcyAtIG5hbWVzLCB3aGl0ZXNwYWNlIHNlcGFyYXRlZCBsaXN0cyBvZiBuYW1lcywgb3IgYXJyYXlzIG9mIGJvdGhcclxuXHQgKiBAcmV0dXJucyB7RWxlbWVudH0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBieSBpbnZhbGlkIGNsYXNzIG5hbWVzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmFkZENsYXNzID0gY2xhc3NMaXN0RnVuY3Rpb24oXCJhZGRcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbW92ZXMgY2xhc3MgbmFtZXMgZnJvbSB0aGlzIGVsZW1lbnQuIE5hbWVzIG5vdCBwcmVzZW50IGFyZSBpZ25vcmVkLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi4oc3RyaW5nfHN0cmluZ1tdKX0gdGhlQ2xhc3NlcyAtIG5hbWVzLCB3aGl0ZXNwYWNlIHNlcGFyYXRlZCBsaXN0cyBvZiBuYW1lcywgb3IgYXJyYXlzIG9mIGJvdGhcclxuXHQgKiBAcmV0dXJucyB7RWxlbWVudH0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBieSBpbnZhbGlkIGNsYXNzIG5hbWVzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnJlbW92ZUNsYXNzID0gY2xhc3NMaXN0RnVuY3Rpb24oXCJyZW1vdmVcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRvZ2dsZXMgY2xhc3MgbmFtZXMgb2YgdGhpcyBlbGVtZW50LCBlYWNoIG9uZSBvbiBpdHMgb3duLlxyXG5cdCAqXHJcblx0ICogVGhlIGZvcmNlIHBhcmFtZXRlciBvZiBjbGFzc0xpc3QudG9nZ2xlIGlzIG5vdCBzdXBwb3J0ZWQgLSBhIGJvb2xlYW4gaXMgbm90XHJcblx0ICogYSBjbGFzcyBuYW1lIGFuZCB0aGVyZWZvcmUgdGhyb3dzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi4oc3RyaW5nfHN0cmluZ1tdKX0gdGhlQ2xhc3NlcyAtIG5hbWVzLCB3aGl0ZXNwYWNlIHNlcGFyYXRlZCBsaXN0cyBvZiBuYW1lcywgb3IgYXJyYXlzIG9mIGJvdGhcclxuXHQgKiBAcmV0dXJucyB7RWxlbWVudH0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBieSBpbnZhbGlkIGNsYXNzIG5hbWVzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gY2xhc3NMaXN0RnVuY3Rpb24oXCJ0b2dnbGVcIik7XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBCdWlsZHMgYSBsaXN0IGZ1bmN0aW9uIGJ5IGRlbGVnYXRpbmcgdG8gdGhlIGFycmF5IGZ1bmN0aW9uIG9mIHRoZSBzYW1lIG5hbWUuXHJcbiAqXHJcbiAqIFRoZSBsaXN0IGlzIGNvcGllZCBpbnRvIGFuIGFycmF5IGZpcnN0LiBUaGF0IGNvcHkgaXMgd2hhdCBtYWtlcyB0aGVzZSBmdW5jdGlvbnNcclxuICogc2FmZSBvbiBhIGxpdmUgSFRNTENvbGxlY3Rpb246IG5vZGVzIG1heSBiZSBtb3ZlZCBvciByZW1vdmVkIHdoaWxlIGl0ZXJhdGluZyxcclxuICogd2l0aG91dCB0aGUgaXRlcmF0aW9uIHNraXBwaW5nIHRoZSBlbnRyaWVzIHRoYXQgc2hpZnQgaW50byB0aGVpciBwbGFjZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFOYW1lIC0gdGhlIG5hbWUgb2YgdGhlIGFycmF5IGZ1bmN0aW9uXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gYSBmdW5jdGlvbiBiZWhhdmluZyBsaWtlIHRoZSBhcnJheSBmdW5jdGlvbiBvZiB0aGF0IG5hbWVcclxuICovXHJcbmNvbnN0IGFycmF5RnVuY3Rpb24gPSAoYU5hbWUpID0+XHJcblx0ZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZVthTmFtZV0uYXBwbHkoQXJyYXkuZnJvbSh0aGlzKSwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiTGlzdFN1cHBvcnRcIiwgKFByb3RvdHlwZSkgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7Kn0gYU5vZGUgLSB0aGUgbm9kZSB0byBsb29rIGZvclxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbYVN0YXJ0XSAtIHRoZSBpbmRleCB0byBzdGFydCBhdFxyXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBpbmRleCBvZiB0aGUgbm9kZSwgb3IgLTFcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuaW5kZXhPZiA9IGFycmF5RnVuY3Rpb24oXCJpbmRleE9mXCIpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0geyp9IGFOb2RlIC0gdGhlIG5vZGUgdG8gbG9vayBmb3JcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gW2FTdGFydF0gLSB0aGUgaW5kZXggdG8gc3RhcnQgYXRcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgbGlzdCBjb250YWlucyB0aGUgbm9kZVxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5pbmNsdWRlcyA9IGFycmF5RnVuY3Rpb24oXCJpbmNsdWRlc1wiKTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2FsbHMgdGhlIGZ1bmN0aW9uIGZvciBlYWNoIG5vZGUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9uKE5vZGUsbnVtYmVyLE5vZGVbXSk6dm9pZH0gYUZ1bmN0aW9uIC0gY2FsbGVkIHdpdGggbm9kZSwgaW5kZXggYW5kIHRoZSBjb3BpZWQgbGlzdFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5mb3JFYWNoID0gYXJyYXlGdW5jdGlvbihcImZvckVhY2hcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24oTm9kZSxudW1iZXIsTm9kZVtdKToqfSBhRnVuY3Rpb25cclxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSByZXN1bHRzLCBhbiBhcnJheSBhcyB0aGUgcmVzdWx0cyBhcmUgbm90IG5vZGVzIGFueW1vcmVcclxuXHQgKi9cclxuXHRQcm90b3R5cGUubWFwID0gYXJyYXlGdW5jdGlvbihcIm1hcFwiKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtmdW5jdGlvbihOb2RlLG51bWJlcixOb2RlW10pOmJvb2xlYW59IGFGdW5jdGlvblxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSBmdW5jdGlvbiBtYXRjaGVzIGF0IGxlYXN0IG9uZSBub2RlXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnNvbWUgPSBhcnJheUZ1bmN0aW9uKFwic29tZVwiKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtmdW5jdGlvbihOb2RlLG51bWJlcixOb2RlW10pOmJvb2xlYW59IGFGdW5jdGlvblxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSBmdW5jdGlvbiBtYXRjaGVzIGV2ZXJ5IG5vZGVcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuZXZlcnkgPSBhcnJheUZ1bmN0aW9uKFwiZXZlcnlcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24oKixOb2RlLG51bWJlcixOb2RlW10pOip9IGFGdW5jdGlvblxyXG5cdCAqIEBwYXJhbSB7Kn0gW2FJbml0aWFsVmFsdWVdXHJcblx0ICogQHJldHVybnMgeyp9IHRoZSBhY2N1bXVsYXRlZCByZXN1bHRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUucmVkdWNlID0gYXJyYXlGdW5jdGlvbihcInJlZHVjZVwiKTtcclxuXHJcblx0LyoqXHJcblx0ICogRmlsdGVycyB0aGUgbGlzdC5cclxuXHQgKlxyXG5cdCAqIFVubGlrZSBtYXAgdGhpcyBrZWVwcyB0aGUgdHlwZSBvZiB0aGUgbGlzdCAtIGEgTm9kZUxpc3QgcmV0dXJucyBhIE5vZGVMaXN0LCBhXHJcblx0ICogSFRNTENvbGxlY3Rpb24gcmV0dXJucyBhIEhUTUxDb2xsZWN0aW9uIC0gc28gYSBmaWx0ZXJlZCBsaXN0IGNhbiBiZSB1c2VkIGxpa2VcclxuXHQgKiBhbnkgb3RoZXIgb25lLiBUaGUgcmVzdWx0IGlzIGEgbmV3IGxpc3QsIGl0IGlzIG5vdCBsaXZlIGFueW1vcmUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9uKE5vZGUsbnVtYmVyLE5vZGVbXSk6Ym9vbGVhbn0gYUZ1bmN0aW9uXHJcblx0ICogQHJldHVybnMge05vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufSB0aGUgbWF0Y2hpbmcgbm9kZXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmZyb20ocmVzdWx0KTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcmV0dXJucyB7Tm9kZXx1bmRlZmluZWR9IHRoZSBmaXJzdCBub2RlLCBvciB1bmRlZmluZWQgd2hlbiB0aGUgbGlzdCBpcyBlbXB0eVxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh0aGlzLmxlbmd0aCA+IDApIHJldHVybiB0aGlzWzBdO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfHVuZGVmaW5lZH0gdGhlIGxhc3Qgbm9kZSwgb3IgdW5kZWZpbmVkIHdoZW4gdGhlIGxpc3QgaXMgZW1wdHlcclxuXHQgKi9cclxuXHRQcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh0aGlzLmxlbmd0aCA+IDApIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xuaW1wb3J0IExpc3RTdXBwb3J0IGZyb20gXCIuL0xpc3RTdXBwb3J0XCI7XG5cbi8qKlxuICogU2V0cyB1cCBhIGRvbSBsaXN0IHR5cGUgLSBOb2RlTGlzdCBvciBIVE1MQ29sbGVjdGlvbiAtIHRoZSBzYW1lIHdheS5cbiAqXG4gKiBUaGUgdHdvIG9ubHkgZGlmZmVyIGJ5IHRoZWlyIG93biB0eXBlIGFuZCB0aGUgZWxlbWVudCB0eXBlIHRoZXkgaG9sZCwgc28gdGhpc1xuICogYnVpbGRzIGJvdGggZnJvbSB0aG9zZSB0d28gcGFyYW1ldGVyczogaXQgYXBwbGllcyBMaXN0U3VwcG9ydCwgYWRkcyBhcHBseVRvLFxuICogdmFsIGFuZCB0aGUgc3RhdGljIGZyb20sIGFuZCB3aXJlcyB0aGUgZGVsZWdhdGlvbiB0aGF0IGxldHMgYSBsaXN0IGZvcndhcmRcbiAqIGV2ZXJ5IG1ldGhvZCBvZiBpdHMgZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gTGlzdFR5cGUgLSB0aGUgbGlzdCB0eXBlLCBOb2RlTGlzdCBvciBIVE1MQ29sbGVjdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gRWxlbWVudFR5cGUgLSB0aGUgdHlwZSBvZiB0aGUgaXRlbXMsIE5vZGUgb3IgSFRNTEVsZW1lbnRcbiAqL1xuY29uc3QgYnVpbGRMaXN0VHlwZSA9IChMaXN0VHlwZSwgRWxlbWVudFR5cGUpID0+IHtcblx0ZXh0ZW5kUHJvdG90eXBlKExpc3RUeXBlLCBMaXN0U3VwcG9ydCk7XG5cblx0LyoqXG5cdCAqIEFwcGxpZXMgYSBmdW5jdGlvbiBvciBhIG1ldGhvZCB0byBlYWNoIGl0ZW0gYW5kIGNvbGxlY3RzIHRoZSByZXN1bHRzLlxuXHQgKlxuXHQgKiBBIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRoZSBpdGVtIGZvbGxvd2VkIGJ5IHRoZSBleHRyYSBhcmd1bWVudHMuIEEgc3RyaW5nXG5cdCAqIGlzIHRha2VuIGFzIHRoZSBuYW1lIG9mIGEgbWV0aG9kIHRvIGNhbGwgb24gZWFjaCBpdGVtIHdpdGggdGhvc2UgYXJndW1lbnRzLlxuXHQgKiBOdWxsIHJlc3VsdHMgYXJlIHNraXBwZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb258c3RyaW5nfSBjYWxsaW5nIC0gYSBmdW5jdGlvbiB0byBjYWxsLCBvciB0aGUgbmFtZSBvZiBhIG1ldGhvZFxuXHQgKiBAcGFyYW0gey4uLip9IHRoZUFyZ3VtZW50cyAtIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24gb3IgbWV0aG9kXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gdGhlIGNvbGxlY3RlZCByZXN1bHRzXG5cdCAqL1xuXHRMaXN0VHlwZS5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xuXHRcdGNvbnN0IGNhbGxpbmcgPSBhcmdzLnNoaWZ0KCk7XG5cdFx0Y29uc3QgaXNGdW5jdGlvbiA9IHR5cGVvZiBjYWxsaW5nID09PSBcImZ1bmN0aW9uXCI7XG5cdFx0Y29uc3QgcmVzdWx0cyA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IHRoaXNbaV07XG5cdFx0XHRsZXQgcmVzdWx0O1xuXHRcdFx0aWYgKGlzRnVuY3Rpb24pIHJlc3VsdCA9IGNhbGxpbmcuYXBwbHkobnVsbCwgW25vZGVdLmNvbmNhdChhcmdzKSk7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2Ygbm9kZVtjYWxsaW5nXSA9PT0gXCJmdW5jdGlvblwiKSByZXN1bHQgPSBub2RlW2NhbGxpbmddLmFwcGx5KG5vZGUsIGFyZ3MpO1xuXG5cdFx0XHRpZiAocmVzdWx0ICE9IG51bGwpIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHRzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWFkcyBvciB3cml0ZXMgdGhlIHZhbHVlIG9mIHRoZSBpdGVtcy5cblx0ICpcblx0ICogV2l0aG91dCBhcmd1bWVudHMgdGhlIHZhbHVlcyBhcmUgY29sbGVjdGVkIGludG8gYSBNYXAsIGtleWVkIGJ5IHRoZSBuYW1lLCBpZFxuXHQgKiBvciBzZWxlY3RvciBvZiBlYWNoIGl0ZW0gLSBpdGVtcyB3aXRob3V0IGEgdmFsdWUgYXJlIGxlZnQgb3V0LCBzbyBhbiB1bmNoZWNrZWRcblx0ICogcmFkaW8gZG9lcyBub3Qgb3ZlcndyaXRlIHRoZSBzZWxlY3RlZCBvbmUgb2YgaXRzIGdyb3VwLiBXaXRoIGFyZ3VtZW50cyB0aGVcblx0ICogdmFsdWUgaXMgc2V0IG9uIGV2ZXJ5IGl0ZW0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7Li4uKn0gW3RoZVZhbHVlXSAtIHRoZSB2YWx1ZSB0byBzZXQgb24gdGhlIGl0ZW1zXG5cdCAqIEByZXR1cm5zIHtNYXA8c3RyaW5nLCo+fExpc3RUeXBlfSB0aGUgdmFsdWVzIGJ5IGtleSwgb3IgdGhpcyB3aGVuIGEgdmFsdWUgd2FzIHNldFxuXHQgKi9cblx0TGlzdFR5cGUucHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBuZXcgTWFwKCk7XG5cdFx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcykge1xuXHRcdFx0XHRpZiAodHlwZW9mIG5vZGUudmFsID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IG5vZGUudmFsKCk7XG5cdFx0XHRcdFx0aWYgKHZhbHVlICE9IG51bGwpIHJlc3VsdC5zZXQobm9kZS5uYW1lIHx8IG5vZGUuaWQgfHwgbm9kZS5zZWxlY3RvcigpLCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSBlbHNlIHRoaXMuYXBwbHlUbyhcInZhbFwiLCAuLi5hcmd1bWVudHMpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEJ1aWxkcyBhIGxpc3QgZnJvbSBub2Rlcywgb3RoZXIgbGlzdHMgYW5kIGFycmF5cyBvZiB0aGVtLlxuXHQgKlxuXHQgKiBFdmVyeSBhcmd1bWVudCB0aGF0IGlzIGFuIGl0ZW0gaXMgdGFrZW4sIGFuIGl0ZXJhYmxlIGlzIHJlYWQgaXRlbSBieSBpdGVtLCBzb1xuXHQgKiBhbnkgbWl4IGNhbiBiZSBwYXNzZWQuIEFueXRoaW5nIHRoYXQgaXMgbm90IGFuIGl0ZW0gaXMgbGVmdCBvdXQuIFRoZSByZXN1bHQgaXNcblx0ICogYSBwbGFpbiBsaXN0LCBub3QgYSBsaXZlIG9uZS5cblx0ICpcblx0ICogQHBhcmFtIHsuLi4oRWxlbWVudFR5cGV8SXRlcmFibGUpfSB0aGVJdGVtc1xuXHQgKiBAcmV0dXJucyB7TGlzdFR5cGV9IGEgbmV3IGxpc3Qgb2YgdGhlIGl0ZW1zXG5cdCAqL1xuXHRMaXN0VHlwZS5mcm9tID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XG5cdFx0Y29uc3QgZGF0YSA9IHt9O1xuXHRcdGxldCBjb3VudGVyID0gMDtcblxuXHRcdHdoaWxlIChhcmdzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcblx0XHRcdGlmIChhcmcgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoYXJnIGluc3RhbmNlb2YgRWxlbWVudFR5cGUpIGRhdGFbY291bnRlcisrXSA9IHsgdmFsdWU6IGFyZywgZW51bWVyYWJsZTogdHJ1ZSB9O1xuXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJnW1N5bWJvbC5pdGVyYXRvcl0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGZvciAobGV0IGl0ZW0gb2YgYXJnKSB7XG5cdFx0XHRcdFx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIEVsZW1lbnRUeXBlKSBkYXRhW2NvdW50ZXIrK10gPSB7IHZhbHVlOiBpdGVtLCBlbnVtZXJhYmxlOiB0cnVlIH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZGF0YS5sZW5ndGggPSB7IHZhbHVlOiBjb3VudGVyIH07XG5cdFx0cmV0dXJuIE9iamVjdC5jcmVhdGUoTGlzdFR5cGUucHJvdG90eXBlLCBkYXRhKTtcblx0fTtcblxuXHREZWxlZ2F0ZXJCdWlsZGVyKFxuXHRcdGZ1bmN0aW9uIChhRnVuY3Rpb25OYW1lLCB0aGVBcmd1bWVudHMpIHtcblx0XHRcdGxldCByZXN1bHRzID0gW107XG5cdFx0XHR0aGlzLmZvckVhY2goKG5vZGUpID0+IHtcblx0XHRcdFx0aWYgKG5vZGUgJiYgdHlwZW9mIG5vZGVbYUZ1bmN0aW9uTmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcblx0XHRcdFx0XHRpZiAocmVzdWx0ICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMaXN0VHlwZSkgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KEFycmF5LmZyb20ocmVzdWx0KSk7XG5cdFx0XHRcdFx0XHRlbHNlIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdGVsc2UgaWYgKHJlc3VsdHNbMF0gaW5zdGFuY2VvZiBFbGVtZW50VHlwZSB8fCByZXN1bHRzWzBdIGluc3RhbmNlb2YgTGlzdFR5cGUpIHJldHVybiBMaXN0VHlwZS5mcm9tKHJlc3VsdHMpO1xuXHRcdFx0ZWxzZSByZXR1cm4gcmVzdWx0cztcblx0XHR9LFxuXHRcdExpc3RUeXBlLnByb3RvdHlwZSxcblx0XHROb2RlLnByb3RvdHlwZSxcblx0XHRIVE1MRWxlbWVudC5wcm90b3R5cGUsXG5cdFx0SFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsXG5cdFx0RWxlbWVudC5wcm90b3R5cGUsXG5cdFx0RXZlbnRUYXJnZXQucHJvdG90eXBlLFxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRMaXN0VHlwZTtcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBDb250ZW50IGFjY2VwdGVkIGJ5IHRoZSBpbnNlcnQgZnVuY3Rpb25zLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7Tm9kZXxOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbnxDb250ZW50W118c3RyaW5nfSBDb250ZW50XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE5vcm1hbGl6ZXMgY29udGVudCB0byBhIGZsYXQgbGlzdCBvZiBub2Rlcy5cclxuICpcclxuICogU3RyaW5ncyBhcmUgcGFyc2VkIHRvIG5vZGVzIGJ5IHRoZSBnbG9iYWwgY3JlYXRlKCksIGxpc3RzIGFuZCBhcnJheXMgYXJlIHRha2VuXHJcbiAqIGl0ZW0gYnkgaXRlbSwgc28gYW55IG1peCBvZiB0aGVtIGNhbiBiZSBwYXNzZWQuIExpc3RzIGFyZSByZWFkIGludG8gYW4gYXJyYXlcclxuICogYmVmb3JlIGFueXRoaW5nIGlzIGluc2VydGVkLCBiZWNhdXNlIGluc2VydGluZyBhIG5vZGUgcmVtb3ZlcyBpdCBmcm9tIHRoZSBsaXN0XHJcbiAqIGl0IGNhbWUgZnJvbSAtIGl0ZXJhdGluZyB0aGF0IGxpc3Qgd2hpbGUgaW5zZXJ0aW5nIHdvdWxkIHNraXAgZXZlcnkgb3RoZXIgbm9kZS5cclxuICpcclxuICogU3RyaW5ncyBhcmUgbm90IHRyaW1tZWQgYW5kIGFuIGVtcHR5IG9uZSBpcyBhY2NlcHRlZDogdW5saWtlIGV2ZW50IHR5cGVzIG9yXHJcbiAqIGNsYXNzIG5hbWVzLCB3aGl0ZXNwYWNlIGlzIGNvbnRlbnQuIFwiICAgXCIgYmVjb21lcyBhIHRleHQgbm9kZSwgXCJcIiBiZWNvbWVzIG5vXHJcbiAqIG5vZGUgYXQgYWxsLiBPbmx5IHRoZSBhYnNlbmNlIG9mIGFueSBhcmd1bWVudCBpcyBhbiBlcnJvci5cclxuICpcclxuICogQHBhcmFtIHsuLi5Db250ZW50fSB0aGVDb250ZW50XHJcbiAqIEByZXR1cm5zIHtOb2RlW119IHRoZSBub2RlcywgZW1wdHkgd2hlbiB0aGUgY29udGVudCBwcm9kdWNlZCBub25lXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIHRoZXJlIGlzIG5vIGNvbnRlbnQgYXQgYWxsIG9yIGFuIGl0ZW0gaXMgbm90IGNvbnRlbnRcclxuICovXHJcbmNvbnN0IHRvTm9kZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgY29udGVudCA9IEFycmF5LmZyb20oYXJndW1lbnRzKS5mbGF0KEluZmluaXR5KTtcclxuXHRpZiAoY29udGVudC5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIkNvbnRlbnQgaXMgcmVxdWlyZWQhXCIpO1xyXG5cclxuXHRyZXR1cm4gY29udGVudFxyXG5cdFx0Lm1hcCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIE5vZGUpIHJldHVybiBpdGVtO1xyXG5cdFx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGl0ZW0gaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikgcmV0dXJuIEFycmF5LmZyb20oaXRlbSk7XHJcblx0XHRcdGlmICh0eXBlb2YgaXRlbSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIEFycmF5LmZyb20oY3JlYXRlKGl0ZW0pKTtcclxuXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29udGVudCFcIik7XHJcblx0XHR9KVxyXG5cdFx0LmZsYXQoKTtcclxufTtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIk1hbmlwdWxhdGlvblN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHQvKipcclxuXHQgKiBSZW1vdmVzIGFsbCBjaGlsZCBub2Rlcy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfSB0aGlzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKXtcclxuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy5jaGlsZE5vZGVzO1xyXG5cdFx0d2hpbGUobm9kZXMubGVuZ3RoICE9IDApXHRcdFx0XHJcblx0XHRcdG5vZGVzWzBdLnJlbW92ZSh0cnVlKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHQvKipcclxuXHQgKiBAcmV0dXJucyB7Tm9kZUxpc3R9IHRoZSBsaXZlIGxpc3Qgb2YgY2hpbGQgbm9kZXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuY29udGVudCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xyXG5cdH07XHRcclxuXHRcclxuXHQvKipcclxuXHQgKiBHZXRzIG9yIHNldHMgdGhlIG1hcmt1cCBvZiB0aGlzIG5vZGUuXHJcblx0ICpcclxuXHQgKiBodG1sKCkgcmV0dXJucyB0aGUgaW5uZXJIVE1MLCBodG1sKHRydWUpIHRoZSBvdXRlckhUTUwgYW5kIGh0bWwoZmFsc2UpIHRoZVxyXG5cdCAqIGlubmVySFRNTC4gQW55IG90aGVyIGFyZ3VtZW50IHJlcGxhY2VzIGFsbCBjaGlsZHJlbiBieSB0aGUgZ2l2ZW4gY29udGVudC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uKGJvb2xlYW58Q29udGVudCl9IHRoZUNvbnRlbnQgLSBudWxsIG9yIHVuZGVmaW5lZCB0aHJvd3NcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfE5vZGV9IHRoZSBtYXJrdXAsIG9yIHRoaXMgd2hlbiBjb250ZW50IHdhcyBzZXRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuaHRtbCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRpZihhcmd1bWVudHNbMF0pXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMub3V0ZXJIVE1MO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNvbnN0IG5vZGVzID0gdG9Ob2RlcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cdFx0XHR0aGlzLmVtcHR5KCk7XHJcblx0XHRcdG5vZGVzLmZvckVhY2gobm9kZSA9PiB0aGlzLmFwcGVuZENoaWxkKG5vZGUpKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEFwcGVuZHMgdGhlIGNvbnRlbnQgYXMgbGFzdCBjaGlsZHJlbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uQ29udGVudH0gdGhlQ29udGVudFxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfSB0aGlzXHJcblx0ICogQHRocm93cyB7RXJyb3J9IGJ5IGludmFsaWQgY29udGVudFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbigpe1xyXG5cdFx0dG9Ob2RlcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpLmZvckVhY2gobm9kZSA9PiB0aGlzLmFwcGVuZENoaWxkKG5vZGUpKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBJbnNlcnRzIHRoZSBjb250ZW50IGFzIGZpcnN0IGNoaWxkcmVuLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi5Db250ZW50fSB0aGVDb250ZW50XHJcblx0ICogQHJldHVybnMge05vZGV9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgaW52YWxpZCBjb250ZW50XHJcblx0ICovXHJcblx0UHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbigpe1xyXG5cdFx0Y29uc3Qgbm9kZXMgPSB0b05vZGVzKEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblx0XHRjb25zdCBmaXJzdCA9IHRoaXMuZmlyc3RDaGlsZDtcclxuXHRcdG5vZGVzLmZvckVhY2gobm9kZSA9PiB0aGlzLmluc2VydEJlZm9yZShub2RlLCBmaXJzdCkpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlcGxhY2VzIGEgbm9kZSBieSB0aGUgZ2l2ZW4gY29udGVudC5cclxuXHQgKlxyXG5cdCAqIENhbGxlZCB3aXRoIG9uZSBhcmd1bWVudCwgdGhpcyBub2RlIGlzIHJlcGxhY2VkIHdpdGhpbiBpdHMgcGFyZW50IG5vZGUuXHJcblx0ICogQ2FsbGVkIHdpdGggbW9yZSwgdGhlIGZpcnN0IG9uZSAtIGEgY2hpbGQgb2YgdGhpcyBub2RlIC0gaXMgcmVwbGFjZWQgYnkgdGhlXHJcblx0ICogY29udGVudCBmb2xsb3dpbmcgaXQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLkNvbnRlbnR9IHRoZUNvbnRlbnQgLSB0aGUgbmV3IGNvbnRlbnQsIG9yIHRoZSBvbGQgbm9kZSBmb2xsb3dlZCBieSB0aGUgbmV3IGNvbnRlbnRcclxuXHQgKiBAcmV0dXJucyB7Tm9kZX0gdGhpcywgZXZlbiB3aGVuIHRoaXMgbm9kZSB3YXMgdGhlIHJlcGxhY2VkIG9uZVxyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIGNhbGxlZCB3aXRob3V0IGFyZ3VtZW50cyBvciBieSBpbnZhbGlkIGNvbnRlbnRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoIDwgMSlcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5zdWZmaWNpZW50IGFyZ3VtZW50cyEgT25lIG9yIHR3byBub2RlcyByZXF1aXJlZCFcIik7XHJcblxyXG5cdFx0Y29uc3QgcGFyZW50ID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gdGhpcy5wYXJlbnROb2RlIDogdGhpcztcclxuXHRcdGNvbnN0IG9sZE5vZGUgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyB0aGlzIDogYXJndW1lbnRzWzBdO1xyXG5cdFx0Y29uc3Qgbm9kZXMgPSB0b05vZGVzKGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IGFyZ3VtZW50c1swXSA6IEFycmF5LmZyb20oYXJndW1lbnRzKS5zbGljZSgxKSk7XHJcblxyXG5cdFx0bm9kZXMuZm9yRWFjaChub2RlID0+IHBhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgb2xkTm9kZSkpO1xyXG5cdFx0b2xkTm9kZS5yZW1vdmUoKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBJbnNlcnRzIHRoZSBjb250ZW50IGRpcmVjdGx5IGFmdGVyIHRoaXMgbm9kZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uQ29udGVudH0gdGhlQ29udGVudFxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfSB0aGlzXHJcblx0ICogQHRocm93cyB7RXJyb3J9IHdoZW4gdGhpcyBub2RlIGhhcyBubyBwYXJlbnQgbm9kZSBvciBieSBpbnZhbGlkIGNvbnRlbnRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5wYXJlbnROb2RlID09IG51bGwpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbid0IGluc2VydCBub2RlcyBhZnRlciB0aGlzIG5vZGUhIFBhcmVudCBub2RlIG5vdCBhdmFpbGFibGUhXCIpO1xyXG5cclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGNvbnN0IG5leHQgPSB0aGlzLm5leHRTaWJsaW5nO1xyXG5cdFx0dG9Ob2RlcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpLmZvckVhY2gobm9kZSA9PiBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIG5leHQpKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBJbnNlcnRzIHRoZSBjb250ZW50IGRpcmVjdGx5IGJlZm9yZSB0aGlzIG5vZGUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLkNvbnRlbnR9IHRoZUNvbnRlbnRcclxuXHQgKiBAcmV0dXJucyB7Tm9kZX0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIHRoaXMgbm9kZSBoYXMgbm8gcGFyZW50IG5vZGUgb3IgYnkgaW52YWxpZCBjb250ZW50XHJcblx0ICovXHJcblx0UHJvdG90eXBlLmJlZm9yZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLnBhcmVudE5vZGUgPT0gbnVsbClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaW5zZXJ0IG5vZGVzIGJlZm9yZSB0aGlzIG5vZGUhIFBhcmVudCBub2RlIG5vdCBhdmFpbGFibGUhXCIpO1xyXG5cclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdHRvTm9kZXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKS5mb3JFYWNoKG5vZGUgPT4gcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCB0aGlzKSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgUEFSRU5UVE9LRU4gPSBcIjpwYXJlbnRcIjtcclxuY29uc3QgUVVPVEVTID0gW1wiXFxcIlwiLCBcIidcIl07XHJcblxyXG4vKipcclxuICogU3RyaXBzIHRoZSBvcHRpb25hbCBxdW90ZXMgYXJvdW5kIGEgc3ViIHNlbGVjdG9yLlxyXG4gKlxyXG4gKiBRdW90aW5nIGlzIG5vdCBuZWVkZWQgYW55bW9yZSwgYXMgdGhlIHNlbGVjdG9yIGlzIHJlYWQgYnkgY291bnRpbmcgYnJhY2tldHNcclxuICogaW5zdGVhZCBvZiBtYXRjaGluZyBhIHBhdHRlcm4sIGJ1dCBpdCBzdGF5cyBzdXBwb3J0ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdWJxdWVyeVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgc3ViIHNlbGVjdG9yLCBlbXB0eSB3aGVuIHRoZXJlIGlzIG5vbmVcclxuICovXHJcbmNvbnN0IGNsZWFudXBTdWJTZWxlY3RvciA9IChzdWJxdWVyeSkgPT4ge1xyXG5cdGlmICh0eXBlb2Ygc3VicXVlcnkgIT09IFwic3RyaW5nXCIpIHJldHVybiBcIlwiO1xyXG5cdHN1YnF1ZXJ5ID0gc3VicXVlcnkudHJpbSgpO1xyXG5cdGlmICgoc3VicXVlcnkuc3RhcnRzV2l0aCgnXCInKSAmJiBzdWJxdWVyeS5lbmRzV2l0aCgnXCInKSkgfHwgKHN1YnF1ZXJ5LnN0YXJ0c1dpdGgoXCInXCIpICYmIHN1YnF1ZXJ5LmVuZHNXaXRoKFwiJ1wiKSkpIHN1YnF1ZXJ5ID0gc3VicXVlcnkuc3Vic3RyaW5nKDEsIHN1YnF1ZXJ5Lmxlbmd0aCAtIDEpO1xyXG5cdHJldHVybiBzdWJxdWVyeS50cmltKCk7XHJcbn07XHJcblxyXG4vKipcclxuICogRmluZHMgdGhlIDpwYXJlbnQgdG9rZW4gb2YgYSBzZWxlY3Rvci5cclxuICpcclxuICogT25seSBhIHRva2VuIG9uIGJyYWNrZXQgbGV2ZWwgemVybyBhbmQgb3V0c2lkZSBvZiBxdW90ZXMgY291bnRzLCBzbyBuZWl0aGVyXHJcbiAqIFtkYXRhPVwiOnBhcmVudFwiXSBub3IgOm5vdCg6cGFyZW50KSBpcyB0YWtlbiBmb3Igb25lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYVNlbGVjdG9yXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBpbmRleCBvZiB0aGUgdG9rZW4sIG9yIC0xXHJcbiAqL1xyXG5jb25zdCBpbmRleE9mUGFyZW50VG9rZW4gPSAoYVNlbGVjdG9yKSA9PiB7XHJcblx0bGV0IHF1b3RlID0gbnVsbDtcclxuXHRsZXQgZGVwdGggPSAwO1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYVNlbGVjdG9yLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBjaGFyID0gYVNlbGVjdG9yW2ldO1xyXG5cdFx0aWYgKHF1b3RlKSB7XHJcblx0XHRcdGlmIChjaGFyID09PSBxdW90ZSAmJiBhU2VsZWN0b3JbaSAtIDFdICE9PSBcIlxcXFxcIikgcXVvdGUgPSBudWxsO1xyXG5cdFx0fSBlbHNlIGlmIChRVU9URVMuaW5jbHVkZXMoY2hhcikpIHF1b3RlID0gY2hhcjtcclxuXHRcdGVsc2UgaWYgKGNoYXIgPT09IFwiKFwiKSBkZXB0aCsrO1xyXG5cdFx0ZWxzZSBpZiAoY2hhciA9PT0gXCIpXCIpIGRlcHRoLS07XHJcblx0XHRlbHNlIGlmIChkZXB0aCA9PT0gMCAmJiBhU2VsZWN0b3Iuc3RhcnRzV2l0aChQQVJFTlRUT0tFTiwgaSkpIHJldHVybiBpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIC0xO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlYWRzIGEgYnJhY2tldCBncm91cCBieSBjb3VudGluZyBicmFja2V0cywgc28gYSBuZXN0ZWQgZ3JvdXAgbGlrZVxyXG4gKiBkaXY6aGFzKHApOm5vdChzcGFuKSBpcyByZWFkIGFzIGEgd2hvbGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU2VsZWN0b3JcclxuICogQHBhcmFtIHtudW1iZXJ9IGFTdGFydCAtIHRoZSBpbmRleCBvZiB0aGUgb3BlbmluZyBicmFja2V0XHJcbiAqIEByZXR1cm5zIHt7Y29udGVudDogc3RyaW5nLCBlbmQ6IG51bWJlcn19IHRoZSBjb250ZW50IG9mIHRoZSBncm91cCBhbmQgdGhlIGluZGV4IGJlaGluZCBpdFxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiB0aGUgZ3JvdXAgaXMgbm90IGNsb3NlZFxyXG4gKi9cclxuY29uc3QgcmVhZEdyb3VwID0gKGFTZWxlY3RvciwgYVN0YXJ0KSA9PiB7XHJcblx0bGV0IHF1b3RlID0gbnVsbDtcclxuXHRsZXQgZGVwdGggPSAwO1xyXG5cdGZvciAobGV0IGkgPSBhU3RhcnQ7IGkgPCBhU2VsZWN0b3IubGVuZ3RoOyBpKyspIHtcclxuXHRcdGNvbnN0IGNoYXIgPSBhU2VsZWN0b3JbaV07XHJcblx0XHRpZiAocXVvdGUpIHtcclxuXHRcdFx0aWYgKGNoYXIgPT09IHF1b3RlICYmIGFTZWxlY3RvcltpIC0gMV0gIT09IFwiXFxcXFwiKSBxdW90ZSA9IG51bGw7XHJcblx0XHR9IGVsc2UgaWYgKFFVT1RFUy5pbmNsdWRlcyhjaGFyKSkgcXVvdGUgPSBjaGFyO1xyXG5cdFx0ZWxzZSBpZiAoY2hhciA9PT0gXCIoXCIpIGRlcHRoKys7XHJcblx0XHRlbHNlIGlmIChjaGFyID09PSBcIilcIiAmJiAtLWRlcHRoID09PSAwKSByZXR1cm4geyBjb250ZW50OiBhU2VsZWN0b3Iuc3Vic3RyaW5nKGFTdGFydCArIDEsIGkpLCBlbmQ6IGkgKyAxIH07XHJcblx0fVxyXG5cclxuXHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHF1ZXJ5IVwiKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTcGxpdHMgYSBzZWxlY3RvciBhdCBpdHMgOnBhcmVudCB0b2tlbi5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFTZWxlY3RvclxyXG4gKiBAcmV0dXJucyB7e3ByZWZpeDogc3RyaW5nLCBzZWxlY3Rvcjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZ318bnVsbH0gdGhlIHBhcnRzLCBvciBudWxsIHdoZW4gdGhlcmUgaXMgbm8gdG9rZW5cclxuICogQHRocm93cyB7RXJyb3J9IHdoZW4gdGhlIGJyYWNrZXQgZ3JvdXAgb2YgdGhlIHRva2VuIGlzIG5vdCBjbG9zZWRcclxuICovXHJcbmNvbnN0IHNwbGl0UGFyZW50UXVlcnkgPSAoYVNlbGVjdG9yKSA9PiB7XHJcblx0Y29uc3QgaW5kZXggPSBpbmRleE9mUGFyZW50VG9rZW4oYVNlbGVjdG9yKTtcclxuXHRpZiAoaW5kZXggPCAwKSByZXR1cm4gbnVsbDtcclxuXHJcblx0Y29uc3QgYWZ0ZXIgPSBpbmRleCArIFBBUkVOVFRPS0VOLmxlbmd0aDtcclxuXHRjb25zdCBncm91cCA9IGFTZWxlY3RvclthZnRlcl0gPT09IFwiKFwiID8gcmVhZEdyb3VwKGFTZWxlY3RvciwgYWZ0ZXIpIDogeyBjb250ZW50OiBcIlwiLCBlbmQ6IGFmdGVyIH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcmVmaXg6IGFTZWxlY3Rvci5zdWJzdHJpbmcoMCwgaW5kZXgpLnRyaW0oKSxcclxuXHRcdHNlbGVjdG9yOiBjbGVhbnVwU3ViU2VsZWN0b3IoZ3JvdXAuY29udGVudCksXHJcblx0XHRzdWZmaXg6IGFTZWxlY3Rvci5zdWJzdHJpbmcoZ3JvdXAuZW5kKS50cmltKClcclxuXHR9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEV4ZWN1dGVzIGEgc2VsZWN0b3IsIHJlc29sdmluZyB0aGUgOnBhcmVudCBwc2V1ZG8gc2VsZWN0b3IuXHJcbiAqXHJcbiAqIDpwYXJlbnQgcmV0dXJucyB0aGUgcGFyZW50IG9mIHRoZSBlbGVtZW50LCA6cGFyZW50KHNlbGVjdG9yKSB0aGUgbmV4dCBhbmNlc3RvclxyXG4gKiBtYXRjaGluZyB0aGUgc2VsZWN0b3IuIEV2ZXJ5dGhpbmcgYmVmb3JlIHRoZSB0b2tlbiBzZWxlY3RzIHRoZSBlbGVtZW50cyB0b1xyXG4gKiBzdGFydCBmcm9tLCBldmVyeXRoaW5nIGJlaGluZCBpdCBpcyBzZWFyY2hlZCB3aXRoaW4gdGhlIHBhcmVudHMgZm91bmQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGFFbGVtZW50XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU2VsZWN0b3JcclxuICogQHJldHVybnMge05vZGVMaXN0fHVuZGVmaW5lZH0gdGhlIHJlc3VsdCwgdW5kZWZpbmVkIHdoZW4gYSBzdGVwIGZvdW5kIG5vdGhpbmdcclxuICovXHJcbmNvbnN0IHF1ZXJ5RXhlY3V0ZXIgPSBmdW5jdGlvbiAoYUVsZW1lbnQsIGFTZWxlY3Rvcikge1xyXG5cdGNvbnN0IHF1ZXJ5ID0gc3BsaXRQYXJlbnRRdWVyeShhU2VsZWN0b3IpO1xyXG5cdGlmICghcXVlcnkpIHJldHVybiBhRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvcik7XHJcblxyXG5cdGxldCByZXN1bHQgPSBhRWxlbWVudDtcclxuXHRpZiAocXVlcnkucHJlZml4Lmxlbmd0aCA+IDApIHtcclxuXHRcdHJlc3VsdCA9IGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkucHJlZml4KTtcclxuXHRcdGlmIChyZXN1bHQubGVuZ3RoID09IDApIHJldHVybjtcclxuXHR9XHJcblxyXG5cdHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQocXVlcnkuc2VsZWN0b3IubGVuZ3RoID4gMCA/IHF1ZXJ5LnNlbGVjdG9yIDogbnVsbCk7XHJcblx0aWYgKCFyZXN1bHQpIHJldHVybjtcclxuXHJcblx0cmV0dXJuIHF1ZXJ5LnN1ZmZpeC5sZW5ndGggPiAwID8gcmVzdWx0LmZpbmQocXVlcnkuc3VmZml4KSA6IHJlc3VsdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBOb3JtYWxpemVzIHNlbGVjdG9ycyB0byBhIGxpc3Qgb2Ygbm9uIGVtcHR5IHN0cmluZ3MuXHJcbiAqXHJcbiAqIEVtcHR5IHNlbGVjdG9ycyBhcmUgc2tpcHBlZCByYXRoZXIgdGhhbiB0aHJvd24gYXQsIG90aGVyIHRoYW4gaW4gdGhlIHNpYmxpbmdcclxuICogZnVuY3Rpb25zIGZvciBldmVudCB0eXBlcyBhbmQgY2xhc3MgbmFtZXM6IGFuIGVtcHR5IHNlbGVjdG9yIGNhcnJpZXMgbm8gaW50ZW50XHJcbiAqIGFuZCBqdXN0IGNvbnRyaWJ1dGVzIG5vdGhpbmcsIHdoaWxlIGEgbm9uIHN0cmluZyBpcyBhIG1pc3Rha2UgYW5kIHRocm93cy5cclxuICogU2VsZWN0b3JzIGFyZSBub3Qgc3BsaXQsIGNvbW1hIHNlcGFyYXRlZCBsaXN0cyBhcmUgbGVmdCBmb3IgcXVlcnlTZWxlY3RvckFsbC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd8SXRlcmFibGU8c3RyaW5nPn0gdGhlU2VsZWN0b3JzXHJcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gdGhlIHRyaW1tZWQgc2VsZWN0b3JzLCBlbXB0eSBvbmVzIHJlbW92ZWRcclxuICogQHRocm93cyB7RXJyb3J9IHdoZW4gdGhlcmUgaXMgbm8gc2VsZWN0b3Igb3Igb25lIGlzIG5vdCBhIHN0cmluZ1xyXG4gKi9cclxuY29uc3QgdG9TZWxlY3RvciA9IGZ1bmN0aW9uICh0aGVTZWxlY3RvcnMpIHtcclxuXHRpZih0aGVTZWxlY3RvcnMgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBxdWVyeSFcIik7XHJcblxyXG5cdGNvbnN0IHNlbGVjdG9ycyA9IHR5cGVvZiB0aGVTZWxlY3RvcnMgPT09IFwic3RyaW5nXCIgPyBbdGhlU2VsZWN0b3JzXSA6IEFycmF5LmZyb20odGhlU2VsZWN0b3JzKTtcclxuXHJcblx0cmV0dXJuIHNlbGVjdG9yc1xyXG5cdFx0Lm1hcCgoc2VsZWN0b3IpID0+IHtcclxuXHRcdFx0XHRpZih0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcXVlcnkhXCIpO1xyXG5cdFx0XHRcdHJldHVybiBzZWxlY3Rvci50cmltKCk7XHJcblx0XHRcdH0pXHJcblx0XHQuZmlsdGVyKChzZWxlY3RvcikgPT4gc2VsZWN0b3IubGVuZ3RoID4gMCk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJRdWVyeVN1cHBvcnRcIiwgKFByb3RvdHlwZSkgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIFNlYXJjaGVzIG5vZGVzIGJ5IG9uZSBvciBtb3JlIHNlbGVjdG9ycy5cclxuXHQgKlxyXG5cdCAqIFNlbGVjdG9yIGxpc3RzIHNlcGFyYXRlZCBieSBjb21tYSBhcmUgbGVmdCB0byBxdWVyeVNlbGVjdG9yQWxsLCB3aGljaCBrbm93c1xyXG5cdCAqIHRoZW0gYW5kIGdldHMgdGhlIGNvbW1hcyBpbnNpZGUgYnJhY2tldHMgYW5kIHF1b3RlcyByaWdodC4gVGhlIHJlc3VsdHMgb2ZcclxuXHQgKiBzZXZlcmFsIHNlbGVjdG9ycyBhcmUgY29sbGVjdGVkIGluIHRoZSBvcmRlciB0aGV5IHdlcmUgZ2l2ZW4sIHdpdGhvdXRcclxuXHQgKiByZW1vdmluZyB0aGUgbm9kZXMgYSBzZWNvbmQgc2VsZWN0b3IgZmluZHMgYWdhaW4uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLnN0cmluZ30gdGhlU2VsZWN0b3JzIC0gc2VsZWN0b3JzLCBlbXB0eSBvbmVzIGFyZSBza2lwcGVkXHJcblx0ICogQHJldHVybnMge05vZGVMaXN0fSB0aGUgbm9kZXMgZm91bmQsIGVtcHR5IHdoZW4gdGhlcmUgYXJlIG5vbmVcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgYSBzZWxlY3RvciBiZXNpZGUgYSBzdHJpbmdcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IG5vZGVzID0gW107XHJcblx0XHRjb25zdCBzZWxlY3RvcnMgPSB0b1NlbGVjdG9yKGFyZ3VtZW50cyk7XHJcblx0XHRmb3IobGV0IHNlbGVjdG9yIG9mIHNlbGVjdG9ycyl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHF1ZXJ5RXhlY3V0ZXIodGhpcywgc2VsZWN0b3IpO1xyXG5cdFx0XHRpZiAocmVzdWx0KSBub2Rlcy5wdXNoKHJlc3VsdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20oLi4ubm9kZXMpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrcyB3aGV0aGVyIHRoaXMgbm9kZSBtYXRjaGVzIGF0IGxlYXN0IG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxyXG5cdCAqXHJcblx0ICogQSBEb2N1bWVudCBhbmQgYSBEb2N1bWVudEZyYWdtZW50IG5ldmVyIG1hdGNoLCBhcyB0aGV5IGNhbiBub3QgYmUgc2VsZWN0ZWQgLVxyXG5cdCAqIHRoYXQgYWxzbyBjb3ZlcnMgYSBTaGFkb3dSb290LCB3aGljaCBpcyBhIERvY3VtZW50RnJhZ21lbnQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLihzdHJpbmd8c3RyaW5nW10pfSB0aGVTZWxlY3RvcnMgLSBzZWxlY3RvcnMsIGdpdmVuIG9uZSBieSBvbmUgb3IgYXMgYSBsaXN0XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgb25lIG9mIHRoZSBzZWxlY3RvcnMgbWF0Y2hlc1xyXG5cdCAqIEB0aHJvd3Mge0RPTUV4Y2VwdGlvbn0gYnkgYW4gaW52YWxpZCBzZWxlY3RvclxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnQgfHwgdGhpcyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHJldHVybiBmYWxzZTtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHRoaXMubWF0Y2hlcyhhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRcdGxldCBmaWx0ZXIgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXIubGVuZ3RoOyBpKyspIGlmICh0aGlzLm1hdGNoZXMoZmlsdGVyW2ldKSkgcmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHJldHVybiB0aGlzLmlzKEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHBhcmVudCBvZiB0aGlzIG5vZGUsIG9yIHRoZSBuZXh0IGFuY2VzdG9yIG1hdGNoaW5nIGEgc2VsZWN0b3IuXHJcblx0ICpcclxuXHQgKiBBbiBpbnZhbGlkIHNlbGVjdG9yIGlzIG5vdCBjYXVnaHQ6IGl0IHdvdWxkIHJldHVybiB0aGUgcGFyZW50IHJlYWNoZWQgc28gZmFyLFxyXG5cdCAqIHdoaWNoIGlzIGluZGlzdGluZ3Vpc2hhYmxlIGZyb20gYSBtYXRjaCwgd2hpbGUgYSBzZWxlY3RvciBtYXRjaGluZyBub3RoaW5nXHJcblx0ICogY29ycmVjdGx5IHJldHVybnMgbnVsbC4gTGV0dGluZyBpdCB0aHJvdyBrZWVwcyB0aG9zZSB0d28gYXBhcnQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSBbc2VsZWN0b3JdIC0gYSBzZWxlY3RvciB0byBsb29rIGZvciwgb3IgdGhlIGlnbm9yZVNoYWRvd1Jvb3QgZmxhZ1xyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lnbm9yZVNoYWRvd1Jvb3RdIC0gY29udGludWUgYXQgdGhlIGhvc3Qgb2YgYSBzaGFkb3cgcm9vdCBpbnN0ZWFkIG9mIHN0b3BwaW5nXHJcblx0ICogQHJldHVybnMge05vZGV8bnVsbH0gdGhlIHBhcmVudCwgdGhlIG1hdGNoaW5nIGFuY2VzdG9yLCBvciBudWxsIHdoZW4gdGhlcmUgaXMgbm9uZVxyXG5cdCAqIEB0aHJvd3Mge0RPTUV4Y2VwdGlvbn0gYnkgYW4gaW52YWxpZCBzZWxlY3RvclxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGlnbm9yZVNoYWRvd1Jvb3QpIHtcclxuXHRcdGlmICghdGhpcy5wYXJlbnROb2RlKSByZXR1cm4gbnVsbDtcclxuXHRcdGlnbm9yZVNoYWRvd1Jvb3QgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiYm9vbGVhblwiID8gc2VsZWN0b3IgOiBpZ25vcmVTaGFkb3dSb290O1xyXG5cdFx0c2VsZWN0b3IgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBzZWxlY3RvciA6IG51bGw7XHJcblxyXG5cdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGlmIChwYXJlbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290ICYmIGlnbm9yZVNoYWRvd1Jvb3QpIHBhcmVudCA9IHBhcmVudC5ob3N0O1xyXG5cclxuXHRcdGlmIChzZWxlY3RvcikgcmV0dXJuIHBhcmVudC5pcyhzZWxlY3RvcikgPyBwYXJlbnQgOiBwYXJlbnQucGFyZW50KHNlbGVjdG9yLCBpZ25vcmVTaGFkb3dSb290KTtcclxuXHJcblx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbGxlY3RzIHRoZSBhbmNlc3RvcnMgb2YgdGhpcyBub2RlLCBmcm9tIHRoZSBuZWFyZXN0IG9uZSB1cHdhcmRzLlxyXG5cdCAqXHJcblx0ICogV2l0aCBhIHNlbGVjdG9yIG9ubHkgdGhlIG1hdGNoaW5nIGFuY2VzdG9ycyBhcmUgY29sbGVjdGVkLCBhcyBldmVyeSBzdGVwXHJcblx0ICogd2Fsa3MgdXAgdG8gdGhlIG5leHQgbWF0Y2guXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSBbc2VsZWN0b3JdIC0gYSBzZWxlY3RvciB0byBsb29rIGZvciwgb3IgdGhlIGlnbm9yZVNoYWRvd1Jvb3QgZmxhZ1xyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lnbm9yZVNoYWRvd1Jvb3RdIC0gY29udGludWUgYXQgdGhlIGhvc3Qgb2YgYSBzaGFkb3cgcm9vdCBpbnN0ZWFkIG9mIHN0b3BwaW5nXHJcblx0ICogQHJldHVybnMge05vZGVMaXN0fSB0aGUgYW5jZXN0b3JzLCBlbXB0eSB3aGVuIHRoZXJlIGFyZSBub25lXHJcblx0ICogQHRocm93cyB7RE9NRXhjZXB0aW9ufSBieSBhbiBpbnZhbGlkIHNlbGVjdG9yXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnBhcmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBuZXcgQXJyYXkoKTtcclxuXHRcdGxldCBwYXJlbnQgPSBQcm90b3R5cGUucGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR3aGlsZSAocGFyZW50KSB7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHBhcmVudCk7XHJcblx0XHRcdHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHJlc3VsdCk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQnVpbGRzIGEgc2VsZWN0b3IgYWRkcmVzc2luZyB0aGlzIG5vZGUuXHJcblx0ICpcclxuXHQgKiBBbiBpZCBlbmRzIHRoZSBzZWxlY3RvciwgYXMgaXQgYWxyZWFkeSBpZGVudGlmaWVzIHRoZSBub2RlLiBPdGhlcndpc2UgdGhlIHRhZ1xyXG5cdCAqIG5hbWUgaXMgdXNlZCBhbmQgdGhlIHBhdGggY29udGludWVzIGF0IHRoZSBwYXJlbnQuIEEgcG9zaXRpb24gaXMgb25seSBhZGRlZFxyXG5cdCAqIHdoZW4gdGhlIHBhcmVudCBoYXMgbW9yZSB0aGFuIG9uZSBlbGVtZW50IGNoaWxkLCBhbmQgaXQgY291bnRzIGFsbCBvZiB0aGVtIC1cclxuXHQgKiB0aGF0IGlzIHdoYXQgOm50aC1jaGlsZCBkb2VzLCB1bmxpa2UgOm50aC1vZi10eXBlLlxyXG5cdCAqXHJcblx0ICogVGhlIGlkIGlzIG5vdCBlc2NhcGVkLCBzbyBhbiBpZCBuZWVkaW5nIGl0IGdpdmVzIGFuIGludmFsaWQgc2VsZWN0b3IuXHJcblx0ICpcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfHVuZGVmaW5lZH0gdGhlIHNlbGVjdG9yLCB1bmRlZmluZWQgZm9yIGEgRG9jdW1lbnQgb3IgRG9jdW1lbnRGcmFnbWVudFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5zZWxlY3RvciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnQgfHwgdGhpcyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHRlbHNlIGlmICh0aGlzLmlkKSByZXR1cm4gXCIjXCIgKyB0aGlzLmlkO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCgpO1xyXG5cdFx0XHRpZiAocGFyZW50KSB7XHJcblx0XHRcdFx0aWYocGFyZW50LmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XHJcblx0XHRcdFx0XHRzZWxlY3RvciA9IGAke3NlbGVjdG9yfTpudGgtY2hpbGQoJHtpbmRleCArIDF9KWA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnN0IHBhcmVudFNlbGVjdG9yID0gcGFyZW50LnNlbGVjdG9yKCk7XHJcblx0XHRcdFx0cmV0dXJuIHBhcmVudFNlbGVjdG9yICE9IG51bGwgPyBgJHtwYXJlbnRTZWxlY3Rvcn0gPiAke3NlbGVjdG9yfWAgOiBzZWxlY3RvcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gc2VsZWN0b3I7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgZmlyc3Qgbm9kZSBvZiBjbG9zZXN0cygpLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFRdWVyeVxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfHVuZGVmaW5lZH0gdGhlIGZpcnN0IG5vZGUgZm91bmQsIG9yIHVuZGVmaW5lZFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24gKGFRdWVyeSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2xvc2VzdHMoYVF1ZXJ5KS5maXJzdCgpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNlYXJjaGVzIHRoZSBub2RlcyBjbG9zZXN0IHRvIHRoaXMgb25lIGJ5IHRoZWlyIGRpc3RhbmNlIGluIHRoZSB0cmVlLlxyXG5cdCAqXHJcblx0ICogVGhlIHN1YnRyZWUgb2YgdGhpcyBub2RlIGlzIHNlYXJjaGVkIGZpcnN0LCB0aGVuIHRoZSBzdWJ0cmVlIG9mIHRoZSBwYXJlbnQsXHJcblx0ICogYW5kIHNvIG9uIHVwd2FyZHMgLSB0aGUgc2VhcmNoIHdpZGVucyBpbiByaW5ncyB1bnRpbCBhIGxldmVsIGhhcyBtYXRjaGVzLCBhbmRcclxuXHQgKiB0aG9zZSBhcmUgcmV0dXJuZWQuIFNvIHRoZSByZXN1bHQgbWF5IGJlIGEgY2hpbGQsIGEgc2libGluZywgYSBjb3VzaW4gb3IgYW5cclxuXHQgKiBhbmNlc3RvciwgZGVwZW5kaW5nIG9uIHdoZXJlIHRoZSBmaXJzdCBtYXRjaCBhcHBlYXJzLlxyXG5cdCAqXHJcblx0ICogRGlzdGFuY2UgaXMgbWVhbnQgaW4gYm90aCBkaXJlY3Rpb25zIGhlcmUsIG90aGVyIHRoYW4gaW4gdGhlIG5hdGl2ZSBjbG9zZXN0KCksXHJcblx0ICogd2hpY2ggb25seSB3YWxrcyB1cCBhbmQgcmV0dXJucyBhbiBhbmNlc3Rvci5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhUXVlcnlcclxuXHQgKiBAcmV0dXJucyB7Tm9kZUxpc3R9IHRoZSBtYXRjaGVzIG9mIHRoZSBjbG9zZXN0IGxldmVsIGhhdmluZyBhbnksIGVtcHR5IHdoZW4gdGhlcmUgYXJlIG5vbmVcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuY2xvc2VzdHMgPSBmdW5jdGlvbiAoYVF1ZXJ5KSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB0aGlzLmZpbmQoYVF1ZXJ5KTtcclxuXHRcdGlmIChyZXN1bHQubGVuZ3RoICE9IDApIHJldHVybiByZXN1bHQ7XHJcblxyXG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50O1xyXG5cdFx0aWYgKHBhcmVudCkgcmV0dXJuIHBhcmVudC5jbG9zZXN0cyhhUXVlcnkpO1xyXG5cclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKFtdKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTZWFyY2hlcyB0aGUgcXVlcnkgYXQgdGhpcyBub2RlLCBiZWxvdyBpdCwgb3IgYWJvdmUgaXQgLSBpbiB0aGF0IG9yZGVyLlxyXG5cdCAqXHJcblx0ICogVGhpcyBub2RlIGl0c2VsZiBpcyBjaGVja2VkIGZpcnN0LCB0aGVuIGl0cyBzdWJ0cmVlLCBhbmQgb25seSB0aGVuIHRoZVxyXG5cdCAqIGFuY2VzdG9ycy4gVW5saWtlIGNsb3Nlc3RzKCkgdGhlIHNlYXJjaCBkb2VzIG5vdCB3aWRlbiBpbiByaW5nczogaXQgbmV2ZXJcclxuXHQgKiBsb29rcyBpbnRvIHRoZSBzdWJ0cmVlIG9mIGFuIGFuY2VzdG9yLCBzbyBhIHNpYmxpbmcgaXMgbm90IGZvdW5kLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFRdWVyeVxyXG5cdCAqIEByZXR1cm5zIHtOb2RlTGlzdH0gdGhpcyBub2RlLCB0aGUgbm9kZXMgYmVsb3cgaXQsIG9yIHRoZSBtYXRjaGluZyBhbmNlc3RvciwgZW1wdHkgd2hlbiB0aGVyZSBpcyBub25lXHJcblx0ICovXHJcblx0UHJvdG90eXBlLm5lc3RlZCA9IGZ1bmN0aW9uIChhUXVlcnkpIHtcclxuXHRcdGlmICh0aGlzLmlzKGFRdWVyeSkpIHJldHVybiBOb2RlTGlzdC5mcm9tKHRoaXMpO1xyXG5cclxuXHRcdGxldCBuZXN0ZWQgPSB0aGlzLmZpbmQoYVF1ZXJ5KTtcclxuXHRcdGlmIChuZXN0ZWQgJiYgbmVzdGVkLmxlbmd0aCA+IDApIHJldHVybiBuZXN0ZWQ7XHJcblx0XHRlbHNlIHJldHVybiBOb2RlTGlzdC5mcm9tKHRoaXMucGFyZW50KGFRdWVyeSkpO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgdGhlIGV2ZW50IHRyaWdnZXJlZCBvbmNlIHRoZSBkb2N1bWVudCBpcyByZWFkeS5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBSRUFEWUVWRU5UID0gXCJkZWZhdWx0anMtLWV2ZW50LS1yZWFkeVwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiUmVhZHlFdmVudFN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHQvKipcclxuXHQgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiBmb3IgdGhlIHJlYWR5IGV2ZW50IG9mIHRoZSBkb2N1bWVudC5cclxuXHQgKlxyXG5cdCAqIFRoZSByZWFkeSBldmVudCBpcyB0cmlnZ2VyZWQgb25jZSB0aGUgZG9tIGlzIHBhcnNlZC4gV2hlbiB0aGUgZG9jdW1lbnQgaXNcclxuXHQgKiBhbHJlYWR5IGNvbXBsZXRlIHRoZSBldmVudCBpcyB0cmlnZ2VyZWQgcmlnaHQgYXdheSwgc28gYSBmdW5jdGlvbiByZWdpc3RlcmVkXHJcblx0ICogbGF0ZSBzdGlsbCBydW5zLiBUaGF0IHRyaWdnZXIgcmVhY2hlcyBldmVyeSByZWFkeSBsaXN0ZW5lciwgc28gZnVuY3Rpb25zXHJcblx0ICogcmVnaXN0ZXJlZCBlYXJsaWVyIHJ1biBhZ2FpbiBvbiBlYWNoIGxhdGUgcmVnaXN0cmF0aW9uLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gYUZ1bmN0aW9uIC0gY2FsbGVkIG9uIHRoZSByZWFkeSBldmVudFxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW29uY2VdIC0gcmVtb3ZlIHRoZSBmdW5jdGlvbiBhZnRlciB0aGUgbmV4dCByZWFkeSBldmVudFxyXG5cdCAqIEByZXR1cm5zIHtEb2N1bWVudH0gdGhpc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uKGFGdW5jdGlvbiwgb25jZSl7XHJcblx0XHR0aGlzLm9uKFJFQURZRVZFTlQsIGFGdW5jdGlvbiwgb25jZSA/IHsgb25jZTogdHJ1ZSB9IDogdW5kZWZpbmVkKTtcclxuXHRcdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT0gXCJjb21wbGV0ZVwiKVxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoUkVBRFlFVkVOVCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IEhJREVWQUxVRSA9IFwibm9uZVwiO1xyXG5cclxuLyoqXHJcbiAqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgaGlkZGVuIGJ5IGl0cyBvd24gaW5saW5lIGRpc3BsYXksIGEgZGlzcGxheSBjb21pbmcgZnJvbVxyXG4gKiBhIGNzcyBydWxlIGlzIG5vdCBzZWVuLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgaXNIaWRkZW4gPSAoZWxlbWVudCkgPT4ge1xyXG5cdHJldHVybiBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09IEhJREVWQUxVRVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlcGxhY2VzIHNob3cgYW5kIGhpZGUgb24gdGhlIGVsZW1lbnQgYnkgdmVyc2lvbnMgYm91bmQgdG8gaXQsIGNhcHR1cmluZyB0aGVcclxuICogZGlzcGxheSB0byByZXN0b3JlIG9uIHNob3cuXHJcbiAqXHJcbiAqIFRoZSBkaXNwbGF5IGlzIHJlYWQgb25jZSwgb24gdGhlIGZpcnN0IHNob3cgb3IgaGlkZSwgYW5kIGtlcHQgZnJvbSB0aGVuIG9uIC1cclxuICogdGhlIGJvdW5kIG1ldGhvZHMgc2hhZG93IHRoZSBwcm90b3R5cGUsIHNvIGluaXQgZG9lcyBub3QgcnVuIGFnYWluLiBBIGRpc3BsYXlcclxuICogc2V0IGRpcmVjdGx5IGFmdGVyd2FyZHMgaXMgbm90IHBpY2tlZCB1cC4gV2hlbiB0aGUgZWxlbWVudCBpcyBoaWRkZW4gYXQgdGhhdFxyXG4gKiBmaXJzdCBjYWxsIHRoZSBjYXB0dXJlZCB2YWx1ZSBpcyB0aGUgZW1wdHkgc3RyaW5nLCBmYWxsaW5nIGJhY2sgdG8gdGhlIGNzcy5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBlbGVtZW50XHJcbiAqL1xyXG5jb25zdCBpbml0ID0gKGVsZW1lbnQpID0+IHtcclxuXHRsZXQgZGlzcGxheSA9ICFpc0hpZGRlbihlbGVtZW50KSA/IGVsZW1lbnQuc3R5bGUuZGlzcGxheSA6IFwiXCI7XHJcblxyXG5cdGVsZW1lbnQuc2hvdyA9IChmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0pLmJpbmQoZWxlbWVudCk7XHJcblxyXG5cdGVsZW1lbnQuaGlkZSA9IChmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gSElERVZBTFVFO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSkuYmluZChlbGVtZW50KTtcclxuXHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiU2hvd0hpZGVTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0LyoqXHJcblx0ICogU2hvd3MgdGhlIGVsZW1lbnQgYnkgcmVzdG9yaW5nIHRoZSBkaXNwbGF5IGNhcHR1cmVkIGJlZm9yZSBpdCB3YXMgaGlkZGVuLlxyXG5cdCAqXHJcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGlzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBpbml0KHRoaXMpLnNob3cuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhpZGVzIHRoZSBlbGVtZW50IGJ5IHNldHRpbmcgaXRzIGRpc3BsYXkgdG8gbm9uZS5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhpc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gaW5pdCh0aGlzKS5oaWRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTaG93cyB0aGUgZWxlbWVudCB3aGVuIGl0IGlzIGhpZGRlbiwgaGlkZXMgaXQgb3RoZXJ3aXNlLlxyXG5cdCAqXHJcblx0ICogT25seSBhbiBpbmxpbmUgZGlzcGxheSBvZiBub25lIGNvdW50cyBhcyBoaWRkZW4sIHNvIGFuIGVsZW1lbnQgaGlkZGVuIGJ5IGFcclxuXHQgKiBjc3MgcnVsZSBpcyBoaWRkZW4gaW5saW5lIGZpcnN0IGJlZm9yZSBpdCBzaG93cy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhpc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS50b2dnbGVTaG93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gaXNIaWRkZW4odGhpcykgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG5cdH07XHJcblxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG4vKipcclxuICogVmFsdWUgaGFuZGxpbmcgZm9yIG9uZSBraW5kIG9mIGlucHV0IGVsZW1lbnQuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IElucHV0VHlwZVxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc2VsZWN0b3IgLSBtYXRjaGVzIHRoZSBlbGVtZW50cyBoYW5kbGVkIGJ5IHRoaXMgdHlwZVxyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9uKCk6Kn0gZ2V0IC0gcmVhZHMgdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50XHJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb24oKik6dm9pZH0gc2V0IC0gd3JpdGVzIHRoZSB2YWx1ZSB0byB0aGUgZWxlbWVudFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBTaGFyZWQgc2V0dGVyIG9mIGNoZWNrYm94IGFuZCByYWRpbywgYm90aCBhcmUgc2V0IGJ5IHRoZWlyIGNoZWNrZWQgc3RhdGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxzdHJpbmd8c3RyaW5nW119IGFWYWx1ZSAtIGEgYm9vbGVhbiBpcyBhcHBsaWVkIGRpcmVjdGx5LCBhIHN0cmluZyBvciBhbiBhcnJheSBvZiBzdHJpbmdzIGNoZWNrcyB0aGUgZWxlbWVudCB3aGVuIGl0cyB2YWx1ZSBtYXRjaGVzXHJcbiAqL1xyXG5jb25zdCBjaGVja2VkU2V0dGVyID0gZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRpZih0eXBlb2YgYVZhbHVlID09PSBcImJvb2xlYW5cIilcclxuXHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZTtcclxuXHRlbHNlIGlmKHR5cGVvZiBhVmFsdWUgPT09IFwic3RyaW5nXCIpXHJcblx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLnZhbHVlID09IGFWYWx1ZTtcclxuXHRlbHNlIGlmKEFycmF5LmlzQXJyYXkoYVZhbHVlKSlcclxuXHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZS5pbmRleE9mKHRoaXMudmFsdWUpID49IDA7XHJcblxyXG5cdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhlIGZpcnN0IHR5cGUgd2l0aCBhIG1hdGNoaW5nIHNlbGVjdG9yIGhhbmRsZXMgdGhlIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEB0eXBlIHtJbnB1dFR5cGVbXX1cclxuICovXHJcbmNvbnN0IElucHV0VHlwZXMgPSBbXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcInNlbGVjdFwiLFxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nW119IHRoZSB2YWx1ZXMgb2YgYWxsIHNlbGVjdGVkIG9wdGlvbnNcclxuXHRcdCAqL1xyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcblx0XHRcdFx0aWYob3B0aW9uLnNlbGVjdGVkKVxyXG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gob3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0fSk7XHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oKXtcdFx0XHRcdFxyXG5cdFx0XHRsZXQgdmFsdWVzID0gW107XHJcblx0XHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRcdGxldCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdHdoaWxlKGFyZyl7XHJcblx0XHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpKVxyXG5cdFx0XHRcdFx0dmFsdWVzID0gdmFsdWVzLmNvbmNhdChhcmcpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHZhbHVlcy5wdXNoKGFyZyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZXM7XHJcblx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZXMuaW5kZXhPZihvcHRpb24udmFsdWUpID49IDApO1xyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcImlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl1cIixcclxuXHRcdC8qKlxyXG5cdFx0ICogQSBjaGVja2JveCBpcyBpbmRlcGVuZGVudCwgc28gYW4gdW5jaGVja2VkIG9uZSByZXBvcnRzIGZhbHNlIC0gaXQgaXMgb2ZmLFxyXG5cdFx0ICogd2hpY2ggaXMgYSB2YWx1ZSBvZiBpdHMgb3duLlxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ3x1bmRlZmluZWR9IHRoZSBjaGVja2VkIHN0YXRlIHdpdGhvdXQgYSB2YWx1ZSBhdHRyaWJ1dGUsIG90aGVyd2lzZSB0aGUgdmFsdWUgd2hlbiBjaGVja2VkXHJcblx0XHQgKi9cclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmKCF0aGlzLmhhc0F0dHJpYnV0ZShcInZhbHVlXCIpKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrZWQ7XHJcblx0XHRcdGVsc2UgaWYodGhpcy5jaGVja2VkKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGNoZWNrZWRTZXR0ZXJcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdXCIsXHJcblx0XHQvKipcclxuXHRcdCAqIEFsbCByYWRpb3Mgb2YgYSBncm91cCBzaGFyZSBvbmUgbmFtZSBhbmQgb25seSBvbmUgb2YgdGhlbSBjYW4gYmUgY2hlY2tlZCxcclxuXHRcdCAqIHNvIGFuIHVuY2hlY2tlZCByYWRpbyByZXR1cm5zIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIGZhbHNlIC0gaXQgY2FycmllcyBub1xyXG5cdFx0ICogdmFsdWUsIGl0IGp1c3QgaXMgbm90IHRoZSBzZWxlY3RlZCBvbmUuIFRoaXMgaXMgd2hhdCBrZWVwcyB0aGUgdW5jaGVja2VkXHJcblx0XHQgKiByYWRpb3MgZnJvbSBvdmVyd3JpdGluZyB0aGUgdmFsdWUgb2YgdGhlaXIgZ3JvdXAsIG9uY2UgdGhlIHJlc3VsdHMgb2YgYVxyXG5cdFx0ICogd2hvbGUgZ3JvdXAgZ2V0IGNvbGxlY3RlZCBieSBuYW1lLlxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ3x1bmRlZmluZWR9IHRydWUgb3IgdGhlIHZhbHVlIHdoZW4gY2hlY2tlZCwgdW5kZWZpbmVkIG90aGVyd2lzZVxyXG5cdFx0ICovXHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZih0aGlzLmNoZWNrZWQpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwidmFsdWVcIikgPyB0aGlzLnZhbHVlIDogdHJ1ZTtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBjaGVja2VkU2V0dGVyXHJcblx0fVxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEZhbGxiYWNrIGZvciBhbGwgZWxlbWVudHMgd2l0aG91dCBhIG1hdGNoaW5nIElucHV0VHlwZS5cclxuICpcclxuICogQHR5cGUge0lucHV0VHlwZX1cclxuICovXHJcbmNvbnN0IERlZmF1bHRJbnB1dFR5cGUgPSB7XHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHR0aGlzLnZhbHVlID0gYVZhbHVlO1xyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJpbnB1dFwiKTtcclxuXHRcdH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGFFbGVtZW50XHJcbiAqIEByZXR1cm5zIHtJbnB1dFR5cGV9IHRoZSBmaXJzdCBtYXRjaGluZyB0eXBlLCBvciBEZWZhdWx0SW5wdXRUeXBlXHJcbiAqL1xyXG5jb25zdCBnZXRJbnB1dFR5cGUgPSBmdW5jdGlvbihhRWxlbWVudCl7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IElucHV0VHlwZXMubGVuZ3RoOyBpKyspXHJcblx0XHRpZihhRWxlbWVudC5pcyhJbnB1dFR5cGVzW2ldLnNlbGVjdG9yKSlcclxuXHRcdFx0cmV0dXJuIElucHV0VHlwZXNbaV07XHRcdFxyXG5cdHJldHVybiBEZWZhdWx0SW5wdXRUeXBlO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlZhbHVlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIEdldHMgb3Igc2V0cyB0aGUgdmFsdWUgb2YgdGhpcyBlbGVtZW50LlxyXG5cdCAqXHJcblx0ICogV2hhdCBhIHZhbHVlIGlzIGRlcGVuZHMgb24gdGhlIGVsZW1lbnQ6IGEgc2VsZWN0IHJldHVybnMgdGhlIHZhbHVlcyBvZiBhbGxcclxuXHQgKiBpdHMgc2VsZWN0ZWQgb3B0aW9ucywgYSBjaGVja2JveCBpdHMgY2hlY2tlZCBzdGF0ZSBvciBpdHMgdmFsdWUsIGEgcmFkaW8gYVxyXG5cdCAqIHZhbHVlIG9ubHkgd2hlbiBpdCBpcyBjaGVja2VkLCBldmVyeSBvdGhlciBlbGVtZW50IGl0cyB2YWx1ZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uKn0gW2FWYWx1ZV0gLSB0aGUgbmV3IHZhbHVlLCB0aGUgYWNjZXB0ZWQgdHlwZXMgZGVwZW5kIG9uIHRoZSBlbGVtZW50XHJcblx0ICogQHJldHVybnMgeyp8RWxlbWVudH0gdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50LCBvciB0aGlzIHdoZW4gYSB2YWx1ZSB3YXMgc2V0XHJcblx0ICovXHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHR5cGUgPSBnZXRJbnB1dFR5cGUodGhpcyk7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0eXBlLmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0eXBlLnNldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IFwiLi9kb20vRXZlbnRUYXJnZXRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZVwiO1xyXG5pbXBvcnQgXCIuL2RvbS9FbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50RnJhZ21lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTElucHV0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MVGV4dEFyZWFFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxTZWxlY3RFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL05vZGVMaXN0XCI7XHJcbmltcG9ydCBcIi4vZG9tL0h0bWxDb2xsZWN0aW9uXCI7XHJcbmltcG9ydCBcIi4vR2xvYmFsXCI7XHJcbiIsIi8qKlxyXG4gKiBBZGRzIGRlbGVnYXRpbmcgbWV0aG9kcyB0byBhIHByb3RvdHlwZSwgb25lIGZvciBlYWNoIG1ldGhvZCBvZiB0aGUgdGFyZ2V0XHJcbiAqIHByb3RvdHlwZXMuXHJcbiAqXHJcbiAqIFRoaXMgaXMgaG93IGEgTm9kZUxpc3QgZ2V0cyB0aGUgbWV0aG9kcyBvZiBhIE5vZGU6IGZvciBldmVyeSBtZXRob2QgbmFtZSBmb3VuZFxyXG4gKiBvbiB0aGUgdGFyZ2V0cywgYSBmdW5jdGlvbiBpcyBwdXQgb24gdGhlIHNvdXJjZSB0aGF0IGhhbmRzIHRoZSBjYWxsIHRvIHRoZVxyXG4gKiBjYWxsYmFjaywgdG9nZXRoZXIgd2l0aCB0aGF0IG5hbWUuIFRoZSBjYWxsYmFjayB0aGVuIGRlY2lkZXMgd2hhdCB0byBkbyAtIGZvciBhXHJcbiAqIGxpc3QgaXQgYXBwbGllcyB0aGUgbWV0aG9kIHRvIGVhY2ggbm9kZSBhbmQgY29sbGVjdHMgdGhlIHJlc3VsdHMuXHJcbiAqXHJcbiAqIEEgbmFtZSBhbHJlYWR5IG9uIHRoZSBzb3VyY2UgaXMgbGVmdCBhbG9uZSwgc28gaXRzIG93biBtZXRob2RzIHdpbi4gT25seSB2YWx1ZVxyXG4gKiBtZXRob2RzIGFyZSB0YWtlbiwgYWNjZXNzb3JzIGFyZSBza2lwcGVkLCBhcyB0aGVpciBkZXNjcmlwdG9yIGhhcyBubyB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcsIEFyZ3VtZW50cyk6Kn0gY2FsbGJhY2sgLSBjYWxsZWQgYXMgbWV0aG9kLCB3aXRoIHRoZSBuYW1lIGFuZCB0aGUgYXJndW1lbnRzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgLSB0aGUgcHJvdG90eXBlIHRoZSBkZWxlZ2F0aW5nIG1ldGhvZHMgYXJlIGFkZGVkIHRvXHJcbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSB0aGVUYXJnZXRzIC0gdGhlIHByb3RvdHlwZXMgd2hvc2UgbWV0aG9kIG5hbWVzIGFyZSBkZWxlZ2F0ZWRcclxuICovXHJcbmNvbnN0IERlbGVnYXRlckJ1aWxkZXIgPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGNhbGxiYWNrID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IHNvdXJjZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRhcmdzLmZvckVhY2goIHRhcmdldCA9PntcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcclxuXHRcdC5mb3JFYWNoKG5hbWUgPT4ge1xyXG5cdFx0XHRjb25zdCBwcm9wID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIG5hbWUpO1xyXG5cdFx0XHRpZiAodHlwZW9mIHNvdXJjZVtuYW1lXSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcHJvcC52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdHNvdXJjZVtuYW1lXSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzLCBuYW1lLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcdH07XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERlbGVnYXRlckJ1aWxkZXI7IiwiLyoqXHJcbiAqIEFwcGxpZXMgZXh0ZW5zaW9ucyB0byB0aGUgcHJvdG90eXBlIG9mIGEgdHlwZS5cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gYVR5cGUgLSB0aGUgdHlwZSB3aG9zZSBwcm90b3R5cGUgZ2V0cyBleHRlbmRlZFxyXG4gKiBAcGFyYW0gey4uLmZ1bmN0aW9uKEZ1bmN0aW9uKTp2b2lkfSB0aGVFeHRlbmRlcnMgLSB0aGUgd3JhcHBlZCBleHRlbnNpb25zIHRvIGFwcGx5LCBpbiBvcmRlclxyXG4gKi9cclxuY29uc3QgZXh0ZW5kUHJvdG90eXBlID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IHR5cGUgPSBhcmdzLnNoaWZ0KCk7XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGV4dGVuZGVyID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0ZXh0ZW5kZXIodHlwZSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kUHJvdG90eXBlOyIsImltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIFdoaWNoIGV4dGVuc2lvbiBpcyBhcHBsaWVkIHRvIHdoaWNoIHR5cGUsIGtlcHQgb24gdGhlIGdsb2JhbCBvYmplY3Qgc28gaXQgaXNcclxuICogc2hhcmVkIGFjcm9zcyBzZXBhcmF0ZSBsb2FkcyBvZiB0aGUgbGlicmFyeS5cclxuICpcclxuICogQHR5cGUge09iamVjdDxzdHJpbmcsIE9iamVjdDxzdHJpbmcsIGJvb2xlYW4+Pn1cclxuICovXHJcbmNvbnN0IEVYVEVOU0lPTlNfTUFQID0gVXRpbHMuZ2xvYmFsVmFyKFwiX19fRE9NX0FQSV9FWFRFTlNJT05fTUFQX19fXCIsIHt9KTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhbiBleHRlbnNpb24gc28gaXQgYXBwbGllcyB0byB0aGUgcHJvdG90eXBlIG9mIGEgdHlwZSBvbmx5IG9uY2UuXHJcbiAqXHJcbiAqIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBpcyB3aGF0IGV4dGVuZFByb3RvdHlwZSgpIGNhbGxzIHdpdGggYSB0eXBlLiBBcHBseWluZyB0aGVcclxuICogc2FtZSBuYW1lZCBleHRlbnNpb24gdG8gdGhlIHNhbWUgdHlwZSBhZ2FpbiBpcyBhIG5vLW9wIHdpdGggYSB3YXJuaW5nLCBzb1xyXG4gKiBsb2FkaW5nIHRoZSBsaWJyYXJ5IHR3aWNlIGRvZXMgbm90IHBhdGNoIHRoZSBwcm90b3R5cGVzIHR3aWNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYU5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgZXh0ZW5zaW9uLCB1bmlxdWUgcGVyIHR5cGVcclxuICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOnZvaWR9IGFFeHRlbnRpb24gLSBhZGRzIHRoZSBtZW1iZXJzIHRvIHRoZSBwcm90b3R5cGVcclxuICogQHJldHVybnMge2Z1bmN0aW9uKEZ1bmN0aW9uKTp2b2lkfSBhIGZ1bmN0aW9uIGFwcGx5aW5nIHRoZSBleHRlbnNpb24gdG8gYSB0eXBlXHJcbiAqL1xyXG5jb25zdCBFeHRlbmRlciA9IGZ1bmN0aW9uKGFOYW1lLCBhRXh0ZW50aW9uKXtcclxuXHRyZXR1cm4gZnVuY3Rpb24oYVR5cGUpe1xyXG5cdFx0Y29uc3Qge25hbWUsIHByb3RvdHlwZX0gPSBhVHlwZTtcclxuXHRcdGxldCBleHRlbnNpb25zID0gRVhURU5TSU9OU19NQVBbbmFtZV07XHJcblx0XHRpZighZXh0ZW5zaW9ucylcclxuXHRcdFx0ZXh0ZW5zaW9ucyA9IEVYVEVOU0lPTlNfTUFQW25hbWVdID0ge307XHRcdFxyXG5cdFx0XHJcblx0XHRpZighZXh0ZW5zaW9uc1thTmFtZV0pe1xyXG5cdFx0XHRleHRlbnNpb25zW2FOYW1lXSA9IHRydWU7XHJcblx0XHRcdGFFeHRlbnRpb24ocHJvdG90eXBlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0Y29uc29sZS53YXJuKGBEdXBsaWNhdGVkIGxvYWQgb2YgZXh0ZW5zaW9uIFxcXCIke2FOYW1lfVxcXCIhYCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kZXI7IiwiXHJcbi8qKlxyXG4gKiBUaGUgZ2xvYmFsIG9iamVjdCBvZiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cclxuICpcclxuICogRGV0ZWN0ZWQgd2l0aCB0eXBlb2YgZ3VhcmRzLCBiZWNhdXNlIGEgYmFyZSByZWZlcmVuY2UgdG8gYW4gdW5kZWNsYXJlZCBuYW1lXHJcbiAqIHRocm93cyBpbnN0ZWFkIG9mIGJlaW5nIGZhbHN5IC0gc28gYSBwbGFpbiB3aW5kb3cgfHwgZ2xvYmFsIGNoYWluIHdvdWxkIGJyZWFrXHJcbiAqIGV2ZXJ5d2hlcmUgd2luZG93IGlzIG1pc3NpbmcsIG5vdCBmYWxsIHRocm91Z2guIGdsb2JhbFRoaXMgY292ZXJzIHRoZSBicm93c2VyLFxyXG4gKiBub2RlIGFuZCB3b3JrZXJzLCB0aGUgcmVzdCBzdGF5cyBhcyBhIGZhbGxiYWNrIGZvciBvbGRlciBydW50aW1lcy5cclxuICpcclxuICogQHR5cGUge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBHTE9CQUwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOlxyXG5cdHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOlxyXG5cdHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOlxyXG5cdHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHt9O1xyXG5cclxuY29uc3QgVXRpbHMgPSB7XHJcblx0LyoqXHJcblx0ICogVGhlIGdsb2JhbCBvYmplY3QsIHNhbWUgYXMgR0xPQkFMLlxyXG5cdCAqXHJcblx0ICogQHR5cGUge09iamVjdH1cclxuXHQgKi9cclxuXHRnbG9iYWwgOiBHTE9CQUwsXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlYWRzIGEgdmFyaWFibGUgZnJvbSB0aGUgZ2xvYmFsIG9iamVjdCwgaW5pdGlhbGl6aW5nIGl0IG9uY2Ugd2hlbiBhIHZhbHVlXHJcblx0ICogaXMgZ2l2ZW4gYW5kIG5vbmUgaXMgc2V0IHlldC5cclxuXHQgKlxyXG5cdCAqIFVzZWQgdG8gc2hhcmUgc3RhdGUgYmV0d2VlbiBzZXBhcmF0ZSBsb2FkcyBvZiB0aGUgbGlicmFyeSwgd2hpY2ggZWFjaCBoYXZlXHJcblx0ICogdGhlaXIgb3duIG1vZHVsZSBzY29wZSBidXQgdGhlIG9uZSBnbG9iYWwgb2JqZWN0IGluIGNvbW1vbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhTmFtZSAtIHRoZSBuYW1lIG9uIHRoZSBnbG9iYWwgb2JqZWN0XHJcblx0ICogQHBhcmFtIHsqfSBbYUluaXRWYWx1ZV0gLSB0aGUgdmFsdWUgdG8gc2V0IHdoZW4gdGhlIG5hbWUgaXMgc3RpbGwgdW5kZWZpbmVkXHJcblx0ICogQHJldHVybnMgeyp9IHRoZSB2YWx1ZSBvbiB0aGUgZ2xvYmFsIG9iamVjdFxyXG5cdCAqL1xyXG5cdGdsb2JhbFZhciA6IGZ1bmN0aW9uKGFOYW1lLCBhSW5pdFZhbHVlKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIEdMT0JBTFthTmFtZV0gPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdEdMT0JBTFthTmFtZV0gPSBhSW5pdFZhbHVlO1xyXG5cclxuXHRcdHJldHVybiBHTE9CQUxbYU5hbWVdO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3NyY1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==