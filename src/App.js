import React, { useState, useEffect, createContext } from "react";
import ReactDOM from 'react-dom/client'
import { Helmet } from 'react-helmet';

import Template from "./components/Template";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import ProjectsAll from "./pages/Projects/ProjectsAll";

import "./index.css";
import { ThemeContext } from "./context/context";
import { themeStyle } from "./assets/styles/global.css";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


function App() {
  const [theme, setTheme] = useState('dark');
  
  const onThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const { backgroundColor, color } = themeStyle(theme)

  
  
  return (
    <div className="App" id='app' >
      <Helmet>
        <style>{`body { background-color: ${backgroundColor}; }`}</style>
      </Helmet>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter> 
          <Routes>
              <Route 
                path="/" 
                element={ <Template onThemeChange={onThemeChange} content={ <Home/> } />  } 
              />
              <Route 
                path="/about" 
                element={ <Template onThemeChange={onThemeChange} content={ <About/> } /> } 
              />
              <Route 
                path="/projects" 
                element={ <Template onThemeChange={onThemeChange} content={ <Projects/> } /> } 
              />
              <Route 
                path="/projects/all" 
                element={ <Template onThemeChange={onThemeChange} content={ <ProjectsAll/> } /> } 
              />
              <Route 
                path="/knowledge" 
                element={ <Template onThemeChange={onThemeChange} content={ <Blog/> } /> } 
              />
              <Route 
                path="/hello" 
                element={ <Template onThemeChange={onThemeChange} content={ <Contact/> } /> } 
              />
              <Route 
                path="*" 
                element={<Navigate to="/"/>} 
              />
            </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;