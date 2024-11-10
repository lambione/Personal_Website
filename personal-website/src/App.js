import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Strava from './Views/Strava';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Strava />}/>
      </Routes>
    </Router>
  );
}

export default App;
