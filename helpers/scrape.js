
let scraper = {};


scraper.scrapePetango = function(url) {
  //Make a GET request

  //Parse the response and return and array of Urls to the animals
  let animalUrls = this.parseAnimalListResponse("");

  //Make a GET request to each individual url
  let petArray = [];
  for(let i = 0; i <animalUrls.length; i++) {
    //make a GET request using animalUrls[i]
    //Parse response to get a pet object
    petArray.push(this.parseIndividualAnimalResponse(""));
  }
  //Return a list of pet objects
  return petArray;
};

scraper.parseAnimalListResponse = function(response) {
  return [];
};

scraper.parseIndividualAnimalResponse = function(response) {
  return {};
};


















module.exports = scraper;
