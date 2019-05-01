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
      <div> 
        {this.state.data.map((info, i) => {
          console.log(info.body)
        return (
          <div key ={i}>

          <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>{info.name}</Card.Title>
              <Card.Text>
              {info.body}
              </Card.Text>
              <Button variant="danger">Go somewhere</Button>
            </Card.Body>
          </Card>;

          </div>
        )
      })}
      </div> 
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
