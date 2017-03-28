import ReactDOM from 'react-dom';
import { Col, Button, ButtonToolbar, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';
import React, {Component, PropTypes} from 'react';

class Login extends React.Component{

  render() {
    return (
      <div>
        <form>
        <br/>
        <br/>
        <br/>
          <p>Name:</p>
          <input type="text" name="firstname"></input>
          <p>Password:</p>
          <input type="text" name="lastname"></input>
        </form>
      </div>
    );
  }
}



export default Login;
