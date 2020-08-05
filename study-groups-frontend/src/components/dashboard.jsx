import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./sidebar";
import MyDetails from "./myDetails";
import Interests from "./interests";
import Skills from "./skills";
import Tools from "./tools";
import Mygroup from "./mygroup";
import admcurses from "./admcurses";
import admfaculty from "./admfaculty";
import admtopics from "./admtopics";
import Courses from "./courses";
import Facultys from "./admfaculty";

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Switch>
            <Route path="/me/interests" component={Interests} />
            <Route path="/me/admcurses" component={Courses} />
            <Route path="/me/admfaculty" component={Facultys} />
            <Route path="/me/admtopics" component={Interests} />
            <Route path="/me/skills" component={Skills} />
            <Route path="/me/tools" component={Tools} />
            <Route path="/me/mygroup" component={Mygroup} />
            <Route path="/me" component={MyDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
