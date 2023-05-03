"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _dbConfig = _interopRequireDefault(require("./dbConfig.js"));
var _rubrosRoutes = _interopRequireDefault(require("./routes/rubros.routes.js"));
var _idClientesRoutes = _interopRequireDefault(require("./routes/idClientes.routes.js"));
var _indexRoutes = _interopRequireDefault(require("./routes/index.routes.js"));
var _gondolasRoutes = _interopRequireDefault(require("./routes/gondolas.routes.js"));
var _cors = _interopRequireDefault(require("cors"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.set("port", _dbConfig["default"].port);
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _cors["default"])({
  origin: '*'
}));
app.use(_rubrosRoutes["default"]);
app.use(_idClientesRoutes["default"]);
app.use(_indexRoutes["default"]);
app.use(_gondolasRoutes["default"]);
app.listen(8080);
console.log("server on port http://localhost:8080");
// Servir archivo index.html
app.use(_express["default"]["static"](_path["default"].join(__dirname, "dist")));
app.get("/", function (req, res) {
  res.sendFile(_path["default"].join(__dirname, "dist", "public", "index.html"));
});
var _default = app;
exports["default"] = _default;