import React, { Component } from "react";
import Logo from "../images/logo.png";
import "../styles/register.css";
import Loading from "./utils/loading";
import {Modal , Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Signup extends Component {
    constructor()
{
    super()
    this.state = {
        show:false
    }
}
handleregpopup()
{
    this.setState({show:!this.state.show })
}
  state = {
    data: {
        name: "",
      email: "",
      password: "",
    },
    registering: false,
  };

  

  render() {
    return (
        
      <div className="login-body text-center d-flex justify-content-center">
        <div>
        <Modal show={this.state.show} onHide={()=>this.handleregpopup()}>
            <Modal.Header closeButton>Thanks for Registering</Modal.Header>
            <Modal.Body>Click on Login to proceed</Modal.Body>
            <Modal.Footer>
                <NavLink className="btn btn-outline-primary" to="login">Login</NavLink>
            </Modal.Footer>

        </Modal>
    
        </div>
          <form className="form-sign-in">
            <img className="mb-4" src={Logo} alt="" width="72" height="115" />
            <h1 className="h3 mb-3 font-weight-normal">Register Here</h1>
            
            <label htmlFor="name" className="sr-only">Name</label>
            <input
            type="name"
              id="inputName"
              className="form-control"
              name="name"
              placeholder="*Insert Your Name"
              //onChange={this.storeHandler} to send the data to database
              required
            />
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              name="email"
              placeholder="*Email address"
             // onChange={this.storeHandler}to send the data to database
              required
              autoFocus
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              name="password"
              placeholder="*Password"
              //onChange={this.storeHandler} to send the data to database
              required
            />
       <div class="mt-2 col-md-12"> </div>
            <button
              className="btn btn-lg btn-primary btn-block"
             // onClick={this.submitHandler} to send the data to database
              onClick={()=>{this.handleregpopup()}}
            >
              Register
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
         
          </form>
          

      
        <Loading />
      </div>
    );
  }
}

export default Signup;
