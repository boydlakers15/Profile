// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import SkillsPage from './components/SkillsPage';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
        
            {/* Use the "element" prop instead of "component" */}
            <Route exact path="/Profile" element={<LandingPage />} />
            <Route path="/Home" element={<Profile />} />
            <Route path="/Skills" element={<SkillsPage />} />
          
        </Routes>
      </Router>
    </>
  );
};

export default App;
