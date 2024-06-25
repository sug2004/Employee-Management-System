import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './pages/Signup';
import Home from './Home';
import Employees from './components/Employees';
import AttendanceLeaveManagement from './components/AttendanceLeaveManagement';
import TaskProjectAssignment from './components/TaskProjectAssignment';
import RequirementsandOnboarding from './components/RequirementsandOnboarding';
import Performanceappraisals from './components/Performanceappraisals';
import Dashboard from './components/Dashboard';
import Communication from './components/Communication';
import GeneralSettings from './components/GeneralSettings';
import UserManagement from './components/UserManagement';
import NotificationSettings from './components/NotificationSettings';
import Timetracking from './components/Timetracking';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/Employees' element={<Employees />}></Route>
        <Route path='/AttendanceLeaveManagement' element={<AttendanceLeaveManagement/>}></Route>
        <Route path='/TaskProjectAssignment' element={<TaskProjectAssignment/>}></Route>
        <Route path='/RequirementsandOnboarding' element={<RequirementsandOnboarding/>}></Route>
        <Route path='/Performanceappraisals' element={<Performanceappraisals/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/communication' element={<Communication/>}></Route>
        <Route path="/generalsettings" element={<GeneralSettings/>} ></Route>
        <Route path="/usermanagement" element={<UserManagement/>} ></Route>
        <Route path="/notificationsettings" element={<NotificationSettings/>} ></Route>
        <Route path="/Timetracking" element={<Timetracking/>} ></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
