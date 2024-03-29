import React, { useState } from "react";
import { Helmet } from 'react-helmet';

import Template from "./components/Template";
/* Home */
import Home from "./pages/Home.jsx";
import homeContent from "./assets/content/home";
/* About */
import About from "./pages/About.jsx";
import aboutContent from "./assets/content/about";
/* Blog */
import Blog from "./pages/Blog.jsx";
import blogContent from './assets/content/blog'
/* Projects */
import Projects from "./pages/Projects.jsx";
import ProjectsAll from "./pages/ProjectsAll.jsx";
import projectContent from './assets/content/projects'
/* Posts */
import Post from "./pages/Post.jsx";
import postContent from './assets/content/posts/posts.json'

import "./assets/styles/app.css";
import { ThemeContext } from "./utils/context";
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
                element={ <Template onThemeChange={onThemeChange} content={ <Home {...homeContent} /> } />  } 
              />
              <Route 
                path="/about" 
                element={ <Template onThemeChange={onThemeChange} content={ <About {...aboutContent} /> } /> } 
              />
              <Route 
                path="/projects" 
                element={ 
                  <Template 
                    onThemeChange={onThemeChange} 
                    content={ <Projects {...projectContent} posts={postContent.filter((post) => post.type === 'project')} /> } 
                  /> 
                } 
              />
              <Route 
                path="/projects/all" 
                element={ 
                  <Template 
                    onThemeChange={onThemeChange} 
                    content={ <ProjectsAll {...projectContent} posts={postContent.filter((post) => post.type === 'project')} /> } 
                  /> 
                } 
              />
              <Route 
                path="/projects/post" 
                element={ 
                  <Template 
                    onThemeChange={onThemeChange} 
                    content={ <Post type={'project'} posts={postContent.filter((post) => post.type === 'project')} /> } 
                  /> 
                } 
              />
              <Route 
                path="/knowledge" 
                element={ 
                  <Template 
                    onThemeChange={onThemeChange} 
                    content={ <Blog {...blogContent} posts={postContent.filter((post) => post.type === 'blog')}/> } 
                  /> 
                } 
              />
              <Route 
                path="/blog/post" 
                element={ 
                  <Template 
                    onThemeChange={onThemeChange} 
                    content={ <Post type={'blog'} posts={postContent.filter((post) => post.type === 'blog')} /> } 
                  /> 
                } 
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