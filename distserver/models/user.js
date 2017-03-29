"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String
});

exports.default = mongoose.model('User', UserSchema);