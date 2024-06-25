import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
    const [values, setValues] = useState({
        OrganisationName: '',
        DomainName: '',
        Location: '',
        OwnerName: '',
        phoneNo: '',
        numEmployees: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/signup', values)
            .then(res => navigate('/'))
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary h-100'>
            <div className='bg-white p-0 rounded w-50 h-100'>
                <h2>Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="OrganisationName"><strong>Organisation Name</strong></label>
                        <input type="text" placeholder="Enter Organisation Name" name='OrganisationName' onChange={handleInput} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="DomainName"><strong>Domain Name</strong></label>
                        <input type="text" placeholder="Enter Domain Name" name='DomainName' onChange={handleInput} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location"><strong>Location</strong></label>
                        <input type="text" placeholder="Enter Location" name='Location' onChange={handleInput} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="OwnerName"><strong>Owner Name</strong></label>
                        <input type="text" placeholder="Enter Owner Name" name='OwnerName' onChange={handleInput} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="phoneNo"><strong>Phone no</strong></label>
                        <input type="number" placeholder="Enter Phone no" name='phoneNo' onChange={handleInput} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="numEmployees"><strong>Number of employees</strong></label>
                        <input type="number" placeholder="Enter Number of employees" name='numEmployees' onChange={handleInput} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" name='email' onChange={handleInput} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" name='password' onChange={handleInput} className='form-control rounded-0' />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
                    <p>You agree to our terms and policies</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>LOGIN</Link>
                </form>
            </div>
        </div>
    );
}
