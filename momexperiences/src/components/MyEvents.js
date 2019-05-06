import React from "react";
import "../styles.css";
import { Card, Button } from "react-bootstrap";
import { searchExperiences, getEvent, getuserEvents, editEvent, experienceSuccessFetch, deleteEvent, updateArrays } from "../actions/index";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import {Link, withRouter} from 'react-router-dom';

class MyEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
      this.props.experienceSuccessFetch()
  }

  onItemClick = (item, e) => {

    let obj = this.props.momExperiences.find(o => o.exp_title === item.exp_title);
    this.props.getEvent(obj.id)
    this.props.history.push(`/IndividualCard/${obj.id}`)
  }

  editEvent(e) {
    e.preventDefault();
    this.props.history.push('/EditEvent')
  }
  render() {
    return (
      <>
        <div>
        <NavBar />
        <Card>
            {this.props.userEvents.map((event, i) => {
            let boundItemClick = this.onItemClick.bind(this, event);

            return (
                <>
                    <Card.Header as="h5" key = {i}>{event.exp_title}</Card.Header>
                        <Card.Body>
                            <Card.Title>{event.exp_title}</Card.Title>
                            <Card.Text>{event.exp_desc}</Card.Text>

                        <Button variant="danger" onClick={ boundItemClick } key = {i} > Details </Button>
    
                    </Card.Body>
                </>
            )}
            )
            }

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
    userEvents: state.userEvents,
    error: state.error
  });

export default withRouter( connect(
  mapStateToProps,
  { searchExperiences, getuserEvents,experienceSuccessFetch, getEvent, editEvent,  deleteEvent, updateArrays }
)(MyEvents));