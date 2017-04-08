import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Home extends React.Component {

  render() {
    return(
      <div>
        <div className="homeContainer">
          <div className="header"/>
        </div>
        <div className="aboutDiv">
        <h2 className="aboutHeader">Welcome to Bozeman Pet Project</h2>
        <h4>This site is a responsive modile friendly way to keep an
        eye on all of your local furry friends. <br/>
        this site includes up to date info on all
        of the animals that are currently available for adoption as well<br/>
        as their sponsorship status. If you are currently looking to adopt,
        or are just wanting to browse some<br/> of the cutest pets
        around click on one of the photos below to start your search.</h4>
        <h2>And please enjoy!</h2>
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
          <h4 id="sponsorshipParagraph">It takes between $450 to $600 to care for one animal for one year,<br/>
          <h3>That equals out to just over $1 per day.</h3>
          <br/> Donating by sponsoring an animal will help provide these four legged friends with<br/>food, water and shelter
           until they are adopted by a loving family</h4>
          <h3 id="sponsorshipParagraph">click one of the photos above<br/> to sponsor an animal today!</h3>
        </div>
      </div>
    );
  }
}
