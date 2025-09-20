# Prabesh Shrestha - Portfolio Website

A modern, Apple-inspired portfolio website with liquid glass effects and smooth animations.

## 🗂️ File Structure

```
public_html/
├── index.html                          # Main portfolio page
├── comp3122/
│   └── comp3122.html                   # COMP 3122 assignments page
├── assets/
│   ├── css/
│   │   ├── main.css                    # Main CSS file (imports all others)
│   │   ├── base/
│   │   │   ├── variables.css           # CSS variables and design system
│   │   │   ├── reset.css               # CSS reset and base styles
│   │   │   └── layout.css              # Layout utilities and grid system
│   │   ├── components/
│   │   │   ├── glass-cards.css         # Glass morphism card components
│   │   │   ├── profile.css             # Profile section components
│   │   │   ├── social.css              # Social media components
│   │   │   └── skills.css              # Skills section components
│   │   ├── animations/
│   │   │   ├── keyframes.css           # Animation keyframes
│   │   │   ├── transitions.css         # Transition effects and utilities
│   │   │   └── background.css          # Background animations
│   │   └── pages/
│   │       └── assignments.css         # COMP 3122 assignments page styles
│   ├── js/
│   │   └── modern-interactions.js      # Interactive JavaScript functionality
│   └── img/
│       └── mypicture.jpg               # Profile image
└── README.md                           # This file
```

## 🎨 Design System

### Colors
- **Primary Blue**: `#007AFF` (Apple Blue)
- **Facebook Blue**: `#1877F2` (Used for text highlights)
- **Accent Colors**: Purple, Pink, Orange, Green
- **Neutral Grays**: 50-900 scale for text and backgrounds

### Typography
- **Primary Font**: SF Pro Display (Apple's system font)
- **Secondary Font**: SF Pro Text
- **Fallbacks**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto

### Spacing
- **XS**: 0.5rem
- **SM**: 1rem
- **MD**: 1.5rem
- **LG**: 2rem
- **XL**: 3rem
- **2XL**: 4rem

### Glass Effects
- **Background**: Semi-transparent white with backdrop blur
- **Borders**: Subtle white borders
- **Shadows**: Soft drop shadows for depth

## 🚀 Features

### Main Portfolio (`index.html`)
- **Glass Morphism Design**: Modern translucent cards with blur effects
- **Animated Background**: Floating shapes with parallax movement
- **Profile Section**: Image, name, course info with Facebook Blue highlights
- **Contact Cards**: Email, program, and about information
- **Skills Showcase**: Interactive skill icons with hover effects
- **Social Links**: Professional social media links with tooltips

### COMP 3122 Assignments (`comp3122/comp3122.html`)
- **Assignment Cards**: Individual cards for each assignment
- **Status Indicators**: Visual status (Completed, In Progress, Pending)
- **Assignment Details**: Due dates, weights, grades, progress
- **Action Buttons**: Links to view submissions, download files, etc.

### Interactive Features
- **Bounce Animations**: Elements bounce in when scrolling into view
- **Typing Animation**: Name types out with blinking cursor
- **Hover Effects**: Smooth transitions and scaling on hover
- **Responsive Design**: Optimized for all screen sizes
- **Accessibility**: Keyboard navigation and focus states

## 🛠️ Technical Details

### CSS Architecture
- **Modular Structure**: Separated into logical components
- **CSS Variables**: Centralized design system
- **Component-Based**: Reusable component styles
- **Animation System**: Organized keyframes and transitions

### JavaScript Features
- **Intersection Observer**: Scroll-based animations
- **Parallax Effects**: Mouse and scroll-based movement
- **Interactive Elements**: Hover effects and tooltips
- **Performance Optimized**: Throttled scroll events

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **CSS Features**: Backdrop-filter, CSS Grid, Flexbox
- **Fallbacks**: Graceful degradation for older browsers

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 768px, 480px
- **Flexible Grid**: Auto-fit grid columns
- **Touch Friendly**: Appropriate touch targets

## 🎯 Performance

- **Optimized Images**: Proper sizing and compression
- **Efficient CSS**: Organized and minified
- **Smooth Animations**: 60fps animations with hardware acceleration
- **Lazy Loading**: Intersection Observer for animations

## 🔧 Customization

### Adding New Components
1. Create component CSS file in `assets/css/components/`
2. Import in `main.css`
3. Add HTML structure following existing patterns

### Modifying Colors
1. Update CSS variables in `assets/css/base/variables.css`
2. All components will automatically use new colors

### Adding Animations
1. Add keyframes in `assets/css/animations/keyframes.css`
2. Add transition classes in `assets/css/animations/transitions.css`

## 📄 License

This project is for educational purposes as part of the T177 Advanced Diploma in Computer Programming and Analysis program.

---

**Created by**: Prabesh Shrestha  
**Course**: COMP 3122  
**Program**: T177 Advanced Diploma in Computer Programming and Analysis
