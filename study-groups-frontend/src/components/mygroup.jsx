import React, { Component } from "react";
import UserContext from "./context/userContext";
import "../styles/slide_left.css";
import { getTopics, addTopic, removeTopic } from "./../services/topicService";
import {Multiselect} from 'multiselect-react-dropdown';

class Class extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.inputTopicRef = React.createRef();
  }


  async componentDidMount() {
    const { data: topics } = await getTopics();
    this.setState({ topics });
  }
  

  validation = ({ currentTarget }) => {
    currentTarget.value.length > 7 && this.setState({ invalid: false });
  };

  addTopicHandler = async () => {
    const { value: title } = this.inputTopicRef.current;
    const { topics } = this.state;
  

    if (title.length < 8) {
      this.setState({ invalid: true });
    } else {
      const { data: topic } = await addTopic({ title });
      topics.push(topic);
      this.setState({ topics });
      
    }
  };

  removeTopicHandler = async (topicId) => {
    let { topics } = this.state;

    topics = topics.filter((t) => t._id !== topicId);
    this.setState({ topics });

    await removeTopic(topicId);
  };

  stringToObject=(array)=>{
    array = array.map((s)=>({value:s}))
    return array
  }

  render() {
    const { topics } = this.state;
    return (
      <UserContext.Consumer>
        {(user) => (
          <main
            role="main"
            className="slide-left col-md-9 ml-sm-auto col-lg-10 px-md-4 "
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Topic and Skills Selection</h1>
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
            <div className="login-body m-2">
              <div className="alert alert-info" role="alert">
                <h5 style={{ display: "inline" }}>{user.name} Select Topic and Skills</h5>
              </div>
              
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Skills</th>

                    
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {topics &&
                    topics.map((topic, index) => (
                      
                      <tr key={topic._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{topic.title}</td> 
                        <td><Multiselect options={this.stringToObject(topic.skills)} displayValue="value"/></td>
                        <td>
                        <i
                        className="fas fa fa-plus-square clickable"
                        onClick={this.addTopicHandler}
                      ></i>
                       <div class="mt-2 col-md-12"> </div>
                          <i
                            className="fas fa fa-minus-square clickable"
                            onClick={() => this.removeTopicHandler(topic._id)}
                          ></i>
                        </td>
                      </tr>
                    ))}
                  <tr>
                    
                    <td />
                    <td>
                      
                    </td>
                    <td>
                    
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </main>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Class;
