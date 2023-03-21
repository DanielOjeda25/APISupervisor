"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getConnectionLocal;
var _msnodesqlv = _interopRequireDefault(require("mssql/msnodesqlv8.js"));
var _localConfig = _interopRequireDefault(require("./localConfig.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function getConnectionLocal(query) {
  new _msnodesqlv["default"].connect(_localConfig["default"], function (err) {
    if (err) {
      console.log("Error while connecting database: ".concat(err));
    } else {
      console.log("connected to database: ".concat(_localConfig["default"].server));
    }
    var request = new _msnodesqlv["default"].Request();
    request.query(query, function (err, records) {
      if (err) console.log(err);
      console.table(records.recordset);
    });
  });
}