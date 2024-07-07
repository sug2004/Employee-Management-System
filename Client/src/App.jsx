import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Login from './pages/login';
import AdminDash from './pages/dashboard/admindash';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminDash />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
