import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomeTop from "./home_top";
import HomeView from "./home_view";
import Login from "./login";
import NotFound from "./notFound";

const Home = () => {
  return (
    <>
      <HomeTop />
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route exact path="/" component={HomeView}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
};

export default Home;
