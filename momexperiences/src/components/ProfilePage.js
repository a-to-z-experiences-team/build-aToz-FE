import React from "react";
import "../styles.css";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import {experienceSuccessFetch, 
  getuser
} from '../actions/index';
import NavBar from './NavBar';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  componentDidMount(){  
    const token = localStorage.getItem("token")
    const deconstructedToken = token.split('.')[1]
    const deconstructedUserID = JSON.parse(window.atob(deconstructedToken))

    this.props.getuser(deconstructedUserID)
}

  render() {
    return (
      <>
        <NavBar />
          <div className = 'profileContainer'> 
          <img src = {require ('../imgs/profileIcon.png')}/>
          <Card style={{ width: '25rem' }}>
          <Card.Header className='profileName' as="h5">{this.props.profileCard.users_firstName} {this.props.profileCard.users_lastName}</Card.Header>
          <Card.Body>
          <Card.Title>Email</Card.Title>
          <Card.Text>
          {this.props.profileCard.users_email}
          </Card.Text>
          <Card.Title>Username</Card.Title>
          <Card.Text>
          {this.props.profileCard.users_userName}
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
  userSignUp: state.userSignUp,
  profileCard: state.profileCard
})

export default connect(
  mapStateToProps,
  {experienceSuccessFetch,
  getuser
}
)(ProfilePage);