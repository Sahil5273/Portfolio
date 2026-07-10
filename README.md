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
└── pages/               # HomePage, CertificatesPage

public/
├── certificates/        # Certificate images (.jpg / .png)
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
