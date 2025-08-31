# 🧪 Testing the Modernized Site

## Quick Local Test (Recommended)

Since the development environment doesn't have Ruby/Jekyll installed, here's how to test on your local machine:

### Option 1: Simple Jekyll Setup
```bash
# In your local terminal (not the IDE):
cd /path/to/alexlimh.github.io

# Install dependencies
bundle install
npm install

# Build assets  
npm run build

# Start development server
./dev.sh
# or manually: bundle exec jekyll serve --livereload

# Open http://localhost:4000
```

### Option 2: Docker (if you prefer containers)
```bash
# Create a simple Dockerfile for testing
echo "FROM ruby:3.1
WORKDIR /site
COPY . .
RUN bundle install && npm install && npm run build
EXPOSE 4000
CMD bundle exec jekyll serve --host=0.0.0.0" > Dockerfile

# Build and run
docker build -t academic-site .
docker run -p 4000:4000 academic-site
```

## 🎯 What to Look For

### Homepage (/)
- [ ] Modern hero section with your name and role
- [ ] Interactive statistics cards (15+ Publications, 1000+ Citations, etc.)
- [ ] Call-to-action buttons (Publications, Google Scholar)
- [ ] Timeline-style news section with colored badges
- [ ] Smooth animations on page load

### Publications Page (/publications/)
- [ ] Card-based layout instead of plain text lists  
- [ ] Color-coded venue badges (NeurIPS=red, EMNLP=green, etc.)
- [ ] Paper abstracts and author highlighting
- [ ] Hover animations on publication cards
- [ ] Responsive grid layout

### Author Sidebar
- [ ] Enhanced avatar with hover ring effect
- [ ] Categorized social icons (Academic, Professional, Social)
- [ ] "Get in Touch" contact button
- [ ] Improved mobile layout

### Mobile Experience
- [ ] Responsive design on phone/tablet
- [ ] Touch-optimized buttons (44px minimum)
- [ ] Readable text and proper spacing
- [ ] Collapsible navigation

### Performance
- [ ] Fast page loads
- [ ] Smooth animations
- [ ] No layout shifts
- [ ] Works without JavaScript (progressive enhancement)

## 🐛 Common Issues & Fixes

### Bundle Install Fails
```bash
# Delete lock file and retry
rm Gemfile.lock
bundle install
```

### NPM Build Errors
```bash
# Clear cache and reinstall
npm cache clean --force  
rm -rf node_modules package-lock.json
npm install
```

### Jekyll Serve Issues
```bash
# Clean and rebuild
bundle exec jekyll clean
bundle exec jekyll serve --trace
```

### Port 4000 Already in Use
```bash
# Use different port
bundle exec jekyll serve --port 4001
```

## 📋 Test Checklist

### Desktop Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)  
- [ ] Safari (if on Mac)
- [ ] Resize window to test responsive breakpoints

### Mobile Testing  
- [ ] Test on actual mobile device or browser dev tools
- [ ] Portrait and landscape orientations
- [ ] Touch interactions work smoothly
- [ ] Text is readable without zooming

### Performance Testing
- [ ] Check browser dev tools Network tab
- [ ] Lighthouse audit (aim for 90+ scores)
- [ ] Test with slow 3G simulation

## 🚀 Expected Results

You should see a **dramatically improved** site with:
- **Professional modern design** instead of basic academic template
- **Engaging visual hierarchy** with cards, colors, and spacing  
- **Smooth interactions** with hover effects and animations
- **Mobile-first responsive design** that works beautifully on all devices
- **Enhanced content presentation** that showcases your research effectively

If something doesn't look right, check the browser console for errors and refer to the troubleshooting section above.

## 📞 Need Help?

If you encounter issues:
1. Check browser console for JavaScript/CSS errors
2. Verify all dependencies installed correctly
3. Try the manual setup steps instead of the `./dev.sh` script
4. Make sure you're viewing `http://localhost:4000` (not https)

The transformation should be immediately visible - your old plain academic site will now have a modern, professional appearance! 🎉