import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'

import Home from "./public/apps/Home/Home";
import About from "./public/apps/About/About";
import Blog from "./public/apps/Blog/Blog";
import Contact from "./public/apps/Contact/Contact";
import Projects from "./public/apps/Projects/Projects";
import ProjectsAll from "./public/apps/Projects/ProjectsAll";

import "./index.css";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {

  useEffect(() => {
    
  }, []);

  return (
    <div className="App" id='app'>
    <BrowserRouter> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/all" element={<ProjectsAll />} />
          <Route path="/knowledge" element={<Blog />} />
          <Route path="/hello" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;