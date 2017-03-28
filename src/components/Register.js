import ReactDOM from 'react-dom';
import { Col, Button, ButtonToolbar, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';
import React, {Component, PropTypes} from 'react';

class Register extends React.Component{

  render() {
    return (
      <div>
        <form>
          <br/>
          <br/>
          <br/>
          <p>Name:</p>
          <input type="text" name="firstname"></input>
          <p>Email:</p>
          <input type="text" name="email"></input>
          <p>Password:</p>
          <input type="text" name="password"></input>
          <p>Subscribe:</p>
          <input type="checkbox" name="Subscribe"></input>
        </form>
      </div>
    );
  }
}



export default Register;
