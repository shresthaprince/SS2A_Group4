import React, { Component } from "react";
import UserContext from "./context/userContext";
import "../styles/slide_left.css";


class Tools extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => (
          <main
            role="main"
            className="slide-left col-md-9 ml-sm-auto col-lg-10 px-md-4 "
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">My Details</h1>
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
           
            <div class="form-preferences" > <div  className="form-group">
              ID: {user.name} <div>Email: {user.email}</div>
            </div>
    <form action="" class="form-preferences">
      <div className="form-group">
        <h5>Select your favourite topic</h5>
        <select name="topic" id="topic" className="form-control">
          <option value="1">T1</option>
          <option value="2">T2</option>
          <option value="3">T3</option>
          <option value="4">T4</option>
          <option value="5">T5</option>
        </select>
      </div> 
    <li>

    </li>
    <li>
      
      </li>
      <li>
      
      </li>
    
    </form>
    
</div>

            
          </main>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Tools;
