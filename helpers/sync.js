//You scrape petango and you get one pet object back.
//You want to look that pet up in your database by animalId.
let Pet = require('../models/pets');
let sync = {};

sync.syncDatabase = function(arr) {

//loop over pet objects in array
  for(let i = 0; i < arr.length; i ++) {
    //look up pet in database by animalID
    Pet.find({pet.animalId}, function (err, docs) {
      // docs is an array
    });
    //save pet object if it does not exist
    //remove pet object if it only exists in the DB and not the scrape
    console.log(arr[i]);
  }
//save pets that have an ID that does not currently exsist in the database
//remove/hide pets that exist in the database but do not exist
};

sync.saveNewPets = function(id) {

};

sync.removeAdoptedPets = function(id) {

};




module.exports = sync;
