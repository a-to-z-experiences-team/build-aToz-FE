import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import CreateEvent from './components/CreateEvent';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import IndividualCard from './components/IndividualCard';
import SignIn from './components/SignIn';



const App = () => {
      return (
        <>
        <Route path= '/Homepage' render = {props => <HomePage {...props}/> } />
        <Route path= '/ProfilePage'  render = {props => <ProfilePage {...props}/> } />
        <Route path= '/CreateEvent'  render = {props => <CreateEvent {...props}/> } />
        <Route path= '/LoginForm'  render = {props => <LoginForm {...props} history= {this.props.history} /> } />
        <Route path= '/SignUpForm'  render = {props => <SignUpForm {...props}/> } />
        <Route exact path= '/'  render = {props => <SignIn {...props}/> } />
        <Route path="/IndividualCard/:id"  render = {props => <IndividualCard {...props}/> } />
        </>
      )
}


export default withRouter(App);