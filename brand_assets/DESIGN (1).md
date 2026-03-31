# Design System Strategy: Precision Workshop

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Technical Atelier."** 

This system moves away from the generic "grease-monkey" automotive aesthetic toward a high-end, editorial experience that mirrors the precision of modern automotive engineering. We treat the interface as a sophisticated diagnostic tool—clean, authoritative, and technologically advanced. 

To break the "template" look, we utilize **Intentional Asymmetry**. Layouts should avoid perfect 50/50 splits; instead, use the 60/40 or 70/30 ratios found in technical blueprints. We lean into the "reassuring" brand pillar by using heavy-weighted typography balanced against expansive negative space, creating a digital environment that feels as sturdy and reliable as a precision-calibrated engine.

---

## 2. Brand Identity & Guidelines

### 2.1 Brand Pillars
The entire design system is built upon four core pillars:

*   **Precision:** Every element communicates exactness. From pixel-perfect alignment to the mathematical ratios in our layouts, the interface must feel engineered, not decorated. This is the brand's primary differentiator—we don't "fix cars," we perform calibrated diagnostics.
*   **Trust & Reassurance:** The customer entering an automotive workshop often feels vulnerable—they don't fully understand the problem or the cost. Our visual language must project calm authority. Heavy type, generous whitespace, and a controlled color palette work together to say: "You are in expert hands."
*   **Heritage & Craftsmanship:** The Deep Blue and Racing Red are not arbitrary choices. They are anchors to the brand's origin story. Every use of these colors should feel deliberate and earned, never frivolous. The brand carries the weight of tradition while speaking the language of modern engineering.
*   **Technical Excellence:** We don't hide behind simplicity for the sake of simplicity. When data, specifications, or diagnostic details are present, they are displayed with clarity and pride—like an engineer's blueprint laid open on the workbench.

### 2.2 Brand Voice & Tone
*   **Authoritative, not arrogant.** We speak with the confidence of someone who knows their craft, never with condescension. Sentences are direct and declarative.
*   **Technical, not jargon-heavy.** Use precise terminology when it adds clarity (e.g., "alignment calibration" instead of "wheel fix"), but always pair it with a human explanation when addressing the end customer.
*   **Warm, not casual.** We are approachable experts, not your buddy. The tone sits between a master craftsman explaining their process and a luxury concierge ensuring comfort.
*   **Concise.** Every word earns its place. Avoid filler phrases like "We are proud to offer" or "Don't hesitate to contact us." Prefer: "Diagnostic complete. Here's what we found."

### 2.3 Brand Voice Examples

| Context | ❌ Avoid | ✅ Prefer |
| :--- | :--- | :--- |
| Service description | "We fix all kinds of car problems!" | "Full-spectrum engine diagnostics. Precision-calibrated results." |
| Call to action | "Click here to learn more!" | "View diagnostic report" |
| Alert/Urgency | "WARNING! Your car needs help NOW!" | "Attention required: brake system anomaly detected." |
| Reassurance | "Don't worry, we've got you covered." | "Your vehicle is in certified hands." |

