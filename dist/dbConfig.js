"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var dbConfig;
var _default = dbConfig = {
  server: process.env.SERVER,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  driver: 'msnodesqlv8',
  connectionTimeout: '15000',
  requestTimeout: '15000'
};
exports["default"] = _default;