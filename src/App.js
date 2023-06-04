import React, { useState } from "react";
import { Helmet } from 'react-helmet';

import Template from "./components/Template";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectsAll from "./pages/ProjectsAll.jsx";
import Post from "./pages/Post.jsx";

import "./assets/styles/app.css";
import { ThemeContext } from "./context/context";
import { themeStyle } from "./utils/style.js";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

/* prior to app load */
let themeState = localStorage.getItem('theme')
themeState = themeState === null ? 'dark' : themeState

function App() {
  const [theme, setTheme] = useState(themeState);

  const onThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const { backgroundColor } = themeStyle(theme)

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
                path="/projects/post" 
                element={ <Template onThemeChange={onThemeChange} content={ <Post type={'project'} /> } /> } 
              />
              <Route 
                path="/knowledge" 
                element={ <Template onThemeChange={onThemeChange} content={ <Blog/> } /> } 
              />
              <Route 
                path="/blog/post" 
                element={ <Template onThemeChange={onThemeChange} content={ <Post type={'blog'} /> } /> } 
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