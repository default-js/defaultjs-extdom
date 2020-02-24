/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./src/index.js");


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Global.js":
/*!***********************!*\
  !*** ./src/Global.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Utils */ "./src/utils/Utils.js");


_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs || {};
_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs.extdom = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs.extdom || {
	VERSION : "1.0.0-beta.13",
	utils : {
		Utils: _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"]
	}
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.find = function() {
	return document.find.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.ready = function() {
	return document.ready.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.create = function(aContent, asTemplate) {
	if (typeof arguments[0] !== "string")
		throw new Error("The first argument must be a string!");
	
	const template = document.createElement("template");
	template.innerHTML = aContent;
	if(asTemplate)
		return template;
	
	return document.importNode(template.content, true).childNodes;
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.script = function(aFile, aTarget) {
	if(aFile instanceof Array)
		return Promise.all(aFile.map(file => _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.script(file, aTarget)));
	
	if(typeof aFile === "string")	
		return new Promise((r,e) => {
			const script = document.createElement("script");
			script.async = true;
			script.onload = function(){r()};
			script.onerror = function(){e("jquery load error!")};
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./src/dom/extentions/ReadyEventSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Document, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

document.addEventListener("DOMContentLoaded", () => document.trigger("ready"));





/***/ }),

/***/ "./src/dom/DocumentFragment.js":
/*!*************************************!*\
  !*** ./src/dom/DocumentFragment.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(DocumentFragment, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);






/***/ }),

/***/ "./src/dom/Element.js":
/*!****************************!*\
  !*** ./src/dom/Element.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/AttributeSupport */ "./src/dom/extentions/AttributeSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./src/dom/extentions/ManipulationSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Element,_extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__["default"]);
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

/***/ }),

/***/ "./src/dom/EventTarget.js":
/*!********************************!*\
  !*** ./src/dom/EventTarget.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/EventSupport */ "./src/dom/extentions/EventSupport.js");



Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(EventTarget, _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/dom/HTMLElement.js":
/*!********************************!*\
  !*** ./src/dom/HTMLElement.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/HtmlClassSupport */ "./src/dom/extentions/HtmlClassSupport.js");
/* harmony import */ var _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ShowHideSupport */ "./src/dom/extentions/ShowHideSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLElement, _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/dom/HTMLInputElement.js":
/*!*************************************!*\
  !*** ./src/dom/HTMLInputElement.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./src/dom/extentions/ValueSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLInputElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/dom/HTMLSelectElement.js":
/*!**************************************!*\
  !*** ./src/dom/HTMLSelectElement.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./src/dom/extentions/ValueSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLSelectElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/dom/HTMLTextAreaElement.js":
/*!****************************************!*\
  !*** ./src/dom/HTMLTextAreaElement.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Extender */ "./src/utils/Extender.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLTextAreaElement,Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_1__["default"])("ValueSupport", Prototype => {	
	Prototype.val = function() {
		if(arguments.length == 0)
			return this.value;
		else
			this.value = arguments[0]
			
		return this;
	};	
}));

/***/ }),

/***/ "./src/dom/HtmlCollection.js":
/*!***********************************!*\
  !*** ./src/dom/HtmlCollection.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./src/dom/extentions/ListSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLCollection, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

HTMLCollection.prototype.applyTo = function(){
	const args = Array.from(arguments);
	const calling = args.shift();
	const isFunction = typeof calling === "function";
	const results = [];
	for(let i = 0; i < this.length; i++){
		const node = this[i];
		let	result;
		if(isFunction)
			result = calling.apply([node].concat(args));
		else if(typeof node[calling] === "function")
			result = node[calling].apply(node, args);
		
		if(result)
			results.push(result);
	}
	
	return results;
};

HTMLCollection.prototype.val = function() {
	if(arguments.length == 0){
		if(this.length > 0){
			const result = new Map();
			this.forEach(node => {
				if(typeof node.val === "function"){
					const value = node.val();
					if(value)
						result.set((node.name || node.id || node.selector()), node.val());
				}
			});	
			return result;
		}
	}
	else
		HTMLCollection.prototype.applyTo.apply(this, ["val"].concat(Array.from(arguments)));
};

HTMLCollection.from = function(){
	const args = Array.from(arguments);
	const data = {};
	let counter = 0;
	
	while(args.length > 0){
		const arg = args.shift();
		if(typeof arg !== "undefined" && arg != null){
			if(arg instanceof HTMLElement)
				data[counter++] = {value: arg, enumerable: true};
			else if(arg instanceof HTMLCollection || arg instanceof NodeList || arg instanceof Array){
				for(let i = 0; i < arg.length; i++){
					if(arg[i] && arg[i] instanceof HTMLElement){
						data[counter++] = {value: arg[i], enumerable: true};
					}
				}
			}
		}
	}
	
	data.length = {value: counter};
	return  Object.create(HTMLCollection.prototype, data);
};


Object(_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(function(aFunctionName, theArguments) {
	let results = [];	
	this.forEach(node => {
		if(node && typeof node[aFunctionName] === "function"){
			let result = node[aFunctionName].apply(node, theArguments);
			if(result){ 
				if(result instanceof HTMLCollection)
					results = results.concat(Array.from(result));
				else
					results.push(result);
			}		
		}
	});
	
	if(results.length === 0)
		return undefined;
	else if(results[0] instanceof HTMLElement || results[0] instanceof HTMLCollection)
		return HTMLCollection.from.apply(null, results);
	else
		return results;
},HTMLCollection.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype, EventTarget.prototype);


/***/ }),

/***/ "./src/dom/Node.js":
/*!*************************!*\
  !*** ./src/dom/Node.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/DataSupport */ "./src/dom/extentions/DataSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Node,_extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__["default"],_extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/dom/NodeList.js":
/*!*****************************!*\
  !*** ./src/dom/NodeList.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./src/dom/extentions/ListSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(NodeList, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

NodeList.prototype.applyTo = function(){
	const args = Array.from(arguments);
	const calling = args.shift();
	const isFunction = typeof calling === "function";
	const results = [];
	for(let i = 0; i < this.length; i++){
		const node = this[i];
		let	result;
		if(isFunction)
			result = calling.apply([node].concat(args));
		else if(typeof node[calling] === "function")
			result = node[calling].apply(node, args);
		
		if(result)
			results.push(result);
	}
	
	return results;
};

NodeList.prototype.val = function() {
	if(arguments.length == 0){
		if(this.length > 0){
			const result = new Map();
			this.forEach(node => {
				if(typeof node.val === "function"){
					const value = node.val();
					if(value)
						result.set((node.name || node.id || node.selector()), node.val());
				}
			});	
			return result;
		}
	}
	else
		NodeList.prototype.applyTo.apply(this, ["val"].concat(Array.from(arguments)));
};

NodeList.from = function(){
	const args = Array.from(arguments);
	const data = {};
	let counter = 0;
	
	while(args.length > 0){
		const arg = args.shift();
		if(typeof arg !== "undefined" && arg != null){
			if(arg instanceof Node)
				data[counter++] = {value: arg, enumerable: true};
			else if(arg instanceof NodeList || arg instanceof HTMLCollection || arg instanceof Array){
				for(let i = 0; i < arg.length; i++){
					if(arg[i] && arg[i] instanceof Node){
						data[counter++] = {value: arg[i], enumerable: true};
					}
				}
			}
		}
	}
	
	data.length = {value: counter};
	return  Object.create(NodeList.prototype, data);
};


Object(_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(function(aFunctionName, theArguments) {
	let results = [];	
	this.forEach(node => {
		if(node && typeof node[aFunctionName] === "function"){
			const result = node[aFunctionName].apply(node, theArguments);
			if(result){ 
				if(result instanceof NodeList)
					results = results.concat(Array.from(result));
				else
					results.push(result);
			}		
		}
	});
	
	if(results.length === 0)
		return undefined;
	else if(results[0] instanceof Node || results[0] instanceof NodeList)
		return NodeList.from.apply(null, results);
	else
		return results;
},NodeList.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype, EventTarget.prototype);


/***/ }),

