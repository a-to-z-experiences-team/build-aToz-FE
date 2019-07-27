import React from "react";
import "../styles.css";
import { Button, Navbar, Nav } from "react-bootstrap";
import LandingNav from "./LandingNavBar";
import { withRouter, Link } from "react-router-dom";

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
        <LandingNav />
        <div className="landingContainer">
          <img
            src="https://images.unsplash.com/photo-1475716220633-d3f9c6073750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="computer"
            className="landingImg"
          />
          <div className="landingText">
            <h2> SAM</h2>
            <h3>A place for stay at home moms to meet other moms!</h3>
            <div className="buttons-landing">
            <Link className="landingJoinButton" to="/signIn">
              <Button variant="danger">
                  Join the Mom Squad!
              </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="secondSection">
          <div className="sectionExample">
            <div className="sectionTextContainer">
              <h3 className="sectionTitle">More Friends!</h3>
              <p className="sectionText">
                Build your child's social network to help them make friends, and
                communicate better.
              </p>
            </div>
            <img
              src="https://png.pngtree.com/svg/20170313/acc969319c.svg"
              className="cardImgs"
            />
          </div>
        </div>
        <div className="thirdSection">
          <div className="sectionExample">
            <img
              src="data:image/jpeg;base64,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"
              className="cardImgs"
            />
            <div className="sectionTextContainer">
              <h3 className="sectionTitle">Grow YOU'RE Mom Network!</h3>
              <p className="sectionText">
                Make connections with other mother's that may have similar
                interests as you to help one another out.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(NavBar);
