import React, { Component } from "react";
import UserContext from "./context/userContext";
import "../styles/slide_left.css";
import { trackPromise } from "react-promise-tracker";
import { getTopics} from "./../services/topicService";
import _ from "lodash"

class Topic extends Component {
  state = {
    topics: [], 
    selectedTopic: {}
  }
  async componentDidMount() {
    
    const {data: topics} = await trackPromise(getTopics());
    this.setState({topics});

  }
  
  selectTopicHandler = (e) => {
    const selectedTopic = this.state.topics.filter(topic => topic.title === e.target.value)
    this.setState({selectedTopic})
  }
  
  
  render() {
    const {topics} = this.state
    return (
      <UserContext.Consumer>
        {(user) => (
          <main
            role="main"
            className="slide-left col-md-9 ml-sm-auto col-lg-10 px-md-4 "
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Topic and Skill selection</h1>
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
        <h5>Select your Topic</h5>
        
        <select name="topic" id="topic" className="form-control" onChange={this.selectTopicHandler} >
          {this.state.topics.map(topic=><option>{topic.title}</option>)}
        </select>
      </div> 
      {!_.isEmpty(this.state.selectedTopic) && <React.Fragment> <h5>Select your Skills</h5>
          <select multiple name="skills" id="skills" className="form-control" >
        {this.state.selectedTopic[0].skills.map(skill=><option key={skill} >{skill}</option>)}
        </select>
         </React.Fragment>} 
    </form>
    
</div>

            
          </main>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Topic;
