# Developer Portfolio: megbailey.me

`megbailey.me` is personal website to showcase my work as a developer work, my thoughts, and technical growth. I’ve built the site from the ground up, shaping it into a polished portfolio with an emphasis on device responsiveness and a modular architecture that allows it to evolve and scale over time.

## Key features

### Modern React architecture

The site is built with **React** and **React Router 6**, giving it a component-driven structure and client-side navigation. Each page—Home, About, Projects, and Blog—is represented by a dedicated route and content component, making it easy to add or update sections.

### Dynamic content loading

Project and blog posts are managed through a simple content registry. Metadata is stored in:

- `assets/content/posts/posts.json`

Individual post content lives as static markdown files under:

- `assets/content/posts/blog/`
- `assets/content/posts/project/`

This approach keeps content separate from presentation while allowing new posts to appear automatically once metadata and markdown are added.

### Theme switching with persistence

The portfolio includes a **light/dark theme switch** in the navigation header. Theme state is managed with **Redux**, and the user's choice is saved in `localStorage`, so the site remembers the preferred mode across page loads.

### Responsive layout

Using **Ant Design** alongside a mobile-first grid, the layout adapts smoothly across devices. The menu, cards, and content sections all resize gracefully, so the portfolio remains readable on phones, tablets, and desktop screens.

### Content-rich project and blog pages

The Projects section displays featured work alongside a full projects listing. The blog area supports **GitHub-flavored markdown**, which makes it easy to write articles with headings, code blocks, links, and inline formatting.

## Extensibility and customization

This portfolio was built to evolve. Here are the main extensibility points:

### Add new posts or projects

To add content, create a new markdown file and then register it in `assets/content/posts/posts.json`. The site will automatically include it in the appropriate list.

### Expand the About page

The About page content is stored in `assets/content/about.js`. That file holds skills, tools, and experience data, so updating expertise or adding new sections is straightforward.

### Modify the visual style

Styles are organized in `assets/styles/`, with page-specific CSS for home, projects, posts, and navigation. This makes visual updates easy without touching the core application logic.

### Reuse and extend components

Reusable components such as `Header`, `Menu`, `Template`, `BlogCard`, and `ProjectCard` are designed to be modular. New UI sections can be built by composing these existing pieces or by adding new components alongside them.

### Add new page routes

Page routing is managed in `src/App.js`. New pages can be introduced by adding a route, importing the component, and wiring it into the `Template` wrapper.

## What this project shows

`megbailey.me` is more than just a resume site. It demonstrates practical frontend engineering patterns:

- component-based page structure
- markdown-driven content publishing
- persistent theme state
- responsive UI design
- clean separation between content and layout

## Looking ahead

The site is ready for continued growth. Possible future enhancements include:

- search functionality for blog posts
- project filtering and categories
- improved SEO metadata per page
- a dedicated contact or newsletter section
- interactive projects