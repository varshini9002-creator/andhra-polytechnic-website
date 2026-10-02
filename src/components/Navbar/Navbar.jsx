import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='nav-bar'>
      <h1>Andhra Polytechnic</h1>
      <div>
        <ul type="none">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/departments")}>Departments</li>
          <li onClick={() => navigate("/events")}>Events</li>
          <li onClick={() => navigate("/registrations")}>Registrations</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/help")}>Help</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar