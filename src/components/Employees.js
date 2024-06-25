import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    position: '',
    email: '',
  });

  useEffect(() => {
    // Fetch the initial list of employees
    axios.get('http://localhost:8081/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => console.error('Error fetching employee data:', error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/employees', newEmployee)
      .then(response => {
        setEmployees([...employees, response.data]);
        setNewEmployee({ name: '', position: '', email: '' }); // Reset form
      })
      .catch(error => console.error('Error adding new employee:', error));
  };


  return (
    <div className='container mt-5'>
      <h2 className='text-center mb-4'>Employee Profiles</h2>
      <form onSubmit={handleSubmit} className='mb-4'>
        <div className='form-group'>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newEmployee.name}
            onChange={handleInputChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={newEmployee.position}
            onChange={handleInputChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newEmployee.email}
            onChange={handleInputChange}
            className='form-control'
          />
        </div>
        <button type="submit" className='btn btn-primary w-100' >Add Employee</button>
      </form>
      <h3 className='text-center mb-3'>Current Employees</h3>
      <ul className='list-group'>
        {employees.map(employee => (
          <li key={employee.id} className='list-group-item'>
            {employee.name} - {employee.position} - {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
