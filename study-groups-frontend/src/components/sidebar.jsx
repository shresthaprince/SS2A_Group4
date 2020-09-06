import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      style={{ height: "90vh" }}
    >
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/me">
              <span data-feather="home"></span>
              My Details <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/me/tools">
              <span data-feather="users"></span>
              Topics
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/me/groups">
              <span data-feather="file"></span>
              Groups
            </NavLink>
          </li> 
          <li className="nav-item">
            <NavLink className="nav-link" to="/me/manualgroup">
              <span data-feather="file"></span>
              ManualGroup
            </NavLink>
          </li> 
              <li className="nav-item">
            <NavLink className="nav-link" to="/me/mygroup">
              <span data-feather="users"></span>
              My Group
            </NavLink>
          </li>   
      
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
