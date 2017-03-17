let express = require('express');
let fs = require('fs');
let request = require('request');
let cheerio = require('cheerio');
let app     = express();

app.get('/scrape', function(req, res){

  //The URL we will scrape from:
  let url = 'http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimals.aspx?species=Dog&sex=All&agegroup=All&colnum=1&authkey=1t4v495156y98t2wd78317102f933h83or1340ptjm31spd04d';

  request(url, function(error, response, html){

    if(!error) {

      let $ = cheerio.load(html);

      let petName, petID, petPhoto;
      let json = { petName: "", petID: "", petPhoto:""};

      // use the unique animal name class
      $('.list-animal-name').filter(function(){

        // Store the data we filter into a varible.
        let data = $(this);

        petName = data.childern().first().text();

        //Store Pet name in our json object.
        json.petName = petName;

      })
    }
    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written!-Check your project directory for the output.json file');
    })
;
    res.send('Check your console')
  });
}







module.exports = app;
