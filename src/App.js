import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'
import Home from "./public/apps/Home/Home";
import Blog from "./public/apps/Blog/Blog";
import Contact from "./public/apps/Contact/Contact";
import Projects from "./public/apps/Projects/Projects";

import AboutMe from "./public/apps/AboutMe/AboutMe";
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
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/knowledge" element={<Blog />} />
          <Route path="/hello" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;