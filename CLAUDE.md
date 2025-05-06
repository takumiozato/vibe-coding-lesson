# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an IR media site project designed to display IR information to investors. The site aims to provide a simple, intuitive interface for individual investors, institutional investors, and sell-side analytics to access IR information from contracted companies.

## Technical Stack

- **Framework**: Astro - Optimized for fast static site generation with Partial Hydration
- **Styling**: Tailwind CSS - Class-based, intuitive styling
- **Content Management**: Markdown files (.md) for article content
- **Development Environment**: Node.js 16.x or higher, npm/yarn for package management

## Project Structure

```
/ir-media-site
  ├── /src
  │    ├── /pages
  │    │    ├── index.astro            # Article list page
  │    │    └── /articles/[slug].astro # Article detail page
  │    ├── /content
  │    │    └── /articles              # Article Markdown files
  │    ├── /styles
  │    │    └── global.css             # Global CSS
  │    └── /components
  │         └── ArticleCard.astro      # Article card component
  ├── /public
  │    └── /images                     # Static files like images
  ├── package.json                     # Project configuration
  ├── tailwind.config.js               # Tailwind configuration
  └── astro.config.mjs                 # Astro configuration
```

## Development Commands

### Setup
```bash
# Install dependencies
npm install
# or
yarn install
```

### Development
```bash
# Start development server
npm run dev
# or
yarn dev
```

### Build
```bash
# Build for production
npm run build
# or
yarn build

# Preview production build
npm run preview
# or
yarn preview
```

## Key Features

1. Article list page - Displays article titles, publication dates, summaries, and category tags
2. Article detail page - Shows article title, content, publication date, and summary

## Content Management

Articles are managed as Markdown files in the `/src/content/articles/` directory with frontmatter for metadata such as:
- Title
- Publication date
- Category tags
- Summary