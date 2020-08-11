import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomeTop from "./home_top";
import HomeView from "./home_view";
import Login from "./login";
import NotFound from "./notFound";
import Courses from "./courses";
import Footer from "./footer";
import Facultys from "./admfaculty";
import Signup from "./signup";
import Test from "./testpage";

const Home = () => {
  return (
    <main className="container">
      
      <Switch>
      <Route path="/testpage" component={Test}></Route>
      <Route path="/signup" component={Signup}></Route>
        <Route path="/admfaculty" component={Facultys}></Route>
        <Route path="/courses" component={Courses}></Route>
        <Route path="/login" component={Login}></Route>
        <Route exact path="/" component={HomeView}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </main>
  );
};

export default Home;
