//You scrape petango and you get a pet object back.
//You want to look that pet up in your database by animalId.
import Pet from '../models/pet';
import User from '../models/user';
import petAddedEmail from './mailSend';

let sync = {};

sync.syncPets = function(scrapedPets) {
  let scrapedAnimalIds = scrapedPets.map(function(pet) {
    return pet.animalId;
  });
  Pet.find({ animalId: { $in: scrapedAnimalIds } }, function(error, docs) {
    // docs are pets from the scrape that already exist in the database
    // scrapedPets are all animals from the scrape
    // scrapedPets - docs are NEW pets, not yet in the database
    // listDiff(scrapedPets, docs) === scrapedPets - docs
    let newPets = this.listDiff(scrapedPets, docs);
    this.emailRecipients(newPets);
  }.bind(this));

  //For unadopted pets, if they are no longer in the scrape, flag them as adopted
  Pet.find({ adopted: false }, function (err, docs){
    for(let i = 0; i < docs.length; i ++) {
      if(scrapedAnimalIds.indexOf(docs[i].animalId) === -1) {
        this.adoptedTrue(docs[i]);
      }
    }
  }.bind(this));
};

sync.listDiff = function(a1, a2) {
  return a1.filter(function(pet) {
    for(let i = 0; i < a2.length; i ++) {
      if(a2[i].animalId === pet.animalId) {
        return false;
      }
    }
    return true;
  });
};

sync.emailRecipients = function(newPets) {
  User.find({ subscribed: true }, 'email', function (err, users) {
    let recipients = users.map(function(user) {
      return user.email;
    });
    petAddedEmail(newPets, recipients);
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
