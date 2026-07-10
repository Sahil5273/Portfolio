# Sahil Kumar — Portfolio

Personal portfolio for **Sahil Kumar**, AI/ML Engineer & Full-Stack Developer.

**Live site:** https://sahil-portfolio-76e8d.web.app

**Stack:** React 19 · Vite · Tailwind CSS · Framer Motion · Firebase Hosting

---

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5000

**Production build (optional local check):**

```bash
npm run build
npm run preview
```

---

## Project structure

```
src/
├── components/
│   ├── about/           # About page travel map
│   ├── background/      # Mesh background effects
│   ├── cards/           # Portfolio cards & expanded overlay
│   ├── certificates/    # Certificate card & stat components
│   ├── expanded/        # Full-screen section views (About, Projects, etc.)
│   ├── layout/          # Navbar, TabletGrid, MobileCarousel
│   ├── search/          # Search modal
│   ├── sections/        # Homepage sections (certificates preview, case studies)
│   └── ui/              # Shared UI (CertificateLightbox)
├── context/             # App router context
├── data/                # All editable content (see below)
├── hooks/               # Custom React hooks
└── pages/               # HomePage, AboutPage, CertificatesPage

public/
├── certificates/        # Certificate images (.jpg / .png)
├── images/              # About page photos and other static images
├── india.geojson        # India map boundary used on About page
├── resume.pdf           # Downloadable resume PDF
└── favicon.svg
```

---

## How to update content

All text and portfolio data lives in `src/data/`. **You do not need to touch component files** for most updates.

### Personal info (name, bio, social links)

Edit **`src/data/developer.js`**

```js
export const DEVELOPER = {
  name: 'Sahil Kumar',
  bio: '...',
  social: {
    github: 'https://github.com/...',
    linkedin: 'https://...',
  },
}
```

### Add or edit a project

Edit **`src/data/projects.js`**

```js
{
  id: 5,
  title: 'My New Project',
  description: 'What it does...',
  tech: ['Python', 'React'],
  live: 'https://demo-url.com',   // or null if no live demo
  github: 'https://github.com/...',
  image: 'https://images.unsplash.com/...',  // or /images/my-project.jpg
}
```

### Add or edit a certificate

1. Add the certificate image to **`public/certificates/`**  
   Use kebab-case, e.g. `my-new-cert.jpg`

2. Add an entry in **`src/data/certificates.js`**

```js
{
  id: 'my-new-cert',
  title: 'Certificate Title',
  issuer: 'Microsoft',
  subtitle: 'Earned Jan 2026',
  image: '/certificates/my-new-cert.jpg',
  accent: '#0078D4',
  year: '2026',
  type: 'certification',
  tier: 'professional',
  categories: ['cloud-ai'],
  verifyUrl: 'https://...',  // optional
  description: 'Short description for the lightbox.',
}
```

**Categories** control filtering on `/certificates`:
- `featured` — shown on homepage certificate section
- `cloud-ai`, `ibm`, `specialized`, `achievement`

**Achievements card** is driven from `src/data/achievements.js` (links to certificate IDs).  
**Resume certifications** are driven from `src/data/resume.js`.

### Skills

Edit **`src/data/skills.js`** — grouped skill categories with proficiency levels.

### Resume PDF

Replace **`public/resume.pdf`** with your latest PDF. The site links to `/resume.pdf` for download.

### Certificate images

| Location | Use |
|----------|-----|
| `public/certificates/*.jpg` | Certificate showcase images |
| `public/resume.pdf` | Downloadable resume |
| `public/favicon.svg` | Browser tab icon |

Use **JPG or PNG**, max width ~1600px, to keep the site fast.

### About page (`/about`)

The full About page is separate from the homepage **About Me** card overlay. Most updates only need `src/data/aboutStory.js` and files in `public/`.

**Preview locally:** open http://localhost:5000/about after running `npm run dev`

#### 1. Edit About page text

Edit **`src/data/aboutStory.js`**

