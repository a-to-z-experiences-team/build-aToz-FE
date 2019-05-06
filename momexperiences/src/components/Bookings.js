import React from "react";
import "../styles.css";
import { Card, Button } from "react-bootstrap";
import { searchExperiences, getuserEvents, editEvent, experienceSuccessFetch, deleteEvent, updateArrays } from "../actions/index";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import {Link, withRouter} from 'react-router-dom';

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        filtered: []
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    const deconstructedToken = token.split('.')[1]
    const deconstructedUserID = JSON.parse(window.atob(deconstructedToken))
    this.props.getuserEvents(deconstructedUserID.subject)
    // this.setState({filtered: this.props.userEvents}

  }


  seeEvents(e){
    e.preventDefault(e)
    this.props.history.push('/MyEvents')

  }
  render() {
    return (
      <>

        <NavBar />

        <div className = 'loadButtonEventContainer'>
          <Button onClick ={this.seeEvents.bind(this)} className = 'loadButtonEvent'>Load Events</Button>

        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
    userEvents: state.userEvents
});

export default withRouter( connect(
  mapStateToProps,
  { searchExperiences, getuserEvents,experienceSuccessFetch,  editEvent,  deleteEvent, updateArrays }
)(Bookings));
