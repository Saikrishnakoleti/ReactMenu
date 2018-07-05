
import React, { Component } from "react";
import { Route, Link, HashRouter } from "react-router-dom";

class DashBoard extends Component {
    render() {
        return (
            <HashRouter>
                <ul className="navbar-nav mt-3">
                    <li className="nav-item dropdown">
                        <a className="navbar-brand dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                            Dashboard
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/mydashboard" className="dropdown-item" replace>My Dashboard</Link>
                            <Link to="/managedashboard" className="dropdown-item" replace>Manage Dashboard</Link>
                        </div>
                    </li>
                </ul>
            </HashRouter>
        )
    }
}
export default DashBoard;
