"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dbConfig = _interopRequireDefault(require("./dbConfig.js"));
var _rubrosRoutes = _interopRequireDefault(require("./routes/rubros.routes.js"));
var _idClientesRoutes = _interopRequireDefault(require("./routes/idClientes.routes.js"));
var _indexRoutes = _interopRequireDefault(require("./routes/index.routes.js"));
var _gondolasRoutes = _interopRequireDefault(require("./routes/gondolas.routes.js"));
var _cors2 = _interopRequireDefault(require("cors"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var app = (0, _express["default"])();
app.set("port", _dbConfig["default"].port);
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _cors2["default"])((_cors = {
  origin: "http://127.0.0.1:5173"
}, _defineProperty(_cors, "origin", "http://localhost:4000"), _defineProperty(_cors, "origin", "http://10.211.55.5:8080/idClientes"), _defineProperty(_cors, "origin", '*'), _cors)));
app.use(_rubrosRoutes["default"]);
app.use(_idClientesRoutes["default"]);
app.use(_indexRoutes["default"]);
app.use(_gondolasRoutes["default"]);
var _default = app;
exports["default"] = _default;