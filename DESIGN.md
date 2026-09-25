---
name: Spencer Hadlock Portfolio
description: Light, simple, homebrew engineering portfolio — system sans-serif, white surfaces, one blue accent.
colors:
  ink: "#000000"
  muted: "#1a1a1a"
  faint: "#333333"
  line: "#e5e5e5"
  bg: "#ffffff"
  panel: "#ffffff"
  accent: "#1d5fd6"
  accent-dark: "#14459e"
  accent-wash: "rgba(29,95,214,0.06)"
  accent-wash-strong: "rgba(29,95,214,0.08)"
  accent-border: "rgba(29,95,214,0.2)"
  accent-border-soft: "rgba(29,95,214,0.25)"
  footer-online: "#4ade80"
  shadow: "rgba(0,0,0,0.06)"
typography:
  fontStack: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
  hero:
    fontFamily: "{typography.fontStack}"
    fontSize: "3.25rem"
    fontSizeMobile: "2.4rem"
    fontWeight: 800
    lineHeight: 1.1
  headline:
    fontFamily: "{typography.fontStack}"
    fontSize: "2rem"
    fontSizeMobile: "1.6rem"
    fontWeight: 700
    lineHeight: 1.2
  pageTitle:
    fontFamily: "{typography.fontStack}"
    fontSize: "2.5rem"
    fontSizeMobile: "2rem"
    fontWeight: 800
    lineHeight: 1.1
  title:
    fontFamily: "{typography.fontStack}"
    fontSize: "1.15rem"
    fontWeight: 700
  meta:
    fontFamily: "{typography.fontStack}"
    fontSize: "0.8rem"
    fontWeight: 600
  body:
    fontFamily: "{typography.fontStack}"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  bodySmall:
    fontFamily: "{typography.fontStack}"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "{typography.fontStack}"
    fontSize: "0.75rem"
    fontSizeAlt: "0.82rem"
    fontWeight: 400
  tag:
    fontFamily: "{typography.fontStack}"
    fontSize: "0.75rem"
    fontWeight: 400
rounded:
  sm: "8px"
  md: "10px"
  lg: "12px"
  pill: "999px"
spacing:
  sm: "0.5rem"
  md: "1.25rem"
  lg: "1.75rem"
  xl: "3rem"
  xxl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-dark}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    borderColor: "{colors.line}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.6rem"
  button-ghost-hover:
    borderColor: "{colors.ink}"
  card:
    backgroundColor: "#ffffff"
    borderColor: "{colors.line}"
    rounded: "{rounded.md}"
    padding: "1.75rem"
  tag:
    backgroundColor: "{colors.panel}"
    borderColor: "{colors.line}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.7rem"
---

# Design System: Spencer Hadlock Portfolio

## Overview

**Creative North Star: "Homebrew Clean"**

The site reads like a well-kept single-page brochure: white canvas, generous whitespace, plain system type, and one restrained blue accent used only where it earns attention — the logo dot, a stat number, a hovered link, a status badge. Structure carries the design instead of ornament: a sticky nav, a centered hero, a stack of bordered sections, and simple rounded cards for anything repeating (education, experience, projects, skills). The one deliberate exception is Interests: card-free photo vignettes (`.vignette`) that alternate image left/right with a slight scrapbook tilt, written in a personal, non-technical voice.

This replaced an earlier dark "Signal Path" monospace theme. The redesign intentionally trades the terminal/schematic aesthetic for something plainer and easier to scan — content-forward rather than atmosphere-forward.

**Key Characteristics:**
- White background, near-black ink text, a single blue accent — no second hue.
- System sans-serif everywhere; no custom webfonts to load.
- Soft-rounded cards and pill tags on hairline borders, gentle shadow on hover only.
- One repeating layout primitive: bordered/rounded card with title, meta line, body copy, tag row.

## Colors

A near-monochrome light palette with exactly one accent color.

### Primary
- **Accent Blue** (`#1D5FD6`): the one accent. Used for the hero badge, stat values, card meta lines, accented tags, hover states on nav/links/cards, and the "open to work" value. Darkens to `#14459E` on button hover.

### Neutral
- **Ink** (`#000000`): headings, footer background, primary text.
- **Muted** (`#1A1A1A`): body copy — near-black, per the site's "white background, black text" requirement.
- **Faint** (`#333333`): secondary/label text (stat labels, fact keys).
- **Line** (`#E5E5E5`): all hairline borders and dividers.
- **Background** (`#FFFFFF`): page, card, and panel background — kept uniformly white rather than tinted, so the whole page reads as plain white/black.
- **Shadow** (`rgba(0,0,0,0.06)`): the sole non-palette value, used only for the low-opacity card-hover lift shadow.

### Named Rules
**The One Accent Rule.** Blue is the only accent color in the system. Anything needing emphasis reuses this blue (or its wash/border tints) rather than introducing a new hue.

## Typography

