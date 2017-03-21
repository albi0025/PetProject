//You scrape petango and you get one pet object back.
//You want to look that pet up in your database by animalId.
let Pet = require('../models/pet');
let sync = {};

sync.syncPets = function(arr) {
  let scrapedAnimalIds = arr.map(function(pet) {
    return pet.animalId;
  })
  Pet.find({}, function (err, docs){
    for(let i = 0; i < docs.length; i ++) {
      if(scrapedAnimalIds.indexOf(docs[i].animalId) === -1) {
        console.log(docs[i].name + " was adopted! :)")
        // this.sync.removeAdoptedPets(arr)
      }
    }
  })
//loop over pet objects in array
  for(let i = 0; i < arr.length; i ++) {
    //look up pet in database by animalID
    Pet.findOne({animalId:arr[i].animalId}, function (err, doc) {
      if(doc === null) {
        this.saveNewPets(arr[i]);
      }
      //else a dog exsited both in the scrape and the database and
      //we're ignoring it for now.
    }.bind(this));

    // Pet.find({}, 'animalId name', function(err, docs) {
    //   console.log(docs)
    // })

    //save pet object if it does not exist
    //remove pet object if it only exists in the DB and not the scrape
  }
//save pets that have an ID that does not currently exsist in the database
//remove/hide pets that exist in the database but do not exist
};

sync.saveNewPets = function(id) {

};

sync.removeAdoptedPets = function(id) {

};




module.exports = sync;
