import React, { Component } from "react";
import UserContext from "./context/userContext";
import "../styles/slide_left.css";


class MyDetails extends Component {
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
        <h5>Select the Faculty you are in</h5>
        <select name="faculty" id="faculty" className="form-control">
          <option value="1">F1</option>
          <option value="2">F2</option>
          <option value="3">F3</option>
          <option value="4">F4</option>
          <option value="5">F5</option>
        </select>
      </div> 
      <h5>Check the curses you are in</h5>
      <div class="row">
        <div class="col">
        <div class="custom-control custom-checkbox mr-sm-2">
       
       <input type="checkbox" class="custom-control-input" id="curses1"></input>
       <label class="custom-control-label" for="curses1">C1</label>
       </div>
        </div>
        <div class="col">
        <div class="custom-control custom-checkbox mr-sm-2">
       
       <input type="checkbox" class="custom-control-input" id="curses2"></input>
       <label class="custom-control-label" for="curses2">C2</label>
       </div>

        </div>
        <div class="col">
          <div class="custom-control custom-checkbox mr-sm-2">
      <input type="checkbox" class="custom-control-input" id="curses3"></input>
      <label class="custom-control-label" for="curses3">C3</label>
      </div>
        </div>

      </div>
      <div class="row">
        <div class="col">
        <div class="custom-control custom-checkbox mr-sm-2">
       
       <input type="checkbox" class="custom-control-input" id="curses4"></input>
       <label class="custom-control-label" for="curses5">C4</label>
       </div>
        </div>
        <div class="col">
        <div class="custom-control custom-checkbox mr-sm-2">
       
       <input type="checkbox" class="custom-control-input" id="curses5"></input>
       <label class="custom-control-label" for="curses5">C5</label>
       </div>

        </div>
        <div class="col">
          <div class="custom-control custom-checkbox mr-sm-2">
      <input type="checkbox" class="custom-control-input" id="curses6"></input>
      <label class="custom-control-label" for="curses6">C6</label>
      </div>
        </div>

      </div>
      
    </form>
    
</div>

            
          </main>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MyDetails;
