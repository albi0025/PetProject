import React from 'react';
import DisplayPets from './DisplayPets';
import PopUpPet from './PopUpPet';
import { Button, ButtonToolbar, Col, Row, Thumbnail, Grid, Glyphicon, ProgressBar } from 'react-bootstrap';


class PetCard extends React.Component {
  constructor() {
    super();
    this.state = {
      lgShow: false
    };
    this.getCookie = this.getCookie.bind(this);
    this.heartPet = this.heartPet.bind(this);
  }

//Todo pass state down to here
  getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  heartPet(e) {
    fetch('user/pets', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.getCookie('token')
      }
    });
  }

  render() {
    let lgClose = () => this.setState({ lgShow: false });
    return(
      <div className="pet-div" key={this.props.pet.name} id={this.props.pet.animalId}>
        <Thumbnail className="pet-card" src={this.props.pet.mainPhoto} alt="Image">
          <h2>{this.props.pet.name}</h2>
          <p>Sponsor Me!</p>
          <ButtonToolbar>
            <Button key={this.props.pet.animalId} bsStyle="primary" onClick={()=>{
              this.setState({ lgShow: true });
            }}>
              Pet Info
            </Button>
            <Button onClick={this.heartPet} key={this.props.pet.name} bsStyle="primary">
              <Glyphicon glyph="heart" />
            </Button>
            <PopUpPet pet={this.props.pet} show={this.state.lgShow} onHide={lgClose} />
          </ButtonToolbar>
        </Thumbnail>
      </div>
    );
  }
}

PetCard.propTypes = {
  pet: React.PropTypes.object
};

export default PetCard;
