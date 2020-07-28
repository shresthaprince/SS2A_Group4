import React, { Component } from "react";
import Logo from "../images/logo.png";
import "../styles/login.css";

class Login extends Component {
  submitHandler = (event) => {
    console.log("Submitted");
    event.preventDefault();
    window.location = "/students";
  };

  render() {
    return (
      <div className="login-body text-center d-flex justify-content-center">
        <form className="form-sign-in">
          <img className="mb-4" src={Logo} alt="" width="72" height="115" />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={this.submitHandler}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
        </form>
      </div>
    );
  }
}

export default Login;
