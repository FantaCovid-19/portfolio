<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Sections/Hero.vue'
</script>

<template>
  <Navbar />
  <main>
    <Hero />
  </main>
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  /* Colors - Background */
  --bg: #080d1e; /* Background color */
  --surface: #111827; /* Navbar · footer · secciones */
  --card: #1a2744; /* Card color */
  --accent: #1e3a5f; /* Hover · Important Card */
  --muted: #1e2d45; /* Bordes · dividers · inputs */
  --highlight: #3b82f6; /* Buttons · badges active */
  --highlight-hover: #2563eb; /* Hover state for highlights */

  /* Colors - Text */
  --t1: #ffffff; /* H1 · name · Title Primary */
  --t2: #dbeafe; /* H2 · H3 · Important Labels */
  --t3: #bfdbfe; /* Description · Long Text */
  --t4: #93c5fd; /* Dates · metadata · subtitles */
  --t5: #60a5fa; /* Placeholders · Inactive Text */
  --t6: #3b82f6; /* Links · highlights, Buttons Text */

  /* Colors - Semantic */
  --c-green: #22c55e; /* Success */
  --c-amber: #f59e0b; /* Warning */
  --c-red: #ef4444; /* Error */
  --c-purple: #a78bfa; /* Info */

  /* Colors - Syntax */
  --syntax-keyword: #93c5fd; /* Keywords */
  --syntax-string: #86efac; /* Strings */
  --syntax-function: #c4b5fd; /* Functions */
  --syntax-number: #fcd34d; /* Numbers */
  --syntax-comment: #374151; /* Comments */

  /* Typography — Families */
  --font-display: 'Space Grotesk', sans-serif; /* Display font for titles and headings */
  --font-body: 'DM Sans', sans-serif; /* Body font for paragraphs and general text */
  --font-monospace: 'JetBrains Mono', monospace; /* Monospace font for code snippets and technical details */

  /* Typography — Scale */
  --text-xs: 0.75rem; /* Extra small text for fine details and labels */
  --text-sm: 0.8125rem; /* Small text for captions and metadata */
  --text-base: 0.875rem; /* Base text for body content */
  --text-md: 1rem; /* Medium text for body content */
  --text-lg: 1.125rem; /* Large text for section titles and important labels */
  --text-xl: 1.25rem; /* Base text for body content */
  --text-2xl: 1.5rem; /* Medium text for subtitles */
  --text-3xl: 1.875rem; /* Large text for section titles */
  --text-4xl: 2.25rem; /* Extra large text for main titles */

  /* Typography — Responsive (clamp) */
  --hero-title: clamp(2rem, 5vw, 3.5rem); /* Responsive font size for hero titles */
  --section-title: clamp(1.5rem, 3vw, 2.25rem); /* Responsive font size for section titles */
  --card-title: clamp(0.875rem, 1.5vw, 1.125rem); /* Responsive font size for card titles */
  --body-fluid: clamp(0.875rem, 1.2vw, 1rem); /* Responsive font size for body text */

  /* Typography — Weights */
  --fw-light: 300; /* Light font weight for subtle text */
  --fw-regular: 400; /* Regular font weight for standard text */
  --fw-medium: 500; /* Medium font weight for emphasis */
  --fw-semibold: 600; /* Semi-bold font weight for strong emphasis */
  --fw-bold: 700; /* Bold font weight for main titles and important labels */

  /* Typography — Line Heights */
  --lh-hero: 1.05; /* Line height for hero titles */
  --lh-tight: 1.1; /* Tight line height for titles and headings */
  --lh-snug: 1.3; /* Snug line height for emphasized text */
  --lh-normal: 1.5; /* Normal line height for body text */
  --lh-relaxed: 1.7; /* Relaxed line height for long-form text */
  --lh-code: 1.8; /* Line height for code snippets */

  /* Typography — Letter Spacing */
  --tracking-tight: -0.02em; /* Tight letter spacing for titles and headings */
  --tracking-normal: 0em; /* Normal letter spacing for body text */
  --tracking-wide: 0.05em; /* Wide letter spacing for emphasized text */
  --tracking-wider: 0.1em; /* Wider letter spacing for special emphasis */

  /* Border Radius */
  --radius-sm: 8px; /* Small border radius for buttons and cards */
  --radius-md: 12px; /* Medium border radius for cards and containers */
  --radius-lg: 16px; /* Large border radius for containers and sections */
  --radius-xl: 20px; /* Extra large border radius for special elements */
  --radius-2xl: 24px; /* Extra extra large border radius for special elements */
  --radius-pill: 9999px; /* Pill-shaped border radius for buttons and badges */

  /* Borders */
  --border-thin: 0.5px; /* Thin border for subtle dividers */
  --border-base: 1px; /* Base border for standard elements */
  --border-medium: 1.5px; /* Medium border for emphasis */
  --border-thick: 2px; /* Thick border for strong emphasis */

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.25);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.2);
  --shadow-focus: 0 0 0 3px rgba(59, 130, 246, 0.25);
  --shadow-glow: 0 0 20px rgba(59, 130, 246, 0.15);

  /* Transitions */
  --ease: 0.15s ease;
  --ease-md: 0.25s ease;
  --ease-slow: 0.4s ease;
  --ease-spring: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out: 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  /* Opacities */
  --opacity-disabled: 0.4; /* Opacity for disabled elements */
  --opacity-hover: 0.85; /* Opacity for hover states */
  --opacity-muted: 0.6; /* Opacity for muted text and elements */
  --overlay-sm: rgba(0, 0, 0, 0.4); /* Small overlay for subtle emphasis */

  /* Component Heights */
  --h-input: 36px; /* Standard height for input fields */
  --h-btn-lg: 44px; /* Large height for buttons */
  --h-btn: 38px; /* Standard height for buttons */
  --h-btn-sm: 30px; /* Small height for buttons */
  --h-navbar: 60px; /* Standard height for the navbar */
  --h-navbar-sm: 50px; /* Small height for the navbar on mobile */
  --sidebar-width: 250px; /* Standard width for sidebars */
  --section-padding: 7rem 0; /* Padding for sections */

  /* Layout */
  --max-prose: 65ch; /* Max width for readable text */
  --max-width: 1200px; /* Max width for the main container */
  --max-content: 800px; /* Max width for content */
  --max-wide: 1100px; /* Max width for wide content */
  --max-card: 400px; /* Max width for cards */
  --sidebar-w: 240px; /* Width for sidebars */
  --section-gap: 6rem; /* 96px */
  --section-gap-sm: 4rem; /* 64px */
  --hero-pt: 5rem; /* 80px */
  --hero-pb: 4rem; /* 64px */

  /* Breakpoints (use @media) */
  --bp-sm: 480px; /* Small devices */
  --bp-md: 768px; /* Medium devices */
  --bp-lg: 1024px; /* Large devices */
  --bp-xl: 1280px; /* Extra large devices */
  --bp-2xl: 1536px; /* 2X Extra large devices */

  /* Spacing */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem; /* 48px */
  --space-16: 4rem; /* 64px */

  /* Z-index */
  --z-base: 0; /* Base layer for content */
  --z-float: 5; /* Floating elements like tooltips */
  --z-dropdown: 10; /* Dropdown menus and popovers */
  --z-navbar: 20; /* Navbar */
  --z-overlay: 30; /* Overlay elements */
  --z-drawer: 35; /* Drawer menus */
  --z-modal: 40; /* Modal dialogs */
  --z-toast: 50; /* Toast notifications */
  --z-tooltip: 60; /* Tooltips */
  --z-top: 999; /* Always on top */
}

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: var(--text-base);
}

