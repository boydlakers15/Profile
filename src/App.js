// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import SkillsPage from './components/Skills';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <HashRouter>
            {/* Use the "element" prop instead of "component" */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/Home" element={<Profile />} />
            <Route path="/Skills" element={<SkillsPage />} />
          </HashRouter>
        </Routes>
      </Router>
    </>
  );
};

export default App;
