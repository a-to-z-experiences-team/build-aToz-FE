import React, { Component } from "react";
import { connect } from "react-redux";
import { getSignUp, postSignUp } from "../actions";
import NavBar from "./NavBar";
import { Form, Button, Col } from "react-bootstrap";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const SignIn = (props) =>  {
    return (
      <>
        <NavBar />
        <div> 
        <LoginForm />
        <SignUpForm />
        </div>
      </>
    );
  }



export default SignIn;