body {
  background: var(--bg);
  color: var(--t3);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--lh-normal);
  display: flex;
  min-height: 100vh;
}

#app {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  background-color: var(--bg);
}

main {
  min-height: 300vh;
  width: 100%;
  margin: 0 auto;
}

section {
  padding: var(--section-padding);
  position: relative;
  width: 100%;
}

.btn {
  font-family: var(--font-body);
  font-weight: var(--fw-medium);
  font-size: var(--text-sm);
  padding: var(--space-2) var(--space-4);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
  white-space: nowrap;
  border-radius: var(--radius-lg);
  transition:
    opacity var(--ease),
    background var(--ease),
    transform 0.1s;
}

.btn-disabled {
  opacity: var(--opacity-disabled);
  cursor: not-allowed;
  pointer-events: none;
}

.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  align-items: center;
  margin-bottom: var(--space-3);
}

.btn-icon-only {
  width: var(--h-btn);
  height: var(--h-btn);
  padding: 0;
  justify-content: center;
  background: var(--muted);
  border: var(--border-thin) solid var(--muted);
  color: var(--t4);
}

.btn-primary {
  background: var(--highlight);
  color: var(--t1);
}

.btn-primary:hover {
  background: var(--highlight-hover);
  opacity: var(--opacity-hover);
}

.btn-secondary {
  background: var(--accent);
  color: var(--t2);
}

.btn-secondary:hover {
  background: #264d7a;
  opacity: var(--opacity-hover);
}

.btn-outline {
  background: transparent;
  color: var(--t4);
  border: var(--border-thin) solid var(--muted);
}

.btn-outline:hover {
  background: var(--muted);
  opacity: var(--opacity-hover);
}

.btn-ghost {
  background: transparent;
  color: var(--t5);
}

.btn-ghost:hover {
  background: var(--muted);
  color: var(--t2);
  opacity: var(--opacity-hover);
}

.btn-danger {
  background: rgba(239, 68, 68, 0.12);
  color: #fca5a5;
  border: var(--border-thin) solid rgba(239, 68, 68, 0.25);
}

.btn-danger:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #fca5a5;
  opacity: var(--opacity-hover);
  border: var(--border-thin) solid rgba(239, 68, 68, 0.25);
}

.btn-xs {
  font-size: var(--text-xs);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
}

.btn-sm {
  font-size: var(--text-sm);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-sm);
}

.btn-md {
  font-size: var(--text-base);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
}

.btn-lg {
  font-size: var(--text-lg);
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius-lg);
}

.btn-xl {
  font-size: var(--text-xl);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-xl);
}
</style>
