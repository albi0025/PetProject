import React from 'react';
import DisplayPets from './DisplayPets';
import Login from './Login';
import NavModal from './NavModal';
import { Navbar, NavItem, Nav, Col, MenuItem, NavDropdown, ButtonToolbar, Button} from 'react-bootstrap';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      lgShow: false
      // loggedIn: this.checkCookie(),
    };
    this.logout = this.logout.bind(this);
    // this.checkCookie = this.checkCookie.bind(this);
    // this.setIsLoggedInState = this.setIsLoggedInState.bind(this);
  }

  // getCookie(cname) {
  //   let name = cname + "=";
  //   let decodedCookie = decodeURIComponent(document.cookie);
  //   let ca = decodedCookie.split(';');
  //   for(let i = 0; i < ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }
  //
  // checkCookie() {
  //   let token = this.getCookie("token");
  //   if (token === "") {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  logout(e) {
    document.cookie = "token=";
    this.setState({loggedIn: false});
  }

  // setIsLoggedInState(val) {
  //   this.setState({loggedIn: val});
  // }

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
                  {
                    this.props.userStore.loggedIn ?
                      <Button onClick={this.logout} className="navButton" bsStyle="primary">Logout</Button> :
                      <Button className="navButton" bsStyle="primary" onClick={()=> {
                        this.setState({ lgShow: true });
                      }}>
                        Login/Register
                      </Button>
                  }
                </NavItem>
                <NavItem eventKey={4}>
                  <ButtonToolbar>
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

Navigation.propTypes = {
  userStore: React.PropTypes.object
};

export default inject("userStore")(observer(Navigation));
