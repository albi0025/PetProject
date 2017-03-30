import React from 'react';
import DisplayPets from './DisplayPets';
import Login from './Login';
import NavModal from './NavModal';
import { Navbar, NavItem, Nav, Col, MenuItem, NavDropdown, ButtonToolbar, Button} from 'react-bootstrap';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      lgShow: false,
      loggedOut: false
    };
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    document.cookie = "token=";
    this.setState({loggedOut: true});
    console.log(this.state.loggedOut)
  }

  render() {
    let lgClose = () => this.setState({ lgShow: false });
    return(
      <div className="Navbar">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" className="navbar-left"><img className="img-responsive" src="/images/navLogo.png"/></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem className="navLinks" eventKey={1} href="/DogDisplay">
                  <Link to={{ pathname: '/DogDisplay' }}>Dogs</Link>
                </NavItem>
                <NavItem className="navLinks" eventKey={2} href="/CatDisplay">
                  <Link to={{ pathname: '/CatDisplay' }}>Cats</Link>
                </NavItem>
                <NavItem className="navLinks" eventKey={3} href="/">
                  <Button onClick={this.logout} className="navButton" bsStyle="primary">Logout</Button>
                </NavItem>
                <NavItem eventKey={4}>
                  <ButtonToolbar>
                    <Button className="navButton" bsStyle="primary" onClick={()=>{
                      this.setState({ lgShow: true });
                    }}>
                      Login/Register
                    </Button>
                    <NavModal show={this.state.lgShow} onHide={lgClose} />
                  </ButtonToolbar>
                </NavItem>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
