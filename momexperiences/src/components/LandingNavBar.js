import React from "react";
import "../styles.css";
import { Button, Navbar, Nav } from "react-bootstrap";
import logo from "../imgs/logo.png";
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: true };
  }

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/signIn");
  }

  render() {
    return (
      <>
        <Navbar
          bg="danger"
          variant="dark"
          className="navbarContent"
          style={{
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div className="navLeftContent">
            <Navbar.Brand href="/">
              <img src={logo} width="40" height="40" alt="Logo" />
            </Navbar.Brand>
            <Nav.Link className="logoName" href="/">
              Stay At Home Moms
            </Nav.Link>
          </div>
          <div className="navButtonContainer">
            <Button
              className="navButton"
              variant="outline-light"
              onClick={this.logOut.bind(this)}
            >
              Visit us!
            </Button>
          </div>
        </Navbar>
      </>
    );
  }
}

export default withRouter(NavBar);
