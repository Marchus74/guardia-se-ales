import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./page/Home.jsx";
import Login from "./page/Login.jsx";
import Dashboard from './page/Dashboard.jsx';


function App() {
  return (
    <>
      <div className="bg-blue-400">
        <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
