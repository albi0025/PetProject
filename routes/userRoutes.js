import React from 'react';
import webpack from 'webpack';
import hash from 'password-hash';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import configAuth from '../tools/configAuth';

let express = require('express');
let userRoutes = express.Router();
let app = express();

userRoutes.use(function(req, res, next){
  console.log('User Routes Activity...');
  res.setHeader('Content-Type', 'application/json');
  next();
});

userRoutes.post('/user', function(req, res) {
  let user = new User();
  user.name = req.body.name;
  user.password = req.body.password;

  user.save(function(err, user){
    if(err){
      res.send(err);
    } else {
      res.json(user);
    }
  });
});

app.set('superSecret', configAuth.secret);
// route to authenticate a user (POST http://localhost:8080/api/authenticate)
userRoutes.post('/authenticate', function(req, res) {

  // find the user
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        let token = jwt.sign(user, app.get('superSecret'), {
          expiresIn: 1440 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }

    }

  });
});




module.exports = userRoutes;
