var configFile;
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it declares 'configFile' on top-level, which conflicts with the current library output.
(() => {
/*!****************************!*\
  !*** ./data/configFile.js ***!
  \****************************/
let configFile = {
  ourWeek: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
  weekends: ["SUN", "SAT"],
  holidays: [{
    day: 1,
    month: 1
  }, {
    day: 2,
    month: 1
  }, {
    day: 7,
    month: 1
  }, {
    day: 8,
    month: 3
  }, {
    day: 1,
    month: 5
  }, {
    day: 9,
    month: 5
  }, {
    day: 28,
    month: 5
  }, {
    day: 3,
    month: 7
  }, {
    day: 7,
    month: 11
  }, {
    day: 25,
    month: 12
  }],
  visibleDaysOtherMonth: true,
  ToDo: true
};

if (!localStorage.getItem("config")) {
  localStorage.setItem("config", JSON.stringify(configFile));
}
})();

configFile = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=configFile.js.map