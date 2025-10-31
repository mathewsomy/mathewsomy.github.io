# Project Structure

## 📂 Complete File Tree

```
personal-website/
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── deploy.yml           # GitHub Actions auto-deployment
│
├── 📁 public/
│   └── vite.svg                 # Favicon (replace with your logo)
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Navbar.jsx           # Top navigation bar
│   │   ├── Hero.jsx             # Landing/hero section
│   │   ├── About.jsx            # About & education section
│   │   ├── Skills.jsx           # Technical skills showcase
│   │   ├── Projects.jsx         # Featured projects section
│   │   ├── Contact.jsx          # Contact form & social links
│   │   └── Footer.jsx           # Footer component
│   │
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles & Tailwind imports
│
├── .eslintrc.cjs                # ESLint configuration
├── .gitignore                   # Git ignore rules
├── DEPLOYMENT.md                # Deployment instructions
├── GET_STARTED.txt              # Quick start guide
├── QUICKSTART.md                # Quick customization guide
├── README.md                    # Main documentation
├── index.html                   # HTML template with SEO tags
├── package.json                 # NPM dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS theme config
└── vite.config.js               # Vite build configuration
```

## 🗑️ Old Files to Delete (Optional)

These files are from the initial HTML/CSS version and are **not used** in the React version:

```
❌ css/style.css      # Old CSS file (replaced by Tailwind)
❌ js/script.js        # Old JavaScript (replaced by React components)
```

You can safely delete the `css/` and `js/` folders as they're no longer needed.

## 📝 Key Files to Customize

### 1. Personal Information
- `src/components/Contact.jsx` - Email, LinkedIn, GitHub links
- `src/components/Footer.jsx` - Social media links
- `src/components/Projects.jsx` - Your project details

### 2. Configuration
- `vite.config.js` - Update `base` path for deployment
- `tailwind.config.js` - Customize colors if desired
- `index.html` - Update meta tags for SEO

### 3. Content
- `src/components/About.jsx` - Update bio and education
- `src/components/Skills.jsx` - Add/remove skills
- `src/components/Projects.jsx` - Update project descriptions

## 🎨 Component Breakdown

### Navbar.jsx
- Responsive navigation
- Mobile hamburger menu
- Smooth scroll to sections
- Sticky header on scroll

### Hero.jsx
- Animated introduction
- Floating security icons
- Call-to-action buttons
- Scroll indicator

### About.jsx
- Education details
- Background information
- Expertise areas
- Animated cards

### Skills.jsx
- Categorized technical skills
- Color-coded sections
- Hover effects
- Cybersecurity expertise tags

### Projects.jsx
- Featured project cards
- Tech stack badges
- Research highlights
- External links to demos/GitHub

### Contact.jsx
- Contact form with validation
- Social media cards
- Location information
- Hover animations

### Footer.jsx
- Quick navigation links
- Social media icons
- Copyright information
- Built with credits

## 🔧 Tech Stack Details

### Frontend
- **React 18.2** - UI framework
- **Tailwind CSS 3.3** - Utility-first CSS
- **Framer Motion 10.16** - Animation library
- **Lucide React** - Icon library

### Build Tools
- **Vite 5.0** - Fast build tool
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Development
- **ESLint** - Code linting
- **React Hooks** - State management

## 🌈 Color Scheme

```javascript
Cyber Dark:    #050816  // Main background
Cyber Dark 2:  #0a0e27  // Card backgrounds
Cyber Blue:    #00d9ff  // Primary accent
Cyber Green:   #00ff88  // Secondary accent
Cyber Purple:  #a855f7  // Tertiary accent
Cyber Pink:    #ec4899  // Quaternary accent
```

## 📱 Responsive Breakpoints

```
sm:  640px   // Small devices
md:  768px   // Tablets
lg:  1024px  // Desktops
xl:  1280px  // Large desktops
```

## 🚀 Build Output

After running `npm run build`, the production files go to:
```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── vendor-[hash].js
└── index.html
```

This `dist/` folder is what gets deployed to GitHub Pages.

## 📊 Performance Features

- **Code splitting** - Vendor and animation chunks separated
- **Tree shaking** - Unused code removed
- **Minification** - CSS and JS compressed
- **Asset optimization** - Efficient bundling

## 🔐 Security Features

- **No sensitive data** - All config is public-safe
- **HTTPS ready** - GitHub Pages serves over HTTPS
- **No backend** - Static site, no server vulnerabilities
- **Form validation** - Client-side validation

## 🎯 SEO Features

- Semantic HTML5 elements
- Meta description tags
- Open Graph tags
- Keyword optimization
- Mobile-friendly
- Fast loading times

---

**Need to modify structure?** Edit components in `src/components/` and rebuild with `npm run build`.
