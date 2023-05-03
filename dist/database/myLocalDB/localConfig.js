"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var dbConfig;
var _default = dbConfig = {
  server: "DESARROLLO30C6\\SQLEXPRESS",
  port: process.env.PORT || 3000,
  user: process.env.USER_LOCAL,
  password: process.env.PASSWORD_LOCAL,
  database: process.env.DATABASE_LOCAL,
  driver: process.env.DRIVER
};
exports["default"] = _default;