
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios'
export default function Signup() {
    const [values,setValues]= useState({
      name:'',
      number:'',
      email:'',
      password:''
    })
    const navigate = useNavigate();
    const [errors,setErrors]=useState({})
    const handleInput =(event)=>{
      setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit =(event) =>{
      event.preventDefault();
      setErrors(Validation(values));
      if(errors.name ===""&& errors.email ==="" && errors.password ===""){
          axios.post('http://localhost:8081/signup/', values)
          .then(res =>
            navigate('/')
          )
          .catch(err => console.log(err) );
      }
  }
  return (
    <div className=' d-flex justify-content-center align-items-center bg-secondary h-100'>
    <div className='bg-white p-0 rounded w-50 h-100'>
      <h2>Sign up</h2>
        <form action="" onSubmit={handleSubmit}>
        <div className='mb-3'>
                    <label htmlFor="Organisation Name"><strong>Organisation Name</strong></label>
                    <input type="text" placeholder="Enter Organisation Name" name='name' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="Domain Name"><strong>Domain Name</strong></label>
                    <input type="text" placeholder="Enter Domain Name" name='name' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="Location"><strong>Location</strong></label>
                    <input type="text" placeholder="Enter Location" name='name' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="Owner Name"><strong>Owner Name</strong></label>
                    <input type="text" placeholder="Enter owner Name" name='name' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
    <label htmlFor="phoneNo"><strong>Phone no</strong></label>
    <input type="number" placeholder="Enter Phone no" name='phoneNo' className='form-control rounded-0'/>
    {errors.phoneNo && <span className='text-danger'>{errors.phoneNo}</span>}
</div>
<div className='mb-3'>
    <label htmlFor="numEmployees"><strong>Number of employees</strong></label>
    <input type="number" placeholder="Enter Number of employees" name='numEmployees' className='form-control rounded-0'/>
    {errors.numEmployees && <span className='text-danger'>{errors.numEmployees}</span>}
</div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter Email" name='email' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name='password' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
                <p>You agree to our terms and polices</p>
                
                <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration'>LOGIN</Link>
        </form>
        </div>
    </div>
  )
}
