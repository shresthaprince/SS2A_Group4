import React, { Component } from "react";
import UserContext from "./context/userContext";
import "../styles/slide_left.css";

class Interests extends Component {
  state = {};
  render() {
    return (
      <UserContext.Consumer>
        {(user) => (
          <main
            role="main"
            className="slide-left col-md-9 ml-sm-auto col-lg-10 px-md-4 "
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Interests</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-success"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div>Select your Interests {user.name}</div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="" /> Interest 1
              </label>
            </div>
          </main>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Interests;
