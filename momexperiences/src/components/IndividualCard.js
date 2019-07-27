import React from "react";
import "../styles.css";
import { Card, Button } from "react-bootstrap";
import { searchExperiences, editEvent, experienceSuccessFetch, deleteEvent, updateArrays } from "../actions/index";
import { connect } from "react-redux";
import NavBar from "./NavBar";

class IndividualCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false
    };
  }
  componentDidMount() {

  }


  deleteEvent(e){
    e.preventDefault();
    const id = this.props.selectedCardData.id
    this.props.deleteEvent(id)
    this.props.history.push('/Homepage')
  }

  editEvent(e){
    e.preventDefault();
    const event = this.props.selectedCardData
    this.props.editEvent(event)
    this.props.history.push('/EditEvent')
  }

  render() {
    return (
      <>
        <div>
          <NavBar />
           <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.selectedCardData.exp_title}</Card.Title>
              <Card.Text>Event Starts on: {this.props.selectedCardData.startsOn}</Card.Text>
              <Card.Text>Description: {this.props.selectedCardData.exp_desc}</Card.Text>
              <Card.Text>Location: {this.props.selectedCardData.location}</Card.Text>
              <Card.Text>Created By: {this.props.selectedCardData.createdBy}</Card.Text>
              <Card.Text>Max Guests: {this.props.selectedCardData.maxGuests}</Card.Text>
              <div className= 'individualCardButtons'> 
              <Button onClick= {this.deleteEvent.bind(this)} className = 'individButtons' >Delete</Button>
              <Button onClick= {this.editEvent.bind(this)} className = 'individButtons' >Edit</Button>
              </div>
              <small className="text-muted">Created on: {this.props.selectedCardData.createdAt}</small>
            </Card.Body>
          </Card> 
          
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  selectedCardData: state.selectedCardData,
  momExperiences: state.momExperiences,
  deleted: state.deleted,
  error: state.error
});

export default connect(
  mapStateToProps,
  { searchExperiences, experienceSuccessFetch,  editEvent,  deleteEvent, updateArrays }
)(IndividualCard);
