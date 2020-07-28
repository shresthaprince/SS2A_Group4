import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Students from "./components/students";
import Forgotpsw from "./components/forgotpsw";
import Courses from "./components/courses";
import Tools from "./components/tools";
import Support from "./components/support";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/forgotpsw" component={Forgotpsw}></Route>
            <Route path="/courses" component={Courses}></Route>
            <Route path="/tools" component={Tools}></Route>
            <Route path="/support" component={Support}></Route>
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
