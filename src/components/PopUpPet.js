import React from 'react';
import mongoose from 'mongoose';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import DisplayPets from './DisplayPets';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';



const PopUpPet = React.createClass({
  render() {


    return (
        <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg card-text">{this.props.pet.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <img id="image-gallery-image" class="img-responsive"
          src={this.props.pet.mainPhoto}/>

            <p id="card-text">Species: {this.props.pet.species}</p>
            <p id="card-text">Breed: {this.props.pet.breed}</p>
            <p id="card-text">Age: {this.props.pet.age}</p>
            <p id="card-text">Gender: {this.props.pet.gender}</p>
            <p id="card-text">Size: {this.props.pet.size}</p>
            <p id="card-text">Color: {this.props.pet.color}</p>
            <p id="card-text">Spayed or Neutered: {this.props.pet.spayNeuter}</p>
            <p id="card-text">Declawed: {this.props.pet.declawed}</p>
            <p id="card-text">Intake Date: {this.props.pet.intakeDate}</p>
            <p id="card-text">Description: </p><p>{this.props.pet.description}</p>


          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
  }
});



export default PopUpPet;
