import React from 'react';
import webpack from 'webpack';
const Pets = require ('../models/pets');
let express = require('express');
let router = express.Router();


router.use(function(req, res, next){
  console.log('something is happening!');
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.route('/petsdata')

.post(function(req,res, next){

  let pets = new Pets();

  pets.animalid = req.body.animalid;
  pets.mainPhoto = req.body.mainPhoto;
  pets.species = req.body.species;
  pets.breed = req.body.breed;
  pets.age = req.body.age;
  pets.gender = req.body.gender;
  pets.size = req.body.size;
  pets.color = req.body.colorspayedneutered;
  pets.spayneuter = req.body.spayneuter;
  pets.declawed = req.body.declawed;
  pets.intakedate = req.body.intakedate;
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
