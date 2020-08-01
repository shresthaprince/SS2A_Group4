import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./sidebar";
import MyDetails from "./myDetails";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Switch>
            <Route path="/me/page2" component={Page2} />
            <Route path="/me/page3" component={Page3} />
            <Route path="/me/page4" component={Page4} />
            <Route path="/me" component={MyDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
