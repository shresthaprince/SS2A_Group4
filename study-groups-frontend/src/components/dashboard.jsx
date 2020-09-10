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

import Signup from "./signup";
import Test from "./testpage";
import Manualgroup from "./manualGroup";
import Multi from "./multipage";

import Groups from "./groups";
import Class from "./class";


class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Switch>
            <Route path="/me/testpage" component={Test}/>
            <Route path="/me/signup" component={Signup} />
            <Route path="/me/interests" component={Interests} />
            <Route path="/me/admcurses" component={Courses} />
            <Route path="/me/admfaculty" component={Facultys} />
            <Route path="/me/admtopics" component={Interests} />
            <Route path="/me/skills" component={Skills} />
            <Route path="/me/tools" component={Tools} />
            <Route path="/me/mygroup" component={Mygroup} />
            <Route path="/me/groups" component={Groups} />
            <Route path="/me/manualgroup" component={Manualgroup} />
            <Route path="/me/multipage" component={Multi} />
           
           
            <Route path="/me/groups" component={Groups} />
            <Route path="/me/class" component={Class} />
            
            <Route path="/me" component={MyDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
