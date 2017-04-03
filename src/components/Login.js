import ReactDOM from 'react-dom';
import { Col, Button, ButtonToolbar, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';
import React, {Component, PropTypes} from 'react';
import { observer, inject } from 'mobx-react';

class Login extends React.Component{
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      token: ""
      // loggedIn: false
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    // this.authenticateUser = this.authenticateUser.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  // authenticateUser() {
  //   fetch("/user/authenticate",{
  //     method:"POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       email: this.state.email,
  //       password: this.state.password
  //     })
  //   })
  //   .then(result => result.json())
  //   .then(res => {
  //     if(res.token) {
  //       document.cookie = "token=" + res.token;
  //     }
  //   });
  // }

  loginHandler(e){
    e.preventDefault();
    this.props.userStore.authenticateUser(this.state);
    this.props.setIsLoggedInState(true);
  }


  render() {
    if(this.props.userStore.loggedIn){
      return(
        <div>
        <br/>
        <br/>
        <br/>
        <h3>Welcome {this.state.email}!</h3>
        </div>
      );
    }
    return (
      <div>
        <form>
        <br/>
        <br/>
        <br/>
        <br/>
          <input onChange={this.handleEmailChange} type="email" name="email" value={this.state.email} placeholder="Email Address"/>
          <br/>
          <br/>
          <input onChange={this.handlePasswordChange} type="password" name="password" value={this.state.password} placeholder="Password"/>
          <br/>
          <br/>
          <Button onClick={this.loginHandler} type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  setIsLoggedInState: React.PropTypes.func,
  userStore: React.PropTypes.object
};

export default inject("userStore")(observer(Login));
