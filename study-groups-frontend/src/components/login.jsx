import React, { Component } from "react";
import Logo from "../images/logo.png";
import "../styles/login.css";
import auth from "../services/authService";
import { trackPromise } from "react-promise-tracker";
import Loading from "./utils/loading";
import GoogleButton from 'react-google-button'
class Login extends Component {
  state = {
    data: {
      email: "",
      password: "",
    },
    logging: false,
  };

  changeHandler = ({ currentTarget }) => {
    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    this.setState({ data });
  };

  submitHandler = async (event) => {
    event.preventDefault();
    this.setState({ logging: true });
    try {
      const { data } = this.state;
      await trackPromise(auth.login(data.email, data.password));

      window.location = "/me";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex.response.data);
      }
      this.setState({ logging: false });
    }
  };

  render() {
    return (
      <div className="login-body text-center d-flex justify-content-center">
        {!this.state.logging && (
          <form className="form-sign-in">
            <img className="mb-4" src={Logo} alt="" width="72" height="115" />
            <h1 className="h3 mb-3 font-weight-normal">Login Here</h1>
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              name="email"
              placeholder="Email address"
              onChange={this.changeHandler}
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
              name="password"
              placeholder="Password"
              onChange={this.changeHandler}
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
            <div class="mt-2 col-md-12"> </div>
            <GoogleButton
  onClick={() => { console.log('Google button clicked') }}
/>
            <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
            
          </form>
          
        )}
        <Loading />
      </div>
    );
  }
}

export default Login;