**Font:** System UI sans-serif stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...`) — no webfont loads, by design, to keep the page simple and fast.

### Hierarchy
- **Hero** (800, `3.25rem`, mobile `2.4rem`, line-height 1.1): the name in the main hero.
- **Page title** (800, `2.5rem`, mobile `2rem`, line-height 1.1): `<h1>` on secondary pages (`.page-hero`, e.g. `projects.html`) — a step down from the full hero, a step up from a section headline.
- **Headline** (700, `2rem`, mobile `1.6rem`): section `<h2>` titles.
- **Title** (700, `1.15rem`): card titles (project/school/role names).
- **Meta** (600, `0.8rem`–`0.82rem`, accent blue or faint): the line under a card title (dates, category, employer), plus small nav-adjacent labels (back-link, card-link, project-jump pills, result-label).
- **Body** (400, `1rem`, line-height 1.75): section intro/about paragraphs.
- **Body small** (400, `0.9rem`, line-height 1.6–1.7): nav links, buttons, card paragraph copy, fact rows, contact links, project detail-list items.
- **Tag** (400, `0.75rem`): pill labels for skills/tech/tools.

## Layout

Single page, anchor-linked sections. Hero is centered and full-width with a badge, name, one-line pitch, three buttons, and a stat row below a hairline divider. Below the hero, a `max-width: 1200px` container holds stacked `.section` blocks, each separated by a top hairline border and generous top padding (`4rem`, collapsing to `3rem` under 900px).

Repeating content (education, experience, projects, skills, interests) always uses `.card-grid` → `.card` (`repeat(auto-fit, minmax(300px, 1fr))`), never a custom one-off layout — this is what keeps the page feeling "simple" rather than art-directed per section.

## Elevation & Depth

Mostly flat. Cards sit on hairline borders at rest; on hover they lift 3px with a soft, low-opacity shadow (`0 10px 24px rgba(0,0,0,0.06)`). The hero badge, tags, and fact-card use flat fills/tints instead of shadow. No glow effects (that was the old dark theme's language).

## Shapes

Soft-rounded throughout: `8px` on buttons, `10px` on cards/fact-card, `12px` on the contact panel, full pill (`999px`) on tags and the hero badge. This is the clearest visual break from the old zero-radius dark theme and is a deliberate part of the "homebrew/approachable" read.

## Components

### Buttons
- **Shape:** rounded (`8px`), 1px border.
- **Primary (`.btn-primary`):** solid accent blue fill, white text; hover darkens fill.
- **Ghost (`.btn`):** transparent, `line` border, ink text; hover darkens border to ink.

### Cards
- **Corner Style:** `10px` radius.
- **Background:** white, `line` border.
- **Shadow Strategy:** none at rest; soft shadow + 3px lift on hover only.
- **Internal Padding:** `1.75rem`.
- **Anatomy:** title → optional accent meta line → body copy → tag row.

### Tags
Pill-shaped, `panel` background with `line` border by default; an accent variant (`.tag-accent`) exists for the 2–3 most relevant tags on experience/project cards (tinted blue background + border).

### Fact Card (About section)
`.fact-card` is the signature "structured facts" component: label/value rows (`.fact-row`) with a `faint` left label and bold right-aligned value, separated by hairline borders — reused from the old schematic-row idea but softened (panel background, rounded corners) to match the new theme.

### Navigation
- Sticky, blurred white bar with a bottom hairline.
- Links are `muted` at rest, accent blue on hover, no underline.
- Mobile: hamburger reveals a clipped-in dropdown, white background, hairline divider per link.

### Avatar (hero photo)
`.hero-photo`: a 96px circular headshot centered above the hero badge — `object-fit: cover`, thin white border plus a 1px hairline ring (`box-shadow: 0 0 0 1px var(--line)`) instead of a heavy frame, keeping it consistent with the rest of the flat, hairline-bordered system.

### Sub-page Hero (`.page-hero`)
A lighter version of the main hero for secondary pages like `projects.html`: centered **page title** type (`2.5rem`, see Hierarchy) + one-line intro, no stats/buttons, plus a `.back-link` above the title and an optional `.project-jump` pill row below it for in-page navigation to each detail section.

### Project Detail (`projects.html`)
Each project is an `<article class="section project-detail">` with a `.sec-eyebrow` (small accent category label, same style as `.card-meta`) above the `<h2>`, full-width body paragraphs, an optional `.result-badge` (a headline metric like "~70 kbps" or "~97%", using the same `2rem` accent-number style as the homepage's `.stat-val` so "big number" treatment stays consistent site-wide), and a two-column `.detail-grid` pairing a tag-row "Technical Areas" column with a bulleted `.detail-list` "Key Challenges" column. Collapses to one column under 900px.

## Do's and Don'ts

### Do:
- **Do** keep accent blue reserved for meaning (badges, meta lines, hover, emphasis) — per the One Accent Rule.
- **Do** use `.card-grid` / `.card` for any new repeating content instead of a bespoke layout.
- **Do** keep corners rounded (8–12px, pill for tags/badges) — this is intentional and central to the "clean homebrew" read.
- **Do** rely on the system font stack; don't reintroduce custom webfonts without a reason.

### Don't:
- **Don't** introduce a second accent hue.
- **Don't** add glow effects or zero-radius hard edges — that belonged to the previous dark theme.
- **Don't** alter locked content facts (résumé data, project descriptions, dates, employers) as part of visual work — see PRODUCT.md.
