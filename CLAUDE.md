# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hexo-based personal blog using the AnZhiYu theme. The blog focuses on sharing study notes, university life experiences, and personal life content from a computer science student at Peking University.

## Common Commands

### Development and Build
```bash
# Clean generated files
npm run clean

# Build the site for production
npm run build

# Start local development server
npm run server

# Deploy to GitHub Pages
npm run deploy
```

### Content Management
```bash
# Create a new post
hexo new post "Post Title"

# Create a new draft
hexo new draft "Draft Title"

# Create a new page
hexo new page "page-name"
```

## Architecture

### Key Directories
- `source/` - Contains all source content (posts, pages, assets)
- `source/_posts/` - Blog posts in Markdown format
- `source/_data/` - Theme configuration data files
- `themes/anzhiyu/` - AnZhiYu theme files
- `public/` - Generated static files (build output)
- `scaffolds/` - Templates for new content

### Configuration Files
- `_config.yml` - Main Hexo configuration
- `_config.anzhiyu.yml` - AnZhiYu theme configuration
- `package.json` - Node.js dependencies and scripts

### Theme Structure
The project uses the AnZhiYu theme, a highly customized Butterfly theme variant with:
- Multi-language support (Chinese/Traditional Chinese)
- Advanced comment systems (Valine, Twikoo support)
- Rich media features (music player, image galleries, bangumi tracking)
- Performance optimizations (lazy loading, PWA support)
- Multiple interactive features (live2d, particle effects, etc.)

### Content Organization
- Posts are organized by categories (学习笔记, 大学生涯, 日常生活)
- Tags are used for detailed categorization (CSAPP, ics, 数算, etc.)
- Asset management uses post asset folders (set to true in config)
- Permalink structure: `posts/:abbrlink/` using hexo-abbrlink plugin

### Key Features
- Automatic RSS feed generation
- Bangumi (anime) tracking integration
- Friend circle functionality
- Comment system with barrage effects
- Music player integration
- Image optimization and lazy loading
- Dark/light mode support
- Mobile-responsive design

## Development Notes

- The site uses Chinese as the primary language
- Post assets are stored in individual folders alongside posts
- The theme is heavily customized with numerous plugins and features
- Deployment is configured for GitHub Pages via git deployment
- The site includes various social media integrations and tracking

## Content Creation

When creating new posts:
- Use the appropriate categories and tags
- Include a cover image when possible
- Consider enabling math support for technical posts (`mathjax: true` in front-matter)
- Use the built-in asset folder system for images and files

## Testing and Quality

Before deploying:
- Run `npm run clean` followed by `npm run build` to ensure clean builds
- Test the local server with `npm run server`
- Verify responsive design across different devices
- Check that all plugins and features work correctly