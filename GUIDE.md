# BUNBAY Web Deployment & Development Guide

Welcome! This guide outlines how the BUNBAY landing page is hosted, how it is deployed, and how to run and preview your changes locally.

---

## Hosting & Deployment Architecture

The BUNBAY website is configured with a modern Jamstack setup:

1. **Source Control (GitHub)**:
   - **Repository URL**: [DhruvMehta05/bun-kitchen](https://github.com/DhruvMehta05/bun-kitchen)
   - **Main Branch**: `main`

2. **Hosting Platform (Netlify)**:
   - **Console**: [Netlify Dashboard](https://app.netlify.com)
   - **Deployment Flow**: Netlify is connected to the GitHub repository. Any git push to the `main` branch automatically triggers a build and deploys the updates to production.

3. **Domain & DNS Management**:
   - **Domain**: [bunbay.co.in](https://bunbay.co.in)
   - **Domain Registrar**: Managed via [GoDaddy Domain Portfolio](https://dcc.godaddy.com). DNS nameservers point to Netlify to handle custom domain routing and SSL generation.

---

## How to Run & Build the Site Locally

Ensure you have [Node.js](https://nodejs.org) (v18 or higher) installed on your system.

### 1. Install Dependencies
Run this in the root of the project to install necessary packages (like React and Vite):
```bash
npm install
```

### 2. Run the Development Server
Launch the hot-reloading development server to test changes in real time:
```bash
npm run dev
```
Once started, open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
To test the build process or generate the static distribution bundle:
```bash
npm run build
```
This outputs production-ready HTML, optimized CSS, and compressed assets in the `/dist` directory.

### 4. Preview the Production Build Locally
To verify how the built files behave exactly as they will on Netlify:
```bash
npm run preview
```

---

## Key Files & Assets Map

- **Menu Data** ([src/data/menuData.js](file:///Users/dhruv.me/projects/bun-kitchen/src/data/menuData.js)): Central array of all 24 active items. You can easily adjust pricing, names, descriptions, and tag attributes (such as Spicy or Best Seller) here.
- **Images Directory** ([src/assets/menu/](file:///Users/dhruv.me/projects/bun-kitchen/src/assets/menu)): Houses all 25 high-quality JPEGs used in the menu cards.
- **Interactive Component** ([src/components/MenuHighlights.jsx](file:///Users/dhruv.me/projects/bun-kitchen/src/components/MenuHighlights.jsx)): Manages category tabs, searches, deep-link WhatsApp ordering links, and the image click-to-zoom lightbox modals.
- **Header Navigation** ([src/components/Navbar.jsx](file:///Users/dhruv.me/projects/bun-kitchen/src/components/Navbar.jsx)): Logo rendering and header structural links.
- **Styles Sheet** ([src/index.css](file:///Users/dhruv.me/projects/bun-kitchen/src/index.css)): Contains the core styling tokens, slim navbar constraints, scroll heights, responsive grid columns, mocktail frame contain padding, and zoom overlays.
