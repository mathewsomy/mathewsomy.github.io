# Quick Start Guide

Get your cybersecurity portfolio running in 3 minutes!

## 🚀 Quick Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Your portfolio will open at `http://localhost:3000`

## ✏️ Customize Your Portfolio

### Update Your Information

1. **Contact Details** (`src/components/Contact.jsx` - Lines 35-51)
   ```javascript
   {
     name: 'Email',
     href: 'mailto:your.email@example.com',  // ← Change this
   },
   {
     name: 'LinkedIn',
     href: 'https://linkedin.com/in/yourprofile',  // ← Change this
   },
   {
     name: 'GitHub',
     href: 'https://github.com/yourusername',  // ← Change this
   },
   ```

2. **Footer Social Links** (`src/components/Footer.jsx` - Lines 8-12)

3. **Projects** (`src/components/Projects.jsx`)
   - Update `liveLink` and `githubLink` for your projects
   - Add more projects by copying the project object structure

### Change Colors (Optional)

Edit `tailwind.config.js`:
```javascript
colors: {
  cyber: {
    blue: '#00d9ff',    // Main accent color
    green: '#00ff88',   // Secondary accent
    purple: '#a855f7',
    pink: '#ec4899',
  },
},
```

## 📤 Deploy to GitHub Pages

### Method 1: Automatic (GitHub Actions)

1. **Update repository name** in `vite.config.js`:
   ```javascript
   base: '/your-repo-name/',  // Change this
   ```

2. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Repository → Settings → Pages
   - Source: **GitHub Actions**
   - Wait 2-3 minutes for deployment

4. **Access your site**:
   ```
   https://USERNAME.github.io/REPO/
   ```

### Method 2: Manual Deployment

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Deploy
npm run build
npm run deploy
```

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📝 Common Customizations

### Add a New Section

1. Create component in `src/components/YourSection.jsx`
2. Import in `src/App.jsx`
3. Add to the main component

### Change Font

Update Google Fonts link in `index.html` and font family in `tailwind.config.js`

### Add More Projects

In `src/components/Projects.jsx`, duplicate a project object:
```javascript
{
  title: 'New Project',
  icon: YourIcon,
  gradient: 'from-cyber-blue to-blue-600',
  description: 'Project description',
  features: ['Feature 1', 'Feature 2'],
  techStack: ['Tech1', 'Tech2'],
  liveLink: '#',
  githubLink: '#',
},
```

## 🐛 Troubleshooting

**Issue**: Port 3000 already in use
```bash
# Use a different port
npm run dev -- --port 3001
```

**Issue**: Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue**: Build fails
```bash
# Check for syntax errors
npm run lint
```

## 📚 Next Steps

1. ✅ Customize your information
2. ✅ Add your project links
3. ✅ Update social media profiles
4. ✅ Test on mobile devices
5. ✅ Deploy to GitHub Pages
6. ✅ Share your portfolio!

## 💡 Pro Tips

- **Images**: Add project screenshots to `public/images/` and reference them
- **Analytics**: Add Google Analytics in `index.html`
- **SEO**: Update meta tags in `index.html` for better search rankings
- **Performance**: Images should be optimized (use WebP format)
- **Accessibility**: Test with screen readers

## 🤝 Need Help?

- Check `README.md` for detailed documentation
- Review `DEPLOYMENT.md` for deployment issues
- Check browser console for errors
- Verify all imports are correct

---

**You're all set! Happy coding! 🚀**
