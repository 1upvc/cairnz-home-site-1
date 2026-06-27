# Babels

Landing page for [cairnz.com](https://cairnz.com) — Cardano staking, blockchain data, and crypto resources.

---

## Stack

| | |
|---|---|
| Framework | [Gatsby 5](https://www.gatsbyjs.com/) |
| UI | React 18, SCSS (HTML5 UP Dimension theme) |
| Hosting | [Netlify](https://www.netlify.com/) |
| Node | ≥ 20 |

**Key dependencies**

| Package | Purpose |
|---|---|
| `gatsby-plugin-image` | Optimized image processing |
| `gatsby-plugin-sharp` | Image transformation |
| `gatsby-plugin-manifest` | PWA manifest |
| `gatsby-plugin-offline` | Service worker / offline support |
| `gatsby-plugin-sitemap` | Auto-generated sitemap |
| `gatsby-plugin-sass` | SCSS compilation (Dart Sass) |
| `gatsby-plugin-netlify` | Netlify headers + redirects |
| `gatsby-plugin-gdpr-cookies` | Cookie consent + analytics |
| `react-cookie-consent` | Cookie banner UI |
| `@react-icons/all-files` | Icon library |

---

## Local development

```bash
npm install
npm run develop          # starts at http://localhost:8000
npm run develop -- --port 5969   # custom port
```

Production build:

```bash
npm run build
```

---

## Key files

| File | Purpose |
|---|---|
| `gatsby-config.js` | Site metadata, plugins, analytics IDs |
| `netlify.toml` | Build config, Node version, security headers |
| `src/pages/index.js` | Homepage (article modal layout) |
| `src/components/Main.js` | Article content (About, Stake, Lab, Contact) |
| `src/components/Header.js` | Site header and nav |
| `src/components/Footer.js` | Footer with copyright |
| `src/components/layout.js` | Shared layout wrapper + cookie consent |
| `src/assets/scss/` | Theme styles |

---

## Content updates

**Social links** — edit `src/components/Main.js`, find `href="#"` in the icons section and replace with real URLs.

**Analytics IDs** — edit `gatsby-config.js`, fill in the `trackingId` fields under `gatsby-plugin-gdpr-cookies`.

**Stake pool info** — edit the `#work` article in `src/components/Main.js`.

**Images** — replace files in `static/assets/` (`pic01.jpg`, `pic02.jpg`, `pic03.jpg`, `bg.jpg`).

---

## Deployment

Deploys automatically via Netlify on push to `master`. Node 20, Yarn install.

---

## License

Copyright &copy; 2026 Arjun G. Raman. All rights reserved. See [LICENSE](./LICENSE).
