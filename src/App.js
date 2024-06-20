import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux';

import Template from "./components/Template.jsx";
/* Home */
import Home from "./pages/Home.jsx";
import homeContent from "../assets/content/home.js";
/* About */
import About from "./pages/About.jsx";
import aboutContent from "../assets/content/about.js";
/* Blog */
import Blog from "./pages/Blog.jsx";
import blogContent from '../assets/content/blog.js'
/* Projects */
import Projects from "./pages/Projects.jsx";
import ProjectsAll from "./pages/ProjectsAll.jsx";
import projectContent from '../assets/content/projects.js'
/* Posts */
import Post from "./pages/Post.jsx";
import postContent from '../assets/content/posts/posts.json'

import { updateTheme } from './utils/reducers';
import store from './utils/store';
import "../assets/styles/app.css";

/* prior to app load get previosly loaded theme if stored on client */
let prevTheme = localStorage.getItem('theme')

function App() {
  const theme = useSelector(state => state.theme.value)

  const { backgroundColor } = theme.style

  /* persist chosen theme between page loads */
  useEffect(() => {
    /* get previosly loaded theme if stored on client */
    let prevTheme = localStorage.getItem('theme')
    store.dispatch( updateTheme( prevTheme) )
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme.mode)
  }, [theme.mode])


  return (
    <div className="App" id='app' >
      <Helmet>
        <style>{`body { background-color: ${backgroundColor}; }`}</style>
      </Helmet>
        <BrowserRouter> 
          <Routes>
            <Route 
              path="/" 
              element={ 
                <Template content={ <Home {...homeContent} /> } />  
              } 
            />
            <Route 
              path="/about" 
              element={ 
                <Template content={ <About {...aboutContent} /> } /> 
              } 
            />
            <Route 
              path="/projects" 
              element={ 
                <Template 
                  content={ <Projects {...projectContent} posts={postContent.filter((post) => post.type === 'project')} /> } 
                /> 
              } 
            />
            <Route 
              path="/projects/all" 
              element={ 
                <Template 
                  content={ <ProjectsAll {...projectContent} posts={postContent.filter((post) => post.type === 'project')} /> } 
                /> 
              } 
            />
            <Route 
              path="/projects/post" 
              element={ 
                <Template 
                  content={ <Post type={'project'} posts={postContent.filter((post) => post.type === 'project')} /> } 
                /> 
              } 
            />
            <Route 
              path="/knowledge" 
              element={ 
                <Template 
                  content={ <Blog {...blogContent} posts={postContent.filter((post) => post.type === 'blog')}/> } 
                /> 
              } 
            />
            <Route 
              path="/blog/post" 
              element={ 
                <Template 
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
    </div>
  );
}

export default App;