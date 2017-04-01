import {expect} from 'chai';
import scrape from './scrape';
import fs from 'fs';

describe('Scrape', () => {
  //We need to figure out how to run callbacks and mock the data so that we can
  //run this test.
  xdescribe('scrapePetango', () => {
    it('works', () => {
      expect(scrape.scrapePetango("http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimals.aspx?species=Dog&sex=All&agegroup=All&colnum=1&authkey=1t4v495156y98t2wd78317102f933h83or1340ptjm31spd04d")).to.eql([]);
    });
  });
  let html = fs.readFileSync("./helpers/html/scrapetest.html").toString();

  describe('parseAnimalListResponse', () => {
    it('works', () => {
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
  let individualPetHtml = fs.readFileSync("./helpers/html/individualPetHtml.html").toString();

  describe('parseIndividualAnimalResponse', () => {
    it('works', () => {
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
