import React from "react";
import { withRouter } from "react-router-dom";
import NavBar from "./NavBar";
import { Card } from "react-bootstrap";

class Protected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="protected">
          <div>
            <h2>Sorry, looks like there are no events you created yet!</h2>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Protected);
