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


  deleteEvent(e){
    e.preventDefault();
    const id = this.props.selectedCardData.id
    this.props.deleteEvent(id)


  }

  editEvent(e){
    e.preventDefault();
    const event = this.props.selectedCardData
    this.props.editEvent(event)
    this.props.history.push('/EditEvent')
  }

  console(){
     console.log(this.props.userEvents)

  }
  render() {
    return (
      <>
        <div>
        <NavBar />
          <Button onClick ={this.console.bind(this)}>Load Events</Button>
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
