import React, { Component } from "react";
import UserContext from "./context/userContext";
import "../styles/slide_left.css";
import {getTopics} from "../services/fakeTopicService"
import _ from "lodash"


class Tools extends Component {
  state={
    topics:[],
    selectedTopic: {}
  }

//componentDidUpdate(){
 // console.log(this.state.selectedTopic);
//}

  componentDidMount(){
    const topics = getTopics()
    this.setState({topics})
    
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
              <h1 className="h2">Topics</h1>
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
        <select name="topic" id="topic" className="form-control" onChange={this.selectTopicHandler}>
        {topics.map(topic=><option key={topic.title} value={topic.title}>{topic.title}</option>)}

        </select>
        {!_.isEmpty(this.state.selectedTopic) && <React.Fragment><h5>Select your skills</h5>
          <select name="skills" id="skills" className="form-control" >
        {this.state.selectedTopic[0].skills.map(skill=><option key={skill} >{skill}</option>)}

        </select>
        <h5>Select your tools</h5>
          <select name="tools" id="tools" className="form-control" >
        {this.state.selectedTopic[0].tools.map(tool=><option key={tool}>{tool}</option>)}

        </select>
        </React.Fragment>}
      </div> 
    
   
    
    </form>
    
</div>

            
          </main>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Tools;
