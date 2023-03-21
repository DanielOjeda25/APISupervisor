"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _rubrosControllers = require("../controllers/rubros.controllers.js");
var router = (0, _express.Router)();
router.get('/rubros', _rubrosControllers.getRubros);
var _default = router;
exports["default"] = _default;