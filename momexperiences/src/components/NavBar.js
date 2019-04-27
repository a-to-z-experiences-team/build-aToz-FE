import React from "react";
import "../styles.css";
import { Button, Navbar, Nav } from "react-bootstrap";



class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: true };
  }

  render() {
    return (
      <>
        <Navbar bg="danger" variant="dark" className="navbarContent" 
    style = {{
    display: 'flex',
    justifyContent: 'space-around'
    }}
>
          <div className="navLeftContent">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Nav.Link className="navLinks" href="#TopEvents">
            Top Events
            </Nav.Link>
            <Nav.Link className="navLinks" href="#Experiences">
            Experiences
            </Nav.Link>
            <Nav.Link className="navLinks" href="/CreateEvent">
              Create Event
            </Nav.Link>
            <Nav.Link className="navLinks"  href= '/ProfilePage' >
              Profile
            </Nav.Link>
          </div>
          <div className ='navButtonContainer'>
            <Button className="navButton" variant="outline-light">
            Sign Up
            </Button>
            <Button className="navButton" variant="outline-light" href = '/LoginForm'>
              Login
            </Button>
          </div>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
