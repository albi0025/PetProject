import React from 'react';
import DisplayPets from './DisplayPets';
import { Navbar, NavItem, Nav, Col, MenuItem, NavDropdown } from 'react-bootstrap';

export default class Navigation extends React.Component {

  render() {
    return(
      <div className="Navbar">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Pet Projects</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
              <NavItem eventKey={1} href="./DisplayPets">Dogs</NavItem>
              <NavItem eventKey={2} href="#">Cats</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
