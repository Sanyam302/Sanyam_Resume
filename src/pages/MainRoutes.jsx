import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import Poject from './Project';
import Contact from './Contact';
import Project from './Project';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default MainRoutes;