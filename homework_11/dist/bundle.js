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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculating_module__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interface_module__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_styles_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_styles_css__);




__WEBPACK_IMPORTED_MODULE_1__interface_module__["a" /* default */].createInterface();

for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_1__interface_module__["a" /* default */].getButtons().length; i++) {
	const button = __WEBPACK_IMPORTED_MODULE_1__interface_module__["a" /* default */].getButtons()[i];
	const inputs = __WEBPACK_IMPORTED_MODULE_1__interface_module__["a" /* default */].getInputs();
	button.addEventListener('click', () => {
		if (validate(inputs, __WEBPACK_IMPORTED_MODULE_1__interface_module__["a" /* default */].getFieldForResult())) {
			outputResult(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["a" /* default */][button.dataset.func](Number(inputs[0].value), Number(inputs[1].value)), __WEBPACK_IMPORTED_MODULE_1__interface_module__["a" /* default */].getFieldForResult());
		}
	});
}

const outputResult = (res, target) => {
	target.innerHTML = res;
};

const validate = (inputs, target) => {
	for (let i = 0; i < inputs.length; i++) {
		const input = inputs[i];
		if (isNaN(Number(input.value)) || input.value === '') {
			outputResult('Please input numbers', target);
			return false;
		}
	}
	return true;
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const minus = (firstNumber, secondNumber) => firstNumber - secondNumber;
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
const divide = (firstNumber, secondNumber) => {
	if (secondNumber) {
		return firstNumber / secondNumber;
	} else {
		return 'Division by zero is forbidden';
	}
};

/* harmony default export */ __webpack_exports__["a"] = ({
	add,
	minus,
	multiply,
	divide
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const root = document.getElementsByClassName('root')[0];

const createInterface = () => {
	const inputsContainer = document.createElement('div');
	const buttonsContainer = document.createElement('div');
	const fieldForResult = document.createElement('p');
	fieldForResult.classList.add('result');
	root.appendChild(inputsContainer);
	root.appendChild(buttonsContainer);
	root.appendChild(fieldForResult);
	createInput(inputsContainer);
	createInput(inputsContainer);
	createButton(buttonsContainer, '+', 'add');
	createButton(buttonsContainer, '-', 'minus');
	createButton(buttonsContainer, '÷', 'divide');
	createButton(buttonsContainer, '×', 'multiply');
};
const createInput = parent => {
	const input = document.createElement('input');
	parent.appendChild(input);
	input.classList.add('input');
	input.setAttribute('placeholder', 'Please input number');
};
const createButton = (parent, content, func) => {
	const button = document.createElement('button');
	parent.appendChild(button);
	button.setAttribute('data-func', func);
	button.classList.add('button');
	button.innerHTML = content;
};
const getInputs = () => {
	return document.getElementsByTagName('input');
};
const getButtons = () => {
	return document.getElementsByTagName('button');
};
const getFieldForResult = () => {
	return document.getElementsByClassName('result')[0];
};

/* harmony default export */ __webpack_exports__["a"] = ({
	createInterface,
	getInputs,
	getButtons,
	getFieldForResult
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);