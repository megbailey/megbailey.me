import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'

import Template from "../src/components/template/Template";

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
          <Route path="/" element={ <Template content={ <Home/> } /> } />
          <Route path="/about" element={ <Template content={ <About/> } /> } />
          <Route path="/projects" element={ <Template content={ <Projects/> } /> } />
          <Route path="/projects/all" element={ <Template content={ <ProjectsAll/> } /> } />
          <Route path="/knowledge" element={ <Template content={ <Blog/> } /> } />
          <Route path="/hello" element={ <Template content={ <Contact/> } /> } />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;