import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import StudentCategories from './StudentCategories';
import Subjects from './Subjects';
import History from './History';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/students" element={<StudentCategories />} />
        <Route path="/subjects/:category" element={<Subjects />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;