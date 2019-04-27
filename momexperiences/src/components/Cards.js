import React from "react";
import "../styles.css";
import { CardDeck, Card, Button } from "react-bootstrap";
import {searchExperiences, experienceSuccessFetch} from '../actions/index';
import {connect} from 'react-redux';



class Cards extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    filtered: []
  }
  this.handleChange = this.handleChange.bind(this);
}
  componentDidMount(){
    this.props.experienceSuccessFetch()
    this.setState({ 
      filtered: this.props.momExperiences
    })
}

componentWillReceiveProps(nextProps){
  this.setState({
    filtered:nextProps.momExperiences
  })
}

handleChange(e) {
  let currentList = [];
  let newList = [];

  if (e.target.value !== "") {

    currentList = this.props.momExperiences;

    newList = currentList.filter(item => {
      const lc = item.name.toLowerCase();
      const filter = e.target.value.toLowerCase();
      return lc.includes(filter);
    });
  } else {
    newList = this.props.momExperiences;
  }
  this.setState({
    filtered: newList
  });
}


  render() {
    return (
      <>
        <div className="viewAllContainer">
          <input type ='text' className='input' onChange= {this.handleChange} placeholder= 'Search Experiences' className='searchExperiences'></input>
          
        </div>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1157399/pexels-photo-1157399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260s"
            />
            <Card.Body>
              <Card.Title> Hiking </Card.Title>
              <Card.Text>
             {this.state.filtered.map(comment => <p> {comment.name}</p>)}
              </Card.Text>
            </Card.Body>
            <div className="buttonContainer">
              <Button variant="danger">Check Out</Button>
            </div>
            <Card.Footer>
              <small bg="danger" className="text-muted">
                High Hills, May 10th, 2019
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/235554/pexels-photo-235554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Card.Body>
              <Card.Title> Treasure Hunt</Card.Title>
              <Card.Text>
                Join us for a fun treasure hunt at Indigo Park!
              </Card.Text>
            </Card.Body>
            <div className="buttonContainer">
              <Button variant="danger">Check Out</Button>
            </div>
            <Card.Footer>
              <small className="text-muted">Rialto Park, May 03, 2019</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1007773/pexels-photo-1007773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Card.Body>
              <Card.Title> Stroller Strides </Card.Title>
              <Card.Text>
                Join our daily stroller walk around the park.
              </Card.Text>
            </Card.Body>
            <div className="buttonContainer">
              <Button variant="danger">Check Out</Button>
            </div>
            <Card.Footer>
              <small className="text-muted">Rodondo Park, May 01, 2019 </small>
            </Card.Footer>
          </Card>
        </CardDeck>
        ;
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
)(Cards);
