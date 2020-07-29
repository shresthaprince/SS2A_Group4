import React, { Component } from "react";
import "../styles/login.css";

class Forgotpsw extends Component {
render()
{return(<div class="forgot-form">
    <p><h3>Reset Your Password</h3>
Enter the email address you used when creating the account and click Send Password Reset Email.
<p> A message will be sent to that address containing a link to reset your password.</p>


</p>
    <form action="" class="forgot-form">
        <label for="email">Insert your E-mail </label>
        <input type="email" name="email" id="inputEmail" className="form-control"></input>
        
        <div class="mt-2 col-md-12"> </div>
        <button className="btn btn-primary btn-block" type="submit"> Send reset Link</button>

 
    </form>
</div>)}}
export default Forgotpsw;