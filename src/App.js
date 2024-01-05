// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import SkillsPage from './components/SkillsPage';
import Navbar from './components/Navbar';
import About from './components/About';
import FooterPage from './components/FooterPage';
import { Experience } from './components/Experience';
import { Model } from './components/Billboard';
import { UI } from './components/UI';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
        
            {/* Use the "element" prop instead of "component" */}
            <Route exact path="/profile" element={<LandingPage />} />
            <Route exact path="/home" element={<Profile />} />
            <Route exact path="/skills" element={<SkillsPage />} />
            <Route exact path="/foot" element={<FooterPage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/exper" element={<Experience />} />
            <Route exact path="/model" element={<Model />} />
            <Route exact path="/ui" element={<UI />} />
            <Route exact path="/nav" element={<Navbar />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
