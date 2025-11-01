#!/bin/bash

# Laravel Forge Deployment Script for Next.js

set -e

echo "=========================================="
echo "Starting Next.js Deployment"
echo "=========================================="

# Navigate to the project directory (if not already there)
cd "$(dirname "$0")"

# Install dependencies
echo "Installing dependencies..."
npm ci --production=false

# Build the Next.js application
echo "Building Next.js application..."
npm run build

echo "=========================================="
echo "Build completed successfully!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Make sure a Daemon is configured in Forge to run: npm start"
echo "2. Verify the PORT environment variable is set correctly"
echo "3. Check that Nginx is configured to proxy to your app port"
echo ""

