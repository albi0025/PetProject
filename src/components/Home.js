import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Home extends React.Component {

  render() {
    return(
      <div>
        <div className="homeContainer">
          <div className="header">
            <h1 className="words"/>
          </div>
        </div>
        <Grid>
          <Row>
            <div className="homepetcontainer">
              <Col xs={12} md={6} lg={6}>
                <Link to={{pathname: '/DogDisplay'}}>
                  <Thumbnail className="homediv1" src="../images/mainpuppy.jpg" alt="242x200"/>
                </Link>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Link to={{pathname: '/CatDisplay'}}>
                  <Thumbnail className="homediv2" src="../images/maincat.jpg" alt="242x200"/>
                </Link>
              </Col>
            </div>
          </Row>
        </Grid>
        <div className="sponsorship">
          <h1 className="sponsorshipHeader">Sponsorship</h1>
          <p>It takes between $250 to $400 to care for one animal in our shelter for a year.
          with a little help from you our fuzzy four legged friends can stay warm and fed.</p>
          <p>sponsor an animal today!</p>
        </div>
      </div>
    );
  }
}
