"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getConnection;
var _msnodesqlv = _interopRequireDefault(require("mssql/msnodesqlv8.js"));
var _dbConfig = _interopRequireDefault(require("../dbConfig.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function getConnection(query) {
  new _msnodesqlv["default"].connect(_dbConfig["default"], function (err) {
    if (err) {
      console.log("Error while connecting database: ".concat(err));
    } else {
      console.log("connected to database: ".concat(_dbConfig["default"].server));
    }
    var request = new _msnodesqlv["default"].Request();
    request.query(query, function (err, records) {
      if (err) console.log(err);
      console.table(records.recordset);
    });
  });
}