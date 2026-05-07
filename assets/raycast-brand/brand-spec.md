---
name: Raycast Brand Spec
description: Verified Raycast brand assets for the Figma landing-page rebuild (file U6MK0Q6JKFt2u6djUq6BQI, root node 59:1301)
type: project
---

# Raycast · Brand Spec
> Captured: 2026-05-06
> Source: raycast.com/ live HTML, Figma design context (12 sections, 1440×15736)
> Asset completeness: Logos extracted ✓ · Brand color verified ✓ · Fonts approximated (Inter)

## 🎯 Core assets (first class)

### Logo
- Burst icon (48×48, single-color):  `assets/raycast-brand/logo-icon.svg` — fill `#FF6363`
- Full wordmark (93×24): `assets/raycast-brand/logo-wordmark.svg` — burst `#FF6363` + text `#E6E6E6`
- Public copy for the Vite app: `public/raycast/logo-icon.svg`, `public/raycast/logo-wordmark.svg`
- Usage: full wordmark in nav, icon-only in favicon / footer corner. Never recolour, never stroke.

### Product/UI screenshots
- The Figma uses Raycast's macOS app inside dark "Mac monitor" frames in 4 sections (Hero, Clipboard, AI/Pro, What Else). These are illustrative mockups, not real screenshots. Re-implementing them as DOM gives crisper text and hover-friendly behaviour vs raster images.
- Real Raycast UI reference (for fidelity check): https://raycast.com/

## 🎨 Supporting tokens

### Color palette (verified from raycast.com home + Figma `Clipboard` mock)
- Brand red (Primary):  `#FF6363`  — used for highlights, accents, hero brushstroke, focused row
- Brand red (Soft):     `#ECA5A7`  — secondary brushstroke
- Bright text / surface white: `#E6E6E6`, `#FFFFFF`
- Body text grey:        `#A1A1A1` (subtitle, label)
- Muted text:            `#6E6E6E` (caption, version line)
- Page background:       `#000000` (true black)
- Surface elev 1 (cards / mockups): `#0E0E0E` to `#141414` with subtle border `rgba(255,255,255,0.06)`
- Inline label colors (Clipboard mock palette): `#FF6363` red · `#59D499` green · `#56C2FF` blue · `#FFC531` yellow

### Typography stack
- Display + Body: `Inter` (Google Fonts) — close approximation to Raycast's licensed TWK Lausanne. Weights used: 400, 500, 600, 700.
- Mono (version strings, code inside mockups): `JetBrains Mono` (already preconnected for ReboundX, reused).

### Signature details (worth a 120% pass)
- Diagonal "brushstroke" hero canvas — multiple red angled streaks with grain/blur (CSS `filter: blur` + repeated `linear-gradient`)
- Centered floating navbar with rounded pill, slight backdrop blur
- Apple-icon Download button (white bg, dark text,  icon)
- Watermark "Raycast" wordmark behind footer (huge, opacity ~0.06)
- Each macOS-style mockup has fake menu bar (Apple/Finder/File…) + tray icons + clock

### Forbidden / off-brand
- No purple gradients (only used contextually inside Snippets card with desaturated cool-blue)
- No emoji in nav or CTAs
- No drop shadows on flat UI elements (only on the 3D mockup frames)
- No alternate accents — single brand red only

### Vibe keywords
- Calm · precise · keyboard-driven · editorial dark · "tool for power users"
