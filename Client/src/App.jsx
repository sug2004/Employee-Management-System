import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Login from './pages/login';
import AdminDash from './pages/dashboard/admindash';
import HrDash from './pages/dashboard/hrdash';
import EmployeeDash from './pages/dashboard/employeedash';
import MarkAttendance from "@/pages/hr/MarkAttendance.jsx";
import TimeManagement from "@/pages/hr/TimeManagement.jsx";
import Performance from "@/pages/hr/Performance.jsx";
import Feedback from "@/pages/hr/Feedback.jsx";
import Tasksection from "@/pages/hr/Tasksection.jsx";
import Notification from "@/pages/hr/Notification.jsx";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminDash />} />
          <Route path="/hr/dashboard" element={<HrDash />} />
          <Route path="/employee/dashboard" element={<EmployeeDash />} />

          <Route path="/hr/dashboard/markattendance" element={<MarkAttendance/>}></Route>
        <Route path="/hr/dashboard/timemanagement" element={<TimeManagement/>}></Route>
        <Route path="/hr/dashboard/performance" element={<Performance/>}></Route>
        <Route path="/hr/dashboard/feedback" element={<Feedback/>}></Route>
        <Route path="/hr/dashboard/tasksection" element={<Tasksection/>}></Route>
        <Route path="/hr/dashboard/notification" element={<Notification/>}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
