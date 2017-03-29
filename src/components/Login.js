import ReactDOM from 'react-dom';
import { Col, Button, ButtonToolbar, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';
import React, {Component, PropTypes} from 'react';

class Login extends React.Component{
  constructor() {
    super();
    this.state = {
      name: "",
      password: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  // authenticateUser(user) {
  //   fetch("/user/authenticate",{
  //     method:"POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name: user.name,
  //       password: user.password
  //     })
  //   });
  // }



  render() {
    return (
      <div>
        <form>
        <br/>
        <br/>
        <br/>
          <p>Name:</p>
          <input onChange={this.handleNameChange} type="text" name="name" value={this.state.name}/>
          <p>Password:</p>
          <input onChange={this.handlePasswordChange} type="text" name="password" value={this.state.password}/>
          <br/>
          <button type="submit">Submit</button>

        </form>
      </div>
    );
  }
}



export default Login;
