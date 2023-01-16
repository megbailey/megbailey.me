import React, { useState, useEffect } from "react";
import Home from "./public/apps/Home/Home";
import Blog from "./public/apps/Blog/Blog";
import Contact from "./public/apps/Contact/Contact";
import Projects from "./public/apps/Projects/Projects";
import Navbar from "./components/Navbar";
import "./index.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {

  useEffect(() => {
    
  }, []);

  return (
    <div className="App" id='app'>
    <Navbar />
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/hello" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;