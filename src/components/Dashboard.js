import React from 'react';
import './New.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <h1>Dashboard</h1>
      </div>
      <div className="main-content">
        <div className="section people">
          <h2>People</h2>
          <p>16 Employees</p>
          <button>Manage Employees</button>
        </div>
        <div className="section company">
          <h2>Company</h2>
          <p>8 Departments</p>
          <button>Manage Company</button>
        </div>
        <div className="section users">
          <h2>Users</h2>
          <p>15 Users</p>
          <button>Manage Users</button>
        </div>
        <div className="section projects">
          <h2>Projects</h2>
          <p>4 Active Projects</p>
          <button>Update Clients/Projects</button>
        </div>
        <div className="section employee-check-ins">
          <h2>Employee Check-Ins</h2>
          <div className="chart">Chart Here</div>
        </div>
        <div className="section employee-distribution">
          <h2>Employee Distribution</h2>
          <div className="chart">Pie Chart Here</div>
        </div>
        <div className="section tasks">
          <h2>Meeting scheduled</h2>
          <p>currently no meeting</p>
        </div>
        <div className="section attendance">
          <h2>Attendance</h2>
          <p>1 Entries Last Week</p>
        </div>
        <div className="section leave">
          <h2>Leave</h2>
          <p>0 Upcoming</p>
        </div>
        <div className="section reports">
          <h2>Reports</h2>
          <button>View / Download Reports</button>
        </div>
        <div className="section settings">
          <h2>Settings</h2>
          <button>Configure EMS</button>
        </div>
        <div className="section Onboarding">
          <h2>Onboarding</h2>
          <button>Onboarding</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;