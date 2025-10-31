# Deployment Guide for GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Prepare Your Repository

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it `personal-website` (or any name you prefer)
   - Make it public
   - Don't initialize with README (we already have one)

### 2. Configure the Project

1. **Update `vite.config.js`**
   
   Change the `base` property to match your repository name:
   ```javascript
   base: '/your-repo-name/', // e.g., '/personal-website/'
   ```

   **Important**: If you're deploying to `username.github.io` (without a repository path), set:
   ```javascript
   base: '/',
   ```

2. **Update Personal Information**
   
   Edit these files with your details:
   - `src/components/Contact.jsx` - Update email, LinkedIn, GitHub links
   - `src/components/Footer.jsx` - Update social links
   - `src/components/Projects.jsx` - Add your project links
   - `index.html` - Update meta tags

### 3. Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Cybersecurity portfolio"

# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the changes

### 5. Deploy

The GitHub Actions workflow will automatically deploy your site when you push to the `main` branch.

You can monitor the deployment:
1. Go to the **Actions** tab in your repository
2. Click on the latest workflow run
3. Wait for it to complete (usually 2-3 minutes)

### 6. Access Your Site

Once deployed, your portfolio will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

For example: `https://mathewsomy.github.io/personal-website/`

## Alternative: Manual Deployment

If you prefer to deploy manually without GitHub Actions:

### 1. Install gh-pages

```bash
npm install --save-dev gh-pages
```

### 2. Update package.json

Add these scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME"
}
```

### 3. Deploy

```bash
npm run deploy
```

### 4. Configure GitHub Pages

1. Go to repository Settings → Pages
2. Under Source, select **gh-pages** branch
3. Click Save

## Updating Your Portfolio

After making changes:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push

# GitHub Actions will automatically redeploy
```

Or with manual deployment:
```bash
npm run deploy
```

## Troubleshooting

### Issue: Blank page after deployment

**Solution**: Check the `base` path in `vite.config.js`. It should match your repository name.

### Issue: Assets not loading (404 errors)

**Solution**: 
1. Verify the `base` path in `vite.config.js`
2. Clear browser cache
3. Check browser console for errors

### Issue: GitHub Actions deployment fails

**Possible solutions**:
1. Verify GitHub Pages is enabled in repository settings
2. Check that permissions are set correctly in Settings → Actions → General
3. Ensure workflow file is in `.github/workflows/deploy.yml`
4. Check Actions tab for specific error messages

### Issue: CSS not applying

**Solution**: 
1. Ensure Tailwind CSS is properly configured
2. Check that `index.css` is imported in `main.jsx`
3. Rebuild the project: `npm run build`

## Custom Domain (Optional)

To use a custom domain:

1. Add a file named `CNAME` in the `public` folder
2. Add your domain name to the file (e.g., `mathewsomy.com`)
3. Configure DNS settings with your domain provider
4. Push changes to GitHub

## Security Notes

- Never commit `.env` files with sensitive data
- Use environment variables for API keys
- Keep dependencies updated: `npm audit fix`

## Support

If you encounter issues:
1. Check the [Vite documentation](https://vitejs.dev)
2. Review [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Check repository Issues for similar problems

---

**Happy Deploying! 🚀**
