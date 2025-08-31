#!/bin/bash

# Development script for modern academic site
# This script sets up the development environment and starts the Jekyll server

echo "🚀 Starting development environment for Modern Academic Site"

# Check if required dependencies are installed
echo "📦 Checking dependencies..."

# Check for Ruby and Bundler
if ! command -v bundle &> /dev/null; then
    echo "❌ Bundler not found. Please install Ruby and Bundler first."
    exit 1
fi

# Check for Node.js and npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Please install Node.js first."
    exit 1
fi

# Install dependencies
echo "📥 Installing dependencies..."
bundle install --quiet
npm install --silent

# Build assets
echo "🔨 Building assets..."
npm run build

# Clean previous builds
echo "🧹 Cleaning previous builds..."
bundle exec jekyll clean

# Start Jekyll server with livereload
echo "🌐 Starting Jekyll development server..."
echo "📍 Your site will be available at: http://localhost:4000"
echo "🔄 LiveReload is enabled - changes will automatically refresh the browser"
echo "⏹️  Press Ctrl+C to stop the server"

bundle exec jekyll serve --livereload --open-url --host=0.0.0.0