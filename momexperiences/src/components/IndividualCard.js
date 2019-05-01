import React from "react";
import "../styles.css";
import { Card, Button } from "react-bootstrap";
import {searchExperiences, experienceSuccessFetch} from '../actions/index';
import {connect} from 'react-redux';



class IndividualCard extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    data:[]
 }
}
  componentDidMount(){
    this.setState({data: [this.props.selectedCardData]})
    console.log(this.state.data)
}

  render() {
    return (
      <>
        {this.state.data.map((info, i) => {
        return (
          <div key ={i}>
            <p> {info.name}</p>
            <p> {info.body}</p>
          </div>
        )
      })} 
      </>
    );
  }
}

const mapStateToProps = state => ({
  selectedCardData: state.selectedCardData
})

export default connect (
  mapStateToProps,
  {searchExperiences, experienceSuccessFetch}
)(IndividualCard);