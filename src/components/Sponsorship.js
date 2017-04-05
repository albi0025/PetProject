import React from 'react';
import { observer, inject } from 'mobx-react';
import { Button, ButtonToolbar, Col, Row, Thumbnail, Grid, Glyphicon, ProgressBar } from 'react-bootstrap';


class Sponsorship extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // this.getCookie = this.getCookie.bind(this);
  }


  render() {

    return(

    );
  }
}

PetCard.propTypes = {
  // pet: React.PropTypes.object,
  userStore: React.PropTypes.object,
};

export default inject("userStore")(observer(PetCard));
