import React from "react";
import { connect } from "react-redux";
import { login, experienceSuccessFetch } from "../actions";
import { withRouter} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';

class LoginForm extends React.Component {
  state = {
    credentials: {
      users_email: "",
    users_password: ""}
  };
  
  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials)
    this.props.history.push("/Homepage")
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
        
        <div className="login-page-wrapper">
        <h2>Login</h2>
        <Form onSubmit={this.login.bind(this)} className ='loginForm'>
        <Form.Group controlId="formBasicEmail" >
          <Form.Label>Email</Form.Label>
          <Form.Control               
            type="text"
            name="users_email"
            placeholder="Email"
            value={this.state.credentials.users_email}
            onChange={this.handleChange}
            required/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control               
              type="password"
              name="users_password"
              placeholder="Password"
              value={this.state.credentials.users_password}
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

export default withRouter(connect(
  mapStateToProps,
  { login, experienceSuccessFetch }
)(LoginForm));
