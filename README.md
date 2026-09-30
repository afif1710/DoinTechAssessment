# ByteSpace — Online Learning Platform

> A pixel-perfect, responsive front-end implementation of the **ByteSpace** educational platform, built from the provided Figma design as part of the **DoinTech Jr. Software Engineer (Frontend) Assessment**.

---

## 🔗 Links

| Resource | URL |
|----------|-----|
| **Live Demo** | _Deployed on Vercel_ |
| **Figma Design** | [ByteSpace New (Figma)](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0) |

---

## ✅ Assessment Checklist

| Requirement | Status |
|-------------|--------|
| Landing page (full design) | ✅ Complete |
| Login page (bonus) | ✅ Complete |
| Signup page (bonus) | ✅ Complete |
| Public GitHub repository | ✅ |
| Proper Git branching + PR | ✅ |
| Clean, well-structured code | ✅ |
| Reusable components | ✅ |
| Vercel deployment | ✅ |

---

## 🖥 Pages Implemented

| Page | File | Description |
|------|------|-------------|
| **Landing Page** | `index.html` | Full homepage with hero section, featured courses, learning paths, testimonials, and CTA |
| **Login** | `login.html` | Split-screen authentication with floating course card |
| **Register** | `register.html` | Sign-up page matching the login layout |
| **Search / Browse** | `search.html` | Course discovery with filters and pagination |
| **Course Detail** | `course-detail.html` | Individual course overview (About tab) |
| **Course Lessons** | `course-lessons.html` | Module list with progress tracking |
| **Course Reviews** | `course-reviews.html` | Ratings breakdown and student reviews |
| **Creator Profile** | `creator-profile.html` | Instructor profile with course grid |
| **404 Error** | `404.html` | Custom error page |

---

## 📁 Project Structure

```
├── index.html                 # Landing page (required)
├── login.html                 # Login page (bonus)
├── register.html              # Signup page (bonus)
├── search.html                # Course browse/search
├── course-detail.html         # Course detail — About tab
├── course-lessons.html        # Course detail — Lessons tab
├── course-reviews.html        # Course detail — Reviews tab
├── creator-profile.html       # Creator profile page
├── 404.html                   # Custom 404 page
├── README.md
├── .gitignore
│
├── css/
│   └── styles.css             # Global design tokens & reusable styles
│   └── home.css               # Landing page styles
│
├── js/
│   └── main.js                # Navigation, scroll effects, interactivity
│
└── assets/
    └── images/                # Course thumbnails, avatars, hero images
```

---

## 🛠 Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Flexbox, Grid, glassmorphism, gradients, inline SVGs
- **Vanilla JavaScript** — Lightweight interactivity (no frameworks)
- **Google Fonts + Fontshare** — Poppins (headings), Satoshi & Clash Display (body/logo)

---

## 🎨 Design Decisions

- **3D Decorative SVGs**: Zigzags, cylinders, cones, and torus shapes are rendered as inline SVGs to match the Figma design's 3D aesthetic without external dependencies.
- **CSS Custom Properties**: All colors, spacing, and typography are managed via CSS variables in `css/styles.css` for easy theming.
- **No Build Tools**: The project is pure HTML/CSS/JS — no bundler, no framework. Open `index.html` and it works.

---

## ⚙️ Local Setup

```bash
# Clone the repository
git clone https://github.com/afif1710/DoinTechAssessment.git

# Open in browser
open index.html
```

No build step required. Simply open `index.html` in any modern browser.

---

## 👤 Author

**Afif Uddin** — [GitHub](https://github.com/afif1710)
