/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nclass MenuMobile {\r\n  constructor(menuButton, menuList, events) {\r\n    this.menuButton = document.querySelector(menuButton);\r\n    this.menuList = document.querySelectorAll(menuList);\r\n    this.html = document.querySelector(\"html\");\r\n    this.isOpen = false;\r\n\r\n    if (events === undefined) {\r\n      this.events = [\"touchstart\", \"click\"];\r\n    } else {\r\n      this.events = events;\r\n    }\r\n    this.openMenu = this.openMenu.bind(this);\r\n    this.linkPreventRemove = this.linkPreventRemove.bind(this);\r\n  }\r\n\r\n  linkPreventRemove(event) {\r\n    event.preventDefault();\r\n  }\r\n\r\n  openMenu(event) {\r\n    if (event.type === \"touchstart\") event.preventDefault();\r\n    if (!this.isOpen) {\r\n      this.menuList.forEach((element) => {\r\n        element.classList.add(\"active\");\r\n      });\r\n      this.menuButton.classList.add(\"active\");\r\n\r\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array.from(this.menuList), this.events, () => {\r\n        this.menuList.forEach((element) => {\r\n          element.classList.remove(\"active\");\r\n        });\r\n        this.menuButton.classList.remove(\"active\");\r\n        this.isOpen = false;\r\n      });\r\n      this.isOpen = true;\r\n    }\r\n  }\r\n  addMenuMobileEvents() {\r\n    this.events.forEach((event) => {\r\n      this.menuButton.addEventListener(event, this.openMenu);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.menuButton && this.menuList) {\r\n      this.addMenuMobileEvents();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://src/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(elements, events, callback) {\r\n  const html = document.querySelector(\"html\");\r\n\r\n  function handleOutsideClick(event) {\r\n    const isOutside = !elements.some((element) =>\r\n      element.contains(event.target)\r\n    );\r\n\r\n    if (isOutside) {\r\n      callback();\r\n      events.forEach((event) => {\r\n        html.removeEventListener(event, handleOutsideClick);\r\n      });\r\n    }\r\n  }\r\n\r\n  events.forEach((event) => {\r\n    setTimeout(() => {\r\n      html.addEventListener(event, handleOutsideClick);\r\n    }, 0);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://src/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n\r\n\r\nconst mobileMenu = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  '[data-mobile=\"button\"]',\r\n  '[data-mobile=\"list\"]'\r\n);\r\nmobileMenu.init();\r\nconsole.log(\"funcionou\");\r\n\n\n//# sourceURL=webpack://src/./js/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;