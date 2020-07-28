import React from "react";
import Logo from "../images/logo.png"

const NotFound = () => {
  return (
    <div className="login-body text-center">
     
      <h3><img className="mb-2" src={Logo} alt="" width="24" height="38"></img>  #404</h3>
      <h1>Page not found!</h1>
    </div>
  );
};

export default NotFound;
