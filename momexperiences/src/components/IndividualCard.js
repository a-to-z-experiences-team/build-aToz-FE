import React from "react";
import "../styles.css";
import { Card, Button } from "react-bootstrap";
import {searchExperiences, experienceSuccessFetch} from '../actions/index';
import {connect} from 'react-redux';



class IndividualCard extends React.Component {
  constructor(props){
    super(props)
  this.state = {
 }
}
  componentDidMount(){
    console.log(this.props.state)
}

  render() {
    return (
      <>
    <p> hi</p>
      </>
    );
  }
}

const mapStateToProps = state => ({
  momExperiences: state.momExperiences
})

export default connect (
  mapStateToProps,
  {searchExperiences, experienceSuccessFetch}
)(IndividualCard);