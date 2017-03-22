import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Home extends React.Component {

  render() {
    return(
      <div>
        <Grid>
          <Row>
           <Col xs={12} md={6} lg={6}>
             <Thumbnail className="homethumb" src="../images/mainpuppy.jpg" alt="242x200">
               <h1><Link to="/DisplayPets">Dogs</Link></h1>
             </Thumbnail>
           </Col>
           <Col xs={12} md={6} lg={6}>
             <Thumbnail src="../images/maincat.jpg" alt="242x200">
               <h1>Cats</h1>
             </Thumbnail>
           </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <div className="container-fluid">
              <h1>Sponsorship</h1>
              <p></p>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}
