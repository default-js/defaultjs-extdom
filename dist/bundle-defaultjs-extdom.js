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
	VERSION : "2.0.1",
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
	 * Uses removeChild instead of calling remove() on each child, because
	 * HTMLSelectElement overloads remove(index) to remove an option.
	 *
	 * @returns {Node} this
	 */
	Prototype.empty = function(){
		while(this.firstChild)
			this.removeChild(this.firstChild);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLEdBQUc7QUFDZixjQUFjLEdBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsS0FBSzs7Ozs7O1VDM0NwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL0RvY3VtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL0RvY3VtZW50RnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS8uL3NyYy9kb20vRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9FdmVudFRhcmdldC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9IVE1MRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9IVE1MSW5wdXRFbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL0hUTUxTZWxlY3RFbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvZG9tL0hUTUxUZXh0QXJlYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS8uL3NyYy9kb20vSHRtbENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS8uL3NyYy9kb20vTm9kZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9Ob2RlTGlzdC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9leHRlbnRpb25zL0F0dHJpYnV0ZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS8uL3NyYy9kb20vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9leHRlbnRpb25zL0V2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS8uL3NyYy9kb20vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9leHRlbnRpb25zL0xpc3RUeXBlQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS8uL3NyYy9kb20vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS8uL3NyYy9kb20vZXh0ZW50aW9ucy9SZWFkeUV2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2RvbS9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvdXRpbHMvRGVsZWdhdGVyQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL3V0aWxzL0V4dGVuZFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vc3JjL3V0aWxzL0V4dGVuZGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vLi9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzLCB7R0xPQkFMfSBmcm9tIFwiLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgeyBSRUFEWUVWRU5UIH0gZnJvbSBcIi4vZG9tL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnRcIjtcclxuXHJcbkdMT0JBTC5kZWZhdWx0anMgPSBHTE9CQUwuZGVmYXVsdGpzIHx8IHt9O1xyXG5HTE9CQUwuZGVmYXVsdGpzLmV4dGRvbSA9IEdMT0JBTC5kZWZhdWx0anMuZXh0ZG9tIHx8IHtcclxuXHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXHJcblx0UkVBRFlFVkVOVCA6IFJFQURZRVZFTlQsXHJcblx0dXRpbHMgOiB7XHJcblx0XHRVdGlsczogVXRpbHNcclxuXHR9XHJcbn07XHJcblxyXG5HTE9CQUwuZmluZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5maW5kLmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuR0xPQkFMLnJlYWR5ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LnJlYWR5LmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuR0xPQkFMLmNyZWF0ZSA9IGZ1bmN0aW9uKGFDb250ZW50LCBhc1RlbXBsYXRlKSB7XHJcblx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT09IFwic3RyaW5nXCIpXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZyFcIik7XHJcblx0XHJcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XHJcblx0dGVtcGxhdGUuaW5uZXJIVE1MID0gYUNvbnRlbnQ7XHJcblx0aWYoYXNUZW1wbGF0ZSlcclxuXHRcdHJldHVybiB0ZW1wbGF0ZTtcclxuXHRcclxuXHRyZXR1cm4gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKS5jaGlsZE5vZGVzO1xyXG59O1xyXG5cclxuR0xPQkFMLnNjcmlwdCA9IGZ1bmN0aW9uKGFGaWxlLCBhVGFyZ2V0KSB7XHJcblx0aWYoYUZpbGUgaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdHJldHVybiBQcm9taXNlLmFsbChhRmlsZS5tYXAoZmlsZSA9PiBHTE9CQUwuc2NyaXB0KGZpbGUsIGFUYXJnZXQpKSk7XHJcblx0XHJcblx0aWYodHlwZW9mIGFGaWxlID09PSBcInN0cmluZ1wiKVx0XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHIsZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cdFx0XHRzY3JpcHQub25sb2FkID0gZnVuY3Rpb24oKXtyKCl9O1xyXG5cdFx0XHRzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwibG9hZCBlcnJvciFcIil9O1xyXG5cdFx0XHQhYVRhcmdldCA/IGRvY3VtZW50LmJvZHkuYXBwZW5kKHNjcmlwdCkgOiBhVGFyZ2V0LmFwcGVuZChzY3JpcHQpO1xyXG5cdFx0XHRzY3JpcHQuc3JjID0gYUZpbGU7XHJcblx0XHR9KTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJGaXJzdCBwYXJhbWV0ZXIgbXVzdCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIGEgc3RyaW5nIVwiKTtcclxufTsiLCIvKipcclxuICogQWRkcyBxdWVyeSBhbmQgcmVhZHkgZnVuY3Rpb25zIHRvIERvY3VtZW50LCBhbmQgdHJpZ2dlcnMgdGhlIHJlYWR5IGV2ZW50LlxyXG4gKlxyXG4gKiBUaGUgZXZlbnQgaXMgdHJpZ2dlcmVkIG9uY2UgdGhlIGRvbSBpcyBwYXJzZWQuIEEgcmVhZHkgZnVuY3Rpb24gcmVnaXN0ZXJlZFxyXG4gKiBhZnRlciB0aGF0IGlzIG5vdCBsb3N0LCBhcyByZWFkeSgpIHRyaWdnZXJzIHRoZSBldmVudCBhZ2FpbiB3aGVuIHRoZSBkb2N1bWVudFxyXG4gKiBpcyBhbHJlYWR5IGNvbXBsZXRlLlxyXG4gKi9cclxuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IFJlYWR5RXZlbnRTdXBwb3J0LCB7IFJFQURZRVZFTlQgfSBmcm9tIFwiLi9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnQsIFF1ZXJ5U3VwcG9ydCwgUmVhZHlFdmVudFN1cHBvcnQpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gZG9jdW1lbnQudHJpZ2dlcihSRUFEWUVWRU5UKSk7XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBBZGRzIHF1ZXJ5IGFuZCBjb250ZW50IGZ1bmN0aW9ucyB0byBEb2N1bWVudEZyYWdtZW50LlxyXG4gKlxyXG4gKiBBIFNoYWRvd1Jvb3QgaXMgYSBEb2N1bWVudEZyYWdtZW50LCBzbyBhIHNoYWRvdyByb290IGNhbiBiZSBzZWFyY2hlZCBhbmQgZmlsbGVkXHJcbiAqIHRoZSBzYW1lIHdheSBhcyB0aGUgZnJhZ21lbnQgY3JlYXRlKCkgcmV0dXJucy5cclxuICovXHJcbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKERvY3VtZW50RnJhZ21lbnQsIFF1ZXJ5U3VwcG9ydCwgTWFuaXB1bGF0aW9uU3VwcG9ydCk7XHJcblxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogQWRkcyBxdWVyeSwgYXR0cmlidXRlIGFuZCBjb250ZW50IGZ1bmN0aW9ucyB0byBFbGVtZW50LlxyXG4gKlxyXG4gKiBRdWVyeSBhbmQgYXR0cmlidXRlIGZ1bmN0aW9ucyBuZWVkIGEgc2VsZWN0YWJsZSBub2RlLCB3aGljaCBpcyB3aHkgdGhleSBzaXRcclxuICogaGVyZSBhbmQgbm90IG9uIE5vZGUuIE1hbmlwdWxhdGlvblN1cHBvcnQgaXMgYXBwbGllZCBhZ2FpbiBhbHRob3VnaCBFbGVtZW50XHJcbiAqIGluaGVyaXRzIGl0IGZyb20gTm9kZSAtIHRoYXQgcHV0cyB0aGUgZnVuY3Rpb25zIG9uIEVsZW1lbnQgYXMgb3duIHByb3BlcnRpZXMsXHJcbiAqIHdoZXJlIHRoZSBleHRlbnNpb25zIG9mIHRoZSBtb3JlIHNwZWNpZmljIGh0bWwgdHlwZXMgY2FuIGZpbmQgdGhlbS5cclxuICovXHJcbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBBdHRyaWJ1dGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShFbGVtZW50LFF1ZXJ5U3VwcG9ydCwgQXR0cmlidXRlU3VwcG9ydCwgTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiLyoqXG4gKiBBZGRzIHRoZSBldmVudCBmdW5jdGlvbnMgdG8gRXZlbnRUYXJnZXQuXG4gKlxuICogRXZlbnRUYXJnZXQgaXMgdGhlIHJvb3Qgb2YgZXZlcnl0aGluZyBkaXNwYXRjaGluZyBldmVudHMsIG5vdCBvbmx5IG9mIHRoZSBkb20sXG4gKiBzbyBvbigpLCByZW1vdmVPbigpIGFuZCB0cmlnZ2VyKCkgYXJlIGF2YWlsYWJsZSBvbiBldmVyeSBub2RlLCBvbiB0aGUgZG9jdW1lbnRcbiAqIGFuZCBvbiB0aGUgd2luZG93IGFsaWtlLlxuICovXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcbmltcG9ydCBFdmVudFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnRcIjtcblxuZXh0ZW5kUHJvdG90eXBlKEV2ZW50VGFyZ2V0LCBFdmVudFN1cHBvcnQpOyIsIi8qKlxyXG4gKiBBZGRzIGNsYXNzIGFuZCB2aXNpYmlsaXR5IGZ1bmN0aW9ucyB0byBIVE1MRWxlbWVudC5cclxuICpcclxuICogQm90aCB3b3JrIG9uIHRoZSBzdHlsZSBhbmQgdGhlIGNsYXNzTGlzdCBvZiBhIGh0bWwgZWxlbWVudCwgd2hpY2ggaXMgd2h5IHRoZXlcclxuICogc2l0IGhlcmUgYW5kIG5vdCBvbiBFbGVtZW50IC0gYW4gc3ZnIGVsZW1lbnQgaGFzIG5laXRoZXIgaW4gdGhlIHNhbWUgd2F5LlxyXG4gKi9cclxuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBIdG1sQ2xhc3NTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydFwiO1xyXG5pbXBvcnQgU2hvd0hpZGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxFbGVtZW50LCBIdG1sQ2xhc3NTdXBwb3J0LCBTaG93SGlkZVN1cHBvcnQpOyIsIi8qKlxyXG4gKiBBZGRzIHZhbCgpIHRvIEhUTUxJbnB1dEVsZW1lbnQuXHJcbiAqXHJcbiAqIFZhbHVlU3VwcG9ydCBwaWNrcyB0aGUgaGFuZGxpbmcgYnkgdGhlIHR5cGUgb2YgdGhlIGlucHV0LCBzbyBhIGNoZWNrYm94IGFuZCBhXHJcbiAqIHJhZGlvIGFyZSByZWFkIGJ5IHRoZWlyIGNoZWNrZWQgc3RhdGUgd2hpbGUgZXZlcnkgb3RoZXIgaW5wdXQgaXMgcmVhZCBieSBpdHNcclxuICogdmFsdWUuXHJcbiAqL1xyXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MSW5wdXRFbGVtZW50LFZhbHVlU3VwcG9ydCk7IiwiLyoqXHJcbiAqIEFkZHMgdmFsKCkgdG8gSFRNTFNlbGVjdEVsZW1lbnQuXHJcbiAqXHJcbiAqIFZhbHVlU3VwcG9ydCByZWFkcyBhIHNlbGVjdCBieSBpdHMgc2VsZWN0ZWQgb3B0aW9ucywgc28gdmFsKCkgZ2l2ZXMgYW4gYXJyYXkgb2ZcclxuICogdGhlaXIgdmFsdWVzIGFuZCB0YWtlcyBvbmUgdG8gc2VsZWN0IHRoZW0gYWdhaW4uXHJcbiAqL1xyXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MU2VsZWN0RWxlbWVudCxWYWx1ZVN1cHBvcnQpOyIsIi8qKlxyXG4gKiBBZGRzIHZhbCgpIHRvIEhUTUxUZXh0QXJlYUVsZW1lbnQuXHJcbiAqXHJcbiAqIEEgdGV4dGFyZWEgbWF0Y2hlcyBub25lIG9mIHRoZSBzcGVjaWFsIGlucHV0IHR5cGVzLCBzbyBWYWx1ZVN1cHBvcnQgZmFsbHMgYmFja1xyXG4gKiB0byByZWFkaW5nIGFuZCB3cml0aW5nIGl0cyB2YWx1ZSAtIGFuZCB0cmlnZ2VycyBhbiBpbnB1dCBldmVudCB3aGVuIGl0IGlzIHNldCxcclxuICogdGhlIHNhbWUgYXMgYW55IG90aGVyIGZpZWxkLlxyXG4gKi9cclxuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFRleHRBcmVhRWxlbWVudCwgVmFsdWVTdXBwb3J0KTtcclxuIiwiLyoqXG4gKiBCdWlsZHMgSFRNTENvbGxlY3Rpb24gYXMgYSBsaXN0IG9mIGh0bWwgZWxlbWVudHMuXG4gKlxuICogU2FtZSBhcyBOb2RlTGlzdCwgb25seSBob2xkaW5nIGh0bWwgZWxlbWVudHMgLSBhIGxpdmUgY29sbGVjdGlvbiBsaWtlIGNoaWxkcmVuXG4gKiB0aGVyZWZvcmUga2VlcHMgaXRzIHR5cGUgd2hlbiBpdCBpcyBmaWx0ZXJlZC5cbiAqL1xuaW1wb3J0IGJ1aWxkTGlzdFR5cGUgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0VHlwZUJ1aWxkZXJcIjtcblxuYnVpbGRMaXN0VHlwZShIVE1MQ29sbGVjdGlvbiwgSFRNTEVsZW1lbnQpO1xuIiwiLyoqXHJcbiAqIEFkZHMgZGF0YSBhbmQgY29udGVudCBmdW5jdGlvbnMgdG8gTm9kZS5cclxuICpcclxuICogTm9kZSBpcyB0aGUgY29tbW9uIGJhc2Ugb2YgZWxlbWVudHMsIHRleHQgbm9kZXMgYW5kIGZyYWdtZW50cywgc28gZGF0YSgpIGFuZFxyXG4gKiB0aGUgaW5zZXJ0IGZ1bmN0aW9ucyB3b3JrIG9uIGFsbCBvZiB0aGVtLCBub3Qgb25seSBvbiBlbGVtZW50cy5cclxuICovXHJcbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGF0YVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlLERhdGFTdXBwb3J0LE1hbmlwdWxhdGlvblN1cHBvcnQpOyIsIi8qKlxuICogQnVpbGRzIE5vZGVMaXN0IGFzIGEgbGlzdCBvZiBub2Rlcy5cbiAqXG4gKiBCZXNpZGVzIHRoZSBsaXN0IGZ1bmN0aW9ucyB0aGlzIGdpdmVzIGEgTm9kZUxpc3QgZXZlcnkgZnVuY3Rpb24gb2YgYSBub2RlLCBieVxuICogZGVsZWdhdGlvbiAtIGNhbGxpbmcgb25lIGFwcGxpZXMgaXQgdG8gZWFjaCBub2RlIGFuZCBjb2xsZWN0cyB0aGUgcmVzdWx0cy5cbiAqL1xuaW1wb3J0IGJ1aWxkTGlzdFR5cGUgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0VHlwZUJ1aWxkZXJcIjtcblxuYnVpbGRMaXN0VHlwZShOb2RlTGlzdCwgTm9kZSk7XG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJBdHRyaWJ1dGVTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHQvKipcclxuXHQgKiBHZXRzIG9yIHNldHMgYXR0cmlidXRlcyBvZiB0aGlzIGVsZW1lbnQuXHJcblx0ICpcclxuXHQgKiBhdHRyKCkgcmV0dXJucyBhbGwgYXR0cmlidXRlcyBhcyBhbiBvYmplY3QsIGF0dHIobmFtZSkgdGhlIHZhbHVlIG9mIGEgc2luZ2xlXHJcblx0ICogb25lLiBXaXRoIGEgc2Vjb25kIGFyZ3VtZW50IHRoZSBhdHRyaWJ1dGUgaXMgc2V0LCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkIGl0XHJcblx0ICogZ2V0cyByZW1vdmVkLlxyXG5cdCAqXHJcblx0ICogVmFsdWVzIGFyZSBzdHJpbmdpZmllZCBieSBzZXRBdHRyaWJ1dGUsIHNvIGF0dHIobmFtZSwgMCkgc2V0cyBcIjBcIi4gT25seSBudWxsXHJcblx0ICogYW5kIHVuZGVmaW5lZCByZW1vdmUgYW4gYXR0cmlidXRlIC0gMCwgZmFsc2UgYW5kIFwiXCIgYXJlIHJlZ3VsYXIgdmFsdWVzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IFthTmFtZV0gLSB0aGUgYXR0cmlidXRlIG5hbWVcclxuXHQgKiBAcGFyYW0geyp9IFthVmFsdWVdIC0gdGhlIG5ldyB2YWx1ZSwgbnVsbCBvciB1bmRlZmluZWQgcmVtb3ZlcyB0aGUgYXR0cmlidXRlXHJcblx0ICogQHJldHVybnMge09iamVjdDxzdHJpbmcsc3RyaW5nPnxzdHJpbmd8RWxlbWVudH0gYWxsIGF0dHJpYnV0ZXMsIHRoZSB2YWx1ZSBvZiB0aGUgcmVxdWVzdGVkIGF0dHJpYnV0ZSAobnVsbCB3aGVuIGl0IGRvZXMgbm90IGV4aXN0KSwgb3IgdGhpcyB3aGVuIGFuIGF0dHJpYnV0ZSB3YXMgc2V0IG9yIHJlbW92ZWRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuYXR0ciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0XHRcdHRoaXMuZ2V0QXR0cmlidXRlTmFtZXMoKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcblx0XHRcdFx0cmVzdWx0W25hbWVdID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzWzFdID09IG51bGwpIHRoaXMucmVtb3ZlQXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlIHRoaXMuc2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJEYXRhU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cclxuXHQvKipcclxuXHQgKiBSZWFkcyBhbGwgZGF0YS0gYXR0cmlidXRlcyBvZiBhIG5vZGUgaW50byBhIHBsYWluIG9iamVjdC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudFxyXG5cdCAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLHN0cmluZz59IHRoZSBkYXRhc2V0IG9mIHRoZSBub2RlLCBlbXB0eSB3aGVuIGl0IGhhcyBub25lXHJcblx0ICovXHJcblx0Y29uc3QgbG9hZERhdGEgPSAoZWxlbWVudCkgPT4ge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHt9O1xyXG5cdFx0aWYgKHR5cGVvZiBlbGVtZW50LmRhdGFzZXQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGZvciAoY29uc3QgbmFtZSBpbiBlbGVtZW50LmRhdGFzZXQpXHJcblx0XHRcdFx0ZGF0YVtuYW1lXSA9IGVsZW1lbnQuZGF0YXNldFtuYW1lXTtcclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0cyBvciBzZXRzIHRoZSBkYXRhIG9mIHRoaXMgbm9kZS5cclxuXHQgKlxyXG5cdCAqIFRoZSBmaXJzdCBjYWxsIHJlYWRzIHRoZSBkYXRhLSBhdHRyaWJ1dGVzIGludG8gYSBjYWNoZSwgd2hpY2ggaXMga2VwdCBvbiB0aGVcclxuXHQgKiBub2RlIGZyb20gdGhlbiBvbi4gVGhhdCBjYWNoZSBpcyBkZXRhY2hlZCBmcm9tIHRoZSBkb206IGxhdGVyIGF0dHJpYnV0ZVxyXG5cdCAqIGNoYW5nZXMgYXJlIG5vdCBzZWVuIGFuZCB3cml0dGVuIHZhbHVlcyBhcmUgbm90IHJlZmxlY3RlZCBiYWNrLiBkYXRhKHRydWUpXHJcblx0ICogcmVhZHMgdGhlIGF0dHJpYnV0ZXMgYWdhaW4uXHJcblx0ICpcclxuXHQgKiBSZWxvYWRpbmcgbWVyZ2VzLCBpdCBkb2VzIG5vdCBzeW5jIC0gYSB2YWx1ZSByZW1vdmVkIGZyb20gdGhlIGRvbSBzdGF5cyBpblxyXG5cdCAqIHRoZSBjYWNoZSwgYXMgaXQgY2FuIG5vdCBiZSB0b2xkIGFwYXJ0IGZyb20gYSB2YWx1ZSB0aGF0IG5ldmVyIGNhbWUgZnJvbSB0aGVcclxuXHQgKiBkb20uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSBbYU5hbWVdIC0gYSBuYW1lIHRvIHJlYWQgb3Igd3JpdGUsIG9yIGEgYm9vbGVhbiB0byByZWFkIGFsbCBkYXRhLCByZWxvYWRpbmcgdGhlIGF0dHJpYnV0ZXMgZmlyc3Qgd2hlbiB0cnVlXHJcblx0ICogQHBhcmFtIHsqfSBbYVZhbHVlXSAtIHRoZSBuZXcgdmFsdWUsIG51bGwgb3IgdW5kZWZpbmVkIHJlbW92ZXMgdGhlIG5hbWVcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0PHN0cmluZywqPnwqfE5vZGV9IGFsbCBkYXRhLCB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIG5hbWUsIG9yIHRoaXMgd2hlbiBhIHZhbHVlIHdhcyB3cml0dGVuXHJcblx0ICogQHRocm93cyB7RXJyb3J9IHdoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5laXRoZXIgYSBzdHJpbmcgbm9yIGEgYm9vbGVhblxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBkYXRhID0gbG9hZERhdGEodGhpcyk7XHJcblx0XHR0aGlzLmRhdGEgPSAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdGNvbnN0IGFyZzEgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdGNvbnN0IHR5cGUgPSB0eXBlb2YgYXJnMTtcclxuXHRcdFx0aWYodHlwZSA9PT0gXCJib29sZWFuXCIpe1xyXG5cdFx0XHRcdGlmKGFyZzEpXHJcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKGRhdGEsIGxvYWREYXRhKHRoaXMpKTtcclxuXHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYodHlwZSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJkYXRhKCkgZXhwZWN0cyBhIHN0cmluZyBvciBib29sZWFuIGFzIGZpcnN0IGFyZ3VtZW50IG9yIG5vIGFyZ3VtZW50cyBhdCBhbGxcIik7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRcdHJldHVybiBkYXRhW2FyZzFdO1xyXG5cdFx0XHRlbHNlIGlmIChhcmd1bWVudHNbMV0gPT0gbnVsbClcclxuXHRcdFx0XHRkZWxldGUgZGF0YVthcmd1bWVudHNbMF1dO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZGF0YVthcmd1bWVudHNbMF1dID0gYXJndW1lbnRzWzFdO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9KS5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmRhdGEuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBFVkVOVFNQTElURVIgPSAvXFxzKixcXHMqfFxccysvO1xyXG5jb25zdCBERUZBVUxUX09QVElPTlMgPSB7IGNhcHR1cmU6IGZhbHNlLCBvbmNlOiBmYWxzZSwgcGFzc2l2ZTogZmFsc2UsIHNpZ25hbDogdW5kZWZpbmVkIH07XHJcblxyXG4vKipcclxuICogRXZlcnl0aGluZyB0aGlzIGV4dGVuc2lvbiBrZWVwcyBwZXIgZWxlbWVudC4gQSBXZWFrTWFwIGhvbGRzIGl0IG91dHNpZGUgb2YgdGhlXHJcbiAqIGVsZW1lbnQsIHNvIG5vdGhpbmcgaXMgZXhwb3NlZCBvbiB0aGUgZG9tIGFuZCBpdCBpcyByZWxlYXNlZCB3aXRoIHRoZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBXcmFwcGVycyBhbmQgaGFuZGxlcyBhcmUgbWFwcGVkIGluIGJvdGggZGlyZWN0aW9uczogYSB3cmFwcGVyIG5lZWRzIHRvIGZpbmQgaXRzXHJcbiAqIHJlZ2lzdHJhdGlvbiB3aGlsZSBhbiBldmVudCBydW5zLCBhbmQgcmVtb3ZlT24gbmVlZHMgdG8gZmluZCBhbGwgd3JhcHBlcnMgb2YgYVxyXG4gKiBoYW5kbGUuIEhhbmRsZXMgYXJlIG1hcHBlZCB0byBhIHNldCBvZiB3cmFwcGVycywgbm90IHRvIGEgc2luZ2xlIG9uZSwgc28gdGhlXHJcbiAqIHNhbWUgaGFuZGxlIGNhbiBiZSByZWdpc3RlcmVkIGFueSBudW1iZXIgb2YgdGltZXMgd2l0aG91dCB0aGUgcmVnaXN0cmF0aW9uc1xyXG4gKiBvdmVyd3JpdGluZyBlYWNoIG90aGVyLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFbGVtZW50RGF0YVxyXG4gKiBAcHJvcGVydHkge01hcDxzdHJpbmcsbnVtYmVyPn0gZXZlbnRUcmlnZ2VyVGltZW91dHMgLSBydW5uaW5nIHRyaWdnZXIgdGltZW91dHMgYnkgZXZlbnQgdHlwZVxyXG4gKiBAcHJvcGVydHkge01hcDxGdW5jdGlvbixSZWdpc3RyYXRpb24+fSB3cmFwcGVySGFuZGxlTWFwIC0gcmVnaXN0cmF0aW9uIG9mIGVhY2ggd3JhcHBlclxyXG4gKiBAcHJvcGVydHkge01hcDxGdW5jdGlvbixTZXQ8RnVuY3Rpb24+Pn0gaGFuZGxlV3JhcHBlck1hcCAtIGFsbCB3cmFwcGVycyBvZiBhIGhhbmRsZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBPbmUgY2FsbCBvZiBvbigpLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWdpc3RyYXRpb25cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gaGFuZGxlIC0gdGhlIGZ1bmN0aW9uIGdpdmVuIHRvIG9uKClcclxuICogQHByb3BlcnR5IHtTZXQ8c3RyaW5nPn0gZXZlbnRzIC0gdGhlIGV2ZW50IHR5cGVzIHN0aWxsIHJlZ2lzdGVyZWQsIGxpc3RlbmVycyBnZXQgcmVtb3ZlZCBvbmUgYnkgb25lXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIG9wdGlvbnMgdGhlIGxpc3RlbmVyIHdhcyBhZGRlZCB3aXRoLCBuZWVkZWQgdG8gcmVtb3ZlIGl0IGFnYWluXHJcbiAqL1xyXG5cclxuY29uc3QgRUxFTUVOVERBVEEgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGVsZW1lbnRcclxuICogQHJldHVybnMge0VsZW1lbnREYXRhfSB0aGUgZGF0YSBvZiB0aGUgZWxlbWVudCwgY3JlYXRlZCBvbiBmaXJzdCBhY2Nlc3NcclxuICovXHJcbmNvbnN0IGdldEVsZW1lbnREYXRhID0gKGVsZW1lbnQpID0+IHtcclxuXHRpZiAoIUVMRU1FTlREQVRBLmhhcyhlbGVtZW50KSlcclxuXHRcdEVMRU1FTlREQVRBLnNldChlbGVtZW50LCB7XHJcblx0XHRcdGV2ZW50VHJpZ2dlclRpbWVvdXRzOiBuZXcgTWFwKCksXHJcblx0XHRcdHdyYXBwZXJIYW5kbGVNYXA6IG5ldyBNYXAoKSxcclxuXHRcdFx0aGFuZGxlV3JhcHBlck1hcDogbmV3IE1hcCgpXHJcblx0XHR9KTtcclxuXHJcblx0cmV0dXJuIEVMRU1FTlREQVRBLmdldChlbGVtZW50KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFdyYXBwZXJIYW5kbGVNYXAgPSAoZWxlbWVudCkgPT4ge1xyXG5cdHJldHVybiBnZXRFbGVtZW50RGF0YShlbGVtZW50KS53cmFwcGVySGFuZGxlTWFwO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SGFuZGxlV3JhcHBlck1hcCA9IChlbGVtZW50KSA9PiB7XHJcblx0cmV0dXJuIGdldEVsZW1lbnREYXRhKGVsZW1lbnQpLmhhbmRsZVdyYXBwZXJNYXA7XHJcbn07XHJcblxyXG5jb25zdCBnZXRUcmlnZ2VyVGltZW91dHMgPSAoZWxlbWVudCkgPT4ge1xyXG5cdHJldHVybiBnZXRFbGVtZW50RGF0YShlbGVtZW50KS5ldmVudFRyaWdnZXJUaW1lb3V0cztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgYSB3cmFwcGVyIGluIGJvdGggZGlyZWN0aW9ucy5cclxuICpcclxuICogQHBhcmFtIHtFdmVudFRhcmdldH0gYW5FbGVtZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFIYW5kbGUgLSB0aGUgZnVuY3Rpb24gZ2l2ZW4gdG8gb24oKVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhV3JhcHBlciAtIHRoZSBsaXN0ZW5lciBhY3R1YWxseSBhZGRlZCB0byB0aGUgZWxlbWVudFxyXG4gKiBAcGFyYW0ge0l0ZXJhYmxlPHN0cmluZz59IHRoZUV2ZW50c1xyXG4gKiBAcGFyYW0ge09iamVjdH0gdGhlT3B0aW9ucyAtIGtlcHQgdG8gcmVtb3ZlIHRoZSBsaXN0ZW5lciB3aXRoIHRoZSBzYW1lIG9wdGlvbnMgbGF0ZXJcclxuICogQHRocm93cyB7RXJyb3J9IHdoZW4gdGhlIHdyYXBwZXIgaXMgYWxyZWFkeSByZWdpc3RlcmVkLCB3aGljaCBjYW4gbm90IGhhcHBlbiBhcyBsb25nIGFzIG9uKCkgY3JlYXRlcyBhIG5ldyBvbmUgcGVyIGNhbGxcclxuICovXHJcbmNvbnN0IHJlZ2lzdHJhdGVIYW5kbGVXcmFwcGVyID0gKGFuRWxlbWVudCwgYUhhbmRsZSwgYVdyYXBwZXIsIHRoZUV2ZW50cywgdGhlT3B0aW9ucykgPT4ge1xyXG5cdGNvbnN0IHdyYXBwZXJIYW5kbGVNYXAgPSBnZXRXcmFwcGVySGFuZGxlTWFwKGFuRWxlbWVudCk7XHJcblx0aWYgKCF3cmFwcGVySGFuZGxlTWFwLmhhcyhhV3JhcHBlcikpIHdyYXBwZXJIYW5kbGVNYXAuc2V0KGFXcmFwcGVyLCB7IGhhbmRsZTogYUhhbmRsZSwgZXZlbnRzOiBuZXcgU2V0KHRoZUV2ZW50cyksIG9wdGlvbnM6IHRoZU9wdGlvbnMgfSk7XHJcblx0ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJXcmFwcGVyIGFscmVhZHkgcmVnaXN0ZXJlZCBmb3IgdGhpcyBlbGVtZW50IVwiKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlV3JhcHBlck1hcCA9IGdldEhhbmRsZVdyYXBwZXJNYXAoYW5FbGVtZW50KTtcclxuXHRsZXQgd3JhcHBlclNldCA9IGhhbmRsZVdyYXBwZXJNYXAuZ2V0KGFIYW5kbGUpO1xyXG5cdGlmICghd3JhcHBlclNldCkge1xyXG5cdFx0d3JhcHBlclNldCA9IG5ldyBTZXQoKTtcclxuXHRcdGhhbmRsZVdyYXBwZXJNYXAuc2V0KGFIYW5kbGUsIHdyYXBwZXJTZXQpO1xyXG5cdH1cdFxyXG5cdHdyYXBwZXJTZXQuYWRkKGFXcmFwcGVyKTtcdFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYSB3cmFwcGVyIGZyb20gc29tZSBvciBhbGwgb2YgaXRzIGV2ZW50cy5cclxuICpcclxuICogVGhlIHJlZ2lzdHJhdGlvbiBpcyBkcm9wcGVkIGZyb20gYm90aCBtYXBzIGFzIHNvb24gYXMgbm8gZXZlbnQgaXMgbGVmdCwgc28gYVxyXG4gKiB3cmFwcGVyIHRoYXQgc3RpbGwgbGlzdGVucyB0byBvdGhlciBldmVudHMgc3RheXMga25vd24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGFFbGVtZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFXcmFwcGVyXHJcbiAqIEBwYXJhbSB7SXRlcmFibGU8c3RyaW5nPn0gW3RoZUV2ZW50c10gLSB0aGUgZXZlbnRzIHRvIHJlbW92ZSwgYWxsIG9mIHRoZW0gd2hlbiBvbWl0dGVkXHJcbiAqL1xyXG5jb25zdCByZW1vdmVXcmFwcGVyID0gKGFFbGVtZW50LCBhV3JhcHBlciwgdGhlRXZlbnRzKSA9PiB7XHJcblx0Y29uc3Qgd3JhcHBlckhhbmRsZU1hcCA9IGdldFdyYXBwZXJIYW5kbGVNYXAoYUVsZW1lbnQpO1xyXG5cdGlmKCF3cmFwcGVySGFuZGxlTWFwLmhhcyhhV3JhcHBlcikpIHRocm93IG5ldyBFcnJvcihcIldyYXBwZXIgbm90IHJlZ2lzdGVyZWQgZm9yIHRoaXMgZWxlbWVudCFcIik7XHJcblx0Y29uc3QgeyBldmVudHMsIG9wdGlvbnMsIGhhbmRsZSB9ID0gd3JhcHBlckhhbmRsZU1hcC5nZXQoYVdyYXBwZXIpO1xyXG5cdGNvbnN0IHJlbW92ZWRFdmVudHMgPSB0aGVFdmVudHMgfHwgZXZlbnRzO1xyXG5cdGZvciAobGV0IGV2ZW50IG9mIHJlbW92ZWRFdmVudHMpIHtcclxuXHRcdGlmIChldmVudHMuaGFzKGV2ZW50KSkge1xyXG5cdFx0XHRldmVudHMuZGVsZXRlKGV2ZW50KTtcclxuXHRcdFx0YUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgYVdyYXBwZXIsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvL0NsZWFudXAgdGhlIHdyYXBwZXJIYW5kbGVNYXAgYW5kIGhhbmRsZVdyYXBwZXJNYXAgaWYgbm8gZXZlbnRzIGxlZnQgZm9yIHRoaXMgd3JhcHBlclxyXG5cdGlmIChldmVudHMuc2l6ZSA9PT0gMCl7XHJcblx0XHR3cmFwcGVySGFuZGxlTWFwLmRlbGV0ZShhV3JhcHBlcik7XHJcblx0XHRjb25zdCBoYW5kbGVXcmFwcGVyTWFwID0gZ2V0SGFuZGxlV3JhcHBlck1hcChhRWxlbWVudCk7XHJcblx0XHRjb25zdCB3cmFwcGVyU2V0ID0gaGFuZGxlV3JhcHBlck1hcC5nZXQoaGFuZGxlKTtcclxuXHRcdHdyYXBwZXJTZXQuZGVsZXRlKGFXcmFwcGVyKTtcclxuXHRcdGlmICh3cmFwcGVyU2V0LnNpemUgPT09IDApXHJcblx0XHRcdGhhbmRsZVdyYXBwZXJNYXAuZGVsZXRlKGhhbmRsZSk7XHJcblx0fVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxPYmplY3R9IFtvcHRpb25zXSAtIGEgYm9vbGVhbiBpcyB0YWtlbiBhcyBjYXB0dXJlLCBhbiBvYmplY3QgaXMgbWVyZ2VkIGludG8gdGhlIGRlZmF1bHRzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IGFsd2F5cyBhIG5ldyBvYmplY3QsIG5ldmVyIHRoZSBzaGFyZWQgZGVmYXVsdHNcclxuICovXHJcbmNvbnN0IHRvRXZlbnRPcHRpb25zID0gKG9wdGlvbnMpID0+IHtcclxuXHRpZiAob3B0aW9ucyA9PSBudWxsKSByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TKTtcclxuXHRlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJib29sZWFuXCIpIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIHsgY2FwdHVyZTogb3B0aW9ucyB9KTtcclxuXHRlbHNlIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE5vcm1hbGl6ZXMgZXZlbnQgdHlwZXMgdG8gYSBmbGF0IGxpc3QuXHJcbiAqXHJcbiAqIFR5cGVzIGFyZSBzZXBhcmF0ZWQgYnkgd2hpdGVzcGFjZXMsIGNvbW1hcyBvciBib3RoLCBpbiBhIHN0cmluZyBhcyB3ZWxsIGFzXHJcbiAqIHdpdGhpbiB0aGUgZW50cmllcyBvZiBhbiBhcnJheSAtIHNvIFtcImNsaWNrXCIsIFwiZm9jdXMgYmx1clwiXSBnaXZlcyB0aHJlZSB0eXBlcy5cclxuICpcclxuICogQSBzdHJpbmcgZ2V0cyB0cmltbWVkIGJlZm9yZSBpdCBpcyBzcGxpdCwgYmVjYXVzZSB0aGUgZW1wdHkgZW50cmllcyBhIGxlYWRpbmdcclxuICogb3IgdHJhaWxpbmcgc2VwYXJhdG9yIHByb2R1Y2VzIGFyZSBhcnRpZmFjdHMgb2Ygc3BsaXR0aW5nLCBub3Qgc29tZXRoaW5nIHRoZVxyXG4gKiBjYWxsZXIgYXNrZWQgZm9yLiBBbiBlbXB0eSBlbnRyeSBpbnNpZGUgYW4gYXJyYXkgaXMgdGhlIG9wcG9zaXRlIGNhc2U6IGl0IHdhc1xyXG4gKiB3cml0dGVuIGRvd24gYW5kIHRoZXJlZm9yZSB0aHJvd3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfEl0ZXJhYmxlPHN0cmluZz59IHRoZUV2ZW50c1xyXG4gKiBAcmV0dXJucyB7c3RyaW5nW119IHRoZSBldmVudCB0eXBlcywgbmV2ZXIgZW1wdHlcclxuICogQHRocm93cyB7RXJyb3J9IHdoZW4gbm8gdHlwZSBpcyBsZWZ0IG9yIGFuIGVudHJ5IGlzIG5vdCBhIG5vbiBlbXB0eSBzdHJpbmdcclxuICovXHJcbmNvbnN0IHRvRXZlbnRUeXBlcyA9ICh0aGVFdmVudHMpID0+IHtcclxuXHRpZih0aGVFdmVudHMgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiRXZlbnQgdHlwZXMgYXJlIHJlcXVpcmVkIVwiKTtcdFxyXG5cdFxyXG5cdGNvbnN0IGV2ZW50cyA9IHR5cGVvZiB0aGVFdmVudHMgPT09IFwic3RyaW5nXCIgPyB0aGVFdmVudHMudHJpbSgpLnNwbGl0KEVWRU5UU1BMSVRFUikgOiB0aGVFdmVudHM7XHJcblx0aWYgKHR5cGVvZiBldmVudHNbU3ltYm9sLml0ZXJhdG9yXSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGV2ZW50IHR5cGVzIVwiKTtcclxuXHRpZihldmVudHMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJFdmVudCB0eXBlcyBhcmUgcmVxdWlyZWQhXCIpO1xyXG5cclxuXHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcblx0Zm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XHJcblx0XHRpZiAodHlwZW9mIGV2ZW50ICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGV2ZW50IHR5cGVzIVwiKTtcclxuXHRcdGV2ZW50ID0gZXZlbnQudHJpbSgpO1xyXG5cdFx0aWYgKGV2ZW50Lmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBldmVudCB0eXBlcyFcIik7XHJcblx0XHRyZXN1bHQucHVzaCguLi5ldmVudC5zcGxpdChFVkVOVFNQTElURVIpKTtcclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkV2ZW50U3VwcG9ydFwiLCAoUHJvdG90eXBlKSA9PiB7XHJcblx0LyoqXHJcblx0ICogQWRkcyBhIGhhbmRsZSB0byBvbmUgb3IgbW9yZSBldmVudHMuXHJcblx0ICpcclxuXHQgKiBUaGUgaGFuZGxlIGlzIG5vdCBhZGRlZCBhcyBsaXN0ZW5lciBpdHNlbGYsIGl0IGdldHMgd3JhcHBlZC4gVGhhdCB3cmFwcGVyXHJcblx0ICogYXBwbGllcyB0aGUgc2VsZWN0b3IgYW5kIGhhbmRsZXMgdGhlIG9uY2Ugb3B0aW9uLCB3aGljaCBrZWVwcyByZW1vdmVPbiBhYmxlXHJcblx0ICogdG8gZmluZCBldmVyeSByZWdpc3RyYXRpb24gb2YgYSBoYW5kbGUuXHJcblx0ICpcclxuXHQgKiBXaXRoIGEgc2VsZWN0b3IgdGhlIGhhbmRsZSBpcyBvbmx5IGNhbGxlZCB3aGVuIHRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50XHJcblx0ICogbWF0Y2hlcyBpdC4gVG9nZXRoZXIgd2l0aCBvbmNlIHRoaXMgbmVlZHMgY2FyZTogdGhlIGJyb3dzZXIgY29uc3VtZXMgYSBvbmNlXHJcblx0ICogbGlzdGVuZXIgb24gdGhlIGZpcnN0IGV2ZW50LCBldmVuIHdoZW4gdGhlIHNlbGVjdG9yIGRpZCBub3QgbWF0Y2gsIHNvIHRoZVxyXG5cdCAqIHdyYXBwZXIgcmVnaXN0ZXJzIGl0c2VsZiBhZ2FpbiBpbiB0aGF0IGNhc2UgYW5kIHdhaXRzIGZvciBhIG1hdGNoaW5nIGV2ZW50LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8SXRlcmFibGU8c3RyaW5nPn0gdGhlRXZlbnRzIC0gZXZlbnQgdHlwZXMsIHNlcGFyYXRlZCBieSB3aGl0ZXNwYWNlcyBvciBjb21tYXNcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2FTZWxlY3Rvcl0gLSBvbmx5IGNhbGwgdGhlIGhhbmRsZSB3aGVuIHRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50IG1hdGNoZXNcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhSGFuZGxlIC0gY2FsbGVkIHdpdGggdGhlIGV2ZW50XHJcblx0ICogQHBhcmFtIHtib29sZWFufE9iamVjdH0gW3RoZU9wdGlvbnNdIC0gYSBib29sZWFuIGlzIHRha2VuIGFzIGNhcHR1cmUsIG90aGVyd2lzZSB0aGUgb3B0aW9ucyBvZiBhZGRFdmVudExpc3RlbmVyXHJcblx0ICogQHJldHVybnMge0V2ZW50VGFyZ2V0fSB0aGlzXHJcblx0ICogQHRocm93cyB7RXJyb3J9IGJ5IGxlc3MgdGhhbiB0d28gYXJndW1lbnRzIG9yIGludmFsaWQgZXZlbnQgdHlwZXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUub24gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHRocm93IG5ldyBFcnJvcihcIlRvbyBsZXNzIGFyZ3VtZW50cyFcIik7XHJcblxyXG5cdFx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGNvbnN0IGV2ZW50cyA9IHRvRXZlbnRUeXBlcyhhcmdzLnNoaWZ0KCkpO1xyXG5cdFx0Y29uc3QgZWxlbWVudFNlbGVjdG9yID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBhcmdzLnNoaWZ0KCkgOiBudWxsO1xyXG5cdFx0Y29uc3QgaGFuZGxlID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0Y29uc3Qgb3B0aW9uID0gdG9FdmVudE9wdGlvbnMoYXJncy5zaGlmdCgpKTtcclxuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzO1xyXG5cdFx0Y29uc3Qgd3JhcHBlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdGNvbnN0IHsgdGFyZ2V0LCB0eXBlIH0gPSBldmVudDtcclxuXHRcdFx0aWYgKGVsZW1lbnRTZWxlY3RvciAmJiB0eXBlb2YgdGFyZ2V0LmlzID09PSBcImZ1bmN0aW9uXCIgJiYgIXRhcmdldC5pcyhlbGVtZW50U2VsZWN0b3IpKSB7XHJcblx0XHRcdFx0aWYgKG9wdGlvbi5vbmNlKSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgd3JhcHBlciwgb3B0aW9uKTsgLy8gcmUtcmVnaXN0ZXIgdGhlIHdyYXBwZXIgZm9yIHRoZSBuZXh0IGV2ZW50XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChvcHRpb24ub25jZSkgcmVtb3ZlV3JhcHBlcihlbGVtZW50LCB3cmFwcGVyLCBbdHlwZV0pO1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGhhbmRsZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1x0XHRcdFx0XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZWdpc3RyYXRlSGFuZGxlV3JhcHBlcih0aGlzLCBoYW5kbGUsIHdyYXBwZXIsIGV2ZW50cywgb3B0aW9uKTtcclxuXHJcblx0XHRmb3IgKGxldCBldmVudCBvZiBldmVudHMpIHtcclxuXHRcdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCB3cmFwcGVyLCBvcHRpb24pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbW92ZXMgYSBoYW5kbGUgZnJvbSBzb21lIG9yIGFsbCBvZiBpdHMgZXZlbnRzLlxyXG5cdCAqXHJcblx0ICogQSBoYW5kbGUgcmVnaXN0ZXJlZCBieSBzZXZlcmFsIGNhbGxzIG9mIG9uKCkgaXMgcmVtb3ZlZCBmcm9tIGFsbCBvZiB0aGVtLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gYUhhbmRsZSAtIHRoZSBmdW5jdGlvbiBnaXZlbiB0byBvbigpXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8SXRlcmFibGU8c3RyaW5nPn0gW3RoZUV2ZW50c10gLSB0aGUgZXZlbnRzIHRvIHJlbW92ZSwgYWxsIG9mIHRoZW0gd2hlbiBvbWl0dGVkXHJcblx0ICogQHJldHVybnMge0V2ZW50VGFyZ2V0fSB0aGlzXHJcblx0ICogQHRocm93cyB7RXJyb3J9IGJ5IGludmFsaWQgZXZlbnQgdHlwZXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUucmVtb3ZlT24gPSBmdW5jdGlvbiAoYUhhbmRsZSwgdGhlRXZlbnRzKSB7XHJcblx0XHRjb25zdCBldmVudHMgPSB0aGVFdmVudHMgPyB0b0V2ZW50VHlwZXModGhlRXZlbnRzKSA6IG51bGw7XHJcblx0XHRjb25zdCBoYW5kbGVXcmFwcGVyTWFwID0gZ2V0SGFuZGxlV3JhcHBlck1hcCh0aGlzKTtcclxuXHRcdGNvbnN0IHdyYXBwZXJTZXQgPSBoYW5kbGVXcmFwcGVyTWFwLmdldChhSGFuZGxlKTtcdFxyXG5cdFx0aWYgKHdyYXBwZXJTZXQpIHtcclxuXHRcdFx0Zm9yIChsZXQgd3JhcHBlciBvZiB3cmFwcGVyU2V0KVxyXG5cdFx0XHRcdHJlbW92ZVdyYXBwZXIodGhpcywgd3JhcHBlciwgZXZlbnRzKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBEaXNwYXRjaGVzIGEgYnViYmxpbmcsIGNhbmNlbGFibGUgYW5kIGNvbXBvc2VkIEN1c3RvbUV2ZW50LlxyXG5cdCAqXHJcblx0ICogQSBsZWFkaW5nIG51bWJlciBkZWxheXMgdGhlIGV2ZW50IGJ5IHRoYXQgbWFueSBtaWxsaXNlY29uZHMgYW5kIHJlcGxhY2VzIGFcclxuXHQgKiBkZWxheWVkIGV2ZW50IG9mIHRoZSBzYW1lIHR5cGUgdGhhdCBpcyBzdGlsbCBwZW5kaW5nLCBzbyBhIHJlcGVhdGVkbHlcclxuXHQgKiB0cmlnZ2VyZWQgZXZlbnQgaXMgZGlzcGF0Y2hlZCBvbmNlIGFmdGVyIHRoaW5ncyBjYW1lIHRvIHJlc3QuXHJcblx0ICpcclxuXHQgKiBPbmUgZGF0YSBhcmd1bWVudCBiZWNvbWVzIGV2ZW50LmRldGFpbCBhcyBpdCBpcywgc2V2ZXJhbCBiZWNvbWUgYW4gYXJyYXkgb2ZcclxuXHQgKiB0aGVtLiBBIGxlYWRpbmcgRXZlbnQgaXMgdGFrZW4gYXMgdGhlIGV2ZW50IHRoaXMgb25lIGlzIGRlbGVnYXRlZCBmcm9tIGFuZFxyXG5cdCAqIGlzIGF2YWlsYWJsZSBhcyBldmVudC5kZWxlZ2F0ZWRFdmVudC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbYVRpbWVvdXRdIC0gbWlsbGlzZWNvbmRzIHRvIGRlbGF5IHRoZSBldmVudFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhVHlwZSAtIHRoZSBldmVudCB0eXBlXHJcblx0ICogQHBhcmFtIHtFdmVudH0gW2FEZWxlZ2F0ZWRFdmVudF0gLSB0aGUgZXZlbnQgdGhpcyBvbmUgaXMgdHJpZ2dlcmVkIGZvclxyXG5cdCAqIEBwYXJhbSB7Li4uKn0gW3RoZURhdGFdIC0gYmVjb21lcyBldmVudC5kZXRhaWxcclxuXHQgKiBAcmV0dXJucyB7RXZlbnRUYXJnZXR9IHRoaXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRjb25zdCB0aW1lb3V0ID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwibnVtYmVyXCIgPyBhcmdzLnNoaWZ0KCkgOiAtMTtcclxuXHRcdGlmICh0aW1lb3V0ID49IDApIHtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IGFyZ3NbMF07XHJcblx0XHRcdGNvbnN0IHRpbWVvdXRzID0gZ2V0VHJpZ2dlclRpbWVvdXRzKHRoaXMpO1xyXG5cdFx0XHRjb25zdCB0aW1lb3V0aWQgPSB0aW1lb3V0cy5nZXQodHlwZSk7XHJcblx0XHRcdGlmICh0aW1lb3V0aWQpIGNsZWFyVGltZW91dCh0aW1lb3V0aWQpO1xyXG5cclxuXHRcdFx0dGltZW91dHMuc2V0KHR5cGUsIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRpbWVvdXRzLmRlbGV0ZSh0eXBlKTtcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIuYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHRcdH0sIHRpbWVvdXQpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHR5cGUgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdGNvbnN0IGRlbGVnYXRlID0gYXJnc1swXSBpbnN0YW5jZW9mIEV2ZW50ID8gYXJncy5zaGlmdCgpIDogbnVsbDtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IGFyZ3MubGVuZ3RoID49IDEgPyAoYXJncy5sZW5ndGggPT0gMSA/IGFyZ3Muc2hpZnQoKSA6IGFyZ3MpIDogZGVsZWdhdGU7XHJcblx0XHRcdGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgY29tcG9zZWQ6IHRydWUsIGRldGFpbDogZGF0YSB9KTtcclxuXHJcblx0XHRcdGlmIChkZWxlZ2F0ZSkgZXZlbnQuZGVsZWdhdGVkRXZlbnQgPSBkZWxlZ2F0ZTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBDTEFTU1NQTElURVIgPSAvXFxzKy87XHJcblxyXG4vKipcclxuICogTm9ybWFsaXplcyBjbGFzcyBuYW1lcyB0byBhIGZsYXQgbGlzdC5cclxuICpcclxuICogTmFtZXMgYXJlIHNlcGFyYXRlZCBieSB3aGl0ZXNwYWNlcywgaW4gYSBzdHJpbmcgYXMgd2VsbCBhcyB3aXRoaW4gdGhlIGVudHJpZXNcclxuICogb2YgYW4gYXJyYXkgLSBzbyBbXCJhXCIsIFwiYiBjXCJdIGdpdmVzIHRocmVlIG5hbWVzLlxyXG4gKlxyXG4gKiBBIHN0cmluZyBnZXRzIHRyaW1tZWQgYmVmb3JlIGl0IGlzIHNwbGl0LCBiZWNhdXNlIHRoZSBlbXB0eSBlbnRyaWVzIGEgbGVhZGluZ1xyXG4gKiBvciB0cmFpbGluZyB3aGl0ZXNwYWNlIHByb2R1Y2VzIGFyZSBhcnRpZmFjdHMgb2Ygc3BsaXR0aW5nLiBBbiBlbXB0eSBlbnRyeVxyXG4gKiB3cml0dGVuIGRvd24gYnkgdGhlIGNhbGxlciB0aHJvd3MgaW5zdGVhZCwgYXMgZG9lcyBhbnl0aGluZyB0aGF0IGlzIG5vdCBhXHJcbiAqIHN0cmluZyAtIGNsYXNzTGlzdCB3b3VsZCBvbmx5IHJlcG9ydCB0aG9zZSBhcyBhbiB1bnVzYWJsZSB0b2tlbiwgb3Igc2lsZW50bHlcclxuICogdGFrZSBhIGJvb2xlYW4gYXMgYSBjbGFzcyBuYW1lZCBcInRydWVcIi5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHRoZUNsYXNzZXNcclxuICogQHJldHVybnMge0l0ZXJhYmxlPHN0cmluZz59IHRoZSBjbGFzcyBuYW1lcywgbmV2ZXIgZW1wdHlcclxuICogQHRocm93cyB7RXJyb3J9IHdoZW4gbm8gbmFtZSBpcyBsZWZ0IG9yIGFuIGVudHJ5IGlzIG5vdCBhIG5vbiBlbXB0eSBzdHJpbmdcclxuICovXHJcbmNvbnN0IHRvQ2xhc3NOYW1lcyA9ICh0aGVDbGFzc2VzKSA9PiB7XHJcblx0aWYgKHRoZUNsYXNzZXMgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiQ2xhc3MgbmFtZXMgYXJlIHJlcXVpcmVkIVwiKTtcclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IHR5cGVvZiB0aGVDbGFzc2VzID09PSBcInN0cmluZ1wiID8gdGhlQ2xhc3Nlcy50cmltKCkuc3BsaXQoQ0xBU1NTUExJVEVSKSA6IHRoZUNsYXNzZXM7XHJcblx0aWYgKHR5cGVvZiBjbGFzc2VzW1N5bWJvbC5pdGVyYXRvcl0gIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjbGFzcyBuYW1lcyFcIik7XHJcblx0aWYgKGNsYXNzZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDbGFzcyBuYW1lcyBhcmUgcmVxdWlyZWQhXCIpO1xyXG5cclxuXHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHRmb3IgKGxldCBjbGF6eiBvZiBjbGFzc2VzKSB7XHJcblx0XHRpZiAodHlwZW9mIGNsYXp6ICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNsYXNzIG5hbWVzIVwiKTtcclxuXHRcdGNsYXp6ID0gY2xhenoudHJpbSgpO1xyXG5cdFx0aWYgKGNsYXp6Lmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjbGFzcyBuYW1lcyFcIik7XHJcblx0XHRyZXN1bHQucHVzaCguLi5jbGF6ei5zcGxpdChDTEFTU1NQTElURVIpKTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBCdWlsZHMgYSBjbGFzcyBmdW5jdGlvbiwgYXMgYWRkLCByZW1vdmUgYW5kIHRvZ2dsZSBvbmx5IGRpZmZlciBieSB0aGUgbWV0aG9kXHJcbiAqIHRoZXkgY2FsbCBvbiB0aGUgY2xhc3NMaXN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYU5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgY2xhc3NMaXN0IG1ldGhvZFxyXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oLi4uKHN0cmluZ3xzdHJpbmdbXSkpOkVsZW1lbnR9IGEgZnVuY3Rpb24gdGFraW5nIGFueSBtaXggb2YgbmFtZXMsIGxpc3RzIG9mIG5hbWVzIGFuZCBhcnJheXMgb2YgYm90aFxyXG4gKi9cclxuY29uc3QgY2xhc3NMaXN0RnVuY3Rpb24gPSAoYU5hbWUpID0+XHJcblx0ZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgY2xhc3NlcyA9IHRvQ2xhc3NOYW1lcyhBcnJheS5mcm9tKGFyZ3VtZW50cykuZmxhdCgpKTtcclxuXHRcdGNsYXNzZXMuZm9yRWFjaCgoY2xhenopID0+IHRoaXMuY2xhc3NMaXN0W2FOYW1lXShjbGF6eikpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJIdG1sQ2xhc3NTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHQvKipcclxuXHQgKiBBZGRzIGNsYXNzIG5hbWVzIHRvIHRoaXMgZWxlbWVudC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uKHN0cmluZ3xzdHJpbmdbXSl9IHRoZUNsYXNzZXMgLSBuYW1lcywgd2hpdGVzcGFjZSBzZXBhcmF0ZWQgbGlzdHMgb2YgbmFtZXMsIG9yIGFycmF5cyBvZiBib3RoXHJcblx0ICogQHJldHVybnMge0VsZW1lbnR9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgaW52YWxpZCBjbGFzcyBuYW1lc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5hZGRDbGFzcyA9IGNsYXNzTGlzdEZ1bmN0aW9uKFwiYWRkXCIpO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZW1vdmVzIGNsYXNzIG5hbWVzIGZyb20gdGhpcyBlbGVtZW50LiBOYW1lcyBub3QgcHJlc2VudCBhcmUgaWdub3JlZC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uKHN0cmluZ3xzdHJpbmdbXSl9IHRoZUNsYXNzZXMgLSBuYW1lcywgd2hpdGVzcGFjZSBzZXBhcmF0ZWQgbGlzdHMgb2YgbmFtZXMsIG9yIGFycmF5cyBvZiBib3RoXHJcblx0ICogQHJldHVybnMge0VsZW1lbnR9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgaW52YWxpZCBjbGFzcyBuYW1lc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGNsYXNzTGlzdEZ1bmN0aW9uKFwicmVtb3ZlXCIpO1xyXG5cclxuXHQvKipcclxuXHQgKiBUb2dnbGVzIGNsYXNzIG5hbWVzIG9mIHRoaXMgZWxlbWVudCwgZWFjaCBvbmUgb24gaXRzIG93bi5cclxuXHQgKlxyXG5cdCAqIFRoZSBmb3JjZSBwYXJhbWV0ZXIgb2YgY2xhc3NMaXN0LnRvZ2dsZSBpcyBub3Qgc3VwcG9ydGVkIC0gYSBib29sZWFuIGlzIG5vdFxyXG5cdCAqIGEgY2xhc3MgbmFtZSBhbmQgdGhlcmVmb3JlIHRocm93cy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uKHN0cmluZ3xzdHJpbmdbXSl9IHRoZUNsYXNzZXMgLSBuYW1lcywgd2hpdGVzcGFjZSBzZXBhcmF0ZWQgbGlzdHMgb2YgbmFtZXMsIG9yIGFycmF5cyBvZiBib3RoXHJcblx0ICogQHJldHVybnMge0VsZW1lbnR9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgaW52YWxpZCBjbGFzcyBuYW1lc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGNsYXNzTGlzdEZ1bmN0aW9uKFwidG9nZ2xlXCIpO1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG4vKipcclxuICogQnVpbGRzIGEgbGlzdCBmdW5jdGlvbiBieSBkZWxlZ2F0aW5nIHRvIHRoZSBhcnJheSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBuYW1lLlxyXG4gKlxyXG4gKiBUaGUgbGlzdCBpcyBjb3BpZWQgaW50byBhbiBhcnJheSBmaXJzdC4gVGhhdCBjb3B5IGlzIHdoYXQgbWFrZXMgdGhlc2UgZnVuY3Rpb25zXHJcbiAqIHNhZmUgb24gYSBsaXZlIEhUTUxDb2xsZWN0aW9uOiBub2RlcyBtYXkgYmUgbW92ZWQgb3IgcmVtb3ZlZCB3aGlsZSBpdGVyYXRpbmcsXHJcbiAqIHdpdGhvdXQgdGhlIGl0ZXJhdGlvbiBza2lwcGluZyB0aGUgZW50cmllcyB0aGF0IHNoaWZ0IGludG8gdGhlaXIgcGxhY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhTmFtZSAtIHRoZSBuYW1lIG9mIHRoZSBhcnJheSBmdW5jdGlvblxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IGEgZnVuY3Rpb24gYmVoYXZpbmcgbGlrZSB0aGUgYXJyYXkgZnVuY3Rpb24gb2YgdGhhdCBuYW1lXHJcbiAqL1xyXG5jb25zdCBhcnJheUZ1bmN0aW9uID0gKGFOYW1lKSA9PlxyXG5cdGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGVbYU5hbWVdLmFwcGx5KEFycmF5LmZyb20odGhpcyksIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkxpc3RTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHQvKipcclxuXHQgKiBAcGFyYW0geyp9IGFOb2RlIC0gdGhlIG5vZGUgdG8gbG9vayBmb3JcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gW2FTdGFydF0gLSB0aGUgaW5kZXggdG8gc3RhcnQgYXRcclxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgaW5kZXggb2YgdGhlIG5vZGUsIG9yIC0xXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmluZGV4T2YgPSBhcnJheUZ1bmN0aW9uKFwiaW5kZXhPZlwiKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHsqfSBhTm9kZSAtIHRoZSBub2RlIHRvIGxvb2sgZm9yXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IFthU3RhcnRdIC0gdGhlIGluZGV4IHRvIHN0YXJ0IGF0XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIGxpc3QgY29udGFpbnMgdGhlIG5vZGVcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuaW5jbHVkZXMgPSBhcnJheUZ1bmN0aW9uKFwiaW5jbHVkZXNcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGxzIHRoZSBmdW5jdGlvbiBmb3IgZWFjaCBub2RlLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtmdW5jdGlvbihOb2RlLG51bWJlcixOb2RlW10pOnZvaWR9IGFGdW5jdGlvbiAtIGNhbGxlZCB3aXRoIG5vZGUsIGluZGV4IGFuZCB0aGUgY29waWVkIGxpc3RcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuZm9yRWFjaCA9IGFycmF5RnVuY3Rpb24oXCJmb3JFYWNoXCIpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9uKE5vZGUsbnVtYmVyLE5vZGVbXSk6Kn0gYUZ1bmN0aW9uXHJcblx0ICogQHJldHVybnMge0FycmF5fSB0aGUgcmVzdWx0cywgYW4gYXJyYXkgYXMgdGhlIHJlc3VsdHMgYXJlIG5vdCBub2RlcyBhbnltb3JlXHJcblx0ICovXHJcblx0UHJvdG90eXBlLm1hcCA9IGFycmF5RnVuY3Rpb24oXCJtYXBcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24oTm9kZSxudW1iZXIsTm9kZVtdKTpib29sZWFufSBhRnVuY3Rpb25cclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgZnVuY3Rpb24gbWF0Y2hlcyBhdCBsZWFzdCBvbmUgbm9kZVxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5zb21lID0gYXJyYXlGdW5jdGlvbihcInNvbWVcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24oTm9kZSxudW1iZXIsTm9kZVtdKTpib29sZWFufSBhRnVuY3Rpb25cclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgZnVuY3Rpb24gbWF0Y2hlcyBldmVyeSBub2RlXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmV2ZXJ5ID0gYXJyYXlGdW5jdGlvbihcImV2ZXJ5XCIpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9uKCosTm9kZSxudW1iZXIsTm9kZVtdKToqfSBhRnVuY3Rpb25cclxuXHQgKiBAcGFyYW0geyp9IFthSW5pdGlhbFZhbHVlXVxyXG5cdCAqIEByZXR1cm5zIHsqfSB0aGUgYWNjdW11bGF0ZWQgcmVzdWx0XHJcblx0ICovXHJcblx0UHJvdG90eXBlLnJlZHVjZSA9IGFycmF5RnVuY3Rpb24oXCJyZWR1Y2VcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZpbHRlcnMgdGhlIGxpc3QuXHJcblx0ICpcclxuXHQgKiBVbmxpa2UgbWFwIHRoaXMga2VlcHMgdGhlIHR5cGUgb2YgdGhlIGxpc3QgLSBhIE5vZGVMaXN0IHJldHVybnMgYSBOb2RlTGlzdCwgYVxyXG5cdCAqIEhUTUxDb2xsZWN0aW9uIHJldHVybnMgYSBIVE1MQ29sbGVjdGlvbiAtIHNvIGEgZmlsdGVyZWQgbGlzdCBjYW4gYmUgdXNlZCBsaWtlXHJcblx0ICogYW55IG90aGVyIG9uZS4gVGhlIHJlc3VsdCBpcyBhIG5ldyBsaXN0LCBpdCBpcyBub3QgbGl2ZSBhbnltb3JlLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtmdW5jdGlvbihOb2RlLG51bWJlcixOb2RlW10pOmJvb2xlYW59IGFGdW5jdGlvblxyXG5cdCAqIEByZXR1cm5zIHtOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbn0gdGhlIG1hdGNoaW5nIG5vZGVzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuYXBwbHkoQXJyYXkuZnJvbSh0aGlzKSwgYXJndW1lbnRzKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5mcm9tKHJlc3VsdCk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHJldHVybnMge05vZGV8dW5kZWZpbmVkfSB0aGUgZmlyc3Qgbm9kZSwgb3IgdW5kZWZpbmVkIHdoZW4gdGhlIGxpc3QgaXMgZW1wdHlcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGhpcy5sZW5ndGggPiAwKSByZXR1cm4gdGhpc1swXTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcmV0dXJucyB7Tm9kZXx1bmRlZmluZWR9IHRoZSBsYXN0IG5vZGUsIG9yIHVuZGVmaW5lZCB3aGVuIHRoZSBsaXN0IGlzIGVtcHR5XHJcblx0ICovXHJcblx0UHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGhpcy5sZW5ndGggPiAwKSByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xuaW1wb3J0IERlbGVnYXRlckJ1aWxkZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0RlbGVnYXRlckJ1aWxkZXJcIjtcbmltcG9ydCBMaXN0U3VwcG9ydCBmcm9tIFwiLi9MaXN0U3VwcG9ydFwiO1xuXG4vKipcbiAqIFNldHMgdXAgYSBkb20gbGlzdCB0eXBlIC0gTm9kZUxpc3Qgb3IgSFRNTENvbGxlY3Rpb24gLSB0aGUgc2FtZSB3YXkuXG4gKlxuICogVGhlIHR3byBvbmx5IGRpZmZlciBieSB0aGVpciBvd24gdHlwZSBhbmQgdGhlIGVsZW1lbnQgdHlwZSB0aGV5IGhvbGQsIHNvIHRoaXNcbiAqIGJ1aWxkcyBib3RoIGZyb20gdGhvc2UgdHdvIHBhcmFtZXRlcnM6IGl0IGFwcGxpZXMgTGlzdFN1cHBvcnQsIGFkZHMgYXBwbHlUbyxcbiAqIHZhbCBhbmQgdGhlIHN0YXRpYyBmcm9tLCBhbmQgd2lyZXMgdGhlIGRlbGVnYXRpb24gdGhhdCBsZXRzIGEgbGlzdCBmb3J3YXJkXG4gKiBldmVyeSBtZXRob2Qgb2YgaXRzIGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IExpc3RUeXBlIC0gdGhlIGxpc3QgdHlwZSwgTm9kZUxpc3Qgb3IgSFRNTENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IEVsZW1lbnRUeXBlIC0gdGhlIHR5cGUgb2YgdGhlIGl0ZW1zLCBOb2RlIG9yIEhUTUxFbGVtZW50XG4gKi9cbmNvbnN0IGJ1aWxkTGlzdFR5cGUgPSAoTGlzdFR5cGUsIEVsZW1lbnRUeXBlKSA9PiB7XG5cdGV4dGVuZFByb3RvdHlwZShMaXN0VHlwZSwgTGlzdFN1cHBvcnQpO1xuXG5cdC8qKlxuXHQgKiBBcHBsaWVzIGEgZnVuY3Rpb24gb3IgYSBtZXRob2QgdG8gZWFjaCBpdGVtIGFuZCBjb2xsZWN0cyB0aGUgcmVzdWx0cy5cblx0ICpcblx0ICogQSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgaXRlbSBmb2xsb3dlZCBieSB0aGUgZXh0cmEgYXJndW1lbnRzLiBBIHN0cmluZ1xuXHQgKiBpcyB0YWtlbiBhcyB0aGUgbmFtZSBvZiBhIG1ldGhvZCB0byBjYWxsIG9uIGVhY2ggaXRlbSB3aXRoIHRob3NlIGFyZ3VtZW50cy5cblx0ICogTnVsbCByZXN1bHRzIGFyZSBza2lwcGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufHN0cmluZ30gY2FsbGluZyAtIGEgZnVuY3Rpb24gdG8gY2FsbCwgb3IgdGhlIG5hbWUgb2YgYSBtZXRob2Rcblx0ICogQHBhcmFtIHsuLi4qfSB0aGVBcmd1bWVudHMgLSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uIG9yIG1ldGhvZFxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBjb2xsZWN0ZWQgcmVzdWx0c1xuXHQgKi9cblx0TGlzdFR5cGUucHJvdG90eXBlLmFwcGx5VG8gPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcblx0XHRjb25zdCBjYWxsaW5nID0gYXJncy5zaGlmdCgpO1xuXHRcdGNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGluZyA9PT0gXCJmdW5jdGlvblwiO1xuXHRcdGNvbnN0IHJlc3VsdHMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5vZGUgPSB0aGlzW2ldO1xuXHRcdFx0bGV0IHJlc3VsdDtcblx0XHRcdGlmIChpc0Z1bmN0aW9uKSByZXN1bHQgPSBjYWxsaW5nLmFwcGx5KG51bGwsIFtub2RlXS5jb25jYXQoYXJncykpO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIG5vZGVbY2FsbGluZ10gPT09IFwiZnVuY3Rpb25cIikgcmVzdWx0ID0gbm9kZVtjYWxsaW5nXS5hcHBseShub2RlLCBhcmdzKTtcblxuXHRcdFx0aWYgKHJlc3VsdCAhPSBudWxsKSByZXN1bHRzLnB1c2gocmVzdWx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fTtcblxuXHQvKipcblx0ICogUmVhZHMgb3Igd3JpdGVzIHRoZSB2YWx1ZSBvZiB0aGUgaXRlbXMuXG5cdCAqXG5cdCAqIFdpdGhvdXQgYXJndW1lbnRzIHRoZSB2YWx1ZXMgYXJlIGNvbGxlY3RlZCBpbnRvIGEgTWFwLCBrZXllZCBieSB0aGUgbmFtZSwgaWRcblx0ICogb3Igc2VsZWN0b3Igb2YgZWFjaCBpdGVtIC0gaXRlbXMgd2l0aG91dCBhIHZhbHVlIGFyZSBsZWZ0IG91dCwgc28gYW4gdW5jaGVja2VkXG5cdCAqIHJhZGlvIGRvZXMgbm90IG92ZXJ3cml0ZSB0aGUgc2VsZWN0ZWQgb25lIG9mIGl0cyBncm91cC4gV2l0aCBhcmd1bWVudHMgdGhlXG5cdCAqIHZhbHVlIGlzIHNldCBvbiBldmVyeSBpdGVtLlxuXHQgKlxuXHQgKiBAcGFyYW0gey4uLip9IFt0aGVWYWx1ZV0gLSB0aGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBpdGVtc1xuXHQgKiBAcmV0dXJucyB7TWFwPHN0cmluZywqPnxMaXN0VHlwZX0gdGhlIHZhbHVlcyBieSBrZXksIG9yIHRoaXMgd2hlbiBhIHZhbHVlIHdhcyBzZXRcblx0ICovXG5cdExpc3RUeXBlLnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gbmV3IE1hcCgpO1xuXHRcdFx0Zm9yIChjb25zdCBub2RlIG9mIHRoaXMpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBub2RlLnZhbCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBub2RlLnZhbCgpO1xuXHRcdFx0XHRcdGlmICh2YWx1ZSAhPSBudWxsKSByZXN1bHQuc2V0KG5vZGUubmFtZSB8fCBub2RlLmlkIHx8IG5vZGUuc2VsZWN0b3IoKSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0gZWxzZSB0aGlzLmFwcGx5VG8oXCJ2YWxcIiwgLi4uYXJndW1lbnRzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBCdWlsZHMgYSBsaXN0IGZyb20gbm9kZXMsIG90aGVyIGxpc3RzIGFuZCBhcnJheXMgb2YgdGhlbS5cblx0ICpcblx0ICogRXZlcnkgYXJndW1lbnQgdGhhdCBpcyBhbiBpdGVtIGlzIHRha2VuLCBhbiBpdGVyYWJsZSBpcyByZWFkIGl0ZW0gYnkgaXRlbSwgc29cblx0ICogYW55IG1peCBjYW4gYmUgcGFzc2VkLiBBbnl0aGluZyB0aGF0IGlzIG5vdCBhbiBpdGVtIGlzIGxlZnQgb3V0LiBUaGUgcmVzdWx0IGlzXG5cdCAqIGEgcGxhaW4gbGlzdCwgbm90IGEgbGl2ZSBvbmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Li4uKEVsZW1lbnRUeXBlfEl0ZXJhYmxlKX0gdGhlSXRlbXNcblx0ICogQHJldHVybnMge0xpc3RUeXBlfSBhIG5ldyBsaXN0IG9mIHRoZSBpdGVtc1xuXHQgKi9cblx0TGlzdFR5cGUuZnJvbSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xuXHRcdGNvbnN0IGRhdGEgPSB7fTtcblx0XHRsZXQgY291bnRlciA9IDA7XG5cblx0XHR3aGlsZSAoYXJncy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBhcmcgPSBhcmdzLnNoaWZ0KCk7XG5cdFx0XHRpZiAoYXJnICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKGFyZyBpbnN0YW5jZW9mIEVsZW1lbnRUeXBlKSBkYXRhW2NvdW50ZXIrK10gPSB7IHZhbHVlOiBhcmcsIGVudW1lcmFibGU6IHRydWUgfTtcblx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ1tTeW1ib2wuaXRlcmF0b3JdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpdGVtIG9mIGFyZykge1xuXHRcdFx0XHRcdFx0aWYgKGl0ZW0gaW5zdGFuY2VvZiBFbGVtZW50VHlwZSkgZGF0YVtjb3VudGVyKytdID0geyB2YWx1ZTogaXRlbSwgZW51bWVyYWJsZTogdHJ1ZSB9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGRhdGEubGVuZ3RoID0geyB2YWx1ZTogY291bnRlciB9O1xuXHRcdHJldHVybiBPYmplY3QuY3JlYXRlKExpc3RUeXBlLnByb3RvdHlwZSwgZGF0YSk7XG5cdH07XG5cblx0RGVsZWdhdGVyQnVpbGRlcihcblx0XHRmdW5jdGlvbiAoYUZ1bmN0aW9uTmFtZSwgdGhlQXJndW1lbnRzKSB7XG5cdFx0XHRsZXQgcmVzdWx0cyA9IFtdO1xuXHRcdFx0dGhpcy5mb3JFYWNoKChub2RlKSA9PiB7XG5cdFx0XHRcdGlmIChub2RlICYmIHR5cGVvZiBub2RlW2FGdW5jdGlvbk5hbWVdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBub2RlW2FGdW5jdGlvbk5hbWVdLmFwcGx5KG5vZGUsIHRoZUFyZ3VtZW50cyk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTGlzdFR5cGUpIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChBcnJheS5mcm9tKHJlc3VsdCkpO1xuXHRcdFx0XHRcdFx0ZWxzZSByZXN1bHRzLnB1c2gocmVzdWx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRlbHNlIGlmIChyZXN1bHRzWzBdIGluc3RhbmNlb2YgRWxlbWVudFR5cGUgfHwgcmVzdWx0c1swXSBpbnN0YW5jZW9mIExpc3RUeXBlKSByZXR1cm4gTGlzdFR5cGUuZnJvbShyZXN1bHRzKTtcblx0XHRcdGVsc2UgcmV0dXJuIHJlc3VsdHM7XG5cdFx0fSxcblx0XHRMaXN0VHlwZS5wcm90b3R5cGUsXG5cdFx0Tm9kZS5wcm90b3R5cGUsXG5cdFx0SFRNTEVsZW1lbnQucHJvdG90eXBlLFxuXHRcdEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLFxuXHRcdEVsZW1lbnQucHJvdG90eXBlLFxuXHRcdEV2ZW50VGFyZ2V0LnByb3RvdHlwZSxcblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkTGlzdFR5cGU7XG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG4vKipcclxuICogQ29udGVudCBhY2NlcHRlZCBieSB0aGUgaW5zZXJ0IGZ1bmN0aW9ucy5cclxuICpcclxuICogQHR5cGVkZWYge05vZGV8Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb258Q29udGVudFtdfHN0cmluZ30gQ29udGVudFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBOb3JtYWxpemVzIGNvbnRlbnQgdG8gYSBmbGF0IGxpc3Qgb2Ygbm9kZXMuXHJcbiAqXHJcbiAqIFN0cmluZ3MgYXJlIHBhcnNlZCB0byBub2RlcyBieSB0aGUgZ2xvYmFsIGNyZWF0ZSgpLCBsaXN0cyBhbmQgYXJyYXlzIGFyZSB0YWtlblxyXG4gKiBpdGVtIGJ5IGl0ZW0sIHNvIGFueSBtaXggb2YgdGhlbSBjYW4gYmUgcGFzc2VkLiBMaXN0cyBhcmUgcmVhZCBpbnRvIGFuIGFycmF5XHJcbiAqIGJlZm9yZSBhbnl0aGluZyBpcyBpbnNlcnRlZCwgYmVjYXVzZSBpbnNlcnRpbmcgYSBub2RlIHJlbW92ZXMgaXQgZnJvbSB0aGUgbGlzdFxyXG4gKiBpdCBjYW1lIGZyb20gLSBpdGVyYXRpbmcgdGhhdCBsaXN0IHdoaWxlIGluc2VydGluZyB3b3VsZCBza2lwIGV2ZXJ5IG90aGVyIG5vZGUuXHJcbiAqXHJcbiAqIFN0cmluZ3MgYXJlIG5vdCB0cmltbWVkIGFuZCBhbiBlbXB0eSBvbmUgaXMgYWNjZXB0ZWQ6IHVubGlrZSBldmVudCB0eXBlcyBvclxyXG4gKiBjbGFzcyBuYW1lcywgd2hpdGVzcGFjZSBpcyBjb250ZW50LiBcIiAgIFwiIGJlY29tZXMgYSB0ZXh0IG5vZGUsIFwiXCIgYmVjb21lcyBub1xyXG4gKiBub2RlIGF0IGFsbC4gT25seSB0aGUgYWJzZW5jZSBvZiBhbnkgYXJndW1lbnQgaXMgYW4gZXJyb3IuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Li4uQ29udGVudH0gdGhlQ29udGVudFxyXG4gKiBAcmV0dXJucyB7Tm9kZVtdfSB0aGUgbm9kZXMsIGVtcHR5IHdoZW4gdGhlIGNvbnRlbnQgcHJvZHVjZWQgbm9uZVxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiB0aGVyZSBpcyBubyBjb250ZW50IGF0IGFsbCBvciBhbiBpdGVtIGlzIG5vdCBjb250ZW50XHJcbiAqL1xyXG5jb25zdCB0b05vZGVzID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGNvbnRlbnQgPSBBcnJheS5mcm9tKGFyZ3VtZW50cykuZmxhdChJbmZpbml0eSk7XHJcblx0aWYgKGNvbnRlbnQubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDb250ZW50IGlzIHJlcXVpcmVkIVwiKTtcclxuXHJcblx0cmV0dXJuIGNvbnRlbnRcclxuXHRcdC5tYXAoKGl0ZW0pID0+IHtcclxuXHRcdFx0aWYgKGl0ZW0gaW5zdGFuY2VvZiBOb2RlKSByZXR1cm4gaXRlbTtcclxuXHRcdFx0aWYgKGl0ZW0gaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBpdGVtIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIHJldHVybiBBcnJheS5mcm9tKGl0ZW0pO1xyXG5cdFx0XHRpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpIHJldHVybiBBcnJheS5mcm9tKGNyZWF0ZShpdGVtKSk7XHJcblxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbnRlbnQhXCIpO1xyXG5cdFx0fSlcclxuXHRcdC5mbGF0KCk7XHJcbn07XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJNYW5pcHVsYXRpb25TdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0LyoqXHJcblx0ICogUmVtb3ZlcyBhbGwgY2hpbGQgbm9kZXMuXHJcblx0ICpcclxuXHQgKiBVc2VzIHJlbW92ZUNoaWxkIGluc3RlYWQgb2YgY2FsbGluZyByZW1vdmUoKSBvbiBlYWNoIGNoaWxkLCBiZWNhdXNlXHJcblx0ICogSFRNTFNlbGVjdEVsZW1lbnQgb3ZlcmxvYWRzIHJlbW92ZShpbmRleCkgdG8gcmVtb3ZlIGFuIG9wdGlvbi5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfSB0aGlzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKXtcclxuXHRcdHdoaWxlKHRoaXMuZmlyc3RDaGlsZClcclxuXHRcdFx0dGhpcy5yZW1vdmVDaGlsZCh0aGlzLmZpcnN0Q2hpbGQpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHJldHVybnMge05vZGVMaXN0fSB0aGUgbGl2ZSBsaXN0IG9mIGNoaWxkIG5vZGVzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmNvbnRlbnQgPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGROb2RlcztcclxuXHR9O1x0XHJcblx0XHJcblx0LyoqXHJcblx0ICogR2V0cyBvciBzZXRzIHRoZSBtYXJrdXAgb2YgdGhpcyBub2RlLlxyXG5cdCAqXHJcblx0ICogaHRtbCgpIHJldHVybnMgdGhlIGlubmVySFRNTCwgaHRtbCh0cnVlKSB0aGUgb3V0ZXJIVE1MIGFuZCBodG1sKGZhbHNlKSB0aGVcclxuXHQgKiBpbm5lckhUTUwuIEFueSBvdGhlciBhcmd1bWVudCByZXBsYWNlcyBhbGwgY2hpbGRyZW4gYnkgdGhlIGdpdmVuIGNvbnRlbnQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLihib29sZWFufENvbnRlbnQpfSB0aGVDb250ZW50IC0gbnVsbCBvciB1bmRlZmluZWQgdGhyb3dzXHJcblx0ICogQHJldHVybnMge3N0cmluZ3xOb2RlfSB0aGUgbWFya3VwLCBvciB0aGlzIHdoZW4gY29udGVudCB3YXMgc2V0XHJcblx0ICovXHJcblx0UHJvdG90eXBlLmh0bWwgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0aWYoYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm91dGVySFRNTDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRjb25zdCBub2RlcyA9IHRvTm9kZXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcclxuXHRcdFx0dGhpcy5lbXB0eSgpO1xyXG5cdFx0XHRub2Rlcy5mb3JFYWNoKG5vZGUgPT4gdGhpcy5hcHBlbmRDaGlsZChub2RlKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHQvKipcclxuXHQgKiBBcHBlbmRzIHRoZSBjb250ZW50IGFzIGxhc3QgY2hpbGRyZW4uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLkNvbnRlbnR9IHRoZUNvbnRlbnRcclxuXHQgKiBAcmV0dXJucyB7Tm9kZX0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBieSBpbnZhbGlkIGNvbnRlbnRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24oKXtcclxuXHRcdHRvTm9kZXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKS5mb3JFYWNoKG5vZGUgPT4gdGhpcy5hcHBlbmRDaGlsZChub2RlKSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogSW5zZXJ0cyB0aGUgY29udGVudCBhcyBmaXJzdCBjaGlsZHJlbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uQ29udGVudH0gdGhlQ29udGVudFxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfSB0aGlzXHJcblx0ICogQHRocm93cyB7RXJyb3J9IGJ5IGludmFsaWQgY29udGVudFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24oKXtcclxuXHRcdGNvbnN0IG5vZGVzID0gdG9Ob2RlcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cdFx0Y29uc3QgZmlyc3QgPSB0aGlzLmZpcnN0Q2hpbGQ7XHJcblx0XHRub2Rlcy5mb3JFYWNoKG5vZGUgPT4gdGhpcy5pbnNlcnRCZWZvcmUobm9kZSwgZmlyc3QpKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXBsYWNlcyBhIG5vZGUgYnkgdGhlIGdpdmVuIGNvbnRlbnQuXHJcblx0ICpcclxuXHQgKiBDYWxsZWQgd2l0aCBvbmUgYXJndW1lbnQsIHRoaXMgbm9kZSBpcyByZXBsYWNlZCB3aXRoaW4gaXRzIHBhcmVudCBub2RlLlxyXG5cdCAqIENhbGxlZCB3aXRoIG1vcmUsIHRoZSBmaXJzdCBvbmUgLSBhIGNoaWxkIG9mIHRoaXMgbm9kZSAtIGlzIHJlcGxhY2VkIGJ5IHRoZVxyXG5cdCAqIGNvbnRlbnQgZm9sbG93aW5nIGl0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi5Db250ZW50fSB0aGVDb250ZW50IC0gdGhlIG5ldyBjb250ZW50LCBvciB0aGUgb2xkIG5vZGUgZm9sbG93ZWQgYnkgdGhlIG5ldyBjb250ZW50XHJcblx0ICogQHJldHVybnMge05vZGV9IHRoaXMsIGV2ZW4gd2hlbiB0aGlzIG5vZGUgd2FzIHRoZSByZXBsYWNlZCBvbmVcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiBjYWxsZWQgd2l0aG91dCBhcmd1bWVudHMgb3IgYnkgaW52YWxpZCBjb250ZW50XHJcblx0ICovXHJcblx0UHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA8IDEpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkluc3VmZmljaWVudCBhcmd1bWVudHMhIE9uZSBvciB0d28gbm9kZXMgcmVxdWlyZWQhXCIpO1xyXG5cclxuXHRcdGNvbnN0IHBhcmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IHRoaXMucGFyZW50Tm9kZSA6IHRoaXM7XHJcblx0XHRjb25zdCBvbGROb2RlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gdGhpcyA6IGFyZ3VtZW50c1swXTtcclxuXHRcdGNvbnN0IG5vZGVzID0gdG9Ob2Rlcyhhcmd1bWVudHMubGVuZ3RoID09IDEgPyBhcmd1bWVudHNbMF0gOiBBcnJheS5mcm9tKGFyZ3VtZW50cykuc2xpY2UoMSkpO1xyXG5cclxuXHRcdG5vZGVzLmZvckVhY2gobm9kZSA9PiBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIG9sZE5vZGUpKTtcclxuXHRcdG9sZE5vZGUucmVtb3ZlKCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogSW5zZXJ0cyB0aGUgY29udGVudCBkaXJlY3RseSBhZnRlciB0aGlzIG5vZGUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLkNvbnRlbnR9IHRoZUNvbnRlbnRcclxuXHQgKiBAcmV0dXJucyB7Tm9kZX0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIHRoaXMgbm9kZSBoYXMgbm8gcGFyZW50IG5vZGUgb3IgYnkgaW52YWxpZCBjb250ZW50XHJcblx0ICovXHJcblx0UHJvdG90eXBlLmFmdGVyID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBpbnNlcnQgbm9kZXMgYWZ0ZXIgdGhpcyBub2RlISBQYXJlbnQgbm9kZSBub3QgYXZhaWxhYmxlIVwiKTtcclxuXHJcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRjb25zdCBuZXh0ID0gdGhpcy5uZXh0U2libGluZztcclxuXHRcdHRvTm9kZXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKS5mb3JFYWNoKG5vZGUgPT4gcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCBuZXh0KSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogSW5zZXJ0cyB0aGUgY29udGVudCBkaXJlY3RseSBiZWZvcmUgdGhpcyBub2RlLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi5Db250ZW50fSB0aGVDb250ZW50XHJcblx0ICogQHJldHVybnMge05vZGV9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiB0aGlzIG5vZGUgaGFzIG5vIHBhcmVudCBub2RlIG9yIGJ5IGludmFsaWQgY29udGVudFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5wYXJlbnROb2RlID09IG51bGwpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbid0IGluc2VydCBub2RlcyBiZWZvcmUgdGhpcyBub2RlISBQYXJlbnQgbm9kZSBub3QgYXZhaWxhYmxlIVwiKTtcclxuXHJcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHR0b05vZGVzKEFycmF5LmZyb20oYXJndW1lbnRzKSkuZm9yRWFjaChub2RlID0+IHBhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcykpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IFBBUkVOVFRPS0VOID0gXCI6cGFyZW50XCI7XHJcbmNvbnN0IFFVT1RFUyA9IFtcIlxcXCJcIiwgXCInXCJdO1xyXG5cclxuLyoqXHJcbiAqIFN0cmlwcyB0aGUgb3B0aW9uYWwgcXVvdGVzIGFyb3VuZCBhIHN1YiBzZWxlY3Rvci5cclxuICpcclxuICogUXVvdGluZyBpcyBub3QgbmVlZGVkIGFueW1vcmUsIGFzIHRoZSBzZWxlY3RvciBpcyByZWFkIGJ5IGNvdW50aW5nIGJyYWNrZXRzXHJcbiAqIGluc3RlYWQgb2YgbWF0Y2hpbmcgYSBwYXR0ZXJuLCBidXQgaXQgc3RheXMgc3VwcG9ydGVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3VicXVlcnlcclxuICogQHJldHVybnMge3N0cmluZ30gdGhlIHN1YiBzZWxlY3RvciwgZW1wdHkgd2hlbiB0aGVyZSBpcyBub25lXHJcbiAqL1xyXG5jb25zdCBjbGVhbnVwU3ViU2VsZWN0b3IgPSAoc3VicXVlcnkpID0+IHtcclxuXHRpZiAodHlwZW9mIHN1YnF1ZXJ5ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gXCJcIjtcclxuXHRzdWJxdWVyeSA9IHN1YnF1ZXJ5LnRyaW0oKTtcclxuXHRpZiAoKHN1YnF1ZXJ5LnN0YXJ0c1dpdGgoJ1wiJykgJiYgc3VicXVlcnkuZW5kc1dpdGgoJ1wiJykpIHx8IChzdWJxdWVyeS5zdGFydHNXaXRoKFwiJ1wiKSAmJiBzdWJxdWVyeS5lbmRzV2l0aChcIidcIikpKSBzdWJxdWVyeSA9IHN1YnF1ZXJ5LnN1YnN0cmluZygxLCBzdWJxdWVyeS5sZW5ndGggLSAxKTtcclxuXHRyZXR1cm4gc3VicXVlcnkudHJpbSgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZpbmRzIHRoZSA6cGFyZW50IHRva2VuIG9mIGEgc2VsZWN0b3IuXHJcbiAqXHJcbiAqIE9ubHkgYSB0b2tlbiBvbiBicmFja2V0IGxldmVsIHplcm8gYW5kIG91dHNpZGUgb2YgcXVvdGVzIGNvdW50cywgc28gbmVpdGhlclxyXG4gKiBbZGF0YT1cIjpwYXJlbnRcIl0gbm9yIDpub3QoOnBhcmVudCkgaXMgdGFrZW4gZm9yIG9uZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFTZWxlY3RvclxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgaW5kZXggb2YgdGhlIHRva2VuLCBvciAtMVxyXG4gKi9cclxuY29uc3QgaW5kZXhPZlBhcmVudFRva2VuID0gKGFTZWxlY3RvcikgPT4ge1xyXG5cdGxldCBxdW90ZSA9IG51bGw7XHJcblx0bGV0IGRlcHRoID0gMDtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFTZWxlY3Rvci5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3QgY2hhciA9IGFTZWxlY3RvcltpXTtcclxuXHRcdGlmIChxdW90ZSkge1xyXG5cdFx0XHRpZiAoY2hhciA9PT0gcXVvdGUgJiYgYVNlbGVjdG9yW2kgLSAxXSAhPT0gXCJcXFxcXCIpIHF1b3RlID0gbnVsbDtcclxuXHRcdH0gZWxzZSBpZiAoUVVPVEVTLmluY2x1ZGVzKGNoYXIpKSBxdW90ZSA9IGNoYXI7XHJcblx0XHRlbHNlIGlmIChjaGFyID09PSBcIihcIikgZGVwdGgrKztcclxuXHRcdGVsc2UgaWYgKGNoYXIgPT09IFwiKVwiKSBkZXB0aC0tO1xyXG5cdFx0ZWxzZSBpZiAoZGVwdGggPT09IDAgJiYgYVNlbGVjdG9yLnN0YXJ0c1dpdGgoUEFSRU5UVE9LRU4sIGkpKSByZXR1cm4gaTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAtMTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZWFkcyBhIGJyYWNrZXQgZ3JvdXAgYnkgY291bnRpbmcgYnJhY2tldHMsIHNvIGEgbmVzdGVkIGdyb3VwIGxpa2VcclxuICogZGl2OmhhcyhwKTpub3Qoc3BhbikgaXMgcmVhZCBhcyBhIHdob2xlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYVNlbGVjdG9yXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhU3RhcnQgLSB0aGUgaW5kZXggb2YgdGhlIG9wZW5pbmcgYnJhY2tldFxyXG4gKiBAcmV0dXJucyB7e2NvbnRlbnQ6IHN0cmluZywgZW5kOiBudW1iZXJ9fSB0aGUgY29udGVudCBvZiB0aGUgZ3JvdXAgYW5kIHRoZSBpbmRleCBiZWhpbmQgaXRcclxuICogQHRocm93cyB7RXJyb3J9IHdoZW4gdGhlIGdyb3VwIGlzIG5vdCBjbG9zZWRcclxuICovXHJcbmNvbnN0IHJlYWRHcm91cCA9IChhU2VsZWN0b3IsIGFTdGFydCkgPT4ge1xyXG5cdGxldCBxdW90ZSA9IG51bGw7XHJcblx0bGV0IGRlcHRoID0gMDtcclxuXHRmb3IgKGxldCBpID0gYVN0YXJ0OyBpIDwgYVNlbGVjdG9yLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBjaGFyID0gYVNlbGVjdG9yW2ldO1xyXG5cdFx0aWYgKHF1b3RlKSB7XHJcblx0XHRcdGlmIChjaGFyID09PSBxdW90ZSAmJiBhU2VsZWN0b3JbaSAtIDFdICE9PSBcIlxcXFxcIikgcXVvdGUgPSBudWxsO1xyXG5cdFx0fSBlbHNlIGlmIChRVU9URVMuaW5jbHVkZXMoY2hhcikpIHF1b3RlID0gY2hhcjtcclxuXHRcdGVsc2UgaWYgKGNoYXIgPT09IFwiKFwiKSBkZXB0aCsrO1xyXG5cdFx0ZWxzZSBpZiAoY2hhciA9PT0gXCIpXCIgJiYgLS1kZXB0aCA9PT0gMCkgcmV0dXJuIHsgY29udGVudDogYVNlbGVjdG9yLnN1YnN0cmluZyhhU3RhcnQgKyAxLCBpKSwgZW5kOiBpICsgMSB9O1xyXG5cdH1cclxuXHJcblx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBxdWVyeSFcIik7XHJcbn07XHJcblxyXG4vKipcclxuICogU3BsaXRzIGEgc2VsZWN0b3IgYXQgaXRzIDpwYXJlbnQgdG9rZW4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU2VsZWN0b3JcclxuICogQHJldHVybnMge3twcmVmaXg6IHN0cmluZywgc2VsZWN0b3I6IHN0cmluZywgc3VmZml4OiBzdHJpbmd9fG51bGx9IHRoZSBwYXJ0cywgb3IgbnVsbCB3aGVuIHRoZXJlIGlzIG5vIHRva2VuXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIHRoZSBicmFja2V0IGdyb3VwIG9mIHRoZSB0b2tlbiBpcyBub3QgY2xvc2VkXHJcbiAqL1xyXG5jb25zdCBzcGxpdFBhcmVudFF1ZXJ5ID0gKGFTZWxlY3RvcikgPT4ge1xyXG5cdGNvbnN0IGluZGV4ID0gaW5kZXhPZlBhcmVudFRva2VuKGFTZWxlY3Rvcik7XHJcblx0aWYgKGluZGV4IDwgMCkgcmV0dXJuIG51bGw7XHJcblxyXG5cdGNvbnN0IGFmdGVyID0gaW5kZXggKyBQQVJFTlRUT0tFTi5sZW5ndGg7XHJcblx0Y29uc3QgZ3JvdXAgPSBhU2VsZWN0b3JbYWZ0ZXJdID09PSBcIihcIiA/IHJlYWRHcm91cChhU2VsZWN0b3IsIGFmdGVyKSA6IHsgY29udGVudDogXCJcIiwgZW5kOiBhZnRlciB9O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJlZml4OiBhU2VsZWN0b3Iuc3Vic3RyaW5nKDAsIGluZGV4KS50cmltKCksXHJcblx0XHRzZWxlY3RvcjogY2xlYW51cFN1YlNlbGVjdG9yKGdyb3VwLmNvbnRlbnQpLFxyXG5cdFx0c3VmZml4OiBhU2VsZWN0b3Iuc3Vic3RyaW5nKGdyb3VwLmVuZCkudHJpbSgpXHJcblx0fTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFeGVjdXRlcyBhIHNlbGVjdG9yLCByZXNvbHZpbmcgdGhlIDpwYXJlbnQgcHNldWRvIHNlbGVjdG9yLlxyXG4gKlxyXG4gKiA6cGFyZW50IHJldHVybnMgdGhlIHBhcmVudCBvZiB0aGUgZWxlbWVudCwgOnBhcmVudChzZWxlY3RvcikgdGhlIG5leHQgYW5jZXN0b3JcclxuICogbWF0Y2hpbmcgdGhlIHNlbGVjdG9yLiBFdmVyeXRoaW5nIGJlZm9yZSB0aGUgdG9rZW4gc2VsZWN0cyB0aGUgZWxlbWVudHMgdG9cclxuICogc3RhcnQgZnJvbSwgZXZlcnl0aGluZyBiZWhpbmQgaXQgaXMgc2VhcmNoZWQgd2l0aGluIHRoZSBwYXJlbnRzIGZvdW5kLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBhRWxlbWVudFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYVNlbGVjdG9yXHJcbiAqIEByZXR1cm5zIHtOb2RlTGlzdHx1bmRlZmluZWR9IHRoZSByZXN1bHQsIHVuZGVmaW5lZCB3aGVuIGEgc3RlcCBmb3VuZCBub3RoaW5nXHJcbiAqL1xyXG5jb25zdCBxdWVyeUV4ZWN1dGVyID0gZnVuY3Rpb24gKGFFbGVtZW50LCBhU2VsZWN0b3IpIHtcclxuXHRjb25zdCBxdWVyeSA9IHNwbGl0UGFyZW50UXVlcnkoYVNlbGVjdG9yKTtcclxuXHRpZiAoIXF1ZXJ5KSByZXR1cm4gYUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3IpO1xyXG5cclxuXHRsZXQgcmVzdWx0ID0gYUVsZW1lbnQ7XHJcblx0aWYgKHF1ZXJ5LnByZWZpeC5sZW5ndGggPiAwKSB7XHJcblx0XHRyZXN1bHQgPSBhRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5LnByZWZpeCk7XHJcblx0XHRpZiAocmVzdWx0Lmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblx0fVxyXG5cclxuXHRyZXN1bHQgPSByZXN1bHQucGFyZW50KHF1ZXJ5LnNlbGVjdG9yLmxlbmd0aCA+IDAgPyBxdWVyeS5zZWxlY3RvciA6IG51bGwpO1xyXG5cdGlmICghcmVzdWx0KSByZXR1cm47XHJcblxyXG5cdHJldHVybiBxdWVyeS5zdWZmaXgubGVuZ3RoID4gMCA/IHJlc3VsdC5maW5kKHF1ZXJ5LnN1ZmZpeCkgOiByZXN1bHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogTm9ybWFsaXplcyBzZWxlY3RvcnMgdG8gYSBsaXN0IG9mIG5vbiBlbXB0eSBzdHJpbmdzLlxyXG4gKlxyXG4gKiBFbXB0eSBzZWxlY3RvcnMgYXJlIHNraXBwZWQgcmF0aGVyIHRoYW4gdGhyb3duIGF0LCBvdGhlciB0aGFuIGluIHRoZSBzaWJsaW5nXHJcbiAqIGZ1bmN0aW9ucyBmb3IgZXZlbnQgdHlwZXMgYW5kIGNsYXNzIG5hbWVzOiBhbiBlbXB0eSBzZWxlY3RvciBjYXJyaWVzIG5vIGludGVudFxyXG4gKiBhbmQganVzdCBjb250cmlidXRlcyBub3RoaW5nLCB3aGlsZSBhIG5vbiBzdHJpbmcgaXMgYSBtaXN0YWtlIGFuZCB0aHJvd3MuXHJcbiAqIFNlbGVjdG9ycyBhcmUgbm90IHNwbGl0LCBjb21tYSBzZXBhcmF0ZWQgbGlzdHMgYXJlIGxlZnQgZm9yIHF1ZXJ5U2VsZWN0b3JBbGwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfEl0ZXJhYmxlPHN0cmluZz59IHRoZVNlbGVjdG9yc1xyXG4gKiBAcmV0dXJucyB7c3RyaW5nW119IHRoZSB0cmltbWVkIHNlbGVjdG9ycywgZW1wdHkgb25lcyByZW1vdmVkXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIHRoZXJlIGlzIG5vIHNlbGVjdG9yIG9yIG9uZSBpcyBub3QgYSBzdHJpbmdcclxuICovXHJcbmNvbnN0IHRvU2VsZWN0b3IgPSBmdW5jdGlvbiAodGhlU2VsZWN0b3JzKSB7XHJcblx0aWYodGhlU2VsZWN0b3JzID09IG51bGwpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcXVlcnkhXCIpO1xyXG5cclxuXHRjb25zdCBzZWxlY3RvcnMgPSB0eXBlb2YgdGhlU2VsZWN0b3JzID09PSBcInN0cmluZ1wiID8gW3RoZVNlbGVjdG9yc10gOiBBcnJheS5mcm9tKHRoZVNlbGVjdG9ycyk7XHJcblxyXG5cdHJldHVybiBzZWxlY3RvcnNcclxuXHRcdC5tYXAoKHNlbGVjdG9yKSA9PiB7XHJcblx0XHRcdFx0aWYodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHF1ZXJ5IVwiKTtcclxuXHRcdFx0XHRyZXR1cm4gc2VsZWN0b3IudHJpbSgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0LmZpbHRlcigoc2VsZWN0b3IpID0+IHNlbGVjdG9yLmxlbmd0aCA+IDApO1xyXG59XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiUXVlcnlTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHQvKipcclxuXHQgKiBTZWFyY2hlcyBub2RlcyBieSBvbmUgb3IgbW9yZSBzZWxlY3RvcnMuXHJcblx0ICpcclxuXHQgKiBTZWxlY3RvciBsaXN0cyBzZXBhcmF0ZWQgYnkgY29tbWEgYXJlIGxlZnQgdG8gcXVlcnlTZWxlY3RvckFsbCwgd2hpY2gga25vd3NcclxuXHQgKiB0aGVtIGFuZCBnZXRzIHRoZSBjb21tYXMgaW5zaWRlIGJyYWNrZXRzIGFuZCBxdW90ZXMgcmlnaHQuIFRoZSByZXN1bHRzIG9mXHJcblx0ICogc2V2ZXJhbCBzZWxlY3RvcnMgYXJlIGNvbGxlY3RlZCBpbiB0aGUgb3JkZXIgdGhleSB3ZXJlIGdpdmVuLCB3aXRob3V0XHJcblx0ICogcmVtb3ZpbmcgdGhlIG5vZGVzIGEgc2Vjb25kIHNlbGVjdG9yIGZpbmRzIGFnYWluLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi5zdHJpbmd9IHRoZVNlbGVjdG9ycyAtIHNlbGVjdG9ycywgZW1wdHkgb25lcyBhcmUgc2tpcHBlZFxyXG5cdCAqIEByZXR1cm5zIHtOb2RlTGlzdH0gdGhlIG5vZGVzIGZvdW5kLCBlbXB0eSB3aGVuIHRoZXJlIGFyZSBub25lXHJcblx0ICogQHRocm93cyB7RXJyb3J9IGJ5IGEgc2VsZWN0b3IgYmVzaWRlIGEgc3RyaW5nXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBub2RlcyA9IFtdO1xyXG5cdFx0Y29uc3Qgc2VsZWN0b3JzID0gdG9TZWxlY3Rvcihhcmd1bWVudHMpO1xyXG5cdFx0Zm9yKGxldCBzZWxlY3RvciBvZiBzZWxlY3RvcnMpe1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBxdWVyeUV4ZWN1dGVyKHRoaXMsIHNlbGVjdG9yKTtcclxuXHRcdFx0aWYgKHJlc3VsdCkgbm9kZXMucHVzaChyZXN1bHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKC4uLm5vZGVzKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGlzIG5vZGUgbWF0Y2hlcyBhdCBsZWFzdCBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cclxuXHQgKlxyXG5cdCAqIEEgRG9jdW1lbnQgYW5kIGEgRG9jdW1lbnRGcmFnbWVudCBuZXZlciBtYXRjaCwgYXMgdGhleSBjYW4gbm90IGJlIHNlbGVjdGVkIC1cclxuXHQgKiB0aGF0IGFsc28gY292ZXJzIGEgU2hhZG93Um9vdCwgd2hpY2ggaXMgYSBEb2N1bWVudEZyYWdtZW50LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi4oc3RyaW5nfHN0cmluZ1tdKX0gdGhlU2VsZWN0b3JzIC0gc2VsZWN0b3JzLCBnaXZlbiBvbmUgYnkgb25lIG9yIGFzIGEgbGlzdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIG9uZSBvZiB0aGUgc2VsZWN0b3JzIG1hdGNoZXNcclxuXHQgKiBAdGhyb3dzIHtET01FeGNlcHRpb259IGJ5IGFuIGludmFsaWQgc2VsZWN0b3JcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuaXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGhpcyBpbnN0YW5jZW9mIERvY3VtZW50IHx8IHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSByZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpIHJldHVybiB0aGlzLm1hdGNoZXMoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50c1swXS5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0XHRsZXQgZmlsdGVyID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyLmxlbmd0aDsgaSsrKSBpZiAodGhpcy5tYXRjaGVzKGZpbHRlcltpXSkpIHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSByZXR1cm4gdGhpcy5pcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBwYXJlbnQgb2YgdGhpcyBub2RlLCBvciB0aGUgbmV4dCBhbmNlc3RvciBtYXRjaGluZyBhIHNlbGVjdG9yLlxyXG5cdCAqXHJcblx0ICogQW4gaW52YWxpZCBzZWxlY3RvciBpcyBub3QgY2F1Z2h0OiBpdCB3b3VsZCByZXR1cm4gdGhlIHBhcmVudCByZWFjaGVkIHNvIGZhcixcclxuXHQgKiB3aGljaCBpcyBpbmRpc3Rpbmd1aXNoYWJsZSBmcm9tIGEgbWF0Y2gsIHdoaWxlIGEgc2VsZWN0b3IgbWF0Y2hpbmcgbm90aGluZ1xyXG5cdCAqIGNvcnJlY3RseSByZXR1cm5zIG51bGwuIExldHRpbmcgaXQgdGhyb3cga2VlcHMgdGhvc2UgdHdvIGFwYXJ0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8Ym9vbGVhbn0gW3NlbGVjdG9yXSAtIGEgc2VsZWN0b3IgdG8gbG9vayBmb3IsIG9yIHRoZSBpZ25vcmVTaGFkb3dSb290IGZsYWdcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpZ25vcmVTaGFkb3dSb290XSAtIGNvbnRpbnVlIGF0IHRoZSBob3N0IG9mIGEgc2hhZG93IHJvb3QgaW5zdGVhZCBvZiBzdG9wcGluZ1xyXG5cdCAqIEByZXR1cm5zIHtOb2RlfG51bGx9IHRoZSBwYXJlbnQsIHRoZSBtYXRjaGluZyBhbmNlc3Rvciwgb3IgbnVsbCB3aGVuIHRoZXJlIGlzIG5vbmVcclxuXHQgKiBAdGhyb3dzIHtET01FeGNlcHRpb259IGJ5IGFuIGludmFsaWQgc2VsZWN0b3JcclxuXHQgKi9cclxuXHRQcm90b3R5cGUucGFyZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBpZ25vcmVTaGFkb3dSb290KSB7XHJcblx0XHRpZiAoIXRoaXMucGFyZW50Tm9kZSkgcmV0dXJuIG51bGw7XHJcblx0XHRpZ25vcmVTaGFkb3dSb290ID0gdHlwZW9mIHNlbGVjdG9yID09PSBcImJvb2xlYW5cIiA/IHNlbGVjdG9yIDogaWdub3JlU2hhZG93Um9vdDtcclxuXHRcdHNlbGVjdG9yID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IgOiBudWxsO1xyXG5cclxuXHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRpZiAocGFyZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCAmJiBpZ25vcmVTaGFkb3dSb290KSBwYXJlbnQgPSBwYXJlbnQuaG9zdDtcclxuXHJcblx0XHRpZiAoc2VsZWN0b3IpIHJldHVybiBwYXJlbnQuaXMoc2VsZWN0b3IpID8gcGFyZW50IDogcGFyZW50LnBhcmVudChzZWxlY3RvciwgaWdub3JlU2hhZG93Um9vdCk7XHJcblxyXG5cdFx0cmV0dXJuIHBhcmVudDtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDb2xsZWN0cyB0aGUgYW5jZXN0b3JzIG9mIHRoaXMgbm9kZSwgZnJvbSB0aGUgbmVhcmVzdCBvbmUgdXB3YXJkcy5cclxuXHQgKlxyXG5cdCAqIFdpdGggYSBzZWxlY3RvciBvbmx5IHRoZSBtYXRjaGluZyBhbmNlc3RvcnMgYXJlIGNvbGxlY3RlZCwgYXMgZXZlcnkgc3RlcFxyXG5cdCAqIHdhbGtzIHVwIHRvIHRoZSBuZXh0IG1hdGNoLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8Ym9vbGVhbn0gW3NlbGVjdG9yXSAtIGEgc2VsZWN0b3IgdG8gbG9vayBmb3IsIG9yIHRoZSBpZ25vcmVTaGFkb3dSb290IGZsYWdcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpZ25vcmVTaGFkb3dSb290XSAtIGNvbnRpbnVlIGF0IHRoZSBob3N0IG9mIGEgc2hhZG93IHJvb3QgaW5zdGVhZCBvZiBzdG9wcGluZ1xyXG5cdCAqIEByZXR1cm5zIHtOb2RlTGlzdH0gdGhlIGFuY2VzdG9ycywgZW1wdHkgd2hlbiB0aGVyZSBhcmUgbm9uZVxyXG5cdCAqIEB0aHJvd3Mge0RPTUV4Y2VwdGlvbn0gYnkgYW4gaW52YWxpZCBzZWxlY3RvclxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5wYXJlbnRzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5KCk7XHJcblx0XHRsZXQgcGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0d2hpbGUgKHBhcmVudCkge1xyXG5cdFx0XHRyZXN1bHQucHVzaChwYXJlbnQpO1xyXG5cdFx0XHRwYXJlbnQgPSBQcm90b3R5cGUucGFyZW50LmFwcGx5KHBhcmVudCwgYXJndW1lbnRzKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHQpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEJ1aWxkcyBhIHNlbGVjdG9yIGFkZHJlc3NpbmcgdGhpcyBub2RlLlxyXG5cdCAqXHJcblx0ICogQW4gaWQgZW5kcyB0aGUgc2VsZWN0b3IsIGFzIGl0IGFscmVhZHkgaWRlbnRpZmllcyB0aGUgbm9kZS4gT3RoZXJ3aXNlIHRoZSB0YWdcclxuXHQgKiBuYW1lIGlzIHVzZWQgYW5kIHRoZSBwYXRoIGNvbnRpbnVlcyBhdCB0aGUgcGFyZW50LiBBIHBvc2l0aW9uIGlzIG9ubHkgYWRkZWRcclxuXHQgKiB3aGVuIHRoZSBwYXJlbnQgaGFzIG1vcmUgdGhhbiBvbmUgZWxlbWVudCBjaGlsZCwgYW5kIGl0IGNvdW50cyBhbGwgb2YgdGhlbSAtXHJcblx0ICogdGhhdCBpcyB3aGF0IDpudGgtY2hpbGQgZG9lcywgdW5saWtlIDpudGgtb2YtdHlwZS5cclxuXHQgKlxyXG5cdCAqIFRoZSBpZCBpcyBub3QgZXNjYXBlZCwgc28gYW4gaWQgbmVlZGluZyBpdCBnaXZlcyBhbiBpbnZhbGlkIHNlbGVjdG9yLlxyXG5cdCAqXHJcblx0ICogQHJldHVybnMge3N0cmluZ3x1bmRlZmluZWR9IHRoZSBzZWxlY3RvciwgdW5kZWZpbmVkIGZvciBhIERvY3VtZW50IG9yIERvY3VtZW50RnJhZ21lbnRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuc2VsZWN0b3IgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGhpcyBpbnN0YW5jZW9mIERvY3VtZW50IHx8IHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy5pZCkgcmV0dXJuIFwiI1wiICsgdGhpcy5pZDtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcclxuXHRcdFx0aWYgKHBhcmVudCkge1xyXG5cdFx0XHRcdGlmKHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xyXG5cdFx0XHRcdFx0c2VsZWN0b3IgPSBgJHtzZWxlY3Rvcn06bnRoLWNoaWxkKCR7aW5kZXggKyAxfSlgO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zdCBwYXJlbnRTZWxlY3RvciA9IHBhcmVudC5zZWxlY3RvcigpO1xyXG5cdFx0XHRcdHJldHVybiBwYXJlbnRTZWxlY3RvciAhPSBudWxsID8gYCR7cGFyZW50U2VsZWN0b3J9ID4gJHtzZWxlY3Rvcn1gIDogc2VsZWN0b3I7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHNlbGVjdG9yO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIGZpcnN0IG5vZGUgb2YgY2xvc2VzdHMoKS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhUXVlcnlcclxuXHQgKiBAcmV0dXJucyB7Tm9kZXx1bmRlZmluZWR9IHRoZSBmaXJzdCBub2RlIGZvdW5kLCBvciB1bmRlZmluZWRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIChhUXVlcnkpIHtcclxuXHRcdHJldHVybiB0aGlzLmNsb3Nlc3RzKGFRdWVyeSkuZmlyc3QoKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTZWFyY2hlcyB0aGUgbm9kZXMgY2xvc2VzdCB0byB0aGlzIG9uZSBieSB0aGVpciBkaXN0YW5jZSBpbiB0aGUgdHJlZS5cclxuXHQgKlxyXG5cdCAqIFRoZSBzdWJ0cmVlIG9mIHRoaXMgbm9kZSBpcyBzZWFyY2hlZCBmaXJzdCwgdGhlbiB0aGUgc3VidHJlZSBvZiB0aGUgcGFyZW50LFxyXG5cdCAqIGFuZCBzbyBvbiB1cHdhcmRzIC0gdGhlIHNlYXJjaCB3aWRlbnMgaW4gcmluZ3MgdW50aWwgYSBsZXZlbCBoYXMgbWF0Y2hlcywgYW5kXHJcblx0ICogdGhvc2UgYXJlIHJldHVybmVkLiBTbyB0aGUgcmVzdWx0IG1heSBiZSBhIGNoaWxkLCBhIHNpYmxpbmcsIGEgY291c2luIG9yIGFuXHJcblx0ICogYW5jZXN0b3IsIGRlcGVuZGluZyBvbiB3aGVyZSB0aGUgZmlyc3QgbWF0Y2ggYXBwZWFycy5cclxuXHQgKlxyXG5cdCAqIERpc3RhbmNlIGlzIG1lYW50IGluIGJvdGggZGlyZWN0aW9ucyBoZXJlLCBvdGhlciB0aGFuIGluIHRoZSBuYXRpdmUgY2xvc2VzdCgpLFxyXG5cdCAqIHdoaWNoIG9ubHkgd2Fsa3MgdXAgYW5kIHJldHVybnMgYW4gYW5jZXN0b3IuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYVF1ZXJ5XHJcblx0ICogQHJldHVybnMge05vZGVMaXN0fSB0aGUgbWF0Y2hlcyBvZiB0aGUgY2xvc2VzdCBsZXZlbCBoYXZpbmcgYW55LCBlbXB0eSB3aGVuIHRoZXJlIGFyZSBub25lXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmNsb3Nlc3RzID0gZnVuY3Rpb24gKGFRdWVyeSkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5maW5kKGFRdWVyeSk7XHJcblx0XHRpZiAocmVzdWx0Lmxlbmd0aCAhPSAwKSByZXR1cm4gcmVzdWx0O1xyXG5cclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudDtcclxuXHRcdGlmIChwYXJlbnQpIHJldHVybiBwYXJlbnQuY2xvc2VzdHMoYVF1ZXJ5KTtcclxuXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShbXSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU2VhcmNoZXMgdGhlIHF1ZXJ5IGF0IHRoaXMgbm9kZSwgYmVsb3cgaXQsIG9yIGFib3ZlIGl0IC0gaW4gdGhhdCBvcmRlci5cclxuXHQgKlxyXG5cdCAqIFRoaXMgbm9kZSBpdHNlbGYgaXMgY2hlY2tlZCBmaXJzdCwgdGhlbiBpdHMgc3VidHJlZSwgYW5kIG9ubHkgdGhlbiB0aGVcclxuXHQgKiBhbmNlc3RvcnMuIFVubGlrZSBjbG9zZXN0cygpIHRoZSBzZWFyY2ggZG9lcyBub3Qgd2lkZW4gaW4gcmluZ3M6IGl0IG5ldmVyXHJcblx0ICogbG9va3MgaW50byB0aGUgc3VidHJlZSBvZiBhbiBhbmNlc3Rvciwgc28gYSBzaWJsaW5nIGlzIG5vdCBmb3VuZC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhUXVlcnlcclxuXHQgKiBAcmV0dXJucyB7Tm9kZUxpc3R9IHRoaXMgbm9kZSwgdGhlIG5vZGVzIGJlbG93IGl0LCBvciB0aGUgbWF0Y2hpbmcgYW5jZXN0b3IsIGVtcHR5IHdoZW4gdGhlcmUgaXMgbm9uZVxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5uZXN0ZWQgPSBmdW5jdGlvbiAoYVF1ZXJ5KSB7XHJcblx0XHRpZiAodGhpcy5pcyhhUXVlcnkpKSByZXR1cm4gTm9kZUxpc3QuZnJvbSh0aGlzKTtcclxuXHJcblx0XHRsZXQgbmVzdGVkID0gdGhpcy5maW5kKGFRdWVyeSk7XHJcblx0XHRpZiAobmVzdGVkICYmIG5lc3RlZC5sZW5ndGggPiAwKSByZXR1cm4gbmVzdGVkO1xyXG5cdFx0ZWxzZSByZXR1cm4gTm9kZUxpc3QuZnJvbSh0aGlzLnBhcmVudChhUXVlcnkpKTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlIG9mIHRoZSBldmVudCB0cmlnZ2VyZWQgb25jZSB0aGUgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUkVBRFlFVkVOVCA9IFwiZGVmYXVsdGpzLS1ldmVudC0tcmVhZHlcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlJlYWR5RXZlbnRTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0LyoqXHJcblx0ICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gZm9yIHRoZSByZWFkeSBldmVudCBvZiB0aGUgZG9jdW1lbnQuXHJcblx0ICpcclxuXHQgKiBUaGUgcmVhZHkgZXZlbnQgaXMgdHJpZ2dlcmVkIG9uY2UgdGhlIGRvbSBpcyBwYXJzZWQuIFdoZW4gdGhlIGRvY3VtZW50IGlzXHJcblx0ICogYWxyZWFkeSBjb21wbGV0ZSB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkIHJpZ2h0IGF3YXksIHNvIGEgZnVuY3Rpb24gcmVnaXN0ZXJlZFxyXG5cdCAqIGxhdGUgc3RpbGwgcnVucy4gVGhhdCB0cmlnZ2VyIHJlYWNoZXMgZXZlcnkgcmVhZHkgbGlzdGVuZXIsIHNvIGZ1bmN0aW9uc1xyXG5cdCAqIHJlZ2lzdGVyZWQgZWFybGllciBydW4gYWdhaW4gb24gZWFjaCBsYXRlIHJlZ2lzdHJhdGlvbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGFGdW5jdGlvbiAtIGNhbGxlZCBvbiB0aGUgcmVhZHkgZXZlbnRcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvbmNlXSAtIHJlbW92ZSB0aGUgZnVuY3Rpb24gYWZ0ZXIgdGhlIG5leHQgcmVhZHkgZXZlbnRcclxuXHQgKiBAcmV0dXJucyB7RG9jdW1lbnR9IHRoaXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbihhRnVuY3Rpb24sIG9uY2Upe1xyXG5cdFx0dGhpcy5vbihSRUFEWUVWRU5ULCBhRnVuY3Rpb24sIG9uY2UgPyB7IG9uY2U6IHRydWUgfSA6IHVuZGVmaW5lZCk7XHJcblx0XHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09IFwiY29tcGxldGVcIilcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFJFQURZRVZFTlQpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBISURFVkFMVUUgPSBcIm5vbmVcIjtcclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGhpZGRlbiBieSBpdHMgb3duIGlubGluZSBkaXNwbGF5LCBhIGRpc3BsYXkgY29taW5nIGZyb21cclxuICogYSBjc3MgcnVsZSBpcyBub3Qgc2Vlbi5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGlzSGlkZGVuID0gKGVsZW1lbnQpID0+IHtcclxuXHRyZXR1cm4gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSBISURFVkFMVUVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXBsYWNlcyBzaG93IGFuZCBoaWRlIG9uIHRoZSBlbGVtZW50IGJ5IHZlcnNpb25zIGJvdW5kIHRvIGl0LCBjYXB0dXJpbmcgdGhlXHJcbiAqIGRpc3BsYXkgdG8gcmVzdG9yZSBvbiBzaG93LlxyXG4gKlxyXG4gKiBUaGUgZGlzcGxheSBpcyByZWFkIG9uY2UsIG9uIHRoZSBmaXJzdCBzaG93IG9yIGhpZGUsIGFuZCBrZXB0IGZyb20gdGhlbiBvbiAtXHJcbiAqIHRoZSBib3VuZCBtZXRob2RzIHNoYWRvdyB0aGUgcHJvdG90eXBlLCBzbyBpbml0IGRvZXMgbm90IHJ1biBhZ2Fpbi4gQSBkaXNwbGF5XHJcbiAqIHNldCBkaXJlY3RseSBhZnRlcndhcmRzIGlzIG5vdCBwaWNrZWQgdXAuIFdoZW4gdGhlIGVsZW1lbnQgaXMgaGlkZGVuIGF0IHRoYXRcclxuICogZmlyc3QgY2FsbCB0aGUgY2FwdHVyZWQgdmFsdWUgaXMgdGhlIGVtcHR5IHN0cmluZywgZmFsbGluZyBiYWNrIHRvIHRoZSBjc3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgZWxlbWVudFxyXG4gKi9cclxuY29uc3QgaW5pdCA9IChlbGVtZW50KSA9PiB7XHJcblx0bGV0IGRpc3BsYXkgPSAhaXNIaWRkZW4oZWxlbWVudCkgPyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgOiBcIlwiO1xyXG5cclxuXHRlbGVtZW50LnNob3cgPSAoZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9KS5iaW5kKGVsZW1lbnQpO1xyXG5cclxuXHRlbGVtZW50LmhpZGUgPSAoZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IEhJREVWQUxVRTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0pLmJpbmQoZWxlbWVudCk7XHJcblxyXG5cdHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlNob3dIaWRlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIFNob3dzIHRoZSBlbGVtZW50IGJ5IHJlc3RvcmluZyB0aGUgZGlzcGxheSBjYXB0dXJlZCBiZWZvcmUgaXQgd2FzIGhpZGRlbi5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhpc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gaW5pdCh0aGlzKS5zaG93LmFwcGx5KG51bGwsIGFyZ3VtZW50cylcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBIaWRlcyB0aGUgZWxlbWVudCBieSBzZXR0aW5nIGl0cyBkaXNwbGF5IHRvIG5vbmUuXHJcblx0ICpcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoaXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGluaXQodGhpcykuaGlkZS5hcHBseShudWxsLCBhcmd1bWVudHMpXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU2hvd3MgdGhlIGVsZW1lbnQgd2hlbiBpdCBpcyBoaWRkZW4sIGhpZGVzIGl0IG90aGVyd2lzZS5cclxuXHQgKlxyXG5cdCAqIE9ubHkgYW4gaW5saW5lIGRpc3BsYXkgb2Ygbm9uZSBjb3VudHMgYXMgaGlkZGVuLCBzbyBhbiBlbGVtZW50IGhpZGRlbiBieSBhXHJcblx0ICogY3NzIHJ1bGUgaXMgaGlkZGVuIGlubGluZSBmaXJzdCBiZWZvcmUgaXQgc2hvd3MuXHJcblx0ICpcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoaXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUudG9nZ2xlU2hvdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGlzSGlkZGVuKHRoaXMpID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcclxuXHR9O1xyXG5cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuLyoqXHJcbiAqIFZhbHVlIGhhbmRsaW5nIGZvciBvbmUga2luZCBvZiBpbnB1dCBlbGVtZW50LlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBJbnB1dFR5cGVcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHNlbGVjdG9yIC0gbWF0Y2hlcyB0aGUgZWxlbWVudHMgaGFuZGxlZCBieSB0aGlzIHR5cGVcclxuICogQHByb3BlcnR5IHtmdW5jdGlvbigpOip9IGdldCAtIHJlYWRzIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudFxyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9uKCopOnZvaWR9IHNldCAtIHdyaXRlcyB0aGUgdmFsdWUgdG8gdGhlIGVsZW1lbnRcclxuICovXHJcblxyXG4vKipcclxuICogU2hhcmVkIHNldHRlciBvZiBjaGVja2JveCBhbmQgcmFkaW8sIGJvdGggYXJlIHNldCBieSB0aGVpciBjaGVja2VkIHN0YXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfHN0cmluZ1tdfSBhVmFsdWUgLSBhIGJvb2xlYW4gaXMgYXBwbGllZCBkaXJlY3RseSwgYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncyBjaGVja3MgdGhlIGVsZW1lbnQgd2hlbiBpdHMgdmFsdWUgbWF0Y2hlc1xyXG4gKi9cclxuY29uc3QgY2hlY2tlZFNldHRlciA9IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0aWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWU7XHJcblx0ZWxzZSBpZih0eXBlb2YgYVZhbHVlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0dGhpcy5jaGVja2VkID0gdGhpcy52YWx1ZSA9PSBhVmFsdWU7XHJcblx0ZWxzZSBpZihBcnJheS5pc0FycmF5KGFWYWx1ZSkpXHJcblx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWUuaW5kZXhPZih0aGlzLnZhbHVlKSA+PSAwO1xyXG5cclxuXHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBmaXJzdCB0eXBlIHdpdGggYSBtYXRjaGluZyBzZWxlY3RvciBoYW5kbGVzIHRoZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAdHlwZSB7SW5wdXRUeXBlW119XHJcbiAqL1xyXG5jb25zdCBJbnB1dFR5cGVzID0gW1xyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJzZWxlY3RcIixcclxuXHRcdC8qKlxyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ1tdfSB0aGUgdmFsdWVzIG9mIGFsbCBzZWxlY3RlZCBvcHRpb25zXHJcblx0XHQgKi9cclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4ge1xyXG5cdFx0XHRcdGlmKG9wdGlvbi5zZWxlY3RlZClcclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdH0pO1x0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKCl7XHRcdFx0XHRcclxuXHRcdFx0bGV0IHZhbHVlcyA9IFtdO1xyXG5cdFx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0XHRsZXQgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHR3aGlsZShhcmcpe1xyXG5cdFx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYXJnKSlcclxuXHRcdFx0XHRcdHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoYXJnKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR2YWx1ZXMucHVzaChhcmcpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWVzO1xyXG5cdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gdmFsdWVzLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA+PSAwKTtcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdXCIsXHJcblx0XHQvKipcclxuXHRcdCAqIEEgY2hlY2tib3ggaXMgaW5kZXBlbmRlbnQsIHNvIGFuIHVuY2hlY2tlZCBvbmUgcmVwb3J0cyBmYWxzZSAtIGl0IGlzIG9mZixcclxuXHRcdCAqIHdoaWNoIGlzIGEgdmFsdWUgb2YgaXRzIG93bi5cclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbnxzdHJpbmd8dW5kZWZpbmVkfSB0aGUgY2hlY2tlZCBzdGF0ZSB3aXRob3V0IGEgdmFsdWUgYXR0cmlidXRlLCBvdGhlcndpc2UgdGhlIHZhbHVlIHdoZW4gY2hlY2tlZFxyXG5cdFx0ICovXHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZighdGhpcy5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja2VkO1xyXG5cdFx0XHRlbHNlIGlmKHRoaXMuY2hlY2tlZClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBjaGVja2VkU2V0dGVyXHJcblx0fSxcclxuXHR7XHJcblx0XHRzZWxlY3RvciA6IFwiaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXVwiLFxyXG5cdFx0LyoqXHJcblx0XHQgKiBBbGwgcmFkaW9zIG9mIGEgZ3JvdXAgc2hhcmUgb25lIG5hbWUgYW5kIG9ubHkgb25lIG9mIHRoZW0gY2FuIGJlIGNoZWNrZWQsXHJcblx0XHQgKiBzbyBhbiB1bmNoZWNrZWQgcmFkaW8gcmV0dXJucyB1bmRlZmluZWQgaW5zdGVhZCBvZiBmYWxzZSAtIGl0IGNhcnJpZXMgbm9cclxuXHRcdCAqIHZhbHVlLCBpdCBqdXN0IGlzIG5vdCB0aGUgc2VsZWN0ZWQgb25lLiBUaGlzIGlzIHdoYXQga2VlcHMgdGhlIHVuY2hlY2tlZFxyXG5cdFx0ICogcmFkaW9zIGZyb20gb3ZlcndyaXRpbmcgdGhlIHZhbHVlIG9mIHRoZWlyIGdyb3VwLCBvbmNlIHRoZSByZXN1bHRzIG9mIGFcclxuXHRcdCAqIHdob2xlIGdyb3VwIGdldCBjb2xsZWN0ZWQgYnkgbmFtZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbnxzdHJpbmd8dW5kZWZpbmVkfSB0cnVlIG9yIHRoZSB2YWx1ZSB3aGVuIGNoZWNrZWQsIHVuZGVmaW5lZCBvdGhlcndpc2VcclxuXHRcdCAqL1xyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYodGhpcy5jaGVja2VkKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcInZhbHVlXCIpID8gdGhpcy52YWx1ZSA6IHRydWU7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogY2hlY2tlZFNldHRlclxyXG5cdH1cclxuXTtcclxuXHJcbi8qKlxyXG4gKiBGYWxsYmFjayBmb3IgYWxsIGVsZW1lbnRzIHdpdGhvdXQgYSBtYXRjaGluZyBJbnB1dFR5cGUuXHJcbiAqXHJcbiAqIEB0eXBlIHtJbnB1dFR5cGV9XHJcbiAqL1xyXG5jb25zdCBEZWZhdWx0SW5wdXRUeXBlID0ge1xyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGFWYWx1ZTtcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiaW5wdXRcIik7XHJcblx0XHR9XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtFbGVtZW50fSBhRWxlbWVudFxyXG4gKiBAcmV0dXJucyB7SW5wdXRUeXBlfSB0aGUgZmlyc3QgbWF0Y2hpbmcgdHlwZSwgb3IgRGVmYXVsdElucHV0VHlwZVxyXG4gKi9cclxuY29uc3QgZ2V0SW5wdXRUeXBlID0gZnVuY3Rpb24oYUVsZW1lbnQpe1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBJbnB1dFR5cGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0aWYoYUVsZW1lbnQuaXMoSW5wdXRUeXBlc1tpXS5zZWxlY3RvcikpXHJcblx0XHRcdHJldHVybiBJbnB1dFR5cGVzW2ldO1x0XHRcclxuXHRyZXR1cm4gRGVmYXVsdElucHV0VHlwZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJWYWx1ZVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHQvKipcclxuXHQgKiBHZXRzIG9yIHNldHMgdGhlIHZhbHVlIG9mIHRoaXMgZWxlbWVudC5cclxuXHQgKlxyXG5cdCAqIFdoYXQgYSB2YWx1ZSBpcyBkZXBlbmRzIG9uIHRoZSBlbGVtZW50OiBhIHNlbGVjdCByZXR1cm5zIHRoZSB2YWx1ZXMgb2YgYWxsXHJcblx0ICogaXRzIHNlbGVjdGVkIG9wdGlvbnMsIGEgY2hlY2tib3ggaXRzIGNoZWNrZWQgc3RhdGUgb3IgaXRzIHZhbHVlLCBhIHJhZGlvIGFcclxuXHQgKiB2YWx1ZSBvbmx5IHdoZW4gaXQgaXMgY2hlY2tlZCwgZXZlcnkgb3RoZXIgZWxlbWVudCBpdHMgdmFsdWUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLip9IFthVmFsdWVdIC0gdGhlIG5ldyB2YWx1ZSwgdGhlIGFjY2VwdGVkIHR5cGVzIGRlcGVuZCBvbiB0aGUgZWxlbWVudFxyXG5cdCAqIEByZXR1cm5zIHsqfEVsZW1lbnR9IHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCwgb3IgdGhpcyB3aGVuIGEgdmFsdWUgd2FzIHNldFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB0eXBlID0gZ2V0SW5wdXRUeXBlKHRoaXMpO1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdHlwZS5nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dHlwZS5zZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1x0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBcIi4vZG9tL0V2ZW50VGFyZ2V0XCI7XHJcbmltcG9ydCBcIi4vZG9tL05vZGVcIjtcclxuaW1wb3J0IFwiLi9kb20vRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Eb2N1bWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Eb2N1bWVudEZyYWdtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxJbnB1dEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTFRleHRBcmVhRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MU2VsZWN0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlTGlzdFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IdG1sQ29sbGVjdGlvblwiO1xyXG5pbXBvcnQgXCIuL0dsb2JhbFwiO1xyXG4iLCIvKipcclxuICogQWRkcyBkZWxlZ2F0aW5nIG1ldGhvZHMgdG8gYSBwcm90b3R5cGUsIG9uZSBmb3IgZWFjaCBtZXRob2Qgb2YgdGhlIHRhcmdldFxyXG4gKiBwcm90b3R5cGVzLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGhvdyBhIE5vZGVMaXN0IGdldHMgdGhlIG1ldGhvZHMgb2YgYSBOb2RlOiBmb3IgZXZlcnkgbWV0aG9kIG5hbWUgZm91bmRcclxuICogb24gdGhlIHRhcmdldHMsIGEgZnVuY3Rpb24gaXMgcHV0IG9uIHRoZSBzb3VyY2UgdGhhdCBoYW5kcyB0aGUgY2FsbCB0byB0aGVcclxuICogY2FsbGJhY2ssIHRvZ2V0aGVyIHdpdGggdGhhdCBuYW1lLiBUaGUgY2FsbGJhY2sgdGhlbiBkZWNpZGVzIHdoYXQgdG8gZG8gLSBmb3IgYVxyXG4gKiBsaXN0IGl0IGFwcGxpZXMgdGhlIG1ldGhvZCB0byBlYWNoIG5vZGUgYW5kIGNvbGxlY3RzIHRoZSByZXN1bHRzLlxyXG4gKlxyXG4gKiBBIG5hbWUgYWxyZWFkeSBvbiB0aGUgc291cmNlIGlzIGxlZnQgYWxvbmUsIHNvIGl0cyBvd24gbWV0aG9kcyB3aW4uIE9ubHkgdmFsdWVcclxuICogbWV0aG9kcyBhcmUgdGFrZW4sIGFjY2Vzc29ycyBhcmUgc2tpcHBlZCwgYXMgdGhlaXIgZGVzY3JpcHRvciBoYXMgbm8gdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nLCBBcmd1bWVudHMpOip9IGNhbGxiYWNrIC0gY2FsbGVkIGFzIG1ldGhvZCwgd2l0aCB0aGUgbmFtZSBhbmQgdGhlIGFyZ3VtZW50c1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIC0gdGhlIHByb3RvdHlwZSB0aGUgZGVsZWdhdGluZyBtZXRob2RzIGFyZSBhZGRlZCB0b1xyXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gdGhlVGFyZ2V0cyAtIHRoZSBwcm90b3R5cGVzIHdob3NlIG1ldGhvZCBuYW1lcyBhcmUgZGVsZWdhdGVkXHJcbiAqL1xyXG5jb25zdCBEZWxlZ2F0ZXJCdWlsZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBjYWxsYmFjayA9IGFyZ3Muc2hpZnQoKTtcclxuXHRjb25zdCBzb3VyY2UgPSBhcmdzLnNoaWZ0KCk7XHJcblx0YXJncy5mb3JFYWNoKCB0YXJnZXQgPT57XHJcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXHJcblx0XHQuZm9yRWFjaChuYW1lID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBuYW1lKTtcclxuXHRcdFx0aWYgKHR5cGVvZiBzb3VyY2VbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHByb3AudmFsdWUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRzb3VyY2VbbmFtZV0gPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgbmFtZSwgYXJndW1lbnRzKTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEZWxlZ2F0ZXJCdWlsZGVyOyIsIi8qKlxyXG4gKiBBcHBsaWVzIGV4dGVuc2lvbnMgdG8gdGhlIHByb3RvdHlwZSBvZiBhIHR5cGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFUeXBlIC0gdGhlIHR5cGUgd2hvc2UgcHJvdG90eXBlIGdldHMgZXh0ZW5kZWRcclxuICogQHBhcmFtIHsuLi5mdW5jdGlvbihGdW5jdGlvbik6dm9pZH0gdGhlRXh0ZW5kZXJzIC0gdGhlIHdyYXBwZWQgZXh0ZW5zaW9ucyB0byBhcHBseSwgaW4gb3JkZXJcclxuICovXHJcbmNvbnN0IGV4dGVuZFByb3RvdHlwZSA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCB0eXBlID0gYXJncy5zaGlmdCgpO1xyXG5cdHdoaWxlKGFyZ3MubGVuZ3RoID4gMCl7XHJcblx0XHRjb25zdCBleHRlbmRlciA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGV4dGVuZGVyKHR5cGUpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4dGVuZFByb3RvdHlwZTsiLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBXaGljaCBleHRlbnNpb24gaXMgYXBwbGllZCB0byB3aGljaCB0eXBlLCBrZXB0IG9uIHRoZSBnbG9iYWwgb2JqZWN0IHNvIGl0IGlzXHJcbiAqIHNoYXJlZCBhY3Jvc3Mgc2VwYXJhdGUgbG9hZHMgb2YgdGhlIGxpYnJhcnkuXHJcbiAqXHJcbiAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBPYmplY3Q8c3RyaW5nLCBib29sZWFuPj59XHJcbiAqL1xyXG5jb25zdCBFWFRFTlNJT05TX01BUCA9IFV0aWxzLmdsb2JhbFZhcihcIl9fX0RPTV9BUElfRVhURU5TSU9OX01BUF9fX1wiLCB7fSk7XHJcblxyXG4vKipcclxuICogV3JhcHMgYW4gZXh0ZW5zaW9uIHNvIGl0IGFwcGxpZXMgdG8gdGhlIHByb3RvdHlwZSBvZiBhIHR5cGUgb25seSBvbmNlLlxyXG4gKlxyXG4gKiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gaXMgd2hhdCBleHRlbmRQcm90b3R5cGUoKSBjYWxscyB3aXRoIGEgdHlwZS4gQXBwbHlpbmcgdGhlXHJcbiAqIHNhbWUgbmFtZWQgZXh0ZW5zaW9uIHRvIHRoZSBzYW1lIHR5cGUgYWdhaW4gaXMgYSBuby1vcCB3aXRoIGEgd2FybmluZywgc29cclxuICogbG9hZGluZyB0aGUgbGlicmFyeSB0d2ljZSBkb2VzIG5vdCBwYXRjaCB0aGUgcHJvdG90eXBlcyB0d2ljZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFOYW1lIC0gdGhlIG5hbWUgb2YgdGhlIGV4dGVuc2lvbiwgdW5pcXVlIHBlciB0eXBlXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KTp2b2lkfSBhRXh0ZW50aW9uIC0gYWRkcyB0aGUgbWVtYmVycyB0byB0aGUgcHJvdG90eXBlXHJcbiAqIEByZXR1cm5zIHtmdW5jdGlvbihGdW5jdGlvbik6dm9pZH0gYSBmdW5jdGlvbiBhcHBseWluZyB0aGUgZXh0ZW5zaW9uIHRvIGEgdHlwZVxyXG4gKi9cclxuY29uc3QgRXh0ZW5kZXIgPSBmdW5jdGlvbihhTmFtZSwgYUV4dGVudGlvbil7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKGFUeXBlKXtcclxuXHRcdGNvbnN0IHtuYW1lLCBwcm90b3R5cGV9ID0gYVR5cGU7XHJcblx0XHRsZXQgZXh0ZW5zaW9ucyA9IEVYVEVOU0lPTlNfTUFQW25hbWVdO1xyXG5cdFx0aWYoIWV4dGVuc2lvbnMpXHJcblx0XHRcdGV4dGVuc2lvbnMgPSBFWFRFTlNJT05TX01BUFtuYW1lXSA9IHt9O1x0XHRcclxuXHRcdFxyXG5cdFx0aWYoIWV4dGVuc2lvbnNbYU5hbWVdKXtcclxuXHRcdFx0ZXh0ZW5zaW9uc1thTmFtZV0gPSB0cnVlO1xyXG5cdFx0XHRhRXh0ZW50aW9uKHByb3RvdHlwZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGNvbnNvbGUud2FybihgRHVwbGljYXRlZCBsb2FkIG9mIGV4dGVuc2lvbiBcXFwiJHthTmFtZX1cXFwiIWApO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dGVuZGVyOyIsIlxyXG4vKipcclxuICogVGhlIGdsb2JhbCBvYmplY3Qgb2YgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAqXHJcbiAqIERldGVjdGVkIHdpdGggdHlwZW9mIGd1YXJkcywgYmVjYXVzZSBhIGJhcmUgcmVmZXJlbmNlIHRvIGFuIHVuZGVjbGFyZWQgbmFtZVxyXG4gKiB0aHJvd3MgaW5zdGVhZCBvZiBiZWluZyBmYWxzeSAtIHNvIGEgcGxhaW4gd2luZG93IHx8IGdsb2JhbCBjaGFpbiB3b3VsZCBicmVha1xyXG4gKiBldmVyeXdoZXJlIHdpbmRvdyBpcyBtaXNzaW5nLCBub3QgZmFsbCB0aHJvdWdoLiBnbG9iYWxUaGlzIGNvdmVycyB0aGUgYnJvd3NlcixcclxuICogbm9kZSBhbmQgd29ya2VycywgdGhlIHJlc3Qgc3RheXMgYXMgYSBmYWxsYmFjayBmb3Igb2xkZXIgcnVudGltZXMuXHJcbiAqXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgR0xPQkFMID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDpcclxuXHR0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDpcclxuXHR0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDpcclxuXHR0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB7fTtcclxuXHJcbmNvbnN0IFV0aWxzID0ge1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBnbG9iYWwgb2JqZWN0LCBzYW1lIGFzIEdMT0JBTC5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtPYmplY3R9XHJcblx0ICovXHJcblx0Z2xvYmFsIDogR0xPQkFMLFxyXG5cclxuXHQvKipcclxuXHQgKiBSZWFkcyBhIHZhcmlhYmxlIGZyb20gdGhlIGdsb2JhbCBvYmplY3QsIGluaXRpYWxpemluZyBpdCBvbmNlIHdoZW4gYSB2YWx1ZVxyXG5cdCAqIGlzIGdpdmVuIGFuZCBub25lIGlzIHNldCB5ZXQuXHJcblx0ICpcclxuXHQgKiBVc2VkIHRvIHNoYXJlIHN0YXRlIGJldHdlZW4gc2VwYXJhdGUgbG9hZHMgb2YgdGhlIGxpYnJhcnksIHdoaWNoIGVhY2ggaGF2ZVxyXG5cdCAqIHRoZWlyIG93biBtb2R1bGUgc2NvcGUgYnV0IHRoZSBvbmUgZ2xvYmFsIG9iamVjdCBpbiBjb21tb24uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYU5hbWUgLSB0aGUgbmFtZSBvbiB0aGUgZ2xvYmFsIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7Kn0gW2FJbml0VmFsdWVdIC0gdGhlIHZhbHVlIHRvIHNldCB3aGVuIHRoZSBuYW1lIGlzIHN0aWxsIHVuZGVmaW5lZFxyXG5cdCAqIEByZXR1cm5zIHsqfSB0aGUgdmFsdWUgb24gdGhlIGdsb2JhbCBvYmplY3RcclxuXHQgKi9cclxuXHRnbG9iYWxWYXIgOiBmdW5jdGlvbihhTmFtZSwgYUluaXRWYWx1ZSl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBHTE9CQUxbYU5hbWVdID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRHTE9CQUxbYU5hbWVdID0gYUluaXRWYWx1ZTtcclxuXHJcblx0XHRyZXR1cm4gR0xPQkFMW2FOYW1lXTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVdGlsczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zcmNcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=