import React, { Component } from "react";
import UserContext from "./context/userContext";
import "../styles/slide_left.css";
import { getFaculties } from "./../services/facultyService";
import { trackPromise } from "react-promise-tracker";
import { getCourses } from "../services/courseService";

class MyDetails extends Component {
  state = {
    faculties: [],   courses: [],
  };
  async componentDidMount() {
    const { data: faculties  } = await trackPromise(getFaculties() , getCourses());
    const {data: courses} = await trackPromise(getCourses())
    this.setState({ faculties , courses});
  }
  
  
  
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
        <h5>Faculty</h5>
        <select name="faculty" id="faculty" className="form-control">
 
          {this.state.faculties.map(faculty=><option>{faculty.title}</option>)}
        </select>
      </div> 
      <h5>Check the curses you are in</h5>
      <div class="row">
        <div class="col">
        <div class="custom-control custom-checkbox mr-sm-2">
      
       <input type="checkbox" class="custom-control-input" id="curses1" ></input>
        {this.state.courses.map(course=><label class="custom-control-label" for="curses1">{course._5f277efd7a8d682060fbaf7c}</label>)}
        <label class="custom-control-label" for="curses1">Civil Engineering</label>
       </div>
        </div>
        <div class="col">
        <div class="custom-control custom-checkbox mr-sm-2">
       
       <input type="checkbox" class="custom-control-input" id="curses2"></input>
       {this.state.courses.map(course=><label class="custom-control-label" for="curses2">{course._5f277efd7a8d682060fbaf7a}</label>)}
       <label class="custom-control-label" for="curses2">Software Engineering</label>
       </div>

        </div>

        <div class="col">
          <div class="custom-control custom-checkbox mr-sm-2">
      <input type="checkbox" class="custom-control-input" id="curses3"></input>
      {this.state.courses.map(course=><label class="custom-control-label" for="curses3">{course._5f277efd7a8d682060fbaf81}</label>)}
      <label class="custom-control-label" for="curses3">Accounting</label>
      </div>
        </div>

      </div>
      <div class="mt-md-3"></div>
      <div class="row">
        <div class="col">
        <div class="custom-control custom-checkbox mr-sm-2">

       <input type="checkbox" class="custom-control-input" id="curses4"></input>
       {this.state.courses.map(course=><label class="custom-control-label" for="curses4">{course._5f277efd7a8d682060fbaf86}</label>)}
       <label class="custom-control-label" for="curses4">Architecture</label>
       </div>
        </div>
        <div class="col">
        <div class="custom-control custom-checkbox mr-sm-2">
       
       <input type="checkbox" class="custom-control-input" id="curses5"></input>
       {this.state.courses.map(course=><label class="custom-control-label" for="curses5">{course._5f277efd7a8d682060fbaf8b}</label>)}
       <label class="custom-control-label" for="curses5">Biomedical Science</label>
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
