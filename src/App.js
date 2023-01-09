import React, { useState, useEffect } from "react";
import Home from "./public/apps/Home/Home";
import Blog from "./public/apps/Blog/Blog";
import Projects from "./public/apps/Projects/Projects";

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
    <Router>
      <div className="App" id='app'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;