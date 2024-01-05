import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the Menu styles
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
      <ul className="vertical-menu">
        <li ><a href="/Profile/Home">Home</a></li>
        <li ><a href="/Profile">Profile</a></li>
        <li ><a href="#about">About Me</a></li>
        <li ><Link to="./skills">Skills</Link></li>
        <li><a href="https://github.com/boydlakers15/certificates-jared">Certificates</a></li>
        {/* Add more creative elements to your menu, like icons or animations */}
        <div className="cursor"></div>
      </ul>
    </nav>
  );
}

export default Navbar;
