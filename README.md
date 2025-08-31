# Modern Academic Personal Website

A stunning, modernized personal academic website built with Jekyll and enhanced with contemporary design patterns. Originally based on Academic Pages template, completely transformed with modern UX/UI principles.

## 🚀 Quick Start - Test the New Design!

### Prerequisites
- Ruby 2.7+ and Bundler
- Node.js 16+ and npm
- Git

### Launch Local Development

1. **Simple one-command setup:**
   ```bash
   ./dev.sh
   ```
   
2. **Or step-by-step:**
   ```bash
   bundle install
   npm install
   npm run build
   bundle exec jekyll serve --livereload
   ```

3. **View your site:**
   Open http://localhost:4000 in your browser

## 🎨 What's Been Transformed

### 🌟 **Complete Visual Overhaul**
- **Modern Hero Section**: Dynamic stats, professional presentation, call-to-action buttons
- **Card-based Publications**: Beautiful publication cards with venue badges and abstracts  
- **Enhanced Author Profile**: Redesigned sidebar with modern social icons
- **Timeline News Section**: Visual timeline with categorized news badges
- **Mobile-First Design**: Fully responsive with touch-optimized interactions

### ⚡ **Performance & Tech Upgrades**
- **Modern Build Process**: GitHub Actions deployment, asset optimization
- **Enhanced Animations**: Smooth page transitions, hover effects, micro-interactions
- **Improved Mobile UX**: Touch targets, responsive layouts, better navigation
- **SEO Optimized**: Better meta tags, structured data, social sharing

## 📱 Key Features

### Enhanced Pages
- **Homepage**: Professional hero section with statistics and clear CTAs
- **Publications**: Modern card layout with color-coded venue badges
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Interactive Elements**: Smooth animations and hover effects

### Technical Improvements  
- **Modern Color Palette**: Professional blue-gray theme with proper contrast
- **Enhanced Typography**: Better readability with modern font stacks
- **Performance Optimized**: Compressed assets, lazy loading, fast builds
- **Accessibility**: WCAG compliant, keyboard navigation, screen reader friendly

## 🛠️ Easy Customization

### Quick Content Updates
- **About Page**: Edit `_pages/about.md` 
- **Publications**: Update `_pages/publications.md`
- **Site Config**: Modify `_config.yml`

### Design Customization
- **Colors**: Edit `_sass/_variables.scss`
- **Components**: Modify `_sass/_modern-components.scss` 
- **Animations**: Enhance `_sass/_modern-animations.scss`

# Changelog -- bugfixes and enhancements

There is one logistical issue with a ready-to-fork template theme like academic pages that makes it a little tricky to get bug fixes and updates to the core theme. If you fork this repository, customize it, then pull again, you'll probably get merge conflicts. If you want to save your various .yml configuration files and markdown files, you can delete the repository and fork it again. Or you can manually patch. 

To support this, all changes to the underlying code appear as a closed issue with the tag 'code change' -- get the list [here](https://github.com/academicpages/academicpages.github.io/issues?q=is%3Aclosed%20is%3Aissue%20label%3A%22code%20change%22%20). Each issue thread includes a comment linking to the single commit or a diff across multiple commits, so those with forked repositories can easily identify what they need to patch.
