import DisplayPets from './DisplayPets';
import 'bootstrap/dist/css/bootstrap.min.css';


class DogDisplay extends DisplayPets {
  constructor() {
    super();
    this.state.species = "dog";
  }
}



export default DogDisplay;
