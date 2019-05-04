import React from "react";
import { Button, Card } from "react-bootstrap";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import logo from "../imgs/logo.png";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      showComponent: false,
      showSignUpComponent: false,
      LoginVision: true,
      SignUpbuttonVis: true
    };
  }
  toggleLogin = () => {
    this.setState({
      showLoginComponent: !this.state.showLoginComponent,
      SignUpbuttonVis: !this.state.SignUpbuttonVis
    });
  };
  toggleSignUp = () => {
    this.setState({
      showSignUpComponent: !this.state.showSignUpComponent,
      LoginVision: !this.state.LoginVision
    });
  };

  render() {
    const LoginVis = this.state.showLoginComponent ? "show" : "hide";
    const SignUpVis = this.state.showSignUpComponent ? "show" : "hide";
    const LoginbuttonVis = this.state.LoginVision ? "show" : "hide";
    const SignUpbuttonVis = this.state.SignUpbuttonVis ? "show" : "hide";

    return (
      <>
        <Card style={{ width: "25rem" }} className="loginCardContainer">
          <Card.Body>
            <div className="logoImgContainer">
              <img src={logo} className="loginLogo" />
              <h2>Visit our Community</h2>
            </div>
            <div className="App">
              <div className={`loginbuttonContainer ${LoginbuttonVis}`}>
                <Button onClick={this.toggleLogin} className="signinButton">
                  Login
                </Button>
                <div className={`login ${LoginVis}`}>
                  <LoginForm />
                </div>
              </div>
              <div className={`loginbuttonContainer ${SignUpbuttonVis}`}>
                <Button onClick={this.toggleSignUp} className="signinButton">
                  SignUp
                </Button>
                <div className={`login ${SignUpVis}`}>
                  <SignUpForm />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SignIn;
