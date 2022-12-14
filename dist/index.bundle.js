/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./module/Display.js":
/*!***************************!*\
  !*** ./module/Display.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Display)\n/* harmony export */ });\n/* harmony import */ var _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorage.js */ \"./module/LocalStorage.js\");\n/* harmony import */ var _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LocalStorage_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Display {\n  static addList(task, id) {\n    const listContainer = document.querySelector('.showList');\n    const div = document.createElement('div');\n    const div1 = document.createElement('div');\n    const input = document.createElement('input');\n    const input1 = document.createElement('input');\n    const button = document.createElement('button');\n    const i = document.createElement('i');\n    div.setAttribute('class', 'list');\n    input.setAttribute('type', 'checkbox');\n    input.setAttribute('class', 'mycheckbox');\n    input.setAttribute('id', id);\n    input1.setAttribute('class', 'displayP');\n    input1.setAttribute('value', task.description);\n    input1.setAttribute('type', 'text');\n    input1.setAttribute('required', '');\n    button.setAttribute('class', 'list-btn ');\n    i.setAttribute('class', 'fa-solid fa-trash');\n\n    button.appendChild(i);\n    div1.appendChild(input);\n    div1.appendChild(input1);\n    div.appendChild(div1);\n    div.appendChild(button);\n\n    listContainer.appendChild(div);\n\n    document.querySelector('.clearBtn').style.display = 'inline-block';\n  }\n\n  static deleteTask(id) {\n    const list = _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0___default().getlist();\n    const lists = list.filter((task) => {\n      if (task.id.toString() !== id.toString()) {\n        return true;\n      } return false;\n    });\n    \n    Display.changeindex(lists);\n    if ((Object.keys(lists).length) === 0) document.querySelector('.clearBtn').style.display = 'none';\n    localStorage.setItem('list', JSON.stringify(lists));\n  }\n\n  static changebool(id) {\n    const list = _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0___default().getlist();\n    list.forEach((task) => {\n      if (task.id.toString() === id.toString()) {\n        task.completed = !task.completed;\n      }\n    });\n    localStorage.setItem('list', JSON.stringify(list));\n  }\n\n  static changeindex(list) {\n    list.forEach((task, i) => {\n      task.index = i + 1;\n    });\n  }\n\n  static clearAll() {\n    const List = document.querySelectorAll('.list');\n    const tasks = _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0___default().getlist();\n    const arr = [];\n    tasks.forEach((task, index) => {\n      if (task.completed) {\n        List[task.index - 1].remove();\n      } else {\n        arr.push(tasks[index]);\n      }\n    });\n    Display.changeindex(arr);\n    if ((Object.keys(arr).length) === 0) document.querySelector('.clearBtn').style.display = 'none';\n    localStorage.setItem('list', JSON.stringify(arr));\n  }\n\n  static UpdateInput(id, value) {\n    const list = _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0___default().getlist();\n    [...list].forEach((el) => {\n      if (el.id.toString() === id.toString()) { list[el.index - 1].description = value; }\n    });\n    localStorage.setItem('list', JSON.stringify(list));\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./module/Display.js?");

/***/ }),

/***/ "./module/LocalStorage.js":
/*!********************************!*\
  !*** ./module/LocalStorage.js ***!
  \********************************/
/***/ ((module) => {

eval("class LocalStorage {\n  static getlist() {\n    let task;\n    if (localStorage.getItem('list') === null) {\n      task = [];\n    } else {\n      task = JSON.parse(localStorage.getItem('list'));\n    }\n    return task;\n  }\n\n  static addLocal(task) {\n    const list = LocalStorage.getlist();\n    list.push(task);\n    localStorage.setItem('list', JSON.stringify(list));\n  }\n\n  static idGenerator() {\n    const task = LocalStorage.getlist();\n    const id = task.length ? task[task.length - 1].id + 1 : 1;\n    return id;\n  }\n\n  static indexGenerator() {\n    const task = LocalStorage.getlist();\n    const id = task.length ? task[task.length - 1].index + 1 : 1;\n    return id;\n  }\n}\n\nmodule.exports = LocalStorage;\n\n//# sourceURL=webpack://to-do-list/./module/LocalStorage.js?");

/***/ }),

