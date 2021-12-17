var todoFile;
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./data/todoFile.js ***!
  \**************************/
let ToDoListFile = {};

if (!localStorage.getItem("ToDoList")) {
  localStorage.setItem("ToDoList", JSON.stringify(ToDoListFile));
}
todoFile = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=todoFile.js.map