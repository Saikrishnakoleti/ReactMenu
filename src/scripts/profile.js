import React, { Component } from "react";
import { Route, Link, HashRouter } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <HashRouter>
        <ul className="navbar-nav mt-3">
          <li className="nav-item dropdown mr-5">
            <a className="navbar-brand dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
              Profile
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link to="/myprofile" className=" dropdown-item" replace>My Profile</Link>
              <Link to="/logout" className=" dropdown-item" replace>Log Out</Link>
            </div>
          </li>
        </ul>

      </HashRouter>
    )
  }
}
export default Profile;
