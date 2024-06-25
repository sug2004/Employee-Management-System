import React from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
function Communication() {
  return (
    <div className="container mt-5">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">EMS</Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/GeneralSettings" className="nav-link" >General Settings</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Usermanagement">User Management</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Notificationsettings">Notification Settings</Link>
                </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Communication