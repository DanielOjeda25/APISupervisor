"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _idClientesController = require("../controllers/idClientes.controller.js");
var router = (0, _express.Router)();
router.get('/idClientes', _idClientesController.getIdCliente);
var _default = router;
exports["default"] = _default;