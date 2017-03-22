import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

export default class Navigation extends React.Component {

  render() {
    return(
      <div>
        <Navbar>
          <Navbar.Header>
           <Navbar.Brand>
             <a href="#">Pet Project</a>
           </Navbar.Brand>
          </Navbar.Header>
          <Nav className="item-right">
            <NavItem id="tag" eventKey={1} href="#">Dogs</NavItem>
            <NavItem id="tag" eventKey={2} href="#">Cats</NavItem>
            <NavItem id="tag" eventKey={3} href="#">Sponsorship</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
