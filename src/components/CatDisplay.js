import React from 'react';
import DisplayPets from './DisplayPets';

class CatDisplay extends DisplayPets {
  constructor() {
    super();
    this.state.species = "cat";
  }
}

export default CatDisplay;
