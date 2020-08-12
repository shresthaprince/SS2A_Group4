import React, { Component } from "react";
import UserContext from "./context/userContext";
import "../styles/slide_left.css";
import {
  getGroups,
  createGroups,
  resetGroups,
} from "./../services/groupService";
import { trackPromise } from "react-promise-tracker";
import Loading from "./utils/loading";
import { getStudents } from "./../services/studentService";

class Groups extends Component {
  state = {};
  async componentDidMount() {
    const { data: groups } = await trackPromise(getGroups());
    const { data: students } = await getStudents();

    this.setState({ groups, students });
  }

  createGroupHandler = async () => {
    await createGroups();
    window.location = "/me/groups";
  };

  resetGroupHandler = async () => {
    await resetGroups();
    window.location = "/me/groups";
  };

  render() {
    const { groups, students } = this.state;
    return (
      <UserContext.Consumer>
        {(user) => (
          <main
            role="main"
            className="slide-left col-md-9 ml-sm-auto col-lg-10 px-md-4 "
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Groups</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                  {groups && groups.length ? (
                    <>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                        onClick={this.createGroupHandler}
                      >
                        Re-assign Groups
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={this.resetGroupHandler}
                      >
                        Reset
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-success"
                      onClick={this.createGroupHandler}
                    >
                      Create Groups
                    </button>
                  )}
                </div>
              </div>
            </div>
            {groups && groups.length ? (
              <div className="alert alert-success" role="alert">
                Groups are assigned!
              </div>
            ) : (
              <div className="alert alert-warning" role="alert">
                Groups are not assigned!
              </div>
            )}
            <div className="table-responsive d-flex flex-wrap justify-content-center">
              {groups && groups.length
                ? groups.map((group) => (
                    <div
                      className="login-body m-2"
                      style={{ width: "48%" }}
                      key={group._id}
                    >
                      <div className="alert alert-info" role="alert">
                        <h5 style={{ display: "inline" }}>
                          <span className="badge badge-pill badge-light">
                            {group.name}
                          </span>{" "}
                        </h5>
                        {group.topic}
                      </div>

                      <table className="table">
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Students</th>
                            <th scope="col">Skills</th>
                            <th scope="col">Tools</th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.students.map((student, index) => (
                            <tr key={student._id}>
                              <th scope="row">{index + 1}</th>
                              <td>{student.name}</td>
                              <td>{student.skills}</td>
                              <td>{student.tools}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))
                : students && (
                    <table className="table">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Students</th>
                          <th scope="col">Preferred Topic</th>
                          <th scope="col">Skills</th>
                          <th scope="col">Tools</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((student, index) => (
                          <tr key={student._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{student.name}</td>
                            <td>{student.topic}</td>
                            <td>{student.skills}</td>
                            <td>{student.tools}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
              <Loading />
            </div>
          </main>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Groups;
