import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Home extends React.Component {

  render() {
    return(
      <div>
        <div className="container">
          <div className="headerlogo">
            <div className="header">
              <h1 className="words">Welcome</h1>
            </div>
          </div>
        </div>
        <Grid>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div className="outterhomediv">
                <Thumbnail className="homediv" src="../images/mainpuppy.jpg" alt="242x200">
                  <h1><Link to={{ pathname: '/DisplayPets', query: { species: 'dog' } }}>Dogs</Link></h1>
                </Thumbnail>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className="outterhomediv">
                <Thumbnail className="homediv" src="../images/maincat.jpg" alt="242x200">
                  <h1><Link to={{ pathname: '/DisplayPets', query: { species: 'cat' } }}>Cats</Link></h1>
                </Thumbnail>
              </div>
            </Col>
          </Row>
        </Grid>
          <div className="sponsorship">
            <h1 className="sponsorhead">Sponsorship</h1>
            <p></p>
          </div>
      </div>
    );
  }
}
