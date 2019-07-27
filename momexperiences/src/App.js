import React from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import CreateEvent from "./components/CreateEvent";
import EditEvent from "./components/EditEvent";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Bookings from "./components/Bookings";
import IndividualCard from "./components/IndividualCard";
import SignIn from "./components/SignIn";
import MyEvents from "./components/MyEvents";
import Landing from "./components/LandingPage";
import Protected from "./components/Protected";

const App = () => {
  return (
    <>
      <Route exact path="/" render={props => <Landing {...props} />} />
      <Route path="/Homepage" render={props => <HomePage {...props} />} />
      <Route path="/ProfilePage" render={props => <ProfilePage {...props} />} />
      <Route path="/CreateEvent" render={props => <CreateEvent {...props} />} />
      <Route path="/EditEvent" render={props => <EditEvent {...props} />} />
      <Route path="/LoginForm" render={props => <LoginForm {...props} />} />
      <Route path="/SignUpForm" render={props => <SignUpForm {...props} />} />
      <Route path="/Bookings" render={props => <Bookings {...props} />} />
      <Route path="/MyEvents" render={props => <MyEvents {...props} />} />
      <Route path="/signIn" render={props => <SignIn {...props} />} />
      <Route path="/Protected" render={props => <Protected {...props} />} />
      <Route path="/IndividualCard/:id" render={props => <IndividualCard {...props} />}
      />
    </>
  );
};

export default withRouter(App);
