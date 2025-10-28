# Sole Theory - Premium Streetwear Sneakers

## Overview
Sole Theory is a modern e-commerce website for premium streetwear sneakers and apparel. The site features a sleek black and red design with smooth animations, a shopping cart system, product search functionality, and a comprehensive product catalog.

**Project Status:** Active  
**Last Updated:** October 28, 2025  
**Type:** Frontend Web Application

## Tech Stack
- **Framework:** Vite (vanilla JavaScript)
- **Languages:** HTML, CSS, JavaScript
- **Styling:** Custom CSS with animations
- **Fonts:** Google Fonts (Archivo, Questrial)

## Project Structure
```
├── index.html          # Main HTML structure
├── main.js            # Product data and cart logic
├── style.css          # Styling and animations
├── public/            # Public assets
│   └── vite.svg
├── IMAGES/            # Product images (sneakers)
├── vite.config.js     # Vite configuration
└── package.json       # Dependencies
```

## Features
1. **Hero Section** - Eye-catching landing with animated title and CTA
2. **Product Catalog** - 30+ sneaker products with hover effects
3. **Shopping Cart** - Sidebar cart with add/remove functionality
4. **Product Search** - Search panel with real-time filtering
5. **Clothing Section** - Streetwear apparel showcase
6. **About Section** - Brand story and values
7. **Contact Form** - Support section
8. **Newsletter** - Email subscription
9. **Mobile Responsive** - Mobile menu and responsive grid

## Key Pages/Sections
- Home/Hero
- Sneakers Collection
- Clothing
- About Us
- Support/Contact

## Development Setup
- Server runs on port 5000 (configured for Replit environment)
- Vite dev server configured to accept all hosts (required for Replit proxy)
- Hot module replacement enabled

## Recent Changes
- **Oct 28, 2025**: Checkout page and clothing section updates
  - Created complete checkout page with customer details form
  - Added order summary with delivery options (Standard R99, Express R199, Overnight R299)
  - Integrated cart with localStorage for persistence across pages
  - Updated clothing section categories:
    * Jackets → Fitted Caps (New Era 59FIFTY from R1,099.95)
    * Tees → Soccer Kits (Football Jerseys from R899.00)
    * Joggers → Tech Fleece (Nike Tech from R1,399.95)
    * Hoodies → Premium Clothing (Essentials, Rhude, Gallery Dept, Palm Angels from R1,999.95)
  - Changed all pricing from USD ($) to ZAR (R)
  - Added checkout navigation from cart
  
- **Oct 28, 2025**: Initial Replit setup
  - Configured Vite for Replit environment (host 0.0.0.0, port 5000)
  - Set up HMR for Replit proxy
  - Created workflow for development server
  - Added .gitignore

## User Preferences
None recorded yet.

## Project Architecture
- **Frontend-only application** - No backend/API
- **Client-side cart** - Shopping cart stored in browser memory
- **Static product data** - Products defined in main.js
- **Image-based catalog** - Local product images in IMAGES folder
