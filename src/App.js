import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'
import { Helmet } from 'react-helmet';

import Template from "./public/components/template/Template";

import Home from "./public/apps/Home/Home";
import About from "./public/apps/About/About";
import Blog from "./public/apps/Blog/Blog";
import Contact from "./public/apps/Contact/Contact";
import Projects from "./public/apps/Projects/Projects";
import ProjectsAll from "./public/apps/Projects/ProjectsAll";

import "./index.css";
import { themeStyle } from "./assets/styles/global.css";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


function App() {

  const [theme, setTheme] = useState('light');

  const onThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const { backgroundColor, color } = themeStyle(theme)

  
  
  return (
    <div className="App" id='app' >
      <Helmet>
        <style>{`body { background-color: ${backgroundColor}; }`}</style>
      </Helmet>
      <BrowserRouter> 
        <Routes>
            <Route 
              path="/" 
              element={ <Template onThemeChange={onThemeChange} theme={theme} content={ <Home/> } />  } 
            />
            <Route 
              path="/about" 
              element={ <Template onThemeChange={onThemeChange} theme={theme} content={ <About/> } /> } 
            />
            <Route 
              path="/projects" 
              element={ <Template onThemeChange={onThemeChange} theme={theme} content={ <Projects/> } /> } 
            />
            <Route 
              path="/projects/all" 
              element={ <Template onThemeChange={onThemeChange} theme={theme} content={ <ProjectsAll/> } /> } 
            />
            <Route 
              path="/knowledge" 
              element={ <Template onThemeChange={onThemeChange} theme={theme} content={ <Blog/> } /> } 
            />
            <Route 
              path="/hello" 
              element={ <Template onThemeChange={onThemeChange} theme={theme} content={ <Contact/> } /> } 
            />
            <Route 
              path="*" 
              element={<Navigate to="/"/>} 
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;