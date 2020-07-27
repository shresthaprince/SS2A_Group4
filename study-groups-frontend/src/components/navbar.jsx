import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <Link className="p-2 text-dark" to="/">
          UTS Study Groups
        </Link>
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <NavLink className="p-2 text-dark" to="/">
          Courses
        </NavLink>
        <NavLink className="p-2 text-dark" to="/">
          Tools
        </NavLink>
        <NavLink className="p-2 text-dark" to="/">
          Support
        </NavLink>
      </nav>
      <NavLink className="btn btn-outline-primary" to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default NavBar;
