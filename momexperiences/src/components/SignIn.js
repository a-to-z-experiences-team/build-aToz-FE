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
      SignUpbuttonVis: true,
      login: "Login",
      signUp: "Sign Up",
      noLogo: true
    };
  }
  toggleLogin = () => {
    this.setState({
      showLoginComponent: !this.state.showLoginComponent,
      SignUpbuttonVis: !this.state.SignUpbuttonVis,
      login: this.state.showLoginComponent ? "Login" : "Go Back"
    });
  };
  toggleSignUp = () => {
    this.setState({
      showSignUpComponent: !this.state.showSignUpComponent,
      LoginVision: !this.state.LoginVision,
      signUp: this.state.showSignUpComponent ? "Sign Up" : "Go Back"
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
                  {this.state.login}
                </Button>
                <div className={`login ${LoginVis}`}>
                  <LoginForm noLogo={this.state.noLogo} />
                </div>
              </div>
              <div className={`loginbuttonContainer ${SignUpbuttonVis}`}>
                <Button onClick={this.toggleSignUp} className="signinButton">
                  {this.state.signUp}
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
