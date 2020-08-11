import React, { Component } from "react";
import { getCourses } from "./../services/courseService";
import { trackPromise } from "react-promise-tracker";
import Loading from "./utils/loading";

class Courses extends Component {
  state = {
    courses: [],
  };
  async componentDidMount() {
    const { data: courses } = await trackPromise(getCourses());
    this.setState({ courses });
  }
  render() {
    return (
      <div className="login-body text-center">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course</th>
              <th scope="col">Offered By</th>
              <th scope="col"><button type="button" class="btn btn-light">Add</button></th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((course, index) => (
              <tr key={course._id}>
                <th scope="row">{index + 1}</th>
                <td>{course.title}</td>
                <td>{course.faculty.title}</td>
                <td><button type="button" class="btn btn-light">X</button></td>
              </tr>
            ))}
          </tbody>
        </table>

        <Loading />
      </div>
    );
  }
}

export default Courses;
