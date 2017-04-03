import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Home extends React.Component {

  render() {
    return(
      <div>
        <div className="homeContainer">
          <div className="header">
            <h1 className="words">Welcome to The</h1>
          </div>
        </div>
        <Grid>
          <Row>
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
          </Row>
        </Grid>
      </div>
    );
  }
}
