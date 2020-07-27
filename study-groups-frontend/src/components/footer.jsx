import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <img className="mb-2" src={Logo} alt="" width="24" height="38"></img>
          <small className="d-block mb-3 text-muted">&copy; 2020</small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-muted" to="/">
                Cool stuff
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/">
                Random feature
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/">
                Team feature
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/">
                Stuff for users
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-muted" to="/">
                Quick Guide
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/">
                User Manual
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/">
                Additional Support
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-muted" to="/">
                Team
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/">
                Locations
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
