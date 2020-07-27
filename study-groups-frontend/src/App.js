import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import Home from "./components/home";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/login";
import NotFound from "./components/notFound";
import HomeView from "./components/home_view";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Home />

          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route exact path="/" component={HomeView}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect to="/not-found" />
          </Switch>

          <Footer />
        </main>
      </>
    );
  }
}

export default App;
