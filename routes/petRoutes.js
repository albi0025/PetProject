import React from 'react';
import webpack from 'webpack';
const Pet = require ('../models/pet');
let express = require('express');
let router = express.Router();


router.use(function(req, res, next){
  console.log('something is happening!');
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.route('/petsdata')

.post(function(req, res, next){

  let pets = new Pet();

  pets.url = req.body.url;
  pets.animalId = req.body.animalId;
  pets.name = req.body.name;
  pets.mainPhoto = req.body.mainPhoto;
  pets.species = req.body.species;
  pets.breed = req.body.breed;
  pets.age = req.body.age;
  pets.gender = req.body.gender;
  pets.size = req.body.size;
  pets.color = req.body.color;
  pets.spayNeuter = req.body.spayNeuter;
  pets.declawed = req.body.declawed;
  pets.intakeDate = req.body.intakeDate;
  pets.description = req.body.description;

  pets.save(function(err, pets, next){
    if(err){
      return next(err);
    } else {
      res.json(pets);
    }
  });
})

.get( function(req, res, next){
  Pets.find(function(err, pets){
    if(err){
      next(err);

    } else {
      res.json(pets);
    }
  });
});

module.exports = router;
