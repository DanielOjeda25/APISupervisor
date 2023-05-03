"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.send('<h1>Bienvenido</h1>');
  console.log('Has llegado');
});
var _default = router;
exports["default"] = _default;