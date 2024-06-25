import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import './new2.css';
function Home() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/Dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">
                EMS
              </span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 text-center align-items-center"
              id="menu"
            >
              <li className="w-100 text-center">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100 text-center">
                <Link
                  to="/employees"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Employee Profiles and Records
                  </span>
                </Link>
              </li>
              <li className="w-100 text-center">
                <Link
                  to="/AttendanceLeaveManagement"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Attendance and Leave Management</span>
                </Link>
              </li>
              <li className="w-100 text-center">
                <Link
                  to="/Timetracking"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Time Tracking & Timeline/Deadline Management</span>
                </Link>
              </li>
              <li className="w-100 text-center">
                <Link
                  to="/Performanceappraisals"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Performance Appraisals and Goal Setting</span>
                </Link>
              </li>
              <li className="w-100 text-center">
                <Link
                  to="/RequirementsandOnboarding"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Recruitment and On boarding</span>
                </Link>
              </li>
              <li className="w-100 text-center">
                <Link
                  to="/TaskProjectAssignment"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline"> Task and Project Assignment</span>
                </Link>
              </li>
              <li className="w-100 text-center">
                <Link
                  to="/communication"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline"> Communication and Collaboration Tools</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
              <h4>Employee Management System</h4>
          </div>
          <div className="p-4">
            <h5>Welcome to the Employee Management System!</h5>
            <p>This system is designed to manage employee data, track attendance and leave, monitor performance, and facilitate communication and collaboration.</p>
            <p>Use the navigation menu on the left to access different features of the system.</p>
            <div className="dashboard">
      <div className="header">
        <h1>Dashboard</h1>
      </div>
      <div className="main-content">
      <Carousel>
              <Carousel.Item>
                <div className="row justify-content-center">
                  <div className="col-md-3 col-sm-6 col-xs-12 box">
                    <div className="people">
                      <h2>People</h2>
                      <p>16 Employees</p>
                      <button>Manage Employees</button>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 box">
                    <div className="company">
                      <h2>Company</h2>
                      <p>8 Departments</p>
                      <button>Manage Company</button>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 box">
                    <div className="users">
                      <h2>Users</h2>
                      <p>15 Users</p>
                      <button>Manage Users</button>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row justify-content-center">
                  <div className="col-md-3 col-sm-6 col-xs-12 box">
                    <div className="projects ">
                      <h2>Projects</h2>
                      <p>4 Active Projects</p>
                      <button>Update Clients/Projects</button>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 box">
                    <div className="employee-check-ins">
                      <h6><b>Employee Check-Ins</b></h6>
                      <div className="chart">Chart Here</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 box">
                    <div className="employee-distribution">
                      <h6><b>Employee Distribution</b></h6>
                      <div className="chart">Pie Chart Here</div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row justify-content-center">
                  <div className="col-md-3 col-sm-6 col-xs-12 box">
                    <div className="tasks">
                      <h2>Meeting scheduled</h2>
                      <p>currently no meeting</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 box">
                    <div className="attendance">
                      <h2>Attendance</h2>
                      <p>1 Entries Last Week</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 box">
                    <div className="leave">
                      <h2>Leave</h2>
                      <p>0 Upcoming</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
