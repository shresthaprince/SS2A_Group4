import React, { Component } from "react";
import { getFaculties } from "./../services/facultyService";
import { trackPromise } from "react-promise-tracker";
import Loading from "./utils/loading";

class Facultys extends Component {
  state = {
    faculties: [],
  };
  async componentDidMount() {
    const { data: faculties } = await trackPromise(getFaculties());
    this.setState({ faculties });
  }
  render() {
    return (
      <div className="login-body text-center">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Facultys</th>
            
            </tr>
          </thead>
          <tbody>
            {this.state.faculties.map((faculty, index) => (
              <tr key={faculty._id}>
                <th scope="row">{index + 1}</th>
                <td>{faculty.title}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Loading />
      </div>
    );
  }
}

export default Facultys;
