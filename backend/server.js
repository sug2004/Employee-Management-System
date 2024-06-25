const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`Organisation Name`, `Domain Name`, `Location`, `Owner Name`, `Phone no`, `Number of employees`, `email`, `password`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.OrganisationName,
        req.body.DomainName,
        req.body.Location,
        req.body.OwnerName,
        req.body.phoneNo,
        req.body.numEmployees,
        req.body.email,
        req.body.password
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json("Error");
        }
        return res.status(201).json(data);
    });
});
app.listen(8081, () => {
    console.log('Server is running on port 8081');
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email`=? AND `password`=?";
    const values = [
        req.body.OrganisationName,
        req.body.DomainName,
        req.body.Location,
        req.body.OwnerName,
        req.body.phoneNo,
        req.body.numEmployees,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.json("Error");
        }
        if(data.length >0){
            return res.json("success");
        }
        else{
            return res.json("Failed");
        }
    });
});

// ... (existing code)

// Endpoint to get all employee profiles
app.get('/employees', (req, res) => {
    const sql = "SELECT * FROM employees";
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching employees:', err);
            return res.status(500).json("Error fetching employees");
        }
        res.json(results);
    });
});

// Endpoint to add a new employee profile
app.post('/employees', (req, res) => {
    const { name, position, email } = req.body;
    const sql = "INSERT INTO employees (name, position, email) VALUES (?, ?, ?)";
    db.query(sql, [name, position, email], (err, result) => {
        if (err) {
            console.error('Error adding new employee:', err);
            return res.status(500).json("Error adding new employee");
        }
        res.status(201).json({ id: result.insertId, ...req.body });
    });
});

// ... (rest of the existing code)

// ... (existing code)

// Endpoint to mark attendance for an employee
app.post('/mark-attendance', (req, res) => {
    const { employeeId, date, isPresent } = req.body;
    const sql = "INSERT INTO attendance (employee_id, date, is_present) VALUES (?, ?, ?)";
    db.query(sql, [employeeId, date, isPresent], (err, result) => {
        if (err) {
            console.error('Error marking attendance:', err);
            return res.status(500).json("Error marking attendance");
        }
        res.status(201).json({ message: 'Attendance marked successfully' });
    });
});

// Endpoint to get attendance records for an employee
app.get('/attendance/:employeeId', (req, res) => {
    const { employeeId } = req.params;
    const sql = "SELECT * FROM attendance WHERE employee_id = ?";
    db.query(sql, [employeeId], (err, results) => {
        if (err) {
            console.error('Error fetching attendance records:', err);
            return res.status(500).json("Error fetching attendance records");
        }
        res.json(results);
    });
});

// Endpoint to submit a leave request
app.post('/request-leave', (req, res) => {
    const { employeeId, startDate, endDate, reason } = req.body;
    const sql = "INSERT INTO leave_requests (employee_id, start_date, end_date, reason) VALUES (?, ?, ?, ?)";
    db.query(sql, [employeeId, startDate, endDate, reason], (err, result) => {
        if (err) {
            console.error('Error submitting leave request:', err);
            return res.status(500).json("Error submitting leave request");
        }
        res.status(201).json({ message: 'Leave request submitted successfully' });
    });
});

// ... (rest of the existing code)
// Endpoint to create a new project
app.post('/projects', (req, res) => {
    const { projectName, description } = req.body;
    const sql = "INSERT INTO projects (project_name, description) VALUES (?, ?)";
    db.query(sql, [projectName, description], (err, result) => {
        if (err) {
            console.error('Error creating project:', err);
            return res.status(500).json("Error creating project");
        }
        res.status(201).json({ message: 'Project created successfully', projectId: result.insertId });
    });
});

// Endpoint to assign a task to an employee
app.post('/tasks', (req, res) => {
    const { title, description, projectId, employeeId, dueDate } = req.body;
    const sql = "INSERT INTO tasks (title, description, project_id, employee_id, due_date) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [title, description, projectId, employeeId, dueDate], (err, result) => {
        if (err) {
            console.error('Error assigning task:', err);
            return res.status(500).json("Error assigning task");
        }
        res.status(201).json({ message: 'Task assigned successfully', taskId: result.insertId });
    });
});

// Endpoint to list tasks for a project
app.get('/projects/:projectId/tasks', (req, res) => {
    const { projectId } = req.params;
    const sql = "SELECT * FROM tasks WHERE project_id = ?";
    db.query(sql, [projectId], (err, results) => {
        if (err) {
            console.error('Error fetching tasks:', err);
            return res.status(500).json("Error fetching tasks");
        }
        res.json(results);
    });
});
// Endpoint to list all job requirements
app.get('/requirements', (req, res) => {
    const sql = "SELECT * FROM requirements";
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching job requirements:', err);
            return res.status(500).json("Error fetching job requirements");
        }
        res.json(results);
    });
});

// Endpoint to add a new job requirement
app.post('/requirements', (req, res) => {
    const { title, description, department } = req.body;
    const sql = "INSERT INTO requirements (title, description, department) VALUES (?, ?, ?)";
    db.query(sql, [title, description, department], (err, result) => {
        if (err) {
            console.error('Error adding job requirement:', err);
            return res.status(500).json("Error adding job requirement");
        }
        res.status(201).json({ message: 'Job requirement added successfully', requirementId: result.insertId });
    });
});

app.get('/onboard/:employeeId', (req, res) => {
    const { employeeId } = req.params;
    const sql = "SELECT * FROM onboard WHERE employee_id = ?";
    db.query(sql, [employeeId], (err, result) => {
        if (err) {
            console.error('Error fetching onboarding details:', err);
            return res.status(500).json("Error fetching onboarding details");
        }
        if (result.length > 0) {
            res.status(200).json(result[0]);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    });
});
// Endpoint to onboard a new employee
app.post('/onboard', (req, res) => {
    const { employeeId, name, startDate, orientationDate } = req.body;
    const sql = "INSERT INTO onboard(employee_id, name, start_date, orientation_date) VALUES (?, ?, ?, ?)";
    db.query(sql, [employeeId, name, startDate, orientationDate], (err, result) => {
        if (err) {
            console.error('Error onboarding employee:', err);
            return res.status(500).json("Error onboarding employee");
        }
        res.status(201).json({ message: 'Employee onboarded successfully' });
    });
});

// ... (rest of the existing code)

