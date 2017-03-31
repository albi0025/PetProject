import ReactDOM from 'react-dom';
import { Col, Button, ButtonToolbar, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';
import React, {Component} from 'react';

class Register extends React.Component{
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      registered: false,
      subscribed: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.addNewUserToDatabase = this.addNewUserToDatabase.bind(this);
    this.handleSubscribedChange = this.handleSubscribedChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubscribedChange(e) {
    this.setState({subscribed: true});
  }

  addNewUserToDatabase(e) {
    e.preventDefault();
    fetch('/user/newUser',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        subscribed: this.state.subscribed
      })
    });
    this.setState({registered: true});
  }


  render() {
    if(this.state.registered) {
      return(
        <div>
          <br/>
          <br/>
          <br/>
          <h1>Welcome {this.state.name}</h1>
        </div>
      );
    }
    return (
      <div>
        <form>
          <br/>
          <br/>
          <br/>
          <input onChange={this.handleNameChange} type="text" name="name" value={this.state.name} placeholder="Name"/>
          <br/>
          <br/>
          <input onChange={this.handleEmailChange} type="email" name="email" value={this.state.email} placeholder="Email Address"/>
          <br/>
          <br/>
          <input onChange={this.handlePasswordChange} type="password" name="password" value={this.state.password} placeholder="Password"/>
          <br/>
          <br/>
          <p>
            <input onClick={this.handleSubscribedChange} type="checkbox" id="cbox1" value="first_checkbox"/>
            <label>&nbsp; Be Notified As New Pets Are Added</label>
          </p>
          <br/>
          <Button onClick={this.addNewUserToDatabase} type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}



export default Register;