| Section | What to change |
|---------|----------------|
| `intro` | Opening paragraph under the "About Me" heading |
| `travel.title` / `travel.body` | Travel & Photography heading and description |
| `travel.destinations` | Places shown on the map and in the location chips |
| `pursuits.items` | "Beyond the Screen" cards (Calisthenics, Trekking, etc.) |
| `objectives.body` | Objectives section text |

Example — add a new "Beyond the Screen" card:

```js
{
  id: 'trekking',           // unique id, used for icon mapping
  title: 'Trekking',
  accent: '#6BCB77',        // card icon color
  description: 'Your description here.',
}
```

If you add a new pursuit `id`, map it to an icon in **`src/pages/AboutPage.jsx`** inside `PURSUIT_ICONS` (uses Tabler icons).

#### 2. Add or edit a travel destination on the map

In **`src/data/aboutStory.js`**, add an entry to `travel.destinations`:

```js
{
  name: 'Goa',
  note: 'Beach getaway',   // shown in tooltip / chip hover
  lat: 15.299,             // latitude
  lng: 74.124,             // longitude
}
```

Get coordinates from [Google Maps](https://maps.google.com) (right-click a place → coordinates) or OpenStreetMap.

The destination count in the **Show Map (N places)** button updates automatically.

#### 3. Change the About page photo

1. Add your image to **`public/images/`** (e.g. `public/images/about-forest.png`)
2. In **`src/pages/AboutPage.jsx`**, update the `src` on the hero `<img>`:

```jsx
<img
  src="/images/about-forest.png"
  alt="Sahil Kumar in a forest"
  className="aspect-[3/4] w-full object-cover"
/>
```

Use a portrait photo (~3:4 ratio) for best layout.

#### 4. Map behavior and styling

| File | Purpose |
|------|---------|
| `src/components/about/IndiaTravelMap.jsx` | Map layout, pin colors, tooltip, destination chips |
| `public/india.geojson` | India country outline (Survey of India boundary data) |

**Map is hidden by default.** Users click **Show Map** on the About page to open it.

To adjust map zoom/position, edit these constants in `IndiaTravelMap.jsx`:

```js
const MAP_CENTER = [81, 22]   // [longitude, latitude]
const MAP_SCALE = 980         // higher = more zoomed in
```

To replace the India outline, swap **`public/india.geojson`** with another GeoJSON `FeatureCollection` (single India polygon).

#### 5. Homepage About card → full About page

The homepage **About Me** card still uses the short bio from **`src/data/developer.js`**.

The **Read my full story** button in **`src/components/expanded/AboutExpanded.jsx`** navigates to `/about`.

Routing is handled in:
- `src/hooks/useAppRouter.js` — maps `/about` to the About page
- `src/App.jsx` — lazy-loads `AboutPage`

#### Quick checklist: update the About page

1. Edit text / destinations / pursuits in `src/data/aboutStory.js`
2. Replace photo in `public/images/` and update `AboutPage.jsx` if the filename changes
3. Run `npm run dev` and check http://localhost:5000/about
4. Click **Show Map** to verify new destinations appear correctly
5. Commit and push to deploy

---

## Deploy to Firebase (automated)

Pushing to the **`main`** branch triggers GitHub Actions, which builds and deploys to Firebase Hosting.

### Step-by-step

1. Make your changes locally and test with `npm run dev`

2. Stage all changes:
   ```bash
   git add .
   ```

3. Commit with a clear message:
   ```bash
   git commit -m "Add new Azure certification and update project links"
   ```

4. Push to GitHub:
   ```bash
   git push
   ```

5. GitHub Actions (`.github/workflows/firebase-hosting-merge.yml`) will:
   - Run `npm ci`
   - Run `npm run build`
   - Deploy `dist/` to https://sahil-portfolio-76e8d.web.app

Check the **Actions** tab on GitHub if a deploy fails.

### Pull request previews

Opening a PR runs a preview deploy via `firebase-hosting-pull-request.yml`.

---

## Useful commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |

---

## Links

- **GitHub:** https://github.com/Sahil5273
- **LinkedIn:** https://www.linkedin.com/in/sahil-kumar-7410a728a/
- **Hugging Face:** https://huggingface.co/Sahil5273
