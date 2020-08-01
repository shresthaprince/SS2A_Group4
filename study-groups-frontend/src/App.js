import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/navbar";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Logout from "./components/logout";
import auth from "./services/authService";
import UserContext from "./components/context/userContext";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    return (
      <>
        <ToastContainer />
        <UserContext.Provider value={this.state.user}>
          <NavBar />
          <Switch>
            <Route
              path="/me"
              render={(props) => {
                if (!this.state.user) return <Redirect to="/login" />;
                return <Dashboard {...props} />;
              }}
            />
            <Route path="/logout" component={Logout} />

            <Route path="/" component={Home} />
          </Switch>
        </UserContext.Provider>
      </>
    );
  }
}

export default App;
