
import React, { Component } from "react";
import { Route, Link, HashRouter } from 'react-router-dom';

class Administration extends Component {
    render() {
        return (
         <HashRouter>
          <ul className="navbar-nav">
            <li className="nav-item dropdown mt-3 ml-3">
              <a className="navbar-brand dropdown-toggle " href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                  Administration</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link  to="/settings" className=" dropdown-item" replace>Settings</Link>
                  <Link  to="/rules" className="dropdown-item" replace>Rules</Link>
                </div>
            </li>
         </ul>
         </HashRouter>
        )
    }
}
export default Administration;
