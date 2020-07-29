import React, { Component } from "react";

class Support extends Component {
render()
{return(<div>
    <h4>Support page</h4>
    
    <form action="" class="forgot-form">
        <label for="email">Insert your E-mail </label>
        <input type="email" name="email" id="inputEmail" className="form-control"></input>
        <label for="text">Subject </label>
        <input type="text" name="subject" id="subject" className="form-control"></input>
        <label for="text">Description of the problem</label>
        <input type="text" name="description" id="description" className="form-control"></input>
        
        <div class="mt-2 col-md-12"> </div>
        <button className="btn btn-primary btn-block" type="submit"> Send</button>
        
 
    </form>
</div>)}}
export default Support;