'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pet = require('../models/pet');
var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('something is happening!');
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.route('/petsdata').get(function (req, res, next) {
  Pet.find({ "adopted": "false" }, function (err, pets) {
    if (err) {
      next(err);
    } else {
      res.json(pets);
    }
  });
});

exports.default = router;