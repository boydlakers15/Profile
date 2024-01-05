import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the Menu styles

const Navbar = () => {

  return (
    <nav>
      <ul className="vertical-menu">
        <li className={activeSection === 'home' ? 'active' : ''}><a href="/Profile/Home">Home</a></li>
        <li className={activeSection === 'profile' ? 'active' : ''}><a href="/Profile">Profile</a></li>
        <li className={activeSection === 'about' ? 'active' : ''}><a href="#about">About Me</a></li>
        <li className={activeSection === 'skills' ? 'active' : ''}><a href="/Skills">Skills</a></li>
        <li className={activeSection === 'contact' ? 'active' : ''}><a href="https://github.com/boydlakers15/certificates-jared">Certificates</a></li>
        {/* Add more creative elements to your menu, like icons or animations */}
        <div className="cursor"></div>
      </ul>
    </nav>
  );
}

export default Navbar;