/***/ "./src/dom/extentions/AttributeSupport.js":
/*!************************************************!*\
  !*** ./src/dom/extentions/AttributeSupport.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("AttributeSupport", Prototype => {
	Prototype.attr = function() {
		if (arguments.length == 0)
			return this.hasAttributes() ? (() => {
				const result = {};
				this.getAttributeNames().forEach(name => {
					result[name] = this.getAttribute(name);
				});
				return result;
			})() : undefined;
		else if (arguments.length == 1)
			return this.getAttribute(arguments[0]);
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			this.removeAttribute(arguments[0]);
		else
			this.setAttribute(arguments[0], arguments[1]);
		
		return this;
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./src/dom/extentions/DataSupport.js":
/*!*******************************************!*\
  !*** ./src/dom/extentions/DataSupport.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");

const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("DataSupport", Prototype => {
	Prototype.data = function() {
		if (typeof this.___data___ === "undefined") {
			this.___data___ = {};
			if(typeof this.dataset !== "undefined")
				for (name in this.dataset)
					this.___data___[name] = this.dataset[name];
		}

		if (arguments.length == 0)
			return this.___data___;
		else if (arguments.length == 1)
			return this.___data___[arguments[0]] ;
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			delete this.___data___[arguments[0]];
		else
			this.___data___[arguments[0]] = arguments[1];
		
		return this;
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./src/dom/extentions/EventSupport.js":
/*!********************************************!*\
  !*** ./src/dom/extentions/EventSupport.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");

const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("EventSupport", Prototype => {
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
/* harmony default export */ __webpack_exports__["default"] = (support);


/***/ }),

/***/ "./src/dom/extentions/HtmlClassSupport.js":
/*!************************************************!*\
  !*** ./src/dom/extentions/HtmlClassSupport.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("HtmlClassSupport", Prototype => {	
	Prototype.addClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.add(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments,clazz => this.addClass(clazz));
		
		return this;
	};
	
	Prototype.removeClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.remove(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments, clazz => this.removeClass(clazz));
		
		return this;		
	};
	
	Prototype.toggleClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.toggle(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments, clazz => this.toogleClass(clazz));
		
		return this;
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./src/dom/extentions/ListSupport.js":
/*!*******************************************!*\
  !*** ./src/dom/extentions/ListSupport.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ListSupport", Prototype => {		
	Prototype.indexOf = function() {
		for(let i = 0; i < this.length; i++)
			if(this[i] == arguments[0])
				return i;
		
		return -1;
	};

	Prototype.forEach = function(){
		return Array.prototype.forEach.apply(Array.from(this), arguments);
	};
	
	Prototype.map = function(){
		return Array.prototype.map.apply(Array.from(this), arguments);
	};
	
	Prototype.filter = function(){
		return Array.prototype.filter.apply(Array.from(this), arguments);
	};

	Prototype.first = function(){
		if(this.length > 0)
			return this[0];
	};	
	
	Prototype.last = function(){
		if(this.length > 0)
			return this[this.length - 1];
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./src/dom/extentions/ManipulationSupport.js":
/*!***************************************************!*\
  !*** ./src/dom/extentions/ManipulationSupport.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Utils */ "./src/utils/Utils.js");



const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ManipulationSupport", Prototype => {	
	Prototype.empty = function(){
		let nodes = this.childNodes
		while(nodes.length != 0)			
			nodes[0].remove(true);
		
		return this;
	};
	
	Prototype.content = function(){
		return this.childNodes;
	};	
	
	Prototype.html = function(){
		if(arguments.length == 0)			
			return this.innerHTML;
		else if(arguments.length == 1 && typeof arguments[0] === "boolean")
			if(arguments[0])
				return this.outerHTML;
			else
				return this.innerHTML;
		else 
			Array.from(arguments).forEach(content => {
				if(typeof content === "string")
					this.innerHTML = content;
				else if(content instanceof Node || content instanceof NodeList){
					this.empty();
					this.append(content);
				}
			});		
			
		return this;
	};
	
	const append = function(){
		const append = Prototype.appendChild.bind(this);
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(arg instanceof Node)
				this.appendChild(arg);
			else if(typeof arg === "string")
				create(arg).forEach(append);
			else if(typeof arg.forEach === "function")
				arg.forEach(append);
		}
	};	
	Prototype.append = append;
	
	const prepend = function(aFirstElement, aElement){
		this.insertBefore(aElement, aFirstElement);
	};
	Prototype.prepend = function(){
		if(this.childNodes.length == 0)
			append.apply(this, arguments);
		else {
			const first = this.childNodes.first();
			const insert = prepend.bind(this, first);
			for(let i = 0; i < arguments.length; i++){
				const arg = arguments[i];
				if(arg instanceof Node)
					insert(arg);
				else if(typeof arg === "string")
					arg.forEach(insert);
				else if(typeof arg.forEach === "function")
					arg.forEach(insert);
			}
		}
	};
	
	Prototype.replace = function(){
		if(arguments.length < 1)
			throw new Error("Insufficient arguments! One or two nodes required!");
		
		const parent = arguments.length == 1 ? this.parentNode : this;
		const oldNode = arguments.length == 1 ? this : arguments[0];
		const newNode = arguments.length == 1 ? arguments[0] : arguments[1];
		
		if(newNode instanceof Array || newNode instanceof NodeList || newNode instanceof HTMLCollection){
			newNode.forEach(aItem => parent.insertBefore(aItem, oldNode));
			oldNode.remove();
		}
		else
			parent.replaceChild(newNode,oldNode);
	};
	
	Prototype.after = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes after this node! Parent node not available!");
		
		const parent = this.parentNode;
		const next = this.nextSibling;
		if(next)
			Prototype.before.apply(next, arguments);
		else
			Prototype.append.apply(parent, arguments);
	};	
	
	Prototype.before = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes after this node! Parent node not available!");
		
		const parent = this.parentNode;
		const inserter = (node) => {parent.insertBefore(node, this);}
		for(let i = 0; i < arguments.length; i++){
			const arg = arguments[i];
			if(arg instanceof Node)
				inserter(arg);
			else if(typeof arg === "string")
				arg.forEach(inserter);
			else if(typeof arg.forEach === "function")
				arg.forEach(inserter);
		}
	};	
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./src/dom/extentions/QuerySupport.js":
/*!********************************************!*\
  !*** ./src/dom/extentions/QuerySupport.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const parentSelector = /:parent(\(\"([^\)]*)\"\))?/i;
const queryExecuter = function(aElement, aSelector){
	let match = parentSelector.exec(aSelector);
	if(match){
		let result = aElement;
		if(match.index > 0){
			result = aElement.querySelectorAll(aSelector.substr(0, match.index));
			if(result.length == 0)
				return;
		}	
		result = result.parent(match[2]);			
		if(result){
			let nextSelector = aSelector.substr(match.index + match[0].length).trim();
			if(nextSelector.length > 0)
				result = result.find(nextSelector);
			
			return result;
		}		
	}
	else
		return aElement.querySelectorAll(aSelector);
};


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("QuerySupport", Prototype => {	
	Prototype.find = function() {
		let nodes = [];
		let args = Array.from(arguments);
		let arg = args.shift();
		while(arg){
			if(typeof arg === "string"){
				let result = queryExecuter(this, arg);
				if(result)
					nodes.push(result);
			}
			
			arg = args.shift();
		}
		
		let result = NodeList.from.apply(null, nodes);
		return result;
	};
	
	Prototype.is = function() {
		if(this instanceof Document)
			return false;		
		else if(arguments.length == 1){
			if(typeof arguments[0] === "string")
				return this.matches(arguments[0]);
			else if(typeof arguments[0].length === "number"){
				let filter = arguments[0];
				for(let i = 0; i < filter.length; i++)
					if(this.matches(filter[i]))
						return true;
			}				
		}
		else if(arguments.length > 1)
			return this.is(Array.from(arguments));
		
		return false;
	};	
	
	Prototype.parent = function() {
		if(!this.parentNode)
			return undefined;		
		else if(typeof arguments[0] === "string"){
			let parent = this.parentNode;
			try{
				while(parent && !parent.is(arguments[0]))
					parent = parent.parent(arguments[0]);
			}catch (e) {
				console.error("this:", this, "parent:", parent, "error:", e);
			}
			return parent;
		}
		return this.parentNode;
	};
	
	Prototype.parents = function() {		
		let result = new Array();
		let parent = Prototype.parent.apply(this, arguments);
		while(parent){
			result.push(parent);
			parent = Prototype.parent.apply(parent, arguments);
		}
		
		return NodeList.from(result);
	};	

	Prototype.selector = function(){
		if(this instanceof Document || this instanceof DocumentFragment)
			return undefined;
		else if(this.id)
			return "#" + this.id;
		else{			
			let selector = this.tagName.toLowerCase();
			let parent = this.parent();
			if(parent){
				let sameTagSiblings = parent.find(":scope>" + selector);			
				if (sameTagSiblings instanceof NodeList) {
					let index = sameTagSiblings.indexOf(this);
					if (index > 0)
						selector += ':nth-child(' + (index + 1) + ')';
				}		
				let parentSelector = parent.selector();
				return parentSelector ? parentSelector + ">" + selector : selector;
			} 
			return selector;
		}
	};	

	Prototype.closest = function(aQuery) {			
		let node = this;
		while(node){
			let closests = node.find(aQuery);
			if(closests && closests.length > 0)
				return closests;
			else if(node.is(aQuery))
				return NodeList.from(node);
			
			node = node.parent();		
		}
	};
	
	Prototype.nested = function(aQuery){
		if(this.is(aQuery))
			return NodeList.from(this);	
		
		let nested = this.find(aQuery);
		if(nested && nested.length > 0)
			return nested;
		else
			return NodeList.from(this.parent(aQuery));
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);



/***/ }),

