# AURA SKY — Multipurpose Luxury Rooftop Restaurant & Lounge Bar HTML Template

**AURA SKY** is an ultra-premium, modern, responsive HTML5 template designed specifically for high-end rooftop restaurants, sky lounges, sunset cocktail bars, and nightlife venues. Built with Tailwind CSS, clean semantic HTML5, and vanilla JavaScript, it comes complete with both a **Full Front-End Website**, an **Interactive Guest VIP Portal Dashboard**, and a **Comprehensive Admin Operations Dashboard**.

Ready for sale on marketplaces like **ThemeForest**, **TemplateMonster**, or immediate client production deployment.

---

## 🌟 Key Features

- **2 Distinct Home Page Variations**:
  - `index.html`: **Home 1 – Grand Skyline Dining & Restaurant** (Ambient luxury dining, 360° panoramic views, chef highlights, signature dishes, table booking widget).
  - `index-2.html`: **Home 2 – Sunset Lounge, Craft Cocktails & Nightclub** (High-energy DJ line-up ticker, neon golden aesthetic, molecular mixology lab, VIP bottle service spotlight).
- **Guest VIP Loyalty & Booking Dashboard** (`dashboard-guest.html`):
  - Track Aura loyalty points and membership tiers (Obsidian VIP).
  - Manage upcoming table reservations (with live cancel/modify actions).
  - Access Event RSVP tickets with digital QR code pass simulation.
  - Redeem points for tableside complimentary cocktails and caviar perks.
- **Admin Operations Command Center** (`dashboard-admin.html`):
  - Live revenue analytics & zone occupancy charts powered by **Chart.js**.
  - **Interactive 54th Floor Seating Map**: Clickable table nodes (Available, Occupied, VIP Reserved) with live table inspector, status toggles, and bill printing.
  - Reservation management table with 1-click **Approve** and **Cancel** actions with toast feedback.
  - Concierge inquiries inbox and VIP guest lifetime spending registry.
- **Strict User Navigation Architecture**:
  - **Home** (Dropdown: Home 1 & Home 2)
  - **About** (No dropdown)
  - **Menu** (No dropdown)
  - **Events & Live Music** (No dropdown)
  - **Gallery** (No dropdown)
  - **Blog** (No dropdown)
  - **Contact** (No dropdown)
  - **Dashboard** (No dropdown)
  - **Theme Toggle Icon** (Dark ⇄ Light mode with persistent `localStorage`)
  - **RTL Toggle Icon** (LTR ⇄ RTL with Arabic/Hebrew direction layout support)
  - **Login Portal CTA** (VIP Guest authentication portal)
- **Universal 3-Step Table Reservation Modal**:
  - Step 1: Party size, date picker, time slot selection.
  - Step 2: Seating zone (Terrace Edge, Penthouse VIP Cabana, Lounge Bar, Indoor Dining).
  - Step 3: Contact info, occasion, instant confirmation toast alert.
- **Live Rooftop Lounge Ambient Sound Synthesizer**:
  - Built-in Web Audio API generator producing warm, soothing, binaural rooftop lounge chords on click.
- **Live Working Countdown Timer** on `coming-soon.html`.
- **Interactive Lightbox Modal** on `gallery.html`.
- **Category Filter Tabs** on `menu.html` and `gallery.html`.
- **FAQ Accordion** with smooth transitions on `service-details.html`.
- **VIP Bottle Service & Minimum Spend Calculator** on `pricing.html`.
- **1-Click Demo Login Switcher** on `login.html` (instant Guest vs Admin demo).

---

## 📁 Template Structure & Included Pages

```text
rooftop & lounge/
├── index.html              # Home 1 - Grand Skyline Dining & Restaurant
├── index-2.html            # Home 2 - Sunset Lounge, Craft Cocktails & DJ Club
├── about.html              # About Us - Story, Philosophy, Timeline & Team
├── menu.html               # Culinary & Bar Menu - Filterable categories & PDF modal
├── events.html             # Events & Live Music - DJ Lineups, Jazz Nights, RSVPs
├── gallery.html            # Skyline Photo Gallery with Lightbox Viewer
├── services.html           # VIP Services Grid (Cabanas, Dinners, Buyouts, Masterclasses)
├── service-details.html    # In-Depth Service Details, FAQs & Pricing Table
├── pricing.html            # VIP Table Packages, Bottle Service & Cost Estimator
├── blog.html               # Skyline Journal (Searchable & Filterable Articles)
├── blog-details.html       # Full Blog Post with Sidebar, Comments & Author Bio
├── contact.html            # Contact, Map, Hours, Valet Parking Protocol & Form
├── dashboard-guest.html    # Guest VIP Dashboard (Points, Bookings, Tickets, Perks)
├── dashboard-admin.html    # Admin Dashboard (Analytics, Floor Map, Orders, Users)
├── login.html              # VIP Guest Login Portal (with 1-click demo switcher)
├── register.html           # VIP Guest Card Registration
├── 404.html                # Custom "Above The Clouds" 404 Error Page
├── coming-soon.html        # Coming Soon / Maintenance with live Countdown Timer
├── assets/
│   ├── css/
│   │   └── style.css       # Custom design system, luxury gradients, RTL overrides
│   ├── js/
│   │   ├── main.js         # Theme toggle, RTL toggle, modals, filters, audio
│   │   └── dashboard.js    # Chart.js graphs, floor plan interactivity, toasts
│   └── images/             # Image directory
└── README.md               # Documentation & Guide
```

---

## 🎨 Design Principles & Customization

### Typography
- **Display Headings**: `'Cinzel', serif`
- **Serif Headings**: `'Playfair Display', Georgia, serif`
- **Body & Interface**: `'Plus Jakarta Sans', system-ui, sans-serif`
- **RTL Support**: `'Cairo', 'Plus Jakarta Sans', system-ui, sans-serif`

### Color Palette
- **Luxury Gold Primary**: `#D4AF37`
- **Gold Light**: `#F3E5AB`
- **Deep Midnight Background**: `#07090E`
- **Dark Glass Surface**: `rgba(15, 20, 32, 0.75)` with `backdrop-filter: blur(16px)`
- **Day/Light Mode Background**: `#F8F9FA` with clean ivory cards

### Switching Modes Programmatically
- **Theme**: Toggled by clicking `.theme-toggle-btn`. Stored in `localStorage.getItem('aura-theme')`.
- **RTL**: Toggled by clicking `.rtl-toggle-btn`. Sets `dir="rtl"` on `<html>` and flips directional icons.

---

## 🚀 How to Run & Deploy

1. Unzip the template folder.
2. Double-click any `.html` file (e.g., `index.html`) to open directly in any modern web browser (Chrome, Edge, Safari, Firefox).
3. No server build step is required! All Tailwind utilities, Chart.js, Font Awesome icons, and Google Fonts are loaded via high-speed CDNs.
4. For hosting on platforms like Netlify, Vercel, GitHub Pages, Apache, or NGINX, simply upload the root directory as static assets.

---

## 📄 License & Credits
- **Icons**: Font Awesome 6.5.1
- **Fonts**: Google Fonts (Cinzel, Playfair Display, Plus Jakarta Sans, Cairo)
- **Charts**: Chart.js 4.x
- **Imagery**: Royalty-free Unsplash photography
- **Crafted with Excellence for ThemeForest & TemplateMonster**.

