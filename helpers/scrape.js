
let request = require('request');
let cheerio = require('cheerio');
let scraper = {};


scraper.scrapePetango = function(url) {
  //Make a GET request
  request(url, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML
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

//This function takes a response which is an HTML string
//and returns and array of url strings.
scraper.parseAnimalListResponse = function(html) {
  let urlStrings = [];
  let $ = cheerio.load(html);
  //jquery get href from a tag
  let linkElements = $('.list-animal-name a');
  linkElements.each(function(i, k) {
    //put data in an array and concat the host name
    if(k.attribs.href !== 'http://www.petango.com') {
      urlStrings.push('http://ws.petango.com/Webservices/adoptablesearch/'
                      + k.attribs.href);
    }
  });
  return urlStrings;
};

//This function takes the html from each individual pet and parses it into
//a pet object and returns an object.

scraper.parseIndividualAnimalResponse = function(html) {

  let $ = cheerio.load(html);

  let petObject = {};

  petObject.animalId = $('#lblID').text();
  petObject.animalPhotos = [$('#imgAnimalPhoto').attr('src')];
  petObject.name = $('#lbName').text();
  petObject.species = $('#lblSpecies').text();
  petObject.breed = $('#lbBreed').text();
  petObject.age = $('#lbAge').text();
  petObject.gender = $('#lbSex').text();
  petObject.size = $('#lblSize').text();
  petObject.color = $('#lblColor').text();
  if($('#ImageAltered').attr('src') == 'images/GreenCheck.JPG') {
    petObject.spayNeuter = true;
  } else {
    petObject.spayNeuter = false;
  }
  petObject.declawed = $('#lbDeclawed').text();
  petObject.intakeDate = $('#lblIntakeDate').text();
  petObject.intakeDate = $('#lblIntakeDate').text();
  petObject.description = $('#lbDescription').text();

  console.log(petObject)
  return petObject;
};








module.exports = scraper;