### 2.4 Logo Usage
*   **Primary Mark:** The "Car and Wrench" symbol. It should always appear with adequate clear space—minimum clear space equals the height of the wrench element on all four sides.
*   **Minimum Size:** The logo must never render below `32px` in height on digital screens to preserve legibility of the wrench detail.
*   **Color Variants:**
    *   *On dark surfaces (`surface`, `surface-container-low`):* Use the `on_surface` (#e5e2e1) monochrome variant.
    *   *On blue surfaces (`primary_container`):* Use the `on_primary_container` white variant.
    *   *On light surfaces (rare, print only):* Use the `primary_container` (#004AAD) monochrome variant.
*   **Prohibited Uses:** Never stretch, rotate, add shadows, outline, or place the logo on a busy photographic background without a solid or blurred overlay. Never use the logo smaller than minimum size. Never recolor the logo with unapproved colors.
*   **Watermark Application:** When used as a background watermark, the logo should be set to **3–5% opacity** on the `surface` layer, scaled to approximately 60% of the viewport width, and positioned off-center (bottom-right quadrant preferred) to reinforce Intentional Asymmetry.

---

## 3. Colors: Tonal Depth & Mechanical Soul
The palette is anchored by the heritage **Deep Blue (#004AAD)** and **Racing Red**, but expanded into a sophisticated dark-mode architecture to provide a "premium garage" feel.

### 3.1 The Complete Palette (Material Design Tokens)

#### Core Surfaces
| Token | Hex | RGB | Usage |
| :--- | :--- | :--- | :--- |
| **surface** | `#131313` | 19, 19, 19 | The base "shop floor." Page background, root container. |
| **surface-dim** | `#131313` | 19, 19, 19 | Dimmed variant for overlays and modals backdrop. |
| **surface-bright** | `#3a3938` | 58, 57, 56 | Elevated interactive surfaces, secondary button fills. |
| **surface-container-lowest** | `#0e0e0e` | 14, 14, 14 | Deepest nesting level, watermark canvas, footer. |
| **surface-container-low** | `#1c1b1b` | 28, 27, 27 | Content groupings, section backgrounds. |
| **surface-container** | `#201f1f` | 32, 31, 31 | Mid-level containers, sidebars. |
| **surface-container-high** | `#2b2a29` | 43, 42, 41 | Elevated cards, dropdown menus. |
| **surface-container-highest** | `#363534` | 54, 53, 52 | Top-level interactive cards, diagnostic panels. |

#### Primary (Blue Heritage)
| Token | Hex | RGB | Usage |
| :--- | :--- | :--- | :--- |
| **primary** | `#b0c6ff` | 176, 198, 255 | Text highlights, icon tints, link text. |
| **on-primary** | `#002d6e` | 0, 45, 110 | Text on primary-filled elements. |
| **primary-container** | `#004aad` | 0, 74, 173 | Heritage Deep Blue. CTAs, hero gradients, brand anchors. |
| **on-primary-container** | `#d9e2ff` | 217, 226, 255 | Text/icons sitting on primary-container. |

#### Secondary (Racing Red)
| Token | Hex | RGB | Usage |
| :--- | :--- | :--- | :--- |
| **secondary** | `#ffb3ac` | 255, 179, 172 | Softened red for UI feedback, hover states, subtle accents. |
| **on-secondary** | `#5f1520` | 95, 21, 32 | Text on secondary-filled elements. |
| **secondary-container** | `#a40213` | 164, 2, 19 | Deep Racing Red. Emergency CTAs, high-urgency alerts only. |
| **on-secondary-container** | `#ffdad6` | 255, 218, 214 | Text/icons sitting on secondary-container. |

#### Tertiary (Mechanical Gold — Accent)
| Token | Hex | RGB | Usage |
| :--- | :--- | :--- | :--- |
| **tertiary** | `#d4c5a0` | 212, 197, 160 | Subtle warm accent for badges, premium tier indicators. |
| **on-tertiary** | `#383016` | 56, 48, 22 | Text on tertiary-filled elements. |
| **tertiary-container** | `#50482b` | 80, 72, 43 | Premium membership cards, loyalty badges. |
| **on-tertiary-container** | `#f1e1ba` | 241, 225, 186 | Text/icons on tertiary-container. |

#### Semantic & Utility
| Token | Hex | RGB | Usage |
| :--- | :--- | :--- | :--- |
| **on-surface** | `#e5e2e1` | 229, 226, 225 | Primary body text. Never use pure #FFFFFF. |
| **on-surface-variant** | `#c9c5c4` | 201, 197, 196 | Secondary/muted text, captions, metadata. |
| **outline** | `#938f8e` | 147, 143, 142 | High-contrast borders (used sparingly, only for form inputs). |
| **outline-variant** | `#434653` | 67, 70, 83 | Ghost borders at 15% opacity. Felt, not seen. |
| **error** | `#ffb4ab` | 255, 180, 171 | Form validation errors, system failure states. |
| **on-error** | `#690005` | 105, 0, 5 | Text on error-filled elements. |
| **error-container** | `#93000a` | 147, 0, 10 | Critical error backgrounds. |
| **on-error-container** | `#ffdad6` | 255, 218, 214 | Text on error-container. |

#### Diagnostic Status Colors
| State | Color Token | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Optimal** | `primary` | `#b0c6ff` | Systems running within spec. Blue dot/badge. |
| **Caution** | `tertiary` | `#d4c5a0` | Approaching service interval. Gold dot/badge. |
| **Alert** | `secondary` | `#ffb3ac` | Requires attention soon. Soft red indicator. |
| **Critical** | `secondary-container` | `#a40213` | Immediate action required. Full red background. |

### 3.2 Signature Rules
*   **The "No-Line" Rule:** Prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background shifts. A `surface-container-low` section sitting on a `surface` background creates a natural, modern transition without the visual "noise" of lines.
*   **The Glass & Gradient Rule:** For hero sections and primary CTAs, use a subtle linear gradient transitioning from `primary_container` (#004AAD) to a slightly darker custom tint (#003380). Floating cards should utilize Glassmorphism: `surface-container-high` at 80% opacity with a `20px` backdrop blur.
*   **Surface Hierarchy:** Use the hierarchy to "nest" content. A diagnostic card (`surface-container-highest`) should sit inside a category group (`surface-container-low`), creating a physical sense of "parts within a machine."

### 3.3 Color Application Rules
*   **The 70/20/10 Discipline:** 70% of any screen should be `surface` and `surface-container` tones (the neutral dark foundation). 20% should be `primary` blues (navigation, headings, interactive states). 10% maximum for `secondary` reds and `tertiary` golds (alerts, badges, emergency actions).
*   **Red is Earned:** Racing Red (`secondary-container`) is reserved exclusively for states that demand immediate user attention: emergency call buttons, critical diagnostic alerts, and singular brand anchor moments (e.g., a hero tagline underline). If everything is red, nothing is urgent.
*   **Blue is the Workhorse:** Deep Blue (`primary-container`) carries the identity. Use it for primary CTAs, hero gradients, active navigation states, and section accents. The lighter `primary` (#b0c6ff) is for text links, icon tints, and data highlights.
*   **Never Pair Red and Blue Adjacent at Full Saturation:** When `primary-container` and `secondary-container` must coexist (e.g., a dashboard), separate them with at least one neutral `surface-container` layer between them.
*   **Dark Mode is the Default:** This system is designed dark-first. A light mode is not currently in scope. If one is developed in the future, it should invert the surface scale while keeping `primary-container` and `secondary-container` values unchanged.

### 3.4 Gradient Specifications
| Name | Type | Definition | Usage |
| :--- | :--- | :--- | :--- |
| **Hero Gradient** | Linear, 135deg | `#004AAD` → `#003380` | Hero sections, primary CTA backgrounds. |
| **Ambient Glow** | Radial, center | `#004AAD` at 8% opacity → transparent | Subtle background glow behind featured content. |
| **Surface Fade** | Linear, 180deg | `#131313` → `#1c1b1b` | Section transitions on scrolling pages. |
| **Alert Gradient** | Linear, 90deg | `#a40213` → `#7a0110` | Emergency/critical banners only. |

---

## 4. Typography: The Manrope Scale
'Manrope' is our sole typographic voice. Its geometric yet approachable structure conveys technical precision and reliability.

### 4.1 Font Loading & Implementation
```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

:root {
  font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
```

### 4.2 The Complete Type Scale

| Token | Size | Line Height | Letter Spacing | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display-LG** | 3.5rem (56px) | 1.1 | -0.02em | 800 (ExtraBold) | Hero headlines, large numerical data |
| **Display-MD** | 2.75rem (44px) | 1.15 | -0.02em | 800 (ExtraBold) | Secondary hero text, page-level stats |
| **Display-SM** | 2.25rem (36px) | 1.2 | -0.015em | 700 (Bold) | Subsection hero, featured service title |
| **Headline-LG** | 2rem (32px) | 1.25 | -0.01em | 700 (Bold) | Primary section headers |
| **Headline-MD** | 1.75rem (28px) | 1.3 | -0.01em | 700 (Bold) | Section headers, "Precision Workshop" statements |
| **Headline-SM** | 1.5rem (24px) | 1.35 | -0.005em | 600 (SemiBold) | Subsection headers, modal titles |
| **Title-LG** | 1.375rem (22px) | 1.4 | 0em | 600 (SemiBold) | Card titles, service names |
| **Title-MD** | 1.125rem (18px) | 1.4 | 0em | 600 (SemiBold) | List item titles, nav items |
| **Title-SM** | 1rem (16px) | 1.4 | 0.005em | 600 (SemiBold) | Compact card titles, table headers |
| **Body-LG** | 1rem (16px) | 1.6 | 0em | 500 (Medium) | Primary body text, service descriptions |
| **Body-MD** | 0.875rem (14px) | 1.6 | 0.005em | 500 (Medium) | Secondary body text, form labels |
| **Body-SM** | 0.8125rem (13px) | 1.5 | 0.01em | 400 (Regular) | Captions, helper text, footnotes |
| **Label-LG** | 0.875rem (14px) | 1.3 | 0.04em | 700 (Bold, All Caps) | Button labels, navigation items |
| **Label-MD** | 0.75rem (12px) | 1.3 | 0.05em | 700 (Bold, All Caps) | Technical specs, metadata, chip labels |
| **Label-SM** | 0.6875rem (11px) | 1.3 | 0.06em | 700 (Bold, All Caps) | Micro-labels, status badges, timestamps |

### 4.3 CSS Custom Properties
```css
:root {
  /* Display */
  --type-display-lg: 800 3.5rem/1.1 'Manrope', sans-serif;
  --type-display-md: 800 2.75rem/1.15 'Manrope', sans-serif;
  --type-display-sm: 700 2.25rem/1.2 'Manrope', sans-serif;
  
  /* Headline */
  --type-headline-lg: 700 2rem/1.25 'Manrope', sans-serif;
  --type-headline-md: 700 1.75rem/1.3 'Manrope', sans-serif;
  --type-headline-sm: 600 1.5rem/1.35 'Manrope', sans-serif;
  
  /* Title */
  --type-title-lg: 600 1.375rem/1.4 'Manrope', sans-serif;
  --type-title-md: 600 1.125rem/1.4 'Manrope', sans-serif;
  --type-title-sm: 600 1rem/1.4 'Manrope', sans-serif;
  
  /* Body */
  --type-body-lg: 500 1rem/1.6 'Manrope', sans-serif;
  --type-body-md: 500 0.875rem/1.6 'Manrope', sans-serif;
  --type-body-sm: 400 0.8125rem/1.5 'Manrope', sans-serif;
  
  /* Label */
  --type-label-lg: 700 0.875rem/1.3 'Manrope', sans-serif;
  --type-label-md: 700 0.75rem/1.3 'Manrope', sans-serif;
  --type-label-sm: 700 0.6875rem/1.3 'Manrope', sans-serif;
}
```

### 4.4 Editorial Direction & Text Color Pairing
*   Use `Display-LG` with tight letter-spacing (-0.02em) for an authoritative, "boldly engineered" look. Contrast this with `Body-LG` which should have generous line-height (1.6) for maximum readability.
*   **Headlines** (`Display-*`, `Headline-*`) → color: `on-surface` (#e5e2e1) or `primary` (#b0c6ff) for emphasis.
*   **Body text** (`Body-*`) → color: `on-surface` (#e5e2e1) for primary content, `on-surface-variant` (#c9c5c4) for secondary/supporting text.
*   **Labels** (`Label-*`) → color: `on-surface-variant` (#c9c5c4) for metadata, `primary` (#b0c6ff) for active states, `secondary` (#ffb3ac) for alert metadata.
*   **Maximum line width:** Body text should never exceed `65ch` (approximately 600px at 1rem). This ensures comfortable reading rhythm and prevents eye fatigue on wide screens.
*   **Paragraph spacing:** Use `spacing-4` (1rem) between paragraphs. Never use double line breaks.
*   **Numeric data:** Large numerical values (prices, stats, diagnostic readings) should always use `Display-LG` or `Display-MD` with `font-variant-numeric: tabular-nums` for proper alignment in data columns.

---

## 5. Spacing & Layout System

### 5.1 Spacing Scale
Based on a 4px base unit, using a geometric progression for rhythm.

| Token | Value | Rem | Usage |
| :--- | :--- | :--- | :--- |
| **spacing-1** | 4px | 0.25rem | Micro-adjustments, icon-to-label gaps |
| **spacing-2** | 8px | 0.5rem | Inline element gaps, chip internal padding |
| **spacing-3** | 12px | 0.75rem | Compact card padding, small form gaps |
| **spacing-4** | 16px | 1rem | Standard paragraph gaps, card internal padding |
| **spacing-6** | 24px | 1.5rem | Card section separation, form group gaps |
| **spacing-8** | 32px | 2rem | Card-to-card gaps, section internal padding |
| **spacing-10** | 40px | 2.5rem | Major content group padding |
| **spacing-12** | 48px | 3rem | Section-to-section vertical gaps |
| **spacing-16** | 64px | 4rem | Hero section padding, page-level breathing room |
| **spacing-20** | 80px | 5rem | Major page section separators |
| **spacing-24** | 96px | 6rem | Hero vertical padding on large viewports |

### 5.2 Grid System
*   **Max content width:** `1280px` for standard pages, `1440px` for dashboard/diagnostic views.
*   **Column grid:** 12-column grid with `spacing-6` (24px) gutters.
*   **Asymmetric principle:** Favor 7/5 or 8/4 column splits over 6/6. A service detail page, for example, should allocate 8 columns to the diagnostic content and 4 to the sidebar metadata.
*   **Container padding:**
    *   Desktop (≥1024px): `spacing-16` (64px) horizontal padding.
    *   Tablet (768–1023px): `spacing-10` (40px) horizontal padding.
    *   Mobile (<768px): `spacing-6` (24px) horizontal padding.

### 5.3 Responsive Breakpoints
| Name | Width | Behavior |
| :--- | :--- | :--- |
| **mobile** | < 768px | Single column. Stack all content vertically. Reduce `Display-LG` to `Display-SM`. |
| **tablet** | 768px – 1023px | Two-column layouts allowed. Reduce asymmetric ratios to 60/40 maximum. |
| **desktop** | 1024px – 1439px | Full grid. All asymmetric ratios active. |
| **wide** | ≥ 1440px | Extended grid for dashboards. Max content width enforced with centered alignment. |

### 5.4 Responsive Typography Scale
| Token | Mobile (<768px) | Tablet (768–1023px) | Desktop (≥1024px) |
| :--- | :--- | :--- | :--- |
| **Display-LG** | 2.25rem | 2.75rem | 3.5rem |
| **Display-MD** | 1.75rem | 2.25rem | 2.75rem |
| **Headline-MD** | 1.25rem | 1.5rem | 1.75rem |
| **Body-LG** | 1rem | 1rem | 1rem |
| **Label-MD** | 0.75rem | 0.75rem | 0.75rem |

---

## 6. Elevation & Depth: Tonal Layering
We do not use shadows to create "pop"; we use them to create "atmosphere."

*   **The Layering Principle:** Stacking tiers is mandatory.
    *   *Level 0:* `surface` (The Background)
    *   *Level 1:* `surface-container-low` (Content groupings)
    *   *Level 2:* `surface-container` (Mid-level containers)
    *   *Level 3:* `surface-container-high` (Elevated cards, Glassmorphism candidates)
    *   *Level 4:* `surface-container-highest` (Interactive cards, top-level diagnostic panels)
*   **Ambient Shadows:** For floating elements, use a shadow color tinted with `#004AAD` at 6% opacity. Blur should be high (`32px` to `48px`) with a `0px` offset to simulate natural, overhead workshop lighting.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline-variant` (#434653) at **15% opacity**. It should be felt, not seen.

### 6.1 CSS Shadow Definitions
```css
:root {
  --shadow-ambient: 0 0 32px rgba(0, 74, 173, 0.06);
  --shadow-ambient-lg: 0 0 48px rgba(0, 74, 173, 0.06);
  --shadow-hover: 0 0 40px rgba(0, 74, 173, 0.10);
  --ghost-border: 1px solid rgba(67, 70, 83, 0.15);
}
```

---

## 7. Components: The Precision Set

### 7.1 Buttons

#### Primary Button
*   **Fill:** `primary-container` (#004AAD).
*   **Text:** `on-primary-container` (#d9e2ff), `Label-LG`, all caps.
*   **Border Radius:** `0.375rem` (6px) — the `md` roundedness scale.
*   **Padding:** `spacing-3` (12px) vertical, `spacing-6` (24px) horizontal.
*   **Hover:** Lighten fill by 8% (`#1a5cb8`). Apply `--shadow-hover`.
*   **Active:** Darken fill by 5% (`#003d92`).
*   **Disabled:** Fill at 38% opacity. Text at 38% opacity. No pointer events.
*   **Focus:** 2px outline using `primary` (#b0c6ff) with 2px offset.

#### Secondary Button
*   **Fill:** `surface-bright` (#3a3938).
*   **Border:** `--ghost-border`.
*   **Text:** `on-surface` (#e5e2e1), `Label-LG`, all caps.
*   **Hover:** Background shifts to `surface-container-highest`. Ghost border opacity increases to 30%.
*   **Active/Disabled/Focus:** Same logic as Primary, adapted to secondary palette.

#### Emergency Button (Racing Red)
*   **Fill:** `secondary-container` (#a40213).
*   **Text:** `on-secondary-container` (#ffdad6), `Label-LG`, all caps.
*   **Usage:** Reserved exclusively for "Call Now" or critical-action scenarios. Maximum one per page.
*   **Hover:** Lighten fill by 8%.
*   **Includes:** A left-aligned phone icon (2px stroke, `on-secondary-container` color).

#### Button Sizing
| Size | Height | Padding H | Font Token | Icon Size |
| :--- | :--- | :--- | :--- | :--- |
| **sm** | 32px | `spacing-4` (16px) | `Label-SM` | 16px |
| **md** | 40px | `spacing-6` (24px) | `Label-MD` | 18px |
| **lg** | 48px | `spacing-8` (32px) | `Label-LG` | 20px |

### 7.2 Diagnostic Cards
Forbid the use of divider lines. Instead, separate the "Service Title" from the "Diagnostic Data" using a vertical spacing of `spacing-6` (1.5rem) and a subtle background shift between the card header and body.

**Card Anatomy:**
*   **Container:** `surface-container-highest` background, `0.375rem` border radius, `spacing-6` internal padding.
*   **Header zone:** Contains service icon (24px, `primary` color) + `Title-LG` title. Color: `on-surface`.
*   **Data zone:** Separated by `spacing-6` vertical gap. Background subtly shifts to `surface-container-high` (achieved via an inner container with its own background and `0.25rem` radius).
*   **Status indicator:** A `6px` circle dot, positioned top-right of the card, using the Diagnostic Status Colors (Optimal/Caution/Alert/Critical).
*   **Hover state:** Apply `--shadow-ambient` and shift background by one tier lighter.

### 7.3 Mechanical Iconography
Icons must be "Technical-Line" style (2px stroke). 
*   **Wrench/Tools:** Should be angled at 45 degrees to match the dynamic movement in the car logo.
*   **Diagnostic Screens:** Use the `secondary` (Red) color sparingly for "Alert" states, and `primary` (Blue) for "Optimal" states.
*   **Icon sizing system:**
    *   16px — inline with `Label` text, compact UI elements.
    *   20px — inline with `Body` text, standard buttons.
    *   24px — card headers, navigation items.
    *   32px — feature highlights, empty states.
    *   48px — hero icons, onboarding illustrations.
*   **Icon color rules:** Icons inherit the color of their adjacent text by default. Override only when conveying a diagnostic state or a specific interactive affordance.

### 7.4 Service Chips
Selection chips should use the `full` (9999px) roundedness scale, contrasting against the more geometric cards. This makes interactive elements feel distinct from structural elements.

*   **Default:** `surface-container-high` background, `on-surface-variant` text, `Label-MD` font.
*   **Selected:** `primary-container` background, `on-primary-container` text.
*   **Padding:** `spacing-2` (8px) vertical, `spacing-4` (16px) horizontal.
*   **Gap between chips:** `spacing-2` (8px).

### 7.5 Form Inputs
*   **Container:** `surface-container-low` background, `outline` (#938f8e) border at 40% opacity, `0.375rem` radius.
*   **Text:** `on-surface` (#e5e2e1), `Body-LG`.
*   **Placeholder:** `on-surface-variant` (#c9c5c4) at 60% opacity.
*   **Focus state:** Border transitions to `primary` (#b0c6ff) at 100% opacity. Apply a subtle glow: `0 0 0 3px rgba(176, 198, 255, 0.15)`.
*   **Error state:** Border transitions to `error` (#ffb4ab). Helper text below in `error` color, `Body-SM`.
*   **Label:** `Body-MD`, `on-surface-variant`, positioned above the input with `spacing-2` gap.

### 7.6 Navigation
*   **Top navigation bar:** `surface-container-low` background, full-width, `spacing-4` vertical padding.
*   **Nav items:** `Title-MD`, `on-surface-variant` color default, `primary` (#b0c6ff) when active.
*   **Active indicator:** A 2px bottom border in `primary-container` (#004AAD), no underline—just the tonal border.
*   **Mobile nav:** Full-screen overlay on `surface` background with `spacing-8` vertical item gaps, `Headline-SM` font size.

### 7.7 Data Tables
*   **Header row:** `surface-container-low` background, `Label-MD` (all caps, `on-surface-variant` color).
*   **Body rows:** Alternate between `surface` and `surface-container-lowest` for subtle zebra striping (no borders).
*   **Cell text:** `Body-MD`, `on-surface`.
*   **Row hover:** Background shifts to `surface-container-high`.
*   **Numeric columns:** Right-aligned, `font-variant-numeric: tabular-nums`.
*   **No vertical dividers.** Column separation is achieved through generous `spacing-6` horizontal cell padding.

---

## 8. Motion & Animation

### 8.1 Timing Principles
Motion in this system is **mechanical and precise**, not bouncy or playful. Easing curves should feel like well-oiled machinery—smooth acceleration, decisive deceleration.

| Token | Duration | Easing | Usage |
| :--- | :--- | :--- | :--- |
| **motion-micro** | 100ms | `ease-out` | Opacity changes, color transitions |
| **motion-fast** | 200ms | `cubic-bezier(0.2, 0, 0, 1)` | Button hover/active, chip selection |
| **motion-standard** | 300ms | `cubic-bezier(0.2, 0, 0, 1)` | Card hover, dropdown open, focus transitions |
| **motion-emphasis** | 500ms | `cubic-bezier(0.2, 0, 0, 1)` | Page section reveals, hero transitions |

### 8.2 CSS Implementation
```css
:root {
  --motion-micro: 100ms ease-out;
  --motion-fast: 200ms cubic-bezier(0.2, 0, 0, 1);
  --motion-standard: 300ms cubic-bezier(0.2, 0, 0, 1);
  --motion-emphasis: 500ms cubic-bezier(0.2, 0, 0, 1);
}

/* Standard interactive transition */
.interactive {
  transition: background-color var(--motion-fast),
              box-shadow var(--motion-standard),
              color var(--motion-micro);
}
```

### 8.3 Animation Rules
*   **Scroll-triggered reveals:** Content sections fade in with a `translateY(16px)` → `translateY(0)` animation using `motion-emphasis`. Trigger at 15% viewport intersection.
*   **Stagger pattern:** When multiple cards appear together, stagger each by `60ms` to create a "sequential assembly" feel—like parts sliding into place on a production line.
*   **No bounce.** Never use `ease-in-out` with overshooting or spring physics. This is a workshop, not a playground.
*   **Reduce motion:** Always respect `prefers-reduced-motion: reduce`. Replace all animations with instant state changes.

---

## 9. Imagery & Photography Direction

### 9.1 Photography Style
*   **Lighting:** Low-key, directional lighting with a cool blue cast. Think: a single overhead workshop light illuminating polished metal. Avoid flat, evenly-lit stock photography.
*   **Subjects:** Close-up details of tools, engine components, precision instruments, polished surfaces. Avoid full-workshop panoramas or generic "mechanic smiling at camera" shots.
*   **Color grading:** Desaturate overall by 20%, then selectively boost blue tones in highlights and shadows. Red should appear only where it exists naturally (brake calipers, warning labels).
*   **Composition:** Follow the Intentional Asymmetry principle. Subject should be offset (rule of thirds), with generous negative space on the opposite side for text overlay.

### 9.2 Image Treatment in UI
*   **Hero images:** Full-bleed, overlaid with a gradient from `surface` (100% opacity at bottom) to transparent (at 40% from bottom). Text sits in the solid gradient zone.
*   **Card images:** If a diagnostic card includes a photo, it should be desaturated and tinted with `primary-container` (#004AAD) at 10% multiply blend.
*   **Aspect ratios:** Hero = 16:9 or 21:9, Card thumbnail = 4:3, Service icon = 1:1.
*   **Image loading:** Use blur-up placeholder technique. The placeholder should be a 20px-wide version of the image with a heavy Gaussian blur, tinted toward `surface` (#131313).

---

## 10. Accessibility

### 10.1 Contrast Ratios
All text must meet WCAG 2.1 AA minimum contrast ratios against their background surfaces:

| Combination | Contrast Ratio | Pass Level |
| :--- | :--- | :--- |
| `on-surface` (#e5e2e1) on `surface` (#131313) | 14.5:1 | AAA |
| `on-surface-variant` (#c9c5c4) on `surface` (#131313) | 11.2:1 | AAA |
| `primary` (#b0c6ff) on `surface` (#131313) | 10.1:1 | AAA |
| `on-primary-container` (#d9e2ff) on `primary-container` (#004AAD) | 7.8:1 | AAA |
| `on-secondary-container` (#ffdad6) on `secondary-container` (#a40213) | 8.2:1 | AAA |
| `secondary` (#ffb3ac) on `surface` (#131313) | 9.4:1 | AAA |

### 10.2 Focus Management
*   All interactive elements must have a visible focus indicator: 2px solid `primary` (#b0c6ff) outline, 2px offset.
*   Focus order must follow visual reading order (left to right, top to bottom within each asymmetric section).
*   Skip-to-content link must be the first focusable element on every page.

### 10.3 Additional Requirements
*   All icons must be paired with an `aria-label` or adjacent visible text.
*   Diagnostic status colors (Optimal/Caution/Alert/Critical) must always be accompanied by a text label—never color-only communication.
*   Touch targets: Minimum 44×44px on all interactive elements for mobile viewports.
*   Motion: All animation must respect `prefers-reduced-motion`.
*   Font scaling: Layout must not break up to 200% browser zoom.

---

## 11. CSS Custom Properties — Complete Token Map

```css
:root {
  /* ─── Surfaces ─── */
  --surface: #131313;
  --surface-dim: #131313;
  --surface-bright: #3a3938;
  --surface-container-lowest: #0e0e0e;
  --surface-container-low: #1c1b1b;
  --surface-container: #201f1f;
  --surface-container-high: #2b2a29;
  --surface-container-highest: #363534;

  /* ─── Primary (Blue) ─── */
  --primary: #b0c6ff;
  --on-primary: #002d6e;
  --primary-container: #004aad;
  --on-primary-container: #d9e2ff;

  /* ─── Secondary (Red) ─── */
  --secondary: #ffb3ac;
  --on-secondary: #5f1520;
  --secondary-container: #a40213;
  --on-secondary-container: #ffdad6;

  /* ─── Tertiary (Gold) ─── */
  --tertiary: #d4c5a0;
  --on-tertiary: #383016;
  --tertiary-container: #50482b;
  --on-tertiary-container: #f1e1ba;

  /* ─── Utility ─── */
  --on-surface: #e5e2e1;
  --on-surface-variant: #c9c5c4;
  --outline: #938f8e;
  --outline-variant: #434653;
  --error: #ffb4ab;
  --on-error: #690005;
  --error-container: #93000a;
  --on-error-container: #ffdad6;

  /* ─── Gradients ─── */
  --gradient-hero: linear-gradient(135deg, #004AAD, #003380);
  --gradient-ambient: radial-gradient(circle, rgba(0,74,173,0.08), transparent);
  --gradient-surface-fade: linear-gradient(180deg, #131313, #1c1b1b);
  --gradient-alert: linear-gradient(90deg, #a40213, #7a0110);

  /* ─── Shadows ─── */
  --shadow-ambient: 0 0 32px rgba(0, 74, 173, 0.06);
  --shadow-ambient-lg: 0 0 48px rgba(0, 74, 173, 0.06);
  --shadow-hover: 0 0 40px rgba(0, 74, 173, 0.10);
  --ghost-border: 1px solid rgba(67, 70, 83, 0.15);

  /* ─── Motion ─── */
  --motion-micro: 100ms ease-out;
  --motion-fast: 200ms cubic-bezier(0.2, 0, 0, 1);
  --motion-standard: 300ms cubic-bezier(0.2, 0, 0, 1);
  --motion-emphasis: 500ms cubic-bezier(0.2, 0, 0, 1);

  /* ─── Spacing ─── */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;

  /* ─── Border Radius ─── */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;

  /* ─── Layout ─── */
  --content-max-width: 1280px;
  --content-max-width-wide: 1440px;
  --text-max-width: 65ch;
}
```

---

## 12. Page Structure Templates

### 12.1 Homepage / Landing Page
*   **Hero Section:** Full-viewport height. `--gradient-hero` background with an offset photography overlay (70% width, right-aligned, with `--gradient-surface-fade` mask on left). `Display-LG` headline positioned in the left 40%, vertically centered. Primary CTA button below headline. Logo watermark ghosted in bottom-right.
*   **Services Section:** `surface-container-low` background. `Headline-MD` section title with a `primary` (#b0c6ff) left accent line (3px wide, `spacing-10` tall). Diagnostic Cards in a 3-column asymmetric grid (40% / 30% / 30%).
*   **Trust Section:** Full-width `surface` background. Large numerical stats (`Display-LG`, `primary` color) in a horizontal row: years of experience, vehicles serviced, customer satisfaction %. `Body-LG` captions below each number.
*   **Contact / CTA Section:** `surface-container-lowest` background. Two-column 60/40 split: left column with `Headline-LG` message and contact form, right column with map embed and address in `Body-MD`.
*   **Footer:** `surface-container-lowest`. Three-column layout. Logo in column 1, nav links in `Body-MD` in column 2, contact/hours in column 3. `Label-SM` copyright at bottom.

### 12.2 Service Detail Page
*   **Top bar:** Breadcrumb navigation in `Label-MD`, `on-surface-variant`.
*   **Content:** 8/4 column split. Main column: `Headline-LG` service name, `Body-LG` description, diagnostic checklist in a vertical stack of slim `surface-container-high` bars (no bullets, use a 6px status dot + `Title-SM` text per row). Sidebar: Pricing card (`surface-container-highest`, `Display-MD` price, `Label-MD` details), booking CTA.

---

## 13. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. For example, a `10` (2.5rem) left margin and a `16` (4rem) right margin for body text to create editorial tension.
*   **Do** integrate the "Car and Wrench" logo element as a watermark or a ghosted background element in the `surface-container-lowest` tier.
*   **Do** use Racing Red (`secondary-container`) exclusively for high-urgency alerts or specific brand anchors, like the "Call Now" emergency service button.
*   **Do** test every color combination against WCAG AA contrast requirements before implementation.
*   **Do** use `font-variant-numeric: tabular-nums` for all numerical data displays to ensure proper column alignment.
*   **Do** provide a `prefers-reduced-motion` fallback for every animation.
*   **Do** use semantic HTML elements (`<main>`, `<nav>`, `<section>`, `<article>`) for every structural component.
*   **Do** use `spacing-12` (3rem) or greater to define major conceptual section breaks.

### Don't:
*   **Don't** use 100% white (#FFFFFF) text on any background. Always use `on-surface` (#e5e2e1) to reduce eye strain and maintain a premium feel.
*   **Don't** use standard "Drop Shadows." They feel cheap and "pasted on." Always prefer tonal layering or ambient, tinted blurs.
*   **Don't** use dividers or horizontal rules. Use `spacing-12` (3rem) gaps to define new conceptual sections.
*   **Don't** use Racing Red for decorative purposes. It is a functional color: alerts, emergencies, singular brand moments only.
*   **Don't** pair more than two type weights on a single card component. Complexity in type should come from size contrast, not weight variation.
*   **Don't** set body text below `0.8125rem` (13px). Anything smaller fails readability on mobile and undermines the "reassuring" brand pillar.
*   **Don't** use generic stock photography. Every image must meet the Photography Style guidelines in Section 9.
*   **Don't** exceed three levels of surface nesting on a single screen. If content requires more depth, reconsider the information architecture.
*   **Don't** auto-play video or audio. This brand respects the user's attention.
