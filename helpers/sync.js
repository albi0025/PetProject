//You scrape petango and you get one pet object back.
//You want to look that pet up in your database by animalId.
// let Pet = require('../models/pet');
import Pet from '../models/pet';
import mailSend from './mailSend';

let sync = {};

sync.syncPets = function(arr) {
  let scrapedAnimalIds = arr.map(function(pet) {
    return pet.animalId;
  });
  Pet.find({ adopted: false }, function (err, docs){
    for(let i = 0; i < docs.length; i ++) {
      if(scrapedAnimalIds.indexOf(docs[i].animalId) === -1) {
        this.adoptedTrue(docs[i]);
      }
    }
  }.bind(this));
  //loop over pet objects in array
  let self = this;
  let promiseArray = arr.map(function(pet) {
    //look up pet in database by animalID
    return Pet.findOne({animalId:pet.animalId}, function (err, doc) {
      if(doc === null) {
        self.saveNewPets(pet);
        return true;
      } else {
        return false;
      }
      //else a dog existed both in the scrape and the database and
      //we're ignoring it for now.
    }.bind(this));
  });
  Promise.all(promiseArray).then(foundPets =>{
    console.log(foundPets);
    let newPetCount = foundPets.reduce(
      (result, foundPet)=>foundPet ? result++ : result, 0);
    mailSend(newPetCount );
  });
};

sync.saveNewPets = function(pet) {
  new Pet(pet).save(function(err, pet, next) {
    console.log(pet.name + " was saved");
  });
};

//look up a the pet object by id in the database and changes adopted to true
sync.adoptedTrue = function(pet) {
  Pet.update({_id: pet.id}, { $set: { adopted: true }}, function(err) {
    console.log(pet.name + " was adopted! :)");
  });
};




export default sync;
