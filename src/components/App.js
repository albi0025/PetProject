import React from 'react';
import DisplayPets from './DisplayPets';
import { Button, Col, Row, Thumbnail, Grid } from 'react-bootstrap';

class App extends React.Component {

  constructor() {
    super();
  }



  render() {
    return (
      <div>
      <link rel="stylesheet" type="text/css" href="style.css" media="screen"/>
        <Grid>
          <Row>
            <DisplayPets/>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
