# Product Requirements Document (PRD)

## Overview

This document outlines the requirements and technical specifications for setting up a static website using Eleventy (11ty) as the static site generator, Basecoat.css, and Tailwind CSS for styling and UI.

## Objectives

* Establish a performant static site built with Eleventy.
* Utilize Basecoat.css and Tailwind CSS to ensure a minimal, clean, and responsive design.
* Optimize developer experience with structured organization and automation.

## Technology Stack

* **Static Site Generator:** Eleventy (11ty)
* **CSS Frameworks:** Basecoat.css, Tailwind CSS
* **Templating Language:** Nunjucks
* **Build Tool:** npm scripts

## Functional Requirements

### Site Structure

* **Pages:** Home (`index.njk`), About (`about.njk`)
* **Layouts:** Base layout for common header/footer elements.
* **Partials:** Header, footer, and reusable components such as navigation.
* **Data Management:** Eleventy Data Files (`_data`) for dynamic data handling (navigation links, site-wide metadata).

### CSS/UI Integration

* Install Basecoat.css and Tailwind CSS:

  ```bash
  npm install basecoat-css tailwindcss postcss autoprefixer
  ```
* Set up Tailwind configuration:

  ```bash
  npx tailwindcss init
  ```
* Configure `tailwind.config.js` to scan Eleventy template files:

  ```js
  module.exports = {
    content: ['./src/**/*.{njk,html}'],
    theme: {},
    plugins: [],
  };
  ```
* Create `main.css` in the `assets/css` directory:

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @import "basecoat-css";
  ```
* Include this CSS file in your base layout.
* Customize Basecoat.css minimally with Tailwind utility classes for additional styling.

### Developer Experience

* Set up npm scripts for:

  * Development (`npm run dev`): Watches files, triggers live reload.
  * Build (`npm run build`): Production build that compiles and minifies resources.
  * Serve (`npm start`): Serve the built site locally for review.

### Performance Optimization

* Minify CSS and HTML during the build process.
* Optimize images automatically (optional enhancement via plugins).
* Configure caching strategies via deployment platform recommendations.

## Directory Structure

```
project-root/
├── src/
│   ├── _includes/
│   │   ├── layouts/
│   │   │   └── base.njk
│   │   └── partials/
│   │       ├── header.njk
│   │       └── footer.njk
│   ├── _data/
│   │   └── site.json
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css
│   │   └── images/
│   ├── about.njk
│   └── index.njk
├── netlify.toml
├── .eleventy.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## Eleventy Configuration (.eleventy.js)

* Specify input/output directories.
* Set up file copy operations (e.g., assets folder).

## Deployment Instructions

### Netlify Setup

* Create a `netlify.toml` file:

```toml
[build]
command = "npm run build"
publish = "_site"

[build.environment]
NODE_VERSION = "20"
```

* Deploy via Netlify by connecting your Git repository.

## Agent (Cursor) Instructions

* Clearly specify tasks (feature, bug fix).
* Include explicit details for file locations and styling adjustments.
* Define interactive component integration requirements with Alpine.js.

## Acceptance Criteria

* Website is fully responsive, adheres to Basecoat.css and Tailwind CSS standards.
* Eleventy build process works without errors.
* All site metadata is controlled via Eleventy data files.
* Pages load quickly and meet basic web performance metrics (Core Web Vitals).

## Deliverables

* Git repository with initial Eleventy project structure.
* Documentation on how to install, run, and build the project.

## Future Enhancements (optional)

* Deployment scripts for additional platforms.
* Integration of automated testing and CI/CD pipelines.
