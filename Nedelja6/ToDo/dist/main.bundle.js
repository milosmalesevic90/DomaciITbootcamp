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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var addTaskButton = document.querySelector('#btn-add');
var taskListContainer = document.querySelector('#tasks-container');
var textBoxTitle = document.querySelector('#txt-title'); //console.log(taskListContainer);
//console.log(addTaskButton);
//console.log(addTaskButton.parentElement);
//console.log(addTaskButton.parentNode);

addTaskButton.addEventListener('click', btnAddClick);
textBoxTitle.addEventListener('keyup', txtKeyUp);

function btnAddClick(e) {
  //console.log(e);
  //console.log(e.target);
  addItem();
}

function txtKeyUp(e) {
  //console.log(e);
  if (e.keyCode == 13) {
    addItem();
  }
}

function addItem() {
  var txtBox = document.querySelector('#txt-title'); //console.log(txtBox);    

  var text = txtBox.value;
  text = text.trim();

  if (text == '') {
    alert('Task Title can not be empty!');
    return;
  } //console.log(text);


  var itemContainer = document.createElement("div"); //console.log(itemContainer);

  itemContainer.className = 'task-item';
  var itemText = document.createElement('p');
  itemText.innerHTML = text;
  itemText.className = 'task-title'; //console.log(itemText);

  var checkContainer = document.createElement('div');
  checkContainer.className = 'task-check';
  var removeBtn = document.createElement('button');
  removeBtn.className = 'task-remove-btn';
  removeBtn.addEventListener('click', removeTask);
  removeBtn.innerHTML = 'X';
  var chkDone = document.createElement('input');
  chkDone.type = 'checkbox';
  chkDone.className = 'chk-state';
  chkDone.value = 'done';
  chkDone.addEventListener('change', handleCheckChange);
  checkContainer.appendChild(removeBtn);
  checkContainer.appendChild(chkDone);
  itemContainer.appendChild(itemText);
  itemContainer.appendChild(checkContainer);
  taskListContainer.appendChild(itemContainer);
  txtBox.value = '';
}

function removeTask(e) {
  //console.log(e);
  //console.log(e.target);
  var btnToRemove = e.target;
  var divToRemove = btnToRemove.parentElement.parentElement; //console.log(divToRemove);

  divToRemove.remove();
}

function handleCheckChange(e) {
  //console.log(e);
  var chkBox = e.target;
  var checkContainer = chkBox.parentElement;
  var itemContainer = checkContainer.parentElement;

  if (chkBox.checked) {
    itemContainer.children[0].style.textDecoration = 'line-through';
  } else {
    itemContainer.children[0].style.textDecoration = 'none';
  }
}

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map