# Mathew Somy - Cybersecurity Engineer Portfolio

A modern, responsive, and dark-themed portfolio website built with **React** and **Tailwind CSS**, showcasing cybersecurity projects, skills, and professional experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61dafb?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=for-the-badge&logo=tailwindcss)

## 🌟 Features

- **Modern Dark Theme**: Cyber-inspired design with neon blue/green accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Performance Focused**: Fast loading times with Vite build tool
- **Accessible**: WCAG compliant with keyboard navigation support

## 🚀 Live Demo

Visit the live portfolio: [your-github-username.github.io/personal-website](https://your-github-username.github.io/personal-website)

## 📋 Sections

1. **Home** - Hero section with animated introduction
2. **About** - Education, background, and expertise areas
3. **Skills** - Technical skills categorized by domain
4. **Projects** - Featured cybersecurity projects with detailed descriptions
5. **Contact** - Contact form and social media links

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite 5.0
- **Deployment**: GitHub Pages

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-github-username/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Create a GitHub repository** named `personal-website` (or any name)

2. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/personal-website.git
   git push -u origin main
   ```

3. **Create GitHub Actions Workflow**

   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v2
           with:
             path: ./dist

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v2
   ```

4. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Source: GitHub Actions
   - Save changes

5. **Update `vite.config.js`**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/personal-website/', // Replace with your repo name
     server: {
       port: 3000,
       open: true,
     },
   })
   ```

6. **Push changes and deploy**
   ```bash
   git add .
   git commit -m "Add GitHub Actions deployment"
   git push
   ```

### Option 2: Manual Deployment with gh-pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://your-username.github.io/personal-website"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Update Personal Information

Edit the following files:

1. **Contact Information** - `src/components/Contact.jsx`
   - Update email, LinkedIn, and GitHub links

2. **Projects** - `src/components/Projects.jsx`
   - Add your project details and links

3. **Skills** - `src/components/Skills.jsx`
   - Customize your technical skills

4. **About Section** - `src/components/About.jsx`
   - Update education and background

### Theme Customization

Edit `tailwind.config.js` to change colors:

```javascript
colors: {
  cyber: {
    dark: '#0a0e27',
    darker: '#050816',
    blue: '#00d9ff',      // Change accent colors
    green: '#00ff88',
    purple: '#a855f7',
    pink: '#ec4899',
  },
},
```

### SEO Optimization

Update meta tags in `index.html`:

```html
<meta name="description" content="Your custom description" />
<meta name="keywords" content="Your, Custom, Keywords" />
```

## 📁 Project Structure

```
personal-website/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── README.md
```

## 🐛 Troubleshooting

### Common Issues

**Issue**: Blank page after deployment
- **Solution**: Check if `base` path in `vite.config.js` matches your repository name

**Issue**: CSS not loading
- **Solution**: Ensure Tailwind CSS is properly configured and imported in `index.css`

**Issue**: GitHub Actions failing
- **Solution**: Verify GitHub Pages is enabled and permissions are correct

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mathew Somy**
- Profession: Cybersecurity Engineer
- Email: [your.email@example.com](mailto:your.email@example.com)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Design inspiration from modern cybersecurity aesthetics
- Icons by [Lucide](https://lucide.dev)
- Animations powered by [Framer Motion](https://www.framer.com/motion)
- Built with [Vite](https://vitejs.dev) and [React](https://react.dev)

---

⭐ If you found this portfolio template helpful, please consider giving it a star!

**Keywords**: Mathew Somy, Cybersecurity Engineer, Vulnerability Assessment, Post-Quantum Cryptography, PQTSS, Cyber Forensics, Network Security, Portfolio Website, React, Tailwind CSS
