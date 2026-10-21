# Team Stock Connect — Self-Contained About Us Package

This folder (`about us/`) is a **completely self-contained, independent package** containing the full **About Us** page for **Stock Connect**.

---

## 📁 Package Contents

```
about us/
│
├── index.html          # Complete standalone HTML page (ready for direct web hosting/Virtualmin)
├── about.blade.php     # Ready-to-use Laravel Blade template
├── css/
│   └── about.css       # Complete self-contained CSS stylesheet (Stock Connect design system)
├── js/
│   └── about.js        # Self-contained JavaScript (Animations, Lightbox, Counters, Drawer)
├── pics/               # All 7 Team Photographs
│   ├── 001.jpeg        # Classroom coding teamwork shot
│   ├── 002.jpeg        # Focused side-profile laptop shot
│   ├── 003.jpeg        # Rear overhead classroom workspace shot
│   ├── 004.jpeg        # Active collaboration & planning shot
│   ├── 005.jpeg        # Over-the-shoulder discussion shot
│   ├── 006.jpeg        # Workshop classroom ambience shot
│   └── 007.jpeg        # Official 8-person Team Stock Connect group portrait
└── README.md           # Deployment & Integration Documentation
```

---

## 🚀 How to Deploy / Integrate

### Option 1: Direct Web Hosting / Virtualmin Deployment (Static Package)
Simply upload or copy the entire `about us/` directory to your web server root or Virtualmin directory.  
Accessing `about us/index.html` (or `yourdomain.com/about us/`) will serve the full About Us page immediately with zero external setup needed!

### Option 2: Integration Into Stock Connect Laravel App
To integrate this page directly into your existing Laravel routes:

1. **Move Assets to Public Folder:**
   Copy `about us/css`, `about us/js`, and `about us/pics` into your Laravel `public/` directory (or keep the `public/about us/` folder structure).

2. **Copy Blade Template:**
   Move `about us/about.blade.php` to `resources/views/customer/about.blade.php`.

3. **Add Web Route:**
   In `routes/web.php`, define:
   ```php
   Route::get('/about', function () {
       return view('customer.about');
   })->name('about');
   ```

---

## ✨ Features Included

1. **Hero Banner:** "Meet Team Stock Connect" with group portrait visual and floating highlights.
2. **About Our Team & About Stock Connect:** Dual structural sections explaining SIWES student collaboration and the platform's core objective (connecting buyers with livestock companies).
3. **Mission & Vision Cards:** Highlighted dual cards.
4. **Our Features:** 5 feature cards (Marketplace, Easy Purchasing, Distribution, Product Info, Convenient Access).
5. **Meet Our Team Grid:** All 18 student team members organized under 4 core departments (Leadership & Admin, Technical & Product, Product Marketing, Media) with roles.
6. **Our Journey Timeline:** Step-by-step SIWES process from research to launch.
7. **Photo Gallery & Interactive Lightbox Modal:** Full gallery showcasing all 7 photos with zoom icon and lightbox popup.
8. **What We Learned & Core Values:** Interactive pill badges and 5 value cards.
9. **Animated Counters & Scroll Reveals:** Uses standard IntersectionObserver and CSS transitions.
10. **Fully Responsive:** Smooth layout transitions across Desktop, Laptop, Tablet, and Mobile devices.
