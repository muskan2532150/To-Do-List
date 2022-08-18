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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Display)\n/* harmony export */ });\n/* harmony import */ var _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorage.js */ \"./module/LocalStorage.js\");\n/* harmony import */ var _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LocalStorage_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass Display {\r\n  static addList(task, id) {\r\n    const listContainer = document.querySelector('.showList');\r\n    const div = document.createElement('div');\r\n    const div1 = document.createElement('div');\r\n    const input = document.createElement('input');\r\n    const input1 = document.createElement('input');\r\n    const button = document.createElement('button');\r\n    const i = document.createElement('i');\r\n    div.setAttribute('class', 'list');\r\n    input.setAttribute('type', 'checkbox');\r\n    input.setAttribute('class', 'mycheckbox');\r\n    input.setAttribute('id', id);\r\n    input1.setAttribute('class', 'displayP');\r\n    input1.setAttribute('value', task.description);\r\n    input1.setAttribute('type', 'text');\r\n    input1.setAttribute('required', '');\r\n    button.setAttribute('class', 'list-btn ');\r\n    i.setAttribute('class', 'fa-solid fa-trash');\r\n\r\n    button.appendChild(i);\r\n    div1.appendChild(input);\r\n    div1.appendChild(input1);\r\n    div.appendChild(div1);\r\n    div.appendChild(button);\r\n\r\n    listContainer.appendChild(div);\r\n\r\n    document.querySelector('.clearBtn').style.display = 'inline-block';\r\n  }\r\n\r\n  static deteleTask(id) {\r\n    const list = _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0___default().getlist();\r\n    list.forEach((task, i) => {\r\n      if (task.index.toString() === id.toString()) {\r\n        list.splice(i, 1);\r\n      }\r\n    });\r\n    Display.changeindex(list);\r\n    if ((Object.keys(list).length) === 0) document.querySelector('.clearBtn').style.display = 'none';\r\n    localStorage.setItem('list', JSON.stringify(list));\r\n  }\r\n\r\n  static changebool(id) {\r\n    const list = _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0___default().getlist();\r\n    list.forEach((task) => {\r\n      if (task.id.toString() === id.toString()) {\r\n        task.completed = !task.completed;\r\n      }\r\n    });\r\n    localStorage.setItem('list', JSON.stringify(list));\r\n  }\r\n\r\n  static changeindex(list) {\r\n    list.forEach((task, i) => {\r\n      task.index = i + 1;\r\n    });\r\n  }\r\n\r\n  static clearAll() {\r\n    const List = document.querySelectorAll('.list');\r\n    const tasks = _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0___default().getlist();\r\n    const arr = [];\r\n    tasks.forEach((task, index) => {\r\n      if (task.completed) {\r\n        List[task.index - 1].remove();\r\n      } else {\r\n        arr.push(tasks[index]);\r\n      }\r\n    });\r\n    Display.changeindex(arr);\r\n    if ((Object.keys(arr).length) === 0) document.querySelector('.clearBtn').style.display = 'none';\r\n    localStorage.setItem('list', JSON.stringify(arr));\r\n  }\r\n\r\n  static UpdateInput(id,value){\r\n    const list = _LocalStorage_js__WEBPACK_IMPORTED_MODULE_0___default().getlist();\r\n    list[id - 1].des = value;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./module/Display.js?");

/***/ }),

/***/ "./module/LocalStorage.js":
/*!********************************!*\
  !*** ./module/LocalStorage.js ***!
  \********************************/
/***/ ((module) => {

eval("class LocalStorage {\r\n  static getlist() {\r\n    let task;\r\n    if (localStorage.getItem('list') === null) {\r\n      task = [];\r\n    } else {\r\n      task = JSON.parse(localStorage.getItem('list'));\r\n    }\r\n    return task;\r\n  }\r\n\r\n  static addLocal(task) {\r\n    const list = LocalStorage.getlist();\r\n    list.push(task);\r\n    localStorage.setItem('list', JSON.stringify(list));\r\n  }\r\n\r\n  static idGenerator() {\r\n    const task = LocalStorage.getlist();\r\n    const id = task.length ? task[task.length - 1].index + 1 : 1;\r\n    return id;\r\n  }\r\n}\r\n\r\nmodule.exports = LocalStorage;\n\n//# sourceURL=webpack://to-do-list/./module/LocalStorage.js?");

/***/ }),

/***/ "./module/Task.js":
/*!************************!*\
  !*** ./module/Task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\nclass Tasks {\r\n  constructor(des, index, id, bool = false) {\r\n    this.description = des;\r\n    this.index = index;\r\n    this.completed = bool;\r\n    this.id = id;\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./module/Task.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: rgb(183 177 169 / 20%);\\r\\n  border-top: 60px solid #000;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 50%;\\r\\n  margin: auto;\\r\\n  box-shadow: 15px 15px 9px 13px rgb(185 176 165 / 20%);\\r\\n  background-color: #fff;\\r\\n  padding: 15px;\\r\\n  margin-top: 100px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  padding: 12px;\\r\\n}\\r\\n\\r\\n.forms {\\r\\n  display: flex;\\r\\n  border-top: 2px solid rgb(128 128 128 / 30%);\\r\\n  border-bottom: 2px solid rgb(128 128 128 / 30%);\\r\\n  justify-content: space-between;\\r\\n  margin: 12px;\\r\\n  margin-left: 0;\\r\\n}\\r\\n\\r\\n.form-btn,\\r\\ninput,\\r\\n.list-btn {\\r\\n  outline: none;\\r\\n  border: 0;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  padding: 25px;\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\ninput::placeholder {\\r\\n  font-size: 25px;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.form-btn,\\r\\n.list-btn {\\r\\n  background: transparent;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  display: flex;\\r\\n  border-bottom: 2px solid rgb(128 128 128 / 30%);\\r\\n  padding: 12px;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.list > input {\\r\\n  margin-right: 15px;\\r\\n}\\r\\n\\r\\n.displayP {\\r\\n  font-size: 20px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\ni,\\r\\n.form-btn {\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  text-decoration: line-through;\\r\\n  color: #d3d3d3;\\r\\n}\\r\\n\\r\\n.clearBtn {\\r\\n  display: none;\\r\\n  padding: 20px;\\r\\n  font-size: 30px;\\r\\n  text-align: center;\\r\\n  border: 0;\\r\\n  width: 100%;\\r\\n  color: rgb(60 53 53);\\r\\n  margin-top: 12px;\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_Display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module/Display.js */ \"./module/Display.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/LocalStorage.js */ \"./module/LocalStorage.js\");\n/* harmony import */ var _module_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_module_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _module_Task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/Task.js */ \"./module/Task.js\");\n\r\n\r\n\r\n\r\n\r\nconst form = document.querySelector('.forms');\r\nconst listContainer = document.querySelector('.showList');\r\nconst clearbtn = document.querySelector('.clearBtn');\r\n\r\nform.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  const des = document.getElementById('desc').value;\r\n  const index = _module_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2___default().idGenerator();\r\n  const id = _module_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2___default().idGenerator();\r\n  const task = new _module_Task_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](des, index, id);\r\n  _module_Display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addList(task, id);\r\n  _module_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2___default().addLocal(task);\r\n  document.getElementById('desc').value = '';\r\n});\r\n\r\nlistContainer.addEventListener('click', (e) => {\r\n  const eventClass = e.target.className;\r\n  if (eventClass === 'mycheckbox') {\r\n    e.target.nextSibling.classList.toggle('active');\r\n    _module_Display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changebool(e.target.id);\r\n  } else if (eventClass === 'displayP') {\r\n    const eventinput = e.target.previousSibling.id;\r\n    e.target.addEventListener('change', (e) => {\r\n      _module_Display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].UpdateInput(eventinput,e.target.value);\r\n      localStorage.setItem('list', JSON.stringify(list));\r\n    });\r\n  } else {\r\n    const removebtn = [...document.querySelectorAll('.showList > .list')].findIndex((element) => element === e.target.parentNode.parentNode);\r\n    _module_Display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(removebtn + 1);\r\n    e.target.parentNode.parentNode.remove();\r\n  }\r\n});\r\n\r\nclearbtn.addEventListener('click', () => {\r\n  _module_Display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearAll();\r\n});\r\n\r\nconst displayFirst = () => {\r\n  const list = _module_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2___default().getlist();\r\n  list.forEach((task, index) => {\r\n    _module_Display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addList(task, task.id);\r\n    const nodeList = document.querySelectorAll('.displayP');\r\n    const nodeListCheckbox = document.querySelectorAll('.mycheckbox');\r\n    const elements = [...nodeList];\r\n    const checkBoxList = [...nodeListCheckbox];\r\n    if (task.bool) {\r\n      elements[index].classList.toggle('active');\r\n      checkBoxList[index].setAttribute('checked', '');\r\n    }\r\n  });\r\n};\r\n\r\ndisplayFirst();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);