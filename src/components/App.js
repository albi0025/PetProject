import React from 'react';
import DisplayPets from './DisplayPets';

class App extends React.Component {

  constructor() {
    super();
  }



  render() {
    return (
      <div>
        Now we are getting somewhere...
        <DisplayPets/>
      </div>
    );
  }
}

export default App;
