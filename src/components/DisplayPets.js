import React from 'react';

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
    fetch('/pets')
    .then(result => result.json())
    .then(data => this.setState({
      petPics: data}));
  }

  render() {
    let petPull = this.state.petPics.map(function(pet){
      return(
        <div key={pet.name} id={pet.animalId}>
          <img src={pet.url}></img>
          <h3>{pet.description}</h3>

      </div>
    );
    });

    return (
    <div>
      {petPull}
    </div>
    );
  }
}


DisplayPets.PropTypes = {
  petPics: React.PropTypes.array
};
