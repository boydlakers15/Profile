import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the Menu styles
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
    const handleEnterButtonClick = () => {

        navigate("/Profile");
    };

  return (
    <nav>
      <ul className="vertical-menu">
        <li ><a href="/Profile/Home">Home</a></li>
        <li ><a href="/Profile">Profile</a></li>
        <li ><a href="#about">About Me</a></li>
        <li ><a href=""  onClick={handleEnterButtonClick}>Skills</a></li>
        <li><a href="https://github.com/boydlakers15/certificates-jared">Certificates</a></li>
        {/* Add more creative elements to your menu, like icons or animations */}
        <div className="cursor"></div>
      </ul>
    </nav>
  );
}

export default Navbar;
