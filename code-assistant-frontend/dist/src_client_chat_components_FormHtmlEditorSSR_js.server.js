"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_client_chat_components_FormHtmlEditorSSR_js";
exports.ids = ["src_client_chat_components_FormHtmlEditorSSR_js"];
exports.modules = {

/***/ "./src/client/chat/components/FormHtmlEditorSSR.js":
/*!*********************************************************!*\
  !*** ./src/client/chat/components/FormHtmlEditorSSR.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tinymce/tinymce-react */ \"@tinymce/tinymce-react\");\n/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FormHtmlEditorClientSSR = _ref => {\n  let {\n    setMessage,\n    message\n  } = _ref;\n  const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  if (editorRef != null) {\n    editorRef.content = message;\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__.Editor, {\n    apiKey: \"bjs04lodf5z6zl9qsw9s885s589gi1asebjkkmngnjxtnref\",\n    onInit: (_evt, editor) => editorRef.current = editor,\n    onChange: e => {\n      setMessage(e.level.content);\n    },\n    initialValue: \"\",\n    init: {\n      height: 200,\n      menubar: false,\n      plugins: ['wordcount'],\n      toolbar: '',\n      indentation: \"20pt\",\n      setup: function (editor) {\n        editor.on(\"keydown\", function (e) {\n          if (event.keyCode == 9) {\n            // tab pressed\n\n            editor.execCommand(\"mceInsertContent\", false, \"    \"); // inserts tab\n\n            event.preventDefault();\n            console.log(\"indent added to the paragraph\");\n            return false;\n          }\n        });\n      },\n      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormHtmlEditorClientSSR);\n\n//# sourceURL=webpack://code-assistant-frontend/./src/client/chat/components/FormHtmlEditorSSR.js?");

/***/ })

};
;