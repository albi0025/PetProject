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
            <Modal.Title id="contained-modal-title-lg">Pet Description</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{this.props.pet.name}</h4>

            <p>{this.props.pet.description}</p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
  }
});



export default PopUpPet;