/***/ "./module/Task.js":
/*!************************!*\
  !*** ./module/Task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\nclass Tasks {\n  constructor(des, index, id, bool = false) {\n    this.description = des;\n    this.index = index;\n    this.completed = bool;\n    this.id = id;\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./module/Task.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: rgb(183 177 169 / 20%);\\r\\n  border-top: 60px solid #000;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 50%;\\r\\n  margin: auto;\\r\\n  box-shadow: 15px 15px 9px 13px rgb(185 176 165 / 20%);\\r\\n  background-color: #fff;\\r\\n  padding: 15px;\\r\\n  margin-top: 100px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  padding: 12px;\\r\\n}\\r\\n\\r\\n.forms {\\r\\n  display: flex;\\r\\n  border-top: 2px solid rgb(128 128 128 / 30%);\\r\\n  border-bottom: 2px solid rgb(128 128 128 / 30%);\\r\\n  justify-content: space-between;\\r\\n  margin: 12px;\\r\\n  margin-left: 0;\\r\\n}\\r\\n\\r\\n.form-btn,\\r\\ninput,\\r\\n.list-btn {\\r\\n  outline: none;\\r\\n  border: 0;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  padding: 25px;\\r\\n  font-size: 25px;\\r\\n  pointer-events: visible;\\r\\n}\\r\\n\\r\\ninput::placeholder {\\r\\n  font-size: 25px;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.form-btn,\\r\\n.list-btn {\\r\\n  background: transparent;\\r\\n  pointer-events: visible;\\r\\n}\\r\\n\\r\\n.showList {\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  display: flex;\\r\\n  border-bottom: 2px solid rgb(128 128 128 / 30%);\\r\\n  padding: 12px;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.list > input {\\r\\n  margin-right: 15px;\\r\\n}\\r\\n\\r\\n.displayP {\\r\\n  font-size: 20px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\ni,\\r\\n.form-btn {\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.list-btn i {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  text-decoration: line-through;\\r\\n  color: #d3d3d3;\\r\\n}\\r\\n\\r\\n.clearBtn {\\r\\n  display: none;\\r\\n  padding: 20px;\\r\\n  font-size: 30px;\\r\\n  text-align: center;\\r\\n  border: 0;\\r\\n  width: 100%;\\r\\n  color: rgb(60 53 53);\\r\\n  margin-top: 12px;\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  main {\\r\\n    width: 60%;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    font-size: 20px;\\r\\n    line-height: 28px;\\r\\n  }\\r\\n\\r\\n  input {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  i,\\r\\n  .form-btn {\\r\\n    font-size: 15px;\\r\\n  }\\r\\n\\r\\n  input::placeholder {\\r\\n    font-size: 13px;\\r\\n  }\\r\\n\\r\\n  .list > div {\\r\\n    display: flex;\\r\\n    padding-top: 12px;\\r\\n  }\\r\\n\\r\\n  .mycheckbox {\\r\\n    padding: 0;\\r\\n    font-size: 14px;\\r\\n    width: auto;\\r\\n    margin-right: 6px;\\r\\n  }\\r\\n\\r\\n  .displayP {\\r\\n    padding: 0;\\r\\n    text-overflow: ellipsis;\\r\\n  }\\r\\n\\r\\n  .list-btn {\\r\\n    padding-top: 12px;\\r\\n    margin-left: 5px;\\r\\n  }\\r\\n\\r\\n  .clearBtn {\\r\\n    font-size: 12px;\\r\\n    font-weight: 500;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_Display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module/Display.js */ \"./module/Display.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/LocalStorage.js */ \"./module/LocalStorage.js\");\n/* harmony import */ var _module_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_module_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _module_Task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/Task.js */ \"./module/Task.js\");\n\n\n\n\n\nconst form = document.querySelector('.forms');\nconst listContainer = document.querySelector('.showList');\nconst clearbtn = document.querySelector('.clearBtn');\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const des = document.getElementById('desc').value;\n  const index = _module_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2___default().idGenerator();\n  const id = _module_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2___default().idGenerator();\n  const task = new _module_Task_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](des, index, id);\n  _module_Display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addList(task, id);\n  _module_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2___default().addLocal(task);\n  document.getElementById('desc').value = '';\n});\n\nlistContainer.addEventListener('click', (e) => {\n  const eventClass = e.target.className;\n  if (eventClass === 'mycheckbox') {\n    e.target.nextSibling.classList.toggle('active');\n    _module_Display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changebool(e.target.id);\n  } else if (eventClass === 'displayP') {\n    const eventinput = e.target.previousSibling.id;\n    e.target.addEventListener('change', (e) => {\n      _module_Display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].UpdateInput(eventinput, e.target.value);\n    });\n  } else {\n    const removebtn = e.target.parentNode.previousSibling.firstChild.id;\n    _module_Display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(removebtn);\n    e.target.parentNode.parentNode.remove();\n  }\n});\n\nclearbtn.addEventListener('click', () => {\n  _module_Display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearAll();\n});\n\nconst displayFirst = () => {\n  const list = _module_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2___default().getlist();\n  list.forEach((task, index) => {\n    _module_Display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addList(task, task.id);\n    const nodeList = document.querySelectorAll('.displayP');\n    const nodeListCheckbox = document.querySelectorAll('.mycheckbox');\n    const elements = [...nodeList];\n    const checkBoxList = [...nodeListCheckbox];\n    if (task.completed) {\n      elements[index].classList.toggle('active');\n      checkBoxList[index].setAttribute('checked', '');\n    }\n  });\n};\n\ndisplayFirst();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);