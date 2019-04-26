import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";

class LoginForm extends React.Component {
  state = {
    credentials: {
    username: "",
    password: ""}
  };
  
  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/experiencelist");
    });
  };
  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <div className="login-page-wrapper">
        <h2>Login</h2>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            required
          />
          <button value="isLoggingIn">submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
