
let request = require('request');
let cheerio = require('cheerio');
let scraper = {};


scraper.scrapePetango = function(url) {
  //Make a GET request
  request(url, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
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

//This function takes a response which it an HTML string
//and returns and array of url strings.
scraper.parseAnimalListResponse = function(html) {
  let $ = cheerio.load(html);
  console.log($('a'))
  return [];
};

scraper.parseIndividualAnimalResponse = function(html) {
  return {};
};


















module.exports = scraper;
