import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AttendanceLeaveManagement = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const [leaveReason, setLeaveReason] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [tasks, setTasks] = useState({}); // New state for tasks
  
  // ... (existing state variables)

  // Function to mark attendance based on task completion

  // Function to generate and download leave report as PDF
  useEffect(() => {
    // Fetch employees and tasks
    axios.get('http://localhost:8081/employees')
      .then(response => {
        setEmployees(response.data);
        // Initialize tasks state
        const initialTasks = response.data.reduce((acc, employee) => {
          acc[employee.id] = { completed: false }; // false indicates task not completed
          return acc;
        }, {});
        setTasks(initialTasks);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const markAttendance = (employeeId, isPresent) => {
    if (tasks[employeeId].completed) { // Check if the task is completed
      axios.post('http://localhost:8081/mark-attendance', {
        employeeId,
        date: new Date().toISOString().slice(0, 10), // Current date in YYYY-MM-DD format
        isPresent
      }).then(response => {
        alert(response.data.message);
      }).catch(error => console.error('Error marking attendance:', error));
    } else {
      alert('Task not completed yet!');
    }
  };

  const handleTaskCompletion = (employeeId) => {
    setTasks(prev => ({
      ...prev,
      [employeeId]: { ...prev[employeeId], completed: true }
    }));
  };

  const generateReport = () => {
    axios.get('http://localhost:8081/leave-requests') // Endpoint to fetch leave requests
      .then(response => {
        const leaveData = response.data;
        const doc = new jsPDF();
        doc.autoTable({
          head: [['Employee ID', 'Start Date', 'End Date', 'Reason']],
          body: leaveData.map(request => [request.employeeId, request.startDate, request.endDate, request.reason]),
        });
        doc.save('leave-report.pdf');
      })
      .catch(error => console.error('Error generating report:', error));
  };

  const downloadLeaveReport = () => {
    axios.get('http://localhost:8081/leave-requests') // Make sure to replace with your actual API endpoint
      .then(response => {
        const leaveRequests = response.data.filter(request => !request.isPresent); // Filter for absent requests
        const doc = new jsPDF();
        doc.autoTable({
          head: [['Employee ID', 'Start Date', 'End Date', 'Reason']],
          body: leaveRequests.map(req => [req.employeeId, req.startDate, req.endDate, req.reason]),
        });
        doc.save('leave-report.pdf');
      })
      .catch(error => console.error('Error fetching leave requests:', error));
  };


  const submitLeaveRequest = () => {
    axios.post('http://localhost:8081/request-leave', {
      employeeId: selectedEmployeeId,
      startDate,
      endDate,
      reason: leaveReason
    }).then(response => {
      alert(response.data.message);
      setLeaveReason('');
      setStartDate('');
      setEndDate('');
    }).catch(error => console.error('Error submitting leave request:', error));
  };

  return (
    <div className='container mt-5'>
      <h2 className='text-center mb-4'>Attendance and Leave Management</h2>
      <div className='row'>
        <div className='col-md-6'>
          <h3>Mark Attendance</h3>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mark Present</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>
                    <button className='btn btn-success' onClick={() => markAttendance(employee.id, true)}>Present</button>
                    <button className='btn btn-danger ml-2' onClick={() => markAttendance(employee.id, false)}>Absent</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='col-md-6'>
          <h3>Request Leave</h3>
          <form onSubmit={(e) => { e.preventDefault(); submitLeaveRequest(); }}>
            <div className='form-group'>
              <label>Employee</label>
              <select className='form-control' value={selectedEmployeeId} onChange={(e) => setSelectedEmployeeId(e.target.value)}>
                <option value=''>Select Employee</option>
                {employees.map(employee => (
                  <option key={employee.id} value={employee.id}>{employee.name}</option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <label>Start Date</label>
              <input type='date' className='form-control' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div className='form-group'>
              <label>End Date</label>
              <input type='date' className='form-control' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div className='form-group'>
              <label>Reason for Leave</label>
              <textarea className='form-control' value={leaveReason} onChange={(e) => setLeaveReason(e.target.value)}></textarea>
            </div>
            <button type='submit' className='btn btn-primary' onClick={submitLeaveRequest} >Submit Leave Request</button>
          </form>
        </div>
      </div>
      <div>
      <button onClick={downloadLeaveReport} className='btn btn-primary'>Download Leave Report</button>
    </div>
    </div>
    
  );
};

export default AttendanceLeaveManagement;
