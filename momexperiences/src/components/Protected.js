import React from "react";
import { withRouter } from "react-router-dom";
import NavBar from "./NavBar";

class Protected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />
        <div>
          <h2>hi</h2>
        </div>
      </>
    );
  }
}

export default withRouter(Protected);
