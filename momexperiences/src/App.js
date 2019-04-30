import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import CreateEvent from './components/CreateEvent';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import IndividualCard from './components/IndividualCard';


const App = () => {
      return (
        <>
        <Route exact path = '/' render = {props => <HomePage {...props}/> } />
        <Route path= '/ProfilePage'  render = {props => <ProfilePage {...props}/> } />
        <Route path= '/CreateEvent'  render = {props => <CreateEvent {...props}/> } />
        <Route path= '/LoginForm'  render = {props => <LoginForm {...props}/> } />
        <Route path= '/SignUpForm'  render = {props => <SignUpForm {...props}/> } />
        <Route path="/IndividualCard/:id"  render = {props => <IndividualCard {...props}/> } />
        </>
      )
}

export default App;