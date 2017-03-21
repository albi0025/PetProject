import React from 'react';
import mongoose from 'mongoose';
import { Button, Row, Col, Icon, Card, CardTitle, Navbar, Navitem } from 'react-materialize';


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
          <Card header={<CardTitle reveal image={pet.mainPhoto} waves="light"/>}
            title={pet.name}
            reveal={<p>{pet.description}</p>}>
            <p><a href="#">This is a link</a></p>
          </Card>
        </div>

    );
    });

    return (
      <Row>
        <Col lg={4}>
          {petPics}
        </Col>
      </Row>
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
