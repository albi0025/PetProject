let mongoose = require("mongoose");

let PetsSchema = new mongoose.Schema({
  animalId: Number,
  mainPhoto: String,
  species: String,
  breed: String,
  age: String,
  gender: String,
  size: String,
  color: String,
  spayNeuter: Boolean,
  declawed: Boolean,
  intakeDate: String,
  description: String
});

module.exports = mongoose.model('Pets', PetsSchema);
