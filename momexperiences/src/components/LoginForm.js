import React from "react";
import { connect } from "react-redux";
import { login, experienceSuccessFetch } from "../actions";
import { withRouter } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import appLogo from "../imgs/logo.png";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        users_email: "",
        users_password: ""
      }
    };
  }
  login = async event => {
    event.preventDefault();
    await this.props.login(this.state.credentials);

    if (localStorage.getItem("token")) {
      this.props.history.push("/Homepage");
    } else {
      alert(
        "Invalid Credentials, please enter correct email/password, or sign up"
      );
    }
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
    let logo;
    let cardStyle;

    if (this.props.noLogo) {
      logo = null;
    } else {
      logo = <img src={appLogo} className="loginLogo" alt="application" />;
      cardStyle = "loginCardContainer";
    }

    return (
      <>
        <div style={{ width: "25rem" }} className={cardStyle}>
          <div className="login-page-wrapper">
            {logo}
            <h2>Login</h2>
            <Form onSubmit={this.login.bind(this)} className="loginForm">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="users_email"
                  placeholder="Email"
                  value={this.state.credentials.users_email}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="users_password"
                  placeholder="Password"
                  value={this.state.credentials.users_password}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Button variant="danger" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginFail: state.loginFail,
    isLoggingIn: state.isLoggingIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { login, experienceSuccessFetch }
  )(LoginForm)
);
