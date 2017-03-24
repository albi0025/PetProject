import React from 'react';
import mongoose from 'mongoose';
import { Button, Col, Row, Thumbnail, Grid } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';


export default class DisplayPets extends React.Component {
  constructor() {
    super();
    this.state = {
      petPics: [],
      species: window.location.hash.split("species=")[1].split("&")[0]
    };
    this.loadPetsFromDb = this.loadPetsFromDb.bind(this);
  }

  componentDidMount() {
    this.loadPetsFromDb();
  }

  loadPetsFromDb() {
    fetch('/petsdata')
    .then(result => result.json())
    .then(data => this.setState({
      petPics: data}));
  }
    //create a new array that is a filtered version of this.state.petPics
    //example: if this.state.species === dog than the resulting array will only have dogs
    //When creating the petPics array, map over filtered array instead of this.state.petPics
  render() {
    let catOrDogArray = this.state.petPics.filter(function(pet) {
      return pet.species.toLowerCase() === this.state.species.toLowerCase();
    }.bind(this));

    let petPics = catOrDogArray.map(function(pet){
      return(
        <div className="pet-div" key={pet.name} id={pet.animalId}>
            <Thumbnail className="pet-card" src={pet.mainPhoto} alt="Image">
              <h3>{pet.name}</h3>
              <p>Sponsor Me!</p>
              <p>
                <Button className="yellow-button">Button</Button>&nbsp;
                <Button className="blue-button" bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
        </div>
      );
    });

    return (
      <div id="wrapper">
        <div id="columns">
          {petPics}
        </div>
      </div>
    );
  }
}

DisplayPets.propTypes = {
  petPics: React.PropTypes
};

//Basic Pet Display
// <img src={pet.mainPhoto}></img>
// <h2>{pet.name}</h2>
// <h3>{pet.description}</h3>
