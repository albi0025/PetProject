import React from 'react';
import mongoose from 'mongoose';

export default class DisplayPets extends React.Component {
  constructor() {
    super();
    this.state = {
      petPics: []
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

  render() {
    let petPics = this.state.petPics.map(function(pet){
      return(
        <div key={pet.name} id={pet.animalId}>

          <img src={pet.url}></img>
          <h2>{pet.name}</h2>
          <h3>{pet.description}</h3>

      </div>
    );
    });

    return (
    <div>
      {petPics}
    </div>
    );
  }
}

DisplayPets.propTypes = {
  petPics: React.PropTypes
};
