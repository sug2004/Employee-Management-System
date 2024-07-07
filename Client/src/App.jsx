import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Login from './pages/login';
import AdminDash from './pages/dashboard/admindash';
import HrDash from './pages/dashboard/hrdash';
import EmployeeDash from './pages/dashboard/employeedash';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminDash />} />
          <Route path="/hr/dashboard" element={<HrDash />} />
          <Route path="/employee/dashboard" element={<EmployeeDash />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
