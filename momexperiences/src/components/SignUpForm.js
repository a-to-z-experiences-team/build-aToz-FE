import React, { Component } from "react";
import { connect } from "react-redux";
import { getSignUp, postSignUp } from "../actions";
import NavBar from "./NavBar";
import { Form, Button, Col } from "react-bootstrap";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      location: "",
      hobbies: ""
    };
  }

  addSignUp = () => {
    this.props.postSignUp({
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      location: this.state.location,
      hobbies: this.state.hobbies
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <NavBar />

        <div className="login-page-wrapper">
          <h2>Sign Up</h2>
          <Form>
            <Form.Group controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Name"
                type="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGridLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                placeholder="Location"
                type="location"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGridHobbies">
              <Form.Label>Hobbies</Form.Label>
              <Form.Control
                placeholder="Walks, parks, art..."
                type="hobbies"
                name="hobbies"
                value={this.state.hobbies}
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

const mapStateToProps = state => {
  return {
    signUp: state.signUp
  };
};

export default connect(
  mapStateToProps,
  {
    getSignUp,
    postSignUp
  }
)(SignUpForm);
