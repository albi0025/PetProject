import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import uriUtil from 'mongodb-uri';
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


//MongoDB -- Mongoose Import - Start

mongoose.Promise = global.Promise;

let mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/petsdata';
let mongooseUri = uriUtil.formatMongoose(mongodbUri);
let options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
mongoose.connect(mongooseUri, options);
const Pet = require('../models/pet');
const petRoutes = require('../routes/petRoutes');
//End

//Timed scrape and sync
let scrapeRunner = require('../helpers/scrape');
let syncRunner = require('../helpers/sync');
//
let url = "http://ws.petango.com/Webservices/adoptablesearch/" +
  "wsAdoptableAnimals.aspx?sex=All&agegroup=All&colnum=" +
  "1&authkey=1t4v495156y98t2wd78317102f933h83or1340ptjm31spd04d";

setInterval(scrapeAndSync, 3600000);

function scrapeAndSync() {
  scrapeRunner.scrapePetango(url, function(arr) {
    syncRunner.syncPets(arr);
    console.log(arr);
  });
}
//End////////////////////////////////////////

app.use(express.static('src/public'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
//---------------------------------------------------------------
app.use('/', petRoutes);

app.post('/petsdata',function(req,res){

  let pets = new Pet({
    url: req.body.url,
    animalId: req.body.animalId,
    name: req.body.name,
    mainPhoto: req.body.mainPhoto,
    species: req.body.species,
    breed: req.body.breed,
    age: req.body.age,
    gender: req.body.gender,
    size: req.body.size,
    color: req.body.color,
    spayNeuter: req.body.spayNeuter,
    declawed: req.body.declawed,
    intakeDate: req.body.intakeDate,
    description: req.body.description

  });


  pets.save(function(err, pets, next){
    if (err) throw err;
    res.json(pets);
  });

});
//------------------------------------------------------------------

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/public/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
