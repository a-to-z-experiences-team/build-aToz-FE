import React, { Component } from "react";
import { connect } from "react-redux";
import { getSignUp, postSignUp, login } from "../actions";
import NavBar from "./NavBar";
import { Form, Button, Col } from "react-bootstrap";
import { withRouter} from 'react-router-dom';
import LoginForm from './LoginForm';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users_firstName: "",
      users_lastName: "",
      users_email: "",
      users_password: "",
      users_userName: "",
    };
  }


  addSignUp(e) {
    e.preventDefault();
    this.props.postSignUp({
      users_firstName:this.state.users_firstName,
      users_lastName: this.state.users_lastName,
      users_userName: this.state.users_userName,
      users_email: this.state.users_email,
      users_password: this.state.users_password,
    }) 

   this.props.history.push("/LoginForm");
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <div className="login-page-wrapper">
          <h2>Sign Up</h2>
          <Form onSubmit = {this.addSignUp.bind(this)}>
            <Form.Group controlId="formGridName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="First Name"
                type="users_firstName"
                name="users_firstName"
                value={this.state.users_firstName}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridLocation">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Last Name"
                type="users_lastName"
                name="users_lastName"
                value={this.state.users_lastName}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="users_email"
                placeholder="Enter Email"
                name="users_email"
                value={this.state.users_email}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="users_password"
                value={this.state.users_password}
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGridHobbies">
              <Form.Label>Username</Form.Label>
              <Form.Control
                placeholder="Username"
                type="users_userName"
                name="users_userName"
                value={this.state.users_userName}
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Button variant="danger" type="submit">
              Create Account
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userSignUp: state.userSignUp,
})

export default withRouter(connect(
  mapStateToProps,
  {
    getSignUp,
    postSignUp,
    login,
  }
)(SignUpForm));