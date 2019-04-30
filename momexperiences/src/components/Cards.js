import React from "react";
import "../styles.css";
import { CardDeck, Card, Button } from "react-bootstrap";
import {searchExperiences, experienceSuccessFetch} from '../actions/index';
import {connect} from 'react-redux';
import IndividualCard from './IndividualCard';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';



class Cards extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    eventCard: false,
    filtered: [],
    eventCardInfo: []
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

onItemClick = (item, e) => {
console.log(item)
  return( 
    <Link to={`/IndividualCard/${item.id}`} />
  )
}

handleChange(e) {
  let currentList = [];
  let newList = [];

  if (e.target.value !== "") {

    currentList = this.props.momExperiences;

    newList = currentList.filter(item => {
      const lcName = item.name.toLowerCase();
      const lcBody = item.body.toLowerCase();
      const filter = e.target.value.toLowerCase();
      return lcName.includes(filter) || lcBody.includes(filter);
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
        <div className ='experiencesButtons'> 
        <Button variant="danger" className = 'buttonsBelowSearchBar' > Date </Button>
        <Button variant="danger" className = 'buttonsBelowSearchBar' > Location </Button>
        <Button variant="danger" className = 'buttonsBelowSearchBar' >Price </Button>
        </div>

        <div className ='cardDataContainer'>

          {this.state.filtered.map((experienceData, i) => {
            let boundItemClick = this.onItemClick.bind(this, experienceData);
            return( 
          <div className = 'cardData' key = {i}> 
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/1157399/pexels-photo-1157399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260s" />
              <Card.Body>
                <Card.Title>{experienceData.name}</Card.Title>
                <Card.Text>
                {experienceData.body}
                </Card.Text>
                  <Button variant="danger" onClick={ boundItemClick } key = {i} > Details </Button>

              </Card.Body>
            </Card>
          </div> )}
          )}
        
        </div>
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