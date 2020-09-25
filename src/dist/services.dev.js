"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCities = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllCities = function getAllCities() {
  return _axios["default"].get('http://localhost:3005/cities');
};

exports.getAllCities = getAllCities;