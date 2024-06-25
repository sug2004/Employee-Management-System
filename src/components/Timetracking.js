import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TimeTracking = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState(''); // new description state
  const [file, setFile] = useState(null); // new file state
  const [deadline, setDeadline] = useState('');
  const [updateTimeline, setUpdateTimeline] = useState('');

  const addTask = () => {
    setTasks([...tasks, { 
      name: taskName, 
      project: projectName, 
      description, // add description to task object
      file, // add file to task object
      startTime: null, 
      endTime: null, 
      deadline: new Date(deadline), 
      updateTimeline: new Date(updateTimeline), 
      timeSpent: 0, 
      overtime: 0 
    }]);
    setTaskName('');
    setProjectName('');
    setDescription(''); // reset description
    setFile(null); // reset file
    setDeadline('');
    setUpdateTimeline('');
  };

  const startTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].startTime = new Date();
    setTasks(newTasks);
  };

  const stopTask = (index) => {
    const newTasks = [...tasks];
    const endTime = new Date();
    newTasks[index].endTime = endTime;
    const timeSpent = (endTime - newTasks[index].startTime) / 1000; // time spent in seconds
    newTasks[index].timeSpent += timeSpent; // add to total time spent

    // Calculate overtime based on deadline
    const deadline = newTasks[index].deadline;
    if (endTime > deadline) {
      newTasks[index].overtime = (endTime - deadline) / 1000; // add to total overtime
    }

    newTasks[index].startTime = null; // Reset startTime
    newTasks[index].endTime = null; // Reset endTime
    setTasks(newTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Time Tracking & Timeline/Deadline Management</h1>
      <div className="mb-4">
        <label>Task Name:</label>
        <input 
          type="text" 
          className="form-control mb-2" 
          placeholder="Enter task name" 
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
        />
        <label>Project Name:</label>
        <input 
          type="text" 
          className="form-control mb-2" 
          placeholder="Enter project name" 
          value={projectName} 
          onChange={(e) => setProjectName(e.target.value)} 
        />
        <label>Description:</label>
        <textarea 
          className="form-control mb-2" 
          placeholder="Enter task description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <label>File Attachment:</label>
        <input 
          type="file" 
          className="form-control mb-2" 
          onChange={(e) => setFile(e.target.files[0])} 
        />
        <label>Deadline:</label>
        <input 
          type="datetime-local" 
          className="form-control mb-2" 
          value={deadline} 
          onChange={(e) => setDeadline(e.target.value)} 
        />
        <label>Update Timeline:</label>
        <input 
          type="datetime-local" 
          className="form-control mb-2" 
          value={updateTimeline} 
          onChange={(e) => setUpdateTimeline(e.target.value)} 
        />
        <button className="btn btn-primary" onClick={addTask}>Add Task</button>
      </div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">
            <h2>{task.name}</h2>
            <p>Project: {task.project}</p>
            <p>Description: {task.description}</p>
            <p>File Attachment: {task.file && task.file.name}</p>
            <p>Deadline: {task.deadline.toLocaleString()}</p>
            <p>Update Timeline: {task.updateTimeline.toLocaleString()}</p>
            <p>Total Time Spent: {task.timeSpent} seconds</p>
            <p>Total Overtime: {task.overtime} seconds</p>
            {task.startTime ? (
              <button className="btn btn-danger"onClick={() => stopTask(index)}>Stop</button>
            ) : (
              <button className="btn btn-success" onClick={() => startTask(index)}>Start</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeTracking;