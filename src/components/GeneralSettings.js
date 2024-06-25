
import React from 'react';
import './New.css';
const GeneralSettings = () => {
    return (
        <div className="container mt-5">
            <h2>General Settings</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">Company Name</label>
                    <input type="text" className="form-control" id="companyName" placeholder="Enter company name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="companyAddress" className="form-label">Company Address</label>
                    <input type="text" className="form-control" id="companyAddress" placeholder="Enter company address" />
                </div>
                <div className="mb-3">
                    <label htmlFor="companyEmail" className="form-label">Company Email</label>
                    <input type="email" className="form-control" id="companyEmail" placeholder="Enter company email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="companyPhone" className="form-label">Company Phone</label>
                    <input type="tel" className="form-control" id="companyPhone" placeholder="Enter company phone" />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default GeneralSettings;
