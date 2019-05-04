import React from "react";
import "../styles.css";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import {experienceSuccessFetch} from '../actions/index';
import NavBar from './NavBar';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  componentDidMount(){
    console.log(this.props.userSignUp.users_email)
}

  render() {
    return (
      <>
        <NavBar />
          <div className = 'profileContainer'> 
          <img src = 'https://images.pexels.com/photos/698877/pexels-photo-698877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className = 'profilePhoto' alt =' user profile'/>
          <Card>
          <Card.Header className='profileName' as="h5">{this.props.userSignUp.users_firstName} {this.props.userSignUp.users_firstName}</Card.Header>
          <Card.Body>
          <Card.Title>Hobbies</Card.Title>
          <Card.Text>
          Enjoy spending time with my little one, and teaching him via creative and educational activities.
          </Card.Text>
          <Card.Title>Location</Card.Title>
          <Card.Text>
          Upper West side of the city of Petaluma, CA.
          </Card.Text>
          </Card.Body>
          </Card>
          </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  momExperiences: state.momExperiences,
  userSignUp: state.userSignUp
})

export default connect(
  mapStateToProps,
  {experienceSuccessFetch}
)(ProfilePage);






