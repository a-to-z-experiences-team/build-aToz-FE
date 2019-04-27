import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import NavBar from './NavBar';
import {Form, Button} from 'react-bootstrap';

class LoginForm extends React.Component {
  state = {
    credentials: {
    username: "",
    password: ""}
  };
  
  login = event => {
    event.preventDefault();
    console.log(this.state.credentials)
  };
  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <>
      <NavBar />
      
        <div className="login-page-wrapper">
        <h2>Login</h2>
        <Form onSubmit={this.login} className ='loginForm'>
        <Form.Group controlId="formBasicEmail" >
          <Form.Label>Username</Form.Label>
          <Form.Control               
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            required/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control               
              type="password"
              name="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              required />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
        </Form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
