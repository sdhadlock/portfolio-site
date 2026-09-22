---
name: Spencer Hadlock Portfolio
description: Light, simple, homebrew engineering portfolio — system sans-serif, white surfaces, one blue accent.
colors:
  ink: "#1a1a1a"
  muted: "#555555"
  faint: "#888888"
  line: "#e5e5e5"
  bg: "#ffffff"
  panel: "#f7f8fa"
  accent: "#1d5fd6"
  accent-dark: "#14459e"
  accent-wash: "rgba(29,95,214,0.06)"
  accent-wash-strong: "rgba(29,95,214,0.08)"
  accent-border: "rgba(29,95,214,0.2)"
  accent-border-soft: "rgba(29,95,214,0.25)"
  footer-online: "#4ade80"
typography:
  hero:
    fontFamily: "system-ui sans-serif stack"
    fontSize: "3.25rem"
    fontWeight: 800
    lineHeight: 1.1
  headline:
    fontFamily: "system-ui sans-serif stack"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "system-ui sans-serif stack"
    fontSize: "1.15rem"
    fontWeight: 700
  meta:
    fontFamily: "system-ui sans-serif stack"
    fontSize: "0.8rem"
    fontWeight: 600
  body:
    fontFamily: "system-ui sans-serif stack"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  bodySmall:
    fontFamily: "system-ui sans-serif stack"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.7
  tag:
    fontFamily: "system-ui sans-serif stack"
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

The site reads like a well-kept single-page brochure: white canvas, generous whitespace, plain system type, and one restrained blue accent used only where it earns attention — the logo dot, a stat number, a hovered link, a status badge. Structure carries the design instead of ornament: a sticky nav, a centered hero, a stack of bordered sections, and simple rounded cards for anything repeating (education, experience, projects, skills, interests).

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
- **Ink** (`#1A1A1A`): primary text, headings, footer background.
- **Muted** (`#555555`): body copy.
- **Faint** (`#888888`): secondary/label text (stat labels, fact keys).
- **Line** (`#E5E5E5`): all hairline borders and dividers.
- **Background** (`#FFFFFF`): page and card background.
- **Panel** (`#F7F8FA`): subtle fill for the about fact-card, contact section, and default tags.

### Named Rules
**The One Accent Rule.** Blue is the only accent color in the system. Anything needing emphasis reuses this blue (or its wash/border tints) rather than introducing a new hue.

## Typography

**Font:** System UI sans-serif stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...`) — no webfont loads, by design, to keep the page simple and fast.

### Hierarchy
- **Hero** (800, `3.25rem`, line-height 1.1): the name in the hero.
- **Headline** (700, `2rem`): section `<h2>` titles.
- **Title** (700, `1.15rem`): card titles (project/school/role names).
- **Meta** (600, `0.8rem`, accent blue): the line under a card title (dates, category, employer).
- **Body** (400, `1rem`, line-height 1.75): section intro/about paragraphs.
- **Body small** (400, `0.92rem`, line-height 1.7): card paragraph copy.
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
