# Cloudflare Pages Deployment Guide

This project has been configured for deployment on Cloudflare Pages. Follow these steps to deploy your website:

## Prerequisites

1. A Cloudflare account (free tier available)
2. Node.js and npm installed locally (for building)
3. Git repository (GitHub, GitLab, or Bitbucket)

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build:cf
   ```

3. Preview locally:
   ```bash
   npm run preview:cf
   ```

## Cloudflare Pages Deployment

### Method 1: Connect Git Repository (Recommended)

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Connect your Git provider (GitHub, GitLab, or Bitbucket)
4. Select your repository
5. Configure build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build:cf`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)
6. Click "Save and Deploy"

### Method 2: Direct Upload

1. Build the project locally:
   ```bash
   npm run build:cf
   ```
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project"
4. Choose "Upload assets"
5. Upload the contents of the `dist` folder
6. Click "Deploy site"

## Configuration Files

The following files have been added/configured for Cloudflare Pages:

- `public/_redirects` - Handles client-side routing
- `wrangler.toml` - Cloudflare configuration
- `vite.config.ts` - Updated with Cloudflare Pages optimizations
- `package.json` - Added Cloudflare-specific build scripts

## Custom Domain (Optional)

1. In your Cloudflare Pages dashboard, go to "Custom domains"
2. Add your domain
3. Follow the DNS configuration instructions
4. SSL certificate will be automatically provisioned

## Environment Variables

If you need environment variables:
1. Go to your project settings in Cloudflare Pages
2. Navigate to "Environment variables"
3. Add your variables for both "Production" and "Preview" environments

## Build Configuration

- **Build command**: `npm run build:cf`
- **Build output directory**: `dist`
- **Node.js version**: 18.x (default)

## Features

- ✅ Client-side routing support
- ✅ Optimized build for Cloudflare Pages
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Free hosting
- ✅ Custom domain support
- ✅ Preview deployments for pull requests

## Troubleshooting

If you encounter issues:

1. Check the build logs in Cloudflare Pages dashboard
2. Ensure all dependencies are in `package.json`
3. Verify the build output directory is `dist`
4. Check that `_redirects` file is in the `public` folder

## Support

For more information, visit:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Documentation](https://vitejs.dev/)
