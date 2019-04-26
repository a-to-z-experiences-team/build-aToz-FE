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
        <Navbar bg="danger" variant="dark" className="navbarContent">
          <div className="navLeftContent">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Nav.Link className="navLinks" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navLinks" href="#features">
              Top Events
            </Nav.Link>
            <Nav.Link className="navLinks" href="#pricing">
              Experiences
            </Nav.Link>
          </div>
          <div className ='navButtonContainer'>
            <Button className="LoginButton" variant="outline-light">
              Sign Up
            </Button>
            <Button className="LoginButton" v variant="outline-light">
              Login
            </Button>
          </div>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
