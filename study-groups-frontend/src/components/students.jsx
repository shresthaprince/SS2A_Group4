import React, { Component } from "react";
import { getStudents } from "../services/fakeStudentService";

class Students extends Component {
  state = { students: getStudents() };
  render() {
    return (
      <>
        <h1>Students</h1>
        <ul>
          {this.state.students.map((student) => (
            <li key={student._id}>{student.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Students;
