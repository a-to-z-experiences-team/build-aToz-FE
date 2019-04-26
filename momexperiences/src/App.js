import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import CreateEvent from './components/CreateEvent';
import LoginForm from './components/LoginForm';


const App = () => {
      return (
        <>
        <Route exact path = '/' render = {props => <HomePage {...props}/> } />
        <Route path= '/ProfilePage'  render = {props => <ProfilePage {...props}/> } />
        <Route path= '/CreateEvent'  render = {props => <CreateEvent {...props}/> } />
        <Route path= '/LoginForm'  render = {props => <LoginForm {...props}/> } />
        </>
      )
}

export default App;