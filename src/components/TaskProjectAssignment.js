import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './New.css';
const TaskProjectAssignment = () => {

    const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [tasks, setTasks] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    employeeId: '',
    dueDate: ''
  });

  useEffect(() => {
    // Fetch projects
    axios.get('http://localhost:8081/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const createProject = () => {
    axios.post('http://localhost:8081/projects', {
      projectName: newProjectName,
      description: newProjectDescription
    }).then(response => {
      setProjects([...projects, response.data]);
      setNewProjectName('');
      setNewProjectDescription('');
    }).catch(error => console.error('Error creating project:', error));
  };

  const assignTask = () => {
    axios.post('http://localhost:8081/tasks', {
      ...newTask,
      projectId: selectedProjectId
    }).then(response => {
      setTasks([...tasks, response.data]);
      setNewTask({ title: '', description: '', employeeId: '', dueDate: '' });
    }).catch(error => console.error('Error assigning task:', error));
  };

  const fetchTasksForProject = (projectId) => {
    axios.get(`http://localhost:8081/projects/${projectId}/tasks`)
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  };

  return (
    <div className='container py-5'>
      <h2 className='text-center mb-4'>Task and Project Assignment</h2>
      <div className='mb-3'>
        <h3>Create Project</h3>
        <input
          type="text"
          className='form-control mb-2'
          placeholder="Project Name"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <textarea
          className='form-control mb-2'
          placeholder="Project Description"
          value={newProjectDescription}
          onChange={(e) => setNewProjectDescription(e.target.value)}
        />
        <button className='btn btn-primary' onClick={createProject}>Create Project</button>
      </div>
      <div className='mb-3'>
        <h3>Assign Task</h3>
        {/* <select className='form-control mb-2' value={selectedProjectId} onChange={(e) => setSelectedProjectId(e.target.value)}>
          <option value="">Select Project</option>
          {projects.map(project => (
            <option key={project.id} value={project.id}>{project.projectName}</option>
          ))}
        </select> */}
        <input
          type="text"
          className='form-control mb-2'
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <textarea
          className='form-control mb-2'
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <input
          type="text"
          className='form-control mb-2'
          placeholder="Employee ID"
          value={newTask.employeeId}
          onChange={(e) => setNewTask({ ...newTask, employeeId: e.target.value })}
        />
        <input
          type="date"
          className='form-control mb-2'
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        />
        <button className='btn btn-primary' onClick={assignTask}>Assign Task</button>
      </div>
      <div className='mb-3'>
        <h3>View Tasks for Project</h3>
        <select className='form-control mb-2' onChange={(e) => fetchTasksForProject(e.target.value)}>
          <option value="">Select Project</option>
          {projects.map(project => (
            <option key={project.id} value={project.id}>{project.projectName}</option>
          ))}
        </select>
        <ul className='list-group'>
          {tasks.map(task => (
            <li className='list-group-item' key={task.id}>{task.title} - {task.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskProjectAssignment;
