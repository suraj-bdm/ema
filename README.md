# ECAM India - Official Digital Portal

[![Next.js](https://img.shields.io/badge/Next.js-16.4.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)]()

Official Centenary Digital Web Application for the **Electrical Contractors' Association of Maharashtra (ECAM)**, established in 1925. This platform serves as the premier apex digital gateway connecting over 3,000+ licensed electrical contractors, engineers, traders, manufacturers, and institutional partners across India and Maharashtra.

---

## 🏛️ About ECAM

Founded in 1925 with its headquarters at **The Stock Exchange Towers, Dalal Street, Fort, Mumbai**, ECAM is India’s foremost pioneer association representing the electrical contracting community. ECAM works in direct liaison with state authorities, MSEDCL, PWD, CEIG, the Bureau of Indian Standards (BIS), and IEEMA to uphold electrical safety, statutory licensing, high workmanship standards, and trade advocacy.

---

## 🌟 Key Features & Highlights

### 1. Executive Top Utility & Brand Header
- **Statutory Organization Header**: Organization branding with high-resolution ECAM centenary crest.
- **Top Utility Strip**: Quick-dial contact links, official correspondence email, member login, and membership action buttons.
- **Interactive Directory Search Bar**: Real-time contractor and electrical product search with role filter dropdowns (*All, Contractors, Engineers, Traders, Consultants*).

### 2. Comprehensive Navigation System
- **Structured Categorized Dropdowns**:
  - **About ECAM**: President's Desk, History & Founders, Policies, Vision & Mission, Past Presidents.
  - **Regions**: 9 official chapters (*Pune, Pimpri Chinchwad, Nashik, Ahilyanagar, Jalgaon, Western Maharashtra, Dhule Nandurbar, Thane, Konkan*).
  - **Committees**: Working Committee, Managing Committee, Leadership perspectives.
  - **Membership**: Certified Member Directory, Online & Printable Application, Member Benefits.
  - **GR & Circulars**: Official government resolutions, PWD licensing norms, MSEDCL technical guidelines.
  - **Magazines**: Indian Electrical Contractor & Trader (IECT) monthly gazette.
  - **Events & Expo**: ECAMEX 2026 Mega Expo, Technical summits, and photo galleries.
  - **CSR / DSR**: Corporate social responsibility and district schedule of rates compliance.
  - **More Links**: Downloadable statutory forms and government tenders.

### 3. Dynamic Real-Time Market Ticker
- Live energy, commodity, and material price indices (Copper, Aluminum, Brent Crude, Solar PV Tariffs, Power Exchange Index) with 24h change indicators.

### 4. Interactive Centenary & Showcase Sections
- **ECAMEX 2026 Showcase**: Premier biennial electrical trade exhibition preview and stall registration.
- **Leadership Perspectives**: President’s Centenary address and organizational milestones.
- **Balanced Strategic Sponsor Grid**: Fixed-ratio advertising partner cards (`242 × 235 px` & `700 × 180 px`) designed with zero image clipping and balanced layout.
- **100 Years Centenary Stats**: Full-width metrics highlighting 100% safety compliance, 3,000+ active members, and founded centenary year 1925.
- **Infinite Sponsor Marquee**: Continuous smooth-scrolling visual brand strip.
- **Newsletter & Circulars Dispatch**: Direct subscription module for official circulars and regulatory alerts.

### 5. Multi-Step Interactive Modals
- **Member Registration Modal**: Multi-stage digital onboarding workflow with firm details, statutory proposers/seconders, and printable membership forms.
- **Contractor Login Modal**: Authenticated gateway for member credentials and directory access.
- **Advertise With Us Modal**: Tiered commercial sponsorship selection (`Top Showcase Ribbon`, `Strategic Sponsor Card`, `Hero Sidebar Banner`, `Continuous Marquee`, `IECT Gazette`).
- **Circular & Event Detail Modal**: Clean modal viewer for full event agenda and official notifications.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16.4.2](https://nextjs.org/) (App Router & Turbopack) |
| **Library** | [React 19.3.0](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Font Family** | Inter & System UI Sans-Serif |
| **Deployment** | Vercel / Node.js Production Server |

---

## 📂 Project Structure

```text
ecamindia/
├── public/
│   └── images/                     # Optimized SVG badges, banners & brand assets
│       ├── advertise-size-242x235.svg
│       ├── advertise-size-700x180.svg
│       ├── ecam-logo.png
│       └── ...
├── src/
│   ├── app/
│   │   ├── api/                    # API route handlers (market ticker data)
│   │   ├── globals.css             # Tailwind v4 theme configuration & animations
│   │   ├── layout.js               # Root HTML metadata & font definitions
│   │   └── page.js                 # Primary single-page portal orchestrator
│   └── components/
│       ├── AboutAndSponsorsSection.jsx # Centenary overview & 6 sponsor card slots
│       ├── AdvertiseBanner.jsx     # Commercial sponsorship CTA ribbons
│       ├── AdvertiseModal.jsx      # Multi-tier sponsorship inquiry modal
│       ├── DirectorySearchBar.jsx  # Exact pill contractor & product search bar
│       ├── EventModal.jsx          # Event & circular detailed viewer modal
│       ├── EventsAndNews.jsx       # ECAMEX 2026 events & official newsfeed
│       ├── Footer.jsx              # 4-column institutional footer
│       ├── HeroSection.jsx         # 100 Years of ECAM & centenary banner carousel
│       ├── JoinMemberModal.jsx     # Statutory member application & printable form
│       ├── LoginModal.jsx          # Member authentication dialog
│       ├── MarketTicker.jsx        # Live market commodity ticker ribbon
│       ├── MembershipBanner.jsx    # Dual membership & advertising callouts
│       ├── Navbar.jsx              # Fixed executive navbar & dropdowns
│       ├── NewsletterSubscribe.jsx # Regulatory newsletter subscription module
│       └── SponsorMarquee.jsx      # Continuous infinite sponsor marquee
├── package.json
└── next.config.mjs
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18.18+** or **Node.js 20+** installed:

```bash
node -v
npm -v
```

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd ecamindia
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Production Build & Deployment

To generate an optimized production bundle:

```bash
# Build the production application
npm run build

# Start the production server
npm run start
```

---

## 🔧 Git Setup & Push Instructions

To push this repository to GitHub, GitLab, or Bitbucket:

```bash
# 1. Initialize git repository
git init

# 2. Add all project files
git add .

# 3. Create initial commit
git commit -m "feat: Initial commit for ECAM India centenary digital portal"

# 4. Set default branch to main
git branch -M main

# 5. Link your remote repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/ecamindia.git

# 6. Push code to remote repository
git push -u origin main
```

---

## 📞 Secretariat & Support

**Electrical Contractors' Association of Maharashtra (ECAM)**  
📍 The Stock Exchange Towers, 1st Basement, Dalal Street, Fort, Mumbai – 400 001  
📞 Phone: `+91 84528 28430` / `022 2272 3668`  
✉️ Email: [ecamindia@gmail.com](mailto:ecamindia@gmail.com)  
🌐 Official Website: [https://ecamindia.org](https://ecamindia.org)

---

© 1925 - 2026 Electrical Contractors' Association of Maharashtra. All rights reserved.
