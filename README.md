# megbailey.me - Personal Developer Portfolio

A modern, responsive developer portfolio website built with React, featuring a blog, project showcase, and interactive components.

## 🌟 Site Features

### Pages & Navigation
- **Home** - Landing page with a welcoming introduction
- **About** - Personal background, skills, experience, and tools/technologies with proficiency levels
- **Projects** - Curated showcase of featured projects with featured and full project views
- **Blog/Knowledge** - Technical blog posts covering various topics
- **Individual Post Views** - Detailed pages for both project and blog posts

### Key Features
- **Theme Switching** - Toggle between light and dark modes with persistent storage
- **Responsive Design** - Mobile-first layout that adapts to all screen sizes using Ant Design's grid system
- **Code Syntax Highlighting** - Blog posts are rendered GitHub-flavored markdown
- **State Management** - Redux-based theme management for consistent styling across pages
- **SEO Optimization** - React Helmet integration for dynamic meta tags and page titles
- **Performance** - Webpack code splitting for optimized bundle sizes

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
├── pages/               # Page components (route handlers)
├── utils/               # Utility functions and state management
├── App.js               # Main application with routing
├── index.js             # Application entry point
└── index.css            # Global styles

assets/
├── content/             # Content data files
├── img/                 # Image assets and logos
└── styles/              # CSS stylesheets

build/                   # Production build output (generated)
public/                  # Static public assets
```

## 🛠 Technology Stack

### Frontend Framework
- **React 18** - UI library with hooks
- **React Router 6** - Client-side routing
- **Redux Toolkit** - State management
- **Ant Design 5** - Component library and design system

### Content & Markdown
- **React Markdown** - Markdown to JSX conversion
- **Remark GFM** - GitHub-flavored markdown support

### Data Visualization
- **Chart.js** - JavaScript charting library
- **React ChartJS 2** - React wrapper for Chart.js

### Utilities
- **React Helmet** - Dynamic document head management (SEO)
- **date-fns** - Date manipulation and formatting
- **react-responsive** - Responsive design queries
- **Ant Design Icons** - Icon library

### Build & Development
- **Webpack 5** - Module bundler
- **Babel 7** - JavaScript transpiler
- **webpack-dev-server** - Development server with hot reload
- **TypeScript** - Type safety support

## 📊 Content Management

### Posts Registry
Posts are managed through `assets/content/posts/posts.json` which defines:
- **Project Posts** - Showcase of development projects with links to GitHub
- **Blog Posts** - Technical articles about web development topics

Each post entry includes:
- Name/title
- Type (project or blog)
- Filename (reference to markdown file)
- Description
- Publication date
- Associated image
- GitHub URL (for projects)

### Skills & Experience Data
Skills are defined in `assets/content/about.js` with:
- Skill name and type (Languages, Tools, etc.)
- Category tags (Frontend, Backend, Scripting, etc.)
- Proficiency level (1-10 scale)
- Logo/image reference

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16.0.0
- npm >= 8.0.0

### Installation

```bash
npm install
```

#### Development
```bash
npm start
```
Runs the development server with webpack in development mode. Open [http://localhost:8080](http://localhost:8080) to view it in the browser. The page will reload with changes.

#### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build/` directory. Includes webpack bundling in production mode and generates a Netlify `_redirects` file for SPA routing.

#### Development Build
```bash
npm run build:dev
```
Creates a development build without optimization. Useful for debugging the build output.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔗 Live Site

Visit the site at: https://megbailey.me

## 📝 License

This project is the personal portfolio of Megan Bailey. All rights reserved unless otherwise specified.
