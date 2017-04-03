import {expect} from 'chai';
import scrape from './scrape';
import fs from 'fs';

describe('Scrape', () => {
  describe('parseAnimalListResponse', () => {
    it('extracts the urls from the html', () => {
      let html = fs.readFileSync("./helpers/html/scrapetest.html").toString();
      expect(scrape.parseAnimalListResponse(html)).to.eql(
        ["http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=33150855&css=",
          "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=33927386&css=",
          "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34250710&css=",
          "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34584335&css=",
          "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34622074&css=",
          "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34733129&css=",
          "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34788723&css=",
          "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34790773&css=",
          "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34807661&css=",
          "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34843733&css=",
          "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34843745&css=",
          "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34843747&css="]);
    });
  });

  describe('parseIndividualAnimalResponse', () => {
    it('extracts the pet object from the html', () => {
      let individualPetHtml = fs.readFileSync("./helpers/html/individualPetHtml.html").toString();
      expect(scrape.parseIndividualAnimalResponse(individualPetHtml)).to.eql(
        {
          animalId: 33150855,
          mainPhoto:"//media.petango.com/sms/photos/1095/4c8cd17e-b45e-4869-a08b-e60c053b2ce8.jpg",
          name: "Lucas",
          species: "Dog",
          breed: "German Shepherd/Mix",
          age: "9 years 7 months 10 days",
          gender: "Male",
          size: "Large",
          color: "Black/Tan",
          spayNeuter: true,
          declawed: "No",
          intakeDate: "1/25/2017",
          description: "I'm Lucas!  I love people; especially ones that take the time to get to know me.  A perfect day for me would be going on a walk or playing fetch for some exercise, getting spoiled with a couple of treats, and then curling up on the couch to watch a movie.  I am crate trained and really well behaved.  I used to live with my brother, now that he found another home, I would probably do better as an only pet in the household.  I am really looking for a house with soft beds, people who like snuggles and taking me on walks, and yummy treats.  If this sounds like you and you are looking for a sweet new boy to join your family, please come down to HOV and meet me.  I would love to be your new best friend!"
        }
      );
    });
  });
});
