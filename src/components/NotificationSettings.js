
import React from 'react';
import './New.css';
const NotificationSettings = () => {
    return (
        <div className="container mt-5">
            <h2>Notification Settings</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="emailContent" className="form-label">Email Content</label>
                    <textarea className="form-control" id="emailContent" rows="4" placeholder="Enter email content to be sent to all employees"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="smsContent" className="form-label">SMS Content</label>
                    <textarea className="form-control" id="smsContent" rows="2" placeholder="Enter SMS content to be sent to all employees"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="pushNotifications" className="form-label">Push Notifications</label>
                    <select className="form-control" id="pushNotifications">
                        <option>Enabled</option>
                        <option>Disabled</option>
                        <option>Only Important</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Send Notifications</button>
            </form>
        </div>
    );
};

export default NotificationSettings;