/***/ "./src/dom/extentions/ReadyEventSupport.js":
/*!*************************************************!*\
  !*** ./src/dom/extentions/ReadyEventSupport.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ReadyEventSupport", Prototype => {
	Prototype.ready = function(aFunction, once){	
		this.on("ready", aFunction, once);
		if(document.readyState == "complete")			
			this.trigger("ready");
		
		return this;
	};
	
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./src/dom/extentions/ShowHideSupport.js":
/*!***********************************************!*\
  !*** ./src/dom/extentions/ShowHideSupport.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ShowHideSupport", Prototype => {
	Prototype.show = function(){
		if(this.___hidden__){
			this.style.display = this.___display___ || "";
			this.___hidden__ = false;
		}
		return this;
	};
	
	Prototype.hide = function(){
		if(!this.___hidden__){
			this.___display___ = this.style.display;
			this.style.display = "none";
			this.___hidden__ = true;
		}	
		
		return this;
	};
	
	Prototype.toggleShow = function(){
		if(this.___hidden__)
			return this.show();
		else
			return this.hide();
	};
	
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./src/dom/extentions/ValueSupport.js":
/*!********************************************!*\
  !*** ./src/dom/extentions/ValueSupport.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./src/utils/Extender.js");


const InputTypes = [
	{
		selector : "select",
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
		selector : "input[type=\"checkbox\"], input[type=\"radio\"]",
		get : function(){
			if(this.value == "on" || this.value == "off")
				return this.checked;
			else if(this.checked)
				return this.value;				
		},
		set : function(aValue){
			if(typeof aValue === "boolean")
				this.checked = aValue;
			else if(typeof aValue === "string")
				this.checked = this.value == aValue;
			else if(Array.isArray(aValue))
				this.checked = aValue.indexOf(this.value) >= 0;
			
			this.trigger("changed");
		}
	}
];

const DefaultInputType = {
		get : function(){
			return this.value;
		},
		set : function(aValue){
			this.value = aValue;
			this.trigger("input");
		}	
};

const getInputType = function(aElement){
	for(let i = 0; i < InputTypes.length; i++)
		if(aElement.is(InputTypes[i].selector))
			return InputTypes[i];		
	return DefaultInputType;
};


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ValueSupport", Prototype => {	
	Prototype.val = function() {
		let type = getInputType(this);
		if(arguments.length == 0)
			return type.get.apply(this, arguments);
		else
			type.set.apply(this, arguments);
			
		return this;
	};	
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (DelegaterBuilder);

/***/ }),

/***/ "./src/utils/ExtendPrototype.js":
/*!**************************************!*\
  !*** ./src/utils/ExtendPrototype.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const extendPrototype = function(){
	const args = Array.from(arguments);
	const type = args.shift();	
	while(args.length > 0){
		const extender = args.shift();
		extender(type);
	}
};

/* harmony default export */ __webpack_exports__["default"] = (extendPrototype);

/***/ }),

/***/ "./src/utils/Extender.js":
/*!*******************************!*\
  !*** ./src/utils/Extender.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.js");


const EXTENSIONS_MAP = _Utils__WEBPACK_IMPORTED_MODULE_0__["default"].globalVar("___DOM_API_EXTENSION_MAP___", {});
const Extender = function(aName, aExtention){
	return function(aType){	
		let extensions = EXTENSIONS_MAP[aType.name];
		if(!extensions)
			extensions = EXTENSIONS_MAP[aType.name] = {};		
		
		if(!extensions[aName]){
			extensions[aName] = true;
			aExtention(aType.prototype);
		}
		else
			console.warn("duplicated load of extension \"" + aName + "\"!");
	}
};

/* harmony default export */ __webpack_exports__["default"] = (Extender);

/***/ }),

/***/ "./src/utils/Utils.js":
/*!****************************!*\
  !*** ./src/utils/Utils.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {const Utils = {
	global : (() => {
		if(typeof window !== "undefined") return window;
		if(typeof global !== "undefined") return global;
		if(typeof self !== "undefined") return self;
		return {};		
	})(),
	globalVar : function(aName, aInitValue){
		if(arguments.length === 2 && typeof Utils.global[aName] === "undefined")
			Utils.global[aName] = aInitValue;
		
		return Utils.global[aName];		
	}
};

/* harmony default export */ __webpack_exports__["default"] = (Utils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9Eb2N1bWVudEZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL0V2ZW50VGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vSFRNTEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9IVE1MSW5wdXRFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vSFRNTFNlbGVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9IVE1MVGV4dEFyZWFFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vSHRtbENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9Ob2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vTm9kZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9leHRlbnRpb25zL0F0dHJpYnV0ZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9leHRlbnRpb25zL0RhdGFTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9leHRlbnRpb25zL0xpc3RTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0RlbGVnYXRlckJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0V4dGVuZFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRXh0ZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL1V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUNsQnZCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFk7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBLDZCO0FBQ0E7QUFDQTs7QUFFZSxvRUFBSyxFIiwiZmlsZSI6ImRlZmF1bHRqcy1leHRkb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zcmMvaW5kZXhcIjsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcblV0aWxzLmdsb2JhbC5kZWZhdWx0anMgPSBVdGlscy5nbG9iYWwuZGVmYXVsdGpzIHx8IHt9O1xyXG5VdGlscy5nbG9iYWwuZGVmYXVsdGpzLmV4dGRvbSA9IFV0aWxzLmdsb2JhbC5kZWZhdWx0anMuZXh0ZG9tIHx8IHtcclxuXHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXHJcblx0dXRpbHMgOiB7XHJcblx0XHRVdGlsczogVXRpbHNcclxuXHR9XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwuZmluZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5maW5kLmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuVXRpbHMuZ2xvYmFsLnJlYWR5ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LnJlYWR5LmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuVXRpbHMuZ2xvYmFsLmNyZWF0ZSA9IGZ1bmN0aW9uKGFDb250ZW50LCBhc1RlbXBsYXRlKSB7XHJcblx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT09IFwic3RyaW5nXCIpXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZyFcIik7XHJcblx0XHJcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XHJcblx0dGVtcGxhdGUuaW5uZXJIVE1MID0gYUNvbnRlbnQ7XHJcblx0aWYoYXNUZW1wbGF0ZSlcclxuXHRcdHJldHVybiB0ZW1wbGF0ZTtcclxuXHRcclxuXHRyZXR1cm4gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKS5jaGlsZE5vZGVzO1xyXG59O1xyXG5cclxuVXRpbHMuZ2xvYmFsLnNjcmlwdCA9IGZ1bmN0aW9uKGFGaWxlLCBhVGFyZ2V0KSB7XHJcblx0aWYoYUZpbGUgaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdHJldHVybiBQcm9taXNlLmFsbChhRmlsZS5tYXAoZmlsZSA9PiBVdGlscy5nbG9iYWwuc2NyaXB0KGZpbGUsIGFUYXJnZXQpKSk7XHJcblx0XHJcblx0aWYodHlwZW9mIGFGaWxlID09PSBcInN0cmluZ1wiKVx0XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHIsZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cdFx0XHRzY3JpcHQub25sb2FkID0gZnVuY3Rpb24oKXtyKCl9O1xyXG5cdFx0XHRzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uKCl7ZShcImpxdWVyeSBsb2FkIGVycm9yIVwiKX07XHJcblx0XHRcdCFhVGFyZ2V0ID8gZG9jdW1lbnQuYm9keS5hcHBlbmQoc2NyaXB0KSA6IGFUYXJnZXQuYXBwZW5kKHNjcmlwdCk7XHJcblx0XHRcdHNjcmlwdC5zcmMgPSBhRmlsZTtcclxuXHRcdH0pO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChcIkZpcnN0IHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgYSBzdHJpbmchXCIpO1xyXG59OyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBSZWFkeUV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnQsIFF1ZXJ5U3VwcG9ydCwgUmVhZHlFdmVudFN1cHBvcnQpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gZG9jdW1lbnQudHJpZ2dlcihcInJlYWR5XCIpKTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnRGcmFnbWVudCwgUXVlcnlTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTtcclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBBdHRyaWJ1dGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShFbGVtZW50LFF1ZXJ5U3VwcG9ydCwgQXR0cmlidXRlU3VwcG9ydCwgTWFuaXB1bGF0aW9uU3VwcG9ydCk7XHJcbi8vXHJcbi8vRWxlbWVudC5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcbi8vXHRsZXQgcmVzdWx0ID0gbmV3IE1hcCgpO1x0XHRcclxuLy9cdGxldCBpbnB1dHMgPSB0aGlzLmZpbmQoXCJpbnB1dFwiLCBcInNlbGVjdFwiLCBcInRleHRhcmVhXCIpO1xyXG4vL1x0aWYoaW5wdXRzKXtcdFxyXG4vL1x0XHRpbnB1dHMuZm9yRWFjaChmdW5jdGlvbihub2RlKXtcclxuLy9cdFx0XHRsZXQgdmFsdWUgPSBub2RlLnZhbCgpO1xyXG4vL1x0XHRcdGlmKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB2YWx1ZSAhPSBudWxsKVxyXG4vL1x0XHRcdFx0cmVzdWx0LnNldCgobm9kZS5uYW1lIHx8IG5vZGUuaWQgfHwgbm9kZS5zZWxlY3RvcigpKSwgbm9kZS52YWwoKSk7XHJcbi8vXHRcdH0pO1x0XHJcbi8vXHRcdHJldHVybiByZXN1bHQ7XHJcbi8vXHR9XHJcbi8vfTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcbmltcG9ydCBFdmVudFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnRcIjtcblxuZXh0ZW5kUHJvdG90eXBlKEV2ZW50VGFyZ2V0LCBFdmVudFN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgSHRtbENsYXNzU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnRcIjtcclxuaW1wb3J0IFNob3dIaWRlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MRWxlbWVudCwgSHRtbENsYXNzU3VwcG9ydCwgU2hvd0hpZGVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MSW5wdXRFbGVtZW50LFZhbHVlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFNlbGVjdEVsZW1lbnQsVmFsdWVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MVGV4dEFyZWFFbGVtZW50LEV4dGVuZGVyKFwiVmFsdWVTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcclxuXHRQcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnZhbHVlID0gYXJndW1lbnRzWzBdXHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG59KSk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEZWxlZ2F0ZXJCdWlsZGVyIGZyb20gXCIuLi91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCBMaXN0U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0xpc3RTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTENvbGxlY3Rpb24sIExpc3RTdXBwb3J0KTtcclxuXHJcbkhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5hcHBseVRvID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGNhbGxpbmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0Y29uc3QgaXNGdW5jdGlvbiA9IHR5cGVvZiBjYWxsaW5nID09PSBcImZ1bmN0aW9uXCI7XHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKXtcclxuXHRcdGNvbnN0IG5vZGUgPSB0aGlzW2ldO1xyXG5cdFx0bGV0XHRyZXN1bHQ7XHJcblx0XHRpZihpc0Z1bmN0aW9uKVxyXG5cdFx0XHRyZXN1bHQgPSBjYWxsaW5nLmFwcGx5KFtub2RlXS5jb25jYXQoYXJncykpO1xyXG5cdFx0ZWxzZSBpZih0eXBlb2Ygbm9kZVtjYWxsaW5nXSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRyZXN1bHQgPSBub2RlW2NhbGxpbmddLmFwcGx5KG5vZGUsIGFyZ3MpO1xyXG5cdFx0XHJcblx0XHRpZihyZXN1bHQpXHJcblx0XHRcdHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gcmVzdWx0cztcclxufTtcclxuXHJcbkhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuXHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKXtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gbmV3IE1hcCgpO1xyXG5cdFx0XHR0aGlzLmZvckVhY2gobm9kZSA9PiB7XHJcblx0XHRcdFx0aWYodHlwZW9mIG5vZGUudmFsID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBub2RlLnZhbCgpO1xyXG5cdFx0XHRcdFx0aWYodmFsdWUpXHJcblx0XHRcdFx0XHRcdHJlc3VsdC5zZXQoKG5vZGUubmFtZSB8fCBub2RlLmlkIHx8IG5vZGUuc2VsZWN0b3IoKSksIG5vZGUudmFsKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0SFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmFwcGx5VG8uYXBwbHkodGhpcywgW1widmFsXCJdLmNvbmNhdChBcnJheS5mcm9tKGFyZ3VtZW50cykpKTtcclxufTtcclxuXHJcbkhUTUxDb2xsZWN0aW9uLmZyb20gPSBmdW5jdGlvbigpe1xyXG5cdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0Y29uc3QgZGF0YSA9IHt9O1xyXG5cdGxldCBjb3VudGVyID0gMDtcclxuXHRcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0Y29uc3QgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0aWYodHlwZW9mIGFyZyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcmcgIT0gbnVsbCl7XHJcblx0XHRcdGlmKGFyZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KVxyXG5cdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0ZWxzZSBpZihhcmcgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCBhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBhcmcgaW5zdGFuY2VvZiBBcnJheSl7XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRpZihhcmdbaV0gJiYgYXJnW2ldIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xyXG5cdFx0XHRcdFx0XHRkYXRhW2NvdW50ZXIrK10gPSB7dmFsdWU6IGFyZ1tpXSwgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGRhdGEubGVuZ3RoID0ge3ZhbHVlOiBjb3VudGVyfTtcclxuXHRyZXR1cm4gIE9iamVjdC5jcmVhdGUoSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLCBkYXRhKTtcclxufTtcclxuXHJcblxyXG5EZWxlZ2F0ZXJCdWlsZGVyKGZ1bmN0aW9uKGFGdW5jdGlvbk5hbWUsIHRoZUFyZ3VtZW50cykge1xyXG5cdGxldCByZXN1bHRzID0gW107XHRcclxuXHR0aGlzLmZvckVhY2gobm9kZSA9PiB7XHJcblx0XHRpZihub2RlICYmIHR5cGVvZiBub2RlW2FGdW5jdGlvbk5hbWVdID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gbm9kZVthRnVuY3Rpb25OYW1lXS5hcHBseShub2RlLCB0aGVBcmd1bWVudHMpO1xyXG5cdFx0XHRpZihyZXN1bHQpeyBcclxuXHRcdFx0XHRpZihyZXN1bHQgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbilcclxuXHRcdFx0XHRcdHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChBcnJheS5mcm9tKHJlc3VsdCkpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG5cdFx0XHR9XHRcdFxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdGlmKHJlc3VsdHMubGVuZ3RoID09PSAwKVxyXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRlbHNlIGlmKHJlc3VsdHNbMF0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCByZXN1bHRzWzBdIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pXHJcblx0XHRyZXR1cm4gSFRNTENvbGxlY3Rpb24uZnJvbS5hcHBseShudWxsLCByZXN1bHRzKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gcmVzdWx0cztcclxufSxIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUsIE5vZGUucHJvdG90eXBlLCBIVE1MRWxlbWVudC5wcm90b3R5cGUsIEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLCBFbGVtZW50LnByb3RvdHlwZSwgRXZlbnRUYXJnZXQucHJvdG90eXBlKTtcclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEYXRhU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0RhdGFTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGUsRGF0YVN1cHBvcnQsTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEZWxlZ2F0ZXJCdWlsZGVyIGZyb20gXCIuLi91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCBMaXN0U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0xpc3RTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoTm9kZUxpc3QsIExpc3RTdXBwb3J0KTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5hcHBseVRvID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGNhbGxpbmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0Y29uc3QgaXNGdW5jdGlvbiA9IHR5cGVvZiBjYWxsaW5nID09PSBcImZ1bmN0aW9uXCI7XHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKXtcclxuXHRcdGNvbnN0IG5vZGUgPSB0aGlzW2ldO1xyXG5cdFx0bGV0XHRyZXN1bHQ7XHJcblx0XHRpZihpc0Z1bmN0aW9uKVxyXG5cdFx0XHRyZXN1bHQgPSBjYWxsaW5nLmFwcGx5KFtub2RlXS5jb25jYXQoYXJncykpO1xyXG5cdFx0ZWxzZSBpZih0eXBlb2Ygbm9kZVtjYWxsaW5nXSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRyZXN1bHQgPSBub2RlW2NhbGxpbmddLmFwcGx5KG5vZGUsIGFyZ3MpO1xyXG5cdFx0XHJcblx0XHRpZihyZXN1bHQpXHJcblx0XHRcdHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gcmVzdWx0cztcclxufTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuXHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKXtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gbmV3IE1hcCgpO1xyXG5cdFx0XHR0aGlzLmZvckVhY2gobm9kZSA9PiB7XHJcblx0XHRcdFx0aWYodHlwZW9mIG5vZGUudmFsID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBub2RlLnZhbCgpO1xyXG5cdFx0XHRcdFx0aWYodmFsdWUpXHJcblx0XHRcdFx0XHRcdHJlc3VsdC5zZXQoKG5vZGUubmFtZSB8fCBub2RlLmlkIHx8IG5vZGUuc2VsZWN0b3IoKSksIG5vZGUudmFsKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0Tm9kZUxpc3QucHJvdG90eXBlLmFwcGx5VG8uYXBwbHkodGhpcywgW1widmFsXCJdLmNvbmNhdChBcnJheS5mcm9tKGFyZ3VtZW50cykpKTtcclxufTtcclxuXHJcbk5vZGVMaXN0LmZyb20gPSBmdW5jdGlvbigpe1xyXG5cdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0Y29uc3QgZGF0YSA9IHt9O1xyXG5cdGxldCBjb3VudGVyID0gMDtcclxuXHRcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0Y29uc3QgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0aWYodHlwZW9mIGFyZyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcmcgIT0gbnVsbCl7XHJcblx0XHRcdGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0ZGF0YVtjb3VudGVyKytdID0ge3ZhbHVlOiBhcmcsIGVudW1lcmFibGU6IHRydWV9O1xyXG5cdFx0XHRlbHNlIGlmKGFyZyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGFyZyBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uIHx8IGFyZyBpbnN0YW5jZW9mIEFycmF5KXtcclxuXHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYXJnLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdGlmKGFyZ1tpXSAmJiBhcmdbaV0gaW5zdGFuY2VvZiBOb2RlKXtcclxuXHRcdFx0XHRcdFx0ZGF0YVtjb3VudGVyKytdID0ge3ZhbHVlOiBhcmdbaV0sIGVudW1lcmFibGU6IHRydWV9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRkYXRhLmxlbmd0aCA9IHt2YWx1ZTogY291bnRlcn07XHJcblx0cmV0dXJuICBPYmplY3QuY3JlYXRlKE5vZGVMaXN0LnByb3RvdHlwZSwgZGF0YSk7XHJcbn07XHJcblxyXG5cclxuRGVsZWdhdGVyQnVpbGRlcihmdW5jdGlvbihhRnVuY3Rpb25OYW1lLCB0aGVBcmd1bWVudHMpIHtcclxuXHRsZXQgcmVzdWx0cyA9IFtdO1x0XHJcblx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0aWYobm9kZSAmJiB0eXBlb2Ygbm9kZVthRnVuY3Rpb25OYW1lXSA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gbm9kZVthRnVuY3Rpb25OYW1lXS5hcHBseShub2RlLCB0aGVBcmd1bWVudHMpO1xyXG5cdFx0XHRpZihyZXN1bHQpeyBcclxuXHRcdFx0XHRpZihyZXN1bHQgaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuXHRcdFx0XHRcdHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChBcnJheS5mcm9tKHJlc3VsdCkpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG5cdFx0XHR9XHRcdFxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdGlmKHJlc3VsdHMubGVuZ3RoID09PSAwKVxyXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRlbHNlIGlmKHJlc3VsdHNbMF0gaW5zdGFuY2VvZiBOb2RlIHx8IHJlc3VsdHNbMF0gaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tLmFwcGx5KG51bGwsIHJlc3VsdHMpO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiByZXN1bHRzO1xyXG59LE5vZGVMaXN0LnByb3RvdHlwZSwgTm9kZS5wcm90b3R5cGUsIEhUTUxFbGVtZW50LnByb3RvdHlwZSwgSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsIEVsZW1lbnQucHJvdG90eXBlLCBFdmVudFRhcmdldC5wcm90b3R5cGUpO1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJBdHRyaWJ1dGVTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0UHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZXMoKSA/ICgoKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0XHRcdFx0dGhpcy5nZXRBdHRyaWJ1dGVOYW1lcygpLmZvckVhY2gobmFtZSA9PiB7XHJcblx0XHRcdFx0XHRyZXN1bHRbbmFtZV0gPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9KSgpIDogdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwidW5kZWZpbmVkXCIgfHwgYXJndW1lbnRzWzFdID09IG51bGwpXHJcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJEYXRhU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdFByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuX19fZGF0YV9fXyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHR0aGlzLl9fX2RhdGFfX18gPSB7fTtcclxuXHRcdFx0aWYodHlwZW9mIHRoaXMuZGF0YXNldCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdGhpcy5kYXRhc2V0KVxyXG5cdFx0XHRcdFx0dGhpcy5fX19kYXRhX19fW25hbWVdID0gdGhpcy5kYXRhc2V0W25hbWVdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLl9fX2RhdGFfX187XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdHJldHVybiB0aGlzLl9fX2RhdGFfX19bYXJndW1lbnRzWzBdXSA7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHRkZWxldGUgdGhpcy5fX19kYXRhX19fW2FyZ3VtZW50c1swXV07XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuX19fZGF0YV9fX1thcmd1bWVudHNbMF1dID0gYXJndW1lbnRzWzFdO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkV2ZW50U3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdGNvbnN0IGdldEV2ZW50SGFuZGxlcyA9IGVsZW1lbnQgPT4ge1xyXG5cdFx0aWYoIWVsZW1lbnQuX19fRVZFTlRIQU5ETEVTX19fKXtcclxuXHRcdFx0Y29uc3QgaGFuZGxlcyA9IFtdXHJcblx0XHRcdGVsZW1lbnQuX19fRVZFTlRIQU5ETEVTX19fID0ge1xyXG5cdFx0XHRcdGFwcGVuZCA6IChldmVudHMsIGhhbmRsZSwgd3JhcHBlciwgb3B0aW9uKSA9PiB7XHJcblx0XHRcdFx0XHRldmVudHMuZm9yRWFjaChldmVudCA9PiB7XHJcblx0XHRcdFx0XHRcdGhhbmRsZXMucHVzaCh7ZXZlbnQgOiBldmVudCxoYW5kbGUgOiBoYW5kbGUsIHdyYXBwZXIgOiB3cmFwcGVyLCBvcHRpb246IG9wdGlvbn0pO1xyXG5cdFx0XHRcdFx0XHRhZGRFdmVudExpc3RlbmVyLmNhbGwoZWxlbWVudCwgZXZlbnQsIHdyYXBwZXIsIG9wdGlvbik7XHRcdFx0XHJcblx0XHRcdFx0XHR9KTtcdFx0XHJcblx0XHRcdFx0fSxcdFx0XHRcdFx0XHJcblx0XHRcdFx0cmVtb3ZlIDogKGV2ZW50cywgaGFuZGxlKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBpdGVtcyA9IGhhbmRsZXMuZmlsdGVyKGl0ZW0gPT4gKCFldmVudHMgPyB0cnVlIDogZXZlbnRzLmluZGV4T2YoaXRlbS5ldmVudCkgPj0gMCkgJiYgKCFoYW5kbGUgPyB0cnVlIDogaGFuZGxlID09IGl0ZW0uaGFuZGxlKSk7XHJcblx0XHRcdFx0XHRpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBpbmRleCA9IGhhbmRsZXMuaW5kZXhPZihpdGVtKTtcclxuXHRcdFx0XHRcdFx0cmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKGVsZW1lbnQsIGl0ZW0uZXZlbnQsIGl0ZW0ud3JhcHBlcik7XHJcblx0XHRcdFx0XHRcdGhhbmRsZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdH0pO1x0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gZWxlbWVudC5fX19FVkVOVEhBTkRMRVNfX187XHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBhZGRFdmVudExpc3RlbmVyID0gUHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XHRcclxuXHRQcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGFFdmVudCwgYUhhbmRsZSwgYU9wdGlvbil7XHJcblx0XHRQcm90b3R5cGUub24uY2FsbCh0aGlzLCBhRXZlbnQsIGFIYW5kbGUsIHR5cGVvZiBhT3B0aW9uID09PSBcImJvb2xlYW5cIiA/IHtjYXB0dXJlIDogYU9wdGlvbiwgb25jZSA6IGZhbHNlLCBwYXNzaXZlIDogZmFsc2V9IDogYU9wdGlvbik7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUub24gPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGNvbnN0IGV2ZW50cyA9IGFyZ3Muc2hpZnQoKS5zcGxpdCgvKFxccyspfChcXHMqLFxccyopLyk7XHJcblx0XHRjb25zdCBmaWx0ZXIgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IGFyZ3Muc2hpZnQoKSA6IG51bGw7XHJcblx0XHRjb25zdCBoYW5kbGUgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRjb25zdCBvcHRpb24gPSB0eXBlb2YgYXJnc1swXSAhPT0gXCJ1bmRlZmluZWRcIiA/IGFyZ3Muc2hpZnQoKSA6IHtjYXB0dXJlIDogZmFsc2UsIG9uY2UgOiBmYWxzZSwgcGFzc2l2ZSA6IGZhbHNlfTtcclxuXHRcdGNvbnN0IHdyYXBwZXIgPSBmdW5jdGlvbihhRXZlbnQpIHtcclxuXHRcdFx0aWYoZmlsdGVyKSB7XHJcblx0XHRcdFx0Y29uc3QgdHlwZSA9IGFFdmVudC50YXJnZXQubm9kZVR5cGU7XHJcblx0XHRcdFx0aWYoIXR5cGUgXHJcblx0XHRcdFx0XHQmJiAodHlwZSA9PSBOb2RlLkRPQ1VNRU5UX1RZUEVfTk9ERSB8fCB0eXBlID09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSlcclxuXHRcdFx0XHRcdCYmICFhRXZlbnQudGFyZ2V0LmlzKGZpbHRlcikpXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gaGFuZGxlLmFwcGx5KGhhbmRsZSwgYXJndW1lbnRzKTtcclxuXHRcdFx0aWYob3B0aW9uLm9uY2UpXHJcblx0XHRcdFx0Z2V0RXZlbnRIYW5kbGVzKGFFdmVudC5jdXJyZW50VGFyZ2V0KS5yZW1vdmUoW2FFdmVudC50eXBlXSwgaGFuZGxlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH07XHJcblx0XHRnZXRFdmVudEhhbmRsZXModGhpcykuYXBwZW5kKGV2ZW50cywgaGFuZGxlLCB3cmFwcGVyLCBvcHRpb24pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IHJlbW92ZUV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcclxuXHRQcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gUHJvdG90eXBlLnJlbW92ZU9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUucmVtb3ZlT24gPSBmdW5jdGlvbigpe1xyXG5cdFx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGNvbnN0IGV2ZW50cyA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiICA/IGFyZ3Muc2hpZnQoKS5zcGxpdCgvKFxccyspfChcXHMqLFxccyopLykgOiBudWxsO1xyXG5cdFx0Y29uc3QgaGFuZGxlID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwiZnVuY3Rpb25cIiA/IGFyZ3Muc2hpZnQoKSA6IG51bGw7XHRcdFxyXG5cdFx0Z2V0RXZlbnRIYW5kbGVzKHRoaXMpLnJlbW92ZShldmVudHMsIGhhbmRsZSk7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1x0XHRcclxuXHRcdGNvbnN0IHR5cGUgPSBhcmdzLnNoaWZ0KCk7XHRcdFxyXG5cdFx0Y29uc3QgZGF0YSA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3Muc2hpZnQoKSA6IG51bGw7XHJcblx0XHRjb25zdCBldmVudCA9ICFkYXRhID8gbmV3IEN1c3RvbUV2ZW50KHR5cGUsICB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDogZGF0YSB9KSA6IG5ldyBFdmVudCh0eXBlLCB0cnVlLCB0cnVlKTsgXHJcblx0XHRcclxuXHRcdGlmKGRhdGEgaW5zdGFuY2VvZiBFdmVudClcclxuXHRcdFx0ZXZlbnQuZGVsZWdhdGVkRXZlbnQgPSAgZGF0YTtcclxuXHRcdFxyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJIdG1sQ2xhc3NTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcclxuXHRQcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaChjbGF6eiA9PiB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhenopKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLGNsYXp6ID0+IHRoaXMuYWRkQ2xhc3MoY2xhenopKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaChjbGF6eiA9PiB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhenopKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBjbGF6eiA9PiB0aGlzLnJlbW92ZUNsYXNzKGNsYXp6KSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShjbGF6eikpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsIGNsYXp6ID0+IHRoaXMudG9vZ2xlQ2xhc3MoY2xhenopKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiTGlzdFN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcdFx0XHJcblx0UHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbigpIHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRpZih0aGlzW2ldID09IGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApXHJcblx0XHRcdHJldHVybiB0aGlzWzBdO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApXHJcblx0XHRcdHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJNYW5pcHVsYXRpb25TdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcclxuXHRQcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IG5vZGVzID0gdGhpcy5jaGlsZE5vZGVzXHJcblx0XHR3aGlsZShub2Rlcy5sZW5ndGggIT0gMClcdFx0XHRcclxuXHRcdFx0bm9kZXNbMF0ucmVtb3ZlKHRydWUpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5jb250ZW50ID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5odG1sID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcdFx0XHRcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdGlmKGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5vdXRlckhUTUw7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIFxyXG5cdFx0XHRBcnJheS5mcm9tKGFyZ3VtZW50cykuZm9yRWFjaChjb250ZW50ID0+IHtcclxuXHRcdFx0XHRpZih0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gY29udGVudDtcclxuXHRcdFx0XHRlbHNlIGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlIHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCl7XHJcblx0XHRcdFx0XHR0aGlzLmVtcHR5KCk7XHJcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChjb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHRcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRjb25zdCBhcHBlbmQgPSBQcm90b3R5cGUuYXBwZW5kQ2hpbGQuYmluZCh0aGlzKTtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQoYXJnKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdGNyZWF0ZShhcmcpLmZvckVhY2goYXBwZW5kKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChhcHBlbmQpO1xyXG5cdFx0fVxyXG5cdH07XHRcclxuXHRQcm90b3R5cGUuYXBwZW5kID0gYXBwZW5kO1xyXG5cdFxyXG5cdGNvbnN0IHByZXBlbmQgPSBmdW5jdGlvbihhRmlyc3RFbGVtZW50LCBhRWxlbWVudCl7XHJcblx0XHR0aGlzLmluc2VydEJlZm9yZShhRWxlbWVudCwgYUZpcnN0RWxlbWVudCk7XHJcblx0fTtcclxuXHRQcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09IDApXHJcblx0XHRcdGFwcGVuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNvbnN0IGZpcnN0ID0gdGhpcy5jaGlsZE5vZGVzLmZpcnN0KCk7XHJcblx0XHRcdGNvbnN0IGluc2VydCA9IHByZXBlbmQuYmluZCh0aGlzLCBmaXJzdCk7XHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdGNvbnN0IGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdFx0aW5zZXJ0KGFyZyk7XHJcblx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0YXJnLmZvckVhY2goaW5zZXJ0KTtcclxuXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0YXJnLmZvckVhY2goaW5zZXJ0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA8IDEpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkluc3VmZmljaWVudCBhcmd1bWVudHMhIE9uZSBvciB0d28gbm9kZXMgcmVxdWlyZWQhXCIpO1xyXG5cdFx0XHJcblx0XHRjb25zdCBwYXJlbnQgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyB0aGlzLnBhcmVudE5vZGUgOiB0aGlzO1xyXG5cdFx0Y29uc3Qgb2xkTm9kZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IHRoaXMgOiBhcmd1bWVudHNbMF07XHJcblx0XHRjb25zdCBuZXdOb2RlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gYXJndW1lbnRzWzBdIDogYXJndW1lbnRzWzFdO1xyXG5cdFx0XHJcblx0XHRpZihuZXdOb2RlIGluc3RhbmNlb2YgQXJyYXkgfHwgbmV3Tm9kZSBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG5ld05vZGUgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbil7XHJcblx0XHRcdG5ld05vZGUuZm9yRWFjaChhSXRlbSA9PiBwYXJlbnQuaW5zZXJ0QmVmb3JlKGFJdGVtLCBvbGROb2RlKSk7XHJcblx0XHRcdG9sZE5vZGUucmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3Tm9kZSxvbGROb2RlKTtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLnBhcmVudE5vZGUgPT0gbnVsbClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaW5zZXJ0IG5vZGVzIGFmdGVyIHRoaXMgbm9kZSEgUGFyZW50IG5vZGUgbm90IGF2YWlsYWJsZSFcIik7XHJcblx0XHRcclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGNvbnN0IG5leHQgPSB0aGlzLm5leHRTaWJsaW5nO1xyXG5cdFx0aWYobmV4dClcclxuXHRcdFx0UHJvdG90eXBlLmJlZm9yZS5hcHBseShuZXh0LCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRQcm90b3R5cGUuYXBwZW5kLmFwcGx5KHBhcmVudCwgYXJndW1lbnRzKTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmJlZm9yZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLnBhcmVudE5vZGUgPT0gbnVsbClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaW5zZXJ0IG5vZGVzIGFmdGVyIHRoaXMgbm9kZSEgUGFyZW50IG5vZGUgbm90IGF2YWlsYWJsZSFcIik7XHJcblx0XHRcclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGNvbnN0IGluc2VydGVyID0gKG5vZGUpID0+IHtwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMpO31cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRjb25zdCBhcmcgPSBhcmd1bWVudHNbaV07XHJcblx0XHRcdGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0aW5zZXJ0ZXIoYXJnKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdGFyZy5mb3JFYWNoKGluc2VydGVyKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnRlcik7XHJcblx0XHR9XHJcblx0fTtcdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBwYXJlbnRTZWxlY3RvciA9IC86cGFyZW50KFxcKFxcXCIoW15cXCldKilcXFwiXFwpKT8vaTtcclxuY29uc3QgcXVlcnlFeGVjdXRlciA9IGZ1bmN0aW9uKGFFbGVtZW50LCBhU2VsZWN0b3Ipe1xyXG5cdGxldCBtYXRjaCA9IHBhcmVudFNlbGVjdG9yLmV4ZWMoYVNlbGVjdG9yKTtcclxuXHRpZihtYXRjaCl7XHJcblx0XHRsZXQgcmVzdWx0ID0gYUVsZW1lbnQ7XHJcblx0XHRpZihtYXRjaC5pbmRleCA+IDApe1xyXG5cdFx0XHRyZXN1bHQgPSBhRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvci5zdWJzdHIoMCwgbWF0Y2guaW5kZXgpKTtcclxuXHRcdFx0aWYocmVzdWx0Lmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cdFxyXG5cdFx0cmVzdWx0ID0gcmVzdWx0LnBhcmVudChtYXRjaFsyXSk7XHRcdFx0XHJcblx0XHRpZihyZXN1bHQpe1xyXG5cdFx0XHRsZXQgbmV4dFNlbGVjdG9yID0gYVNlbGVjdG9yLnN1YnN0cihtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCkudHJpbSgpO1xyXG5cdFx0XHRpZihuZXh0U2VsZWN0b3IubGVuZ3RoID4gMClcclxuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQuZmluZChuZXh0U2VsZWN0b3IpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cdFx0XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdHJldHVybiBhRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvcik7XHJcbn07XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiUXVlcnlTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcclxuXHRQcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IG5vZGVzID0gW107XHJcblx0XHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGxldCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHR3aGlsZShhcmcpe1xyXG5cdFx0XHRpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKXtcclxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gcXVlcnlFeGVjdXRlcih0aGlzLCBhcmcpO1xyXG5cdFx0XHRcdGlmKHJlc3VsdClcclxuXHRcdFx0XHRcdG5vZGVzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0YXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRsZXQgcmVzdWx0ID0gTm9kZUxpc3QuZnJvbS5hcHBseShudWxsLCBub2Rlcyk7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmlzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZih0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnQpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcdFx0XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSl7XHJcblx0XHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubWF0Y2hlcyhhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0ubGVuZ3RoID09PSBcIm51bWJlclwiKXtcclxuXHRcdFx0XHRsZXQgZmlsdGVyID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBmaWx0ZXIubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0XHRpZih0aGlzLm1hdGNoZXMoZmlsdGVyW2ldKSlcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuaXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUucGFyZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZighdGhpcy5wYXJlbnROb2RlKVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1x0XHRcclxuXHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIil7XHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRcdHRyeXtcclxuXHRcdFx0XHR3aGlsZShwYXJlbnQgJiYgIXBhcmVudC5pcyhhcmd1bWVudHNbMF0pKVxyXG5cdFx0XHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudChhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHR9Y2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwidGhpczpcIiwgdGhpcywgXCJwYXJlbnQ6XCIsIHBhcmVudCwgXCJlcnJvcjpcIiwgZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHBhcmVudDtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLnBhcmVudE5vZGU7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUucGFyZW50cyA9IGZ1bmN0aW9uKCkge1x0XHRcclxuXHRcdGxldCByZXN1bHQgPSBuZXcgQXJyYXkoKTtcclxuXHRcdGxldCBwYXJlbnQgPSBQcm90b3R5cGUucGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR3aGlsZShwYXJlbnQpe1xyXG5cdFx0XHRyZXN1bHQucHVzaChwYXJlbnQpO1xyXG5cdFx0XHRwYXJlbnQgPSBQcm90b3R5cGUucGFyZW50LmFwcGx5KHBhcmVudCwgYXJndW1lbnRzKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20ocmVzdWx0KTtcclxuXHR9O1x0XHJcblxyXG5cdFByb3RvdHlwZS5zZWxlY3RvciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnQgfHwgdGhpcyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHRlbHNlIGlmKHRoaXMuaWQpXHJcblx0XHRcdHJldHVybiBcIiNcIiArIHRoaXMuaWQ7XHJcblx0XHRlbHNle1x0XHRcdFxyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50KCk7XHJcblx0XHRcdGlmKHBhcmVudCl7XHJcblx0XHRcdFx0bGV0IHNhbWVUYWdTaWJsaW5ncyA9IHBhcmVudC5maW5kKFwiOnNjb3BlPlwiICsgc2VsZWN0b3IpO1x0XHRcdFxyXG5cdFx0XHRcdGlmIChzYW1lVGFnU2libGluZ3MgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gc2FtZVRhZ1NpYmxpbmdzLmluZGV4T2YodGhpcyk7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPiAwKVxyXG5cdFx0XHRcdFx0XHRzZWxlY3RvciArPSAnOm50aC1jaGlsZCgnICsgKGluZGV4ICsgMSkgKyAnKSc7XHJcblx0XHRcdFx0fVx0XHRcclxuXHRcdFx0XHRsZXQgcGFyZW50U2VsZWN0b3IgPSBwYXJlbnQuc2VsZWN0b3IoKTtcclxuXHRcdFx0XHRyZXR1cm4gcGFyZW50U2VsZWN0b3IgPyBwYXJlbnRTZWxlY3RvciArIFwiPlwiICsgc2VsZWN0b3IgOiBzZWxlY3RvcjtcclxuXHRcdFx0fSBcclxuXHRcdFx0cmV0dXJuIHNlbGVjdG9yO1xyXG5cdFx0fVxyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihhUXVlcnkpIHtcdFx0XHRcclxuXHRcdGxldCBub2RlID0gdGhpcztcclxuXHRcdHdoaWxlKG5vZGUpe1xyXG5cdFx0XHRsZXQgY2xvc2VzdHMgPSBub2RlLmZpbmQoYVF1ZXJ5KTtcclxuXHRcdFx0aWYoY2xvc2VzdHMgJiYgY2xvc2VzdHMubGVuZ3RoID4gMClcclxuXHRcdFx0XHRyZXR1cm4gY2xvc2VzdHM7XHJcblx0XHRcdGVsc2UgaWYobm9kZS5pcyhhUXVlcnkpKVxyXG5cdFx0XHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKG5vZGUpO1xyXG5cdFx0XHRcclxuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50KCk7XHRcdFxyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLm5lc3RlZCA9IGZ1bmN0aW9uKGFRdWVyeSl7XHJcblx0XHRpZih0aGlzLmlzKGFRdWVyeSkpXHJcblx0XHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHRoaXMpO1x0XHJcblx0XHRcclxuXHRcdGxldCBuZXN0ZWQgPSB0aGlzLmZpbmQoYVF1ZXJ5KTtcclxuXHRcdGlmKG5lc3RlZCAmJiBuZXN0ZWQubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIG5lc3RlZDtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20odGhpcy5wYXJlbnQoYVF1ZXJ5KSk7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7XHJcblxyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJSZWFkeUV2ZW50U3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdFByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uKGFGdW5jdGlvbiwgb25jZSl7XHRcclxuXHRcdHRoaXMub24oXCJyZWFkeVwiLCBhRnVuY3Rpb24sIG9uY2UpO1xyXG5cdFx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIpXHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcInJlYWR5XCIpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJTaG93SGlkZVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHRQcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLl9fX2hpZGRlbl9fKXtcclxuXHRcdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fX19kaXNwbGF5X19fIHx8IFwiXCI7XHJcblx0XHRcdHRoaXMuX19faGlkZGVuX18gPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoIXRoaXMuX19faGlkZGVuX18pe1xyXG5cdFx0XHR0aGlzLl9fX2Rpc3BsYXlfX18gPSB0aGlzLnN0eWxlLmRpc3BsYXk7XHJcblx0XHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHR0aGlzLl9fX2hpZGRlbl9fID0gdHJ1ZTtcclxuXHRcdH1cdFxyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS50b2dnbGVTaG93ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMuX19faGlkZGVuX18pXHJcblx0XHRcdHJldHVybiB0aGlzLnNob3coKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHRoaXMuaGlkZSgpO1xyXG5cdH07XHJcblx0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IElucHV0VHlwZXMgPSBbXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcInNlbGVjdFwiLFxyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcblx0XHRcdFx0aWYob3B0aW9uLnNlbGVjdGVkKVxyXG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gob3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0fSk7XHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oKXtcdFx0XHRcdFxyXG5cdFx0XHRsZXQgdmFsdWVzID0gW107XHJcblx0XHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRcdGxldCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdHdoaWxlKGFyZyl7XHJcblx0XHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpKVxyXG5cdFx0XHRcdFx0dmFsdWVzID0gdmFsdWVzLmNvbmNhdChhcmcpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHZhbHVlcy5wdXNoKGFyZyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZXM7XHJcblx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZXMuaW5kZXhPZihvcHRpb24udmFsdWUpID49IDApO1x0XHRcdFxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0fVx0XHRcdFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcImlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl1cIixcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmKHRoaXMudmFsdWUgPT0gXCJvblwiIHx8IHRoaXMudmFsdWUgPT0gXCJvZmZcIilcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja2VkO1xyXG5cdFx0XHRlbHNlIGlmKHRoaXMuY2hlY2tlZClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcdFx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdGlmKHR5cGVvZiBhVmFsdWUgPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYVZhbHVlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMudmFsdWUgPT0gYVZhbHVlO1xyXG5cdFx0XHRlbHNlIGlmKEFycmF5LmlzQXJyYXkoYVZhbHVlKSlcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWUuaW5kZXhPZih0aGlzLnZhbHVlKSA+PSAwO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdH1cclxuXHR9XHJcbl07XHJcblxyXG5jb25zdCBEZWZhdWx0SW5wdXRUeXBlID0ge1xyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGFWYWx1ZTtcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiaW5wdXRcIik7XHJcblx0XHR9XHRcclxufTtcclxuXHJcbmNvbnN0IGdldElucHV0VHlwZSA9IGZ1bmN0aW9uKGFFbGVtZW50KXtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgSW5wdXRUeXBlcy5sZW5ndGg7IGkrKylcclxuXHRcdGlmKGFFbGVtZW50LmlzKElucHV0VHlwZXNbaV0uc2VsZWN0b3IpKVxyXG5cdFx0XHRyZXR1cm4gSW5wdXRUeXBlc1tpXTtcdFx0XHJcblx0cmV0dXJuIERlZmF1bHRJbnB1dFR5cGU7XHJcbn07XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiVmFsdWVTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcclxuXHRQcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdHlwZSA9IGdldElucHV0VHlwZSh0aGlzKTtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHR5cGUuZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHR5cGUuc2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgXCIuL2RvbS9FdmVudFRhcmdldFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlXCI7XHJcbmltcG9ydCBcIi4vZG9tL0VsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vRG9jdW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vRG9jdW1lbnRGcmFnbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MSW5wdXRFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxUZXh0QXJlYUVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTFNlbGVjdEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZUxpc3RcIjtcclxuaW1wb3J0IFwiLi9kb20vSHRtbENvbGxlY3Rpb25cIjtcclxuaW1wb3J0IFwiLi9HbG9iYWxcIjtcclxuIiwiY29uc3QgRGVsZWdhdGVyQnVpbGRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0Y29uc3QgY2FsbGJhY2sgPSBhcmdzLnNoaWZ0KCk7XHJcblx0Y29uc3Qgc291cmNlID0gYXJncy5zaGlmdCgpO1xyXG5cdGFyZ3MuZm9yRWFjaCggdGFyZ2V0ID0+e1xyXG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxyXG5cdFx0LmZvckVhY2gobmFtZSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb3AgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbmFtZSk7XHJcblx0XHRcdGlmICh0eXBlb2Ygc291cmNlW25hbWVdID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBwcm9wLnZhbHVlID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0c291cmNlW25hbWVdID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXMsIG5hbWUsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFx0fTtcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblx0XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERlbGVnYXRlckJ1aWxkZXI7IiwiY29uc3QgZXh0ZW5kUHJvdG90eXBlID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IHR5cGUgPSBhcmdzLnNoaWZ0KCk7XHRcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0Y29uc3QgZXh0ZW5kZXIgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRleHRlbmRlcih0eXBlKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHRlbmRQcm90b3R5cGU7IiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG5jb25zdCBFWFRFTlNJT05TX01BUCA9IFV0aWxzLmdsb2JhbFZhcihcIl9fX0RPTV9BUElfRVhURU5TSU9OX01BUF9fX1wiLCB7fSk7XHJcbmNvbnN0IEV4dGVuZGVyID0gZnVuY3Rpb24oYU5hbWUsIGFFeHRlbnRpb24pe1xyXG5cdHJldHVybiBmdW5jdGlvbihhVHlwZSl7XHRcclxuXHRcdGxldCBleHRlbnNpb25zID0gRVhURU5TSU9OU19NQVBbYVR5cGUubmFtZV07XHJcblx0XHRpZighZXh0ZW5zaW9ucylcclxuXHRcdFx0ZXh0ZW5zaW9ucyA9IEVYVEVOU0lPTlNfTUFQW2FUeXBlLm5hbWVdID0ge307XHRcdFxyXG5cdFx0XHJcblx0XHRpZighZXh0ZW5zaW9uc1thTmFtZV0pe1xyXG5cdFx0XHRleHRlbnNpb25zW2FOYW1lXSA9IHRydWU7XHJcblx0XHRcdGFFeHRlbnRpb24oYVR5cGUucHJvdG90eXBlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0Y29uc29sZS53YXJuKFwiZHVwbGljYXRlZCBsb2FkIG9mIGV4dGVuc2lvbiBcXFwiXCIgKyBhTmFtZSArIFwiXFxcIiFcIik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kZXI7IiwiY29uc3QgVXRpbHMgPSB7XHJcblx0Z2xvYmFsIDogKCgpID0+IHtcclxuXHRcdGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB3aW5kb3c7XHJcblx0XHRpZih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsO1xyXG5cdFx0aWYodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBzZWxmO1xyXG5cdFx0cmV0dXJuIHt9O1x0XHRcclxuXHR9KSgpLFxyXG5cdGdsb2JhbFZhciA6IGZ1bmN0aW9uKGFOYW1lLCBhSW5pdFZhbHVlKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIFV0aWxzLmdsb2JhbFthTmFtZV0gPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFV0aWxzLmdsb2JhbFthTmFtZV0gPSBhSW5pdFZhbHVlO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gVXRpbHMuZ2xvYmFsW2FOYW1lXTtcdFx0XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==