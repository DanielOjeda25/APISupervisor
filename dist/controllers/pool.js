"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _msnodesqlv = _interopRequireDefault(require("mssql/msnodesqlv8.js"));
var _dbConfig = _interopRequireDefault(require("../dbConfig.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var pool = new _msnodesqlv["default"].ConnectionPool(_dbConfig["default"]);
pool.connect();
var _default = pool;
exports["default"] = _default;