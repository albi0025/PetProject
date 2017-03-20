import React from 'react';
import DisplayPets from './DisplayPets';
import { Col, Row } from 'react-materialize';

class App extends React.Component {

  constructor() {
    super();
  }



  render() {
    return (
      <div>
      <link rel="stylesheet" type="text/css" href="style.css" media="screen"/>
        <div className="container">
          <DisplayPets/>
        </div>
      </div>
    );
  }
}

export default App;
