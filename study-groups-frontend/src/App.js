import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Students from "./components/students";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/students" component={Students}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>

          <Footer />
        </main>
      </>
    );
  }
}

export default App;
