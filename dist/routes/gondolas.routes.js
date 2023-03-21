"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _gondolasController = require("../controllers/gondolas.controller.js");
var router = (0, _express.Router)();
router.post('/gondolas', _gondolasController.POSTGondola);
router.get('/gondolas', _gondolasController.GetGondolas);
var _default = router;
exports["default"] = _default;