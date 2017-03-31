import React from 'react';
import DisplayPets from './DisplayPets';

class DogDisplay extends DisplayPets {
  constructor() {
    super();
    this.state.species = "dog";
  }
}

export default DogDisplay;
