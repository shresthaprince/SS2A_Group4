import React, { Component } from "react";
import UserContext from "./context/userContext";

import "../styles/slide_left.css";
import { trackPromise } from "react-promise-tracker";
import Loading from "./utils/loading";
import _ from "lodash";
import { Multiselect } from "multiselect-react-dropdown";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { getStudents, updateAllocation } from "./../services/studentService";
import { getTopics } from "./../services/topicService";
import {
  getGroups,
  createGroup,
  createGroups,
  resetGroups,
  updateGroup,
} from "./../services/groupService";

class Groups extends Component {
  state = {};

  async componentDidMount() {
    const { data: groups } = await trackPromise(getGroups());
    const { data: students } = await getStudents();
    const { data: topics } = await getTopics();

    const unallocStudents = _.groupBy(students, "allocated").false || [];

    groups.map((group) => (this[`${group.number}_ref`] = React.createRef()));

    this.setState({ groups, unallocStudents, topics });
  }

  addGroupHandler = async (topic) => {
    const { data: group } = await createGroup({
      topic,
      studentIds: [],
      settings: { maxNumber: 4 },
    });

    let { groups } = this.state;
    groups.push(group);
    this[`${group.number}_ref`] = React.createRef();
    this.setState({ groups });
  };

  createGroupHandler = async () => {
    this.setState({ unallocStudents: [] });
    this.setState({ groups: null });

    await trackPromise(createGroups());
    const { data: groups } = await trackPromise(getGroups());
    this.setState({ groups });
  };

  resetGroupHandler = async () => {
    this.setState({ groups: null });
    await trackPromise(resetGroups());

    const { data: students } = await trackPromise(getStudents());
    this.setState({ unallocStudents: students });
  };

  removeStudentHandler = async (student, group) => {
    const { groups, unallocStudents } = this.state;

    const studentList = group.students.filter((s) => s._id !== student._id);

    group.students = studentList;
    groups[groups.findIndex((g) => g._id === group._id)] = group;
    this.setState({ groups });

    unallocStudents.push(student);
    this.setState({ unallocStudents });

    const studentIds = studentList.map((student) => student._id);
    group.studentIds = studentIds;

    await updateAllocation(student._id);
    await updateGroup(group);
  };

  addStudentHandler = async (group) => {
    let { groups, unallocStudents } = this.state;

    const addedStudents = this[
      `${group.number}_ref`
    ].current.getSelectedItems();

    group.students.push(...addedStudents);
    groups[groups.findIndex((g) => g._id === group._id)] = group;
    this.setState({ groups });

    unallocStudents = unallocStudents.filter(
      (student) => !addedStudents.includes(student)
    );
    this.setState({ unallocStudents });

    groups.map((g) => this[`${g.number}_ref`].current.resetSelectedValues());

    const studentIds = group.students.map((student) => student._id);
    group.studentIds = studentIds;

    addedStudents.map(async (s) => await updateAllocation(s._id));
    await updateGroup(group);
  };

  render() {
    const { groups, unallocStudents, topics } = this.state;

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
                      <DropdownButton title="New Group">
                        <i className="ml-4">Select Topic for group</i>
                        <Dropdown.Divider />
                        {topics.map((topic) => (
                          <Dropdown.Item
                            key={topic._id}
                            onSelect={() => this.addGroupHandler(topic.title)}
                          >
                            {topic.title}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
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
            {unallocStudents && unallocStudents.length ? (
              <>
                <div className="alert alert-warning" role="alert">
                  All students are not assigned!
                </div>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Students</th>
                      <th scope="col">Preferred Topic</th>
                      <th scope="col">Skills</th>
                    </tr>
                  </thead>
                  <tbody>
                    {unallocStudents.map((student, index) => (
                      <tr key={student._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{student.name}</td>
                        <td>{student.topic}</td>
                        <td>{student.skills}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <div className="alert alert-success" role="alert">
                All students assigned!
              </div>
            )}
            <div className="table-responsive d-flex flex-wrap justify-content-center">
              {groups &&
                groups.length &&
                groups.map((group) => (
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
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {group.students.map((student, index) => (
                          <tr key={student._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{student.name}</td>
                            <td>{student.skills}</td>
                            <td>
                              <i
                                className="fas fa fa-minus-square clickable"
                                onClick={() =>
                                  this.removeStudentHandler(student, group)
                                }
                              ></i>
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td />
                          <td>
                            <Multiselect
                              id={group.number}
                              options={unallocStudents}
                              displayValue="name"
                              placeholder="Add Students"
                              ref={this[`${group.number}_ref`]}
                            />
                          </td>
                          <td />
                          <td>
                            <i
                              className="fas fa fa-plus-square clickable"
                              onClick={() => this.addStudentHandler(group)}
                            ></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              <Loading />
            </div>
          </main>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Groups;
