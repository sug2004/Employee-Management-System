
import React from 'react';
import './New.css';
const UserManagement = () => {
    return (
        <div className="container mt-5">
            <h2>User Management</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="userName" placeholder="Enter user name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">User Email</label>
                    <input type="email" className="form-control" id="userEmail" placeholder="Enter user email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="userRole" className="form-label">User Role</label>
                    <select className="form-control" id="userRole">
                        <option>Admin</option>
                        <option>Manager</option>
                        <option>Employee</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="userStatus" className="form-label">User Status</label>
                    <select className="form-control" id="userStatus">
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
    );
};

export default UserManagement;
