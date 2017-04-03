import React from 'react';
import DisplayPets from './DisplayPets';
import PopUpPet from './PopUpPet';
import { observer, inject } from 'mobx-react';
import { Button, ButtonToolbar, Col, Row, Thumbnail, Grid, Glyphicon, ProgressBar } from 'react-bootstrap';


class PetCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lgShow: false,
      heartButtonClass: ""
    };
    this.getCookie = this.getCookie.bind(this);
    this.heartPet = this.heartPet.bind(this);
    this.heartButton = this.heartButton.bind(this);
  }

  heartButton() {
    let favoritePets = this.props.userStore.pets || [];
    let animalIds = favoritePets.map(function(pet) {
      return pet.animalId;
    });
    let heartButtonClass = this.state.heartButtonClass;
    if(animalIds.indexOf(this.props.pet.animalId) > -1) {
      heartButtonClass = "heart-button";
    }
    return (
      <Button onClick={this.heartPet} key={this.props.pet.name} bsStyle="primary">
        <Glyphicon className={heartButtonClass} glyph="heart" />
      </Button>
    );
  }

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
    this.setState({heartButtonClass: "heart-button"});
    fetch('user/pets', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.getCookie('token')
      },
      body: JSON.stringify({
        id: this.props.pet._id
      })
    });
  }

  render() {
    let lgClose = () => this.setState({ lgShow: false });
    let heartButton = this.heartButton();
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
            {heartButton}
            <PopUpPet pet={this.props.pet} show={this.state.lgShow} onHide={lgClose} />
          </ButtonToolbar>
        </Thumbnail>
      </div>
    );
  }
}

PetCard.propTypes = {
  pet: React.PropTypes.object,
  userStore: React.PropTypes.object,
};

export default inject("userStore")(observer(PetCard));
