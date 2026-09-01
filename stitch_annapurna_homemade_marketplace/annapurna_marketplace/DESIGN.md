---
name: Annapurna Marketplace
colors:
  surface: '#fff8f0'
  surface-dim: '#e0d9d0'
  surface-bright: '#fff8f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf3e9'
  surface-container: '#f4ede3'
  surface-container-high: '#eee7dd'
  surface-container-highest: '#e8e2d8'
  on-surface: '#1e1b16'
  on-surface-variant: '#594238'
  inverse-surface: '#33302a'
  inverse-on-surface: '#f7f0e6'
  outline: '#8c7166'
  outline-variant: '#e0c0b3'
  surface-tint: '#a33e00'
  primary: '#9f3d00'
  on-primary: '#ffffff'
  primary-container: '#c74e00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb596'
  secondary: '#1b6d24'
  on-secondary: '#ffffff'
  secondary-container: '#a0f399'
  on-secondary-container: '#217128'
  tertiary: '#705740'
  on-tertiary: '#ffffff'
  tertiary-container: '#8b6f56'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb596'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#7c2e00'
  secondary-fixed: '#a3f69c'
  secondary-fixed-dim: '#88d982'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#005312'
  tertiary-fixed: '#ffdcbe'
  tertiary-fixed-dim: '#e2c0a3'
  on-tertiary-fixed: '#291806'
  on-tertiary-fixed-variant: '#59422c'
  background: '#fff8f0'
  on-background: '#1e1b16'
  surface-variant: '#e8e2d8'
typography:
  headline-xl:
    fontFamily: DM Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: DM Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: DM Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: DM Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is centered on the concept of "The Digital Hearth." It targets a community of home chefs and food enthusiasts, bridging the gap between traditional home-cooked heritage and modern convenience. The emotional response should be one of trust, nourishment, and artisanal quality.

The aesthetic leans into **Modern Organicism**. It combines the warmth of tactile, physical materials—like clay and wood—with the clean functionalism of a modern marketplace. High-quality whitespace is used not to feel cold, but to provide "breathing room" for vibrant food photography. The interface avoids sharp edges and clinical whites, favoring a soft, approachable, and human-centric presentation that feels curated rather than industrial.

## Colors

The palette is derived from natural, earthy elements found in a traditional kitchen. 

*   **Primary (Terracotta Orange):** Used for primary calls to action, active states, and brand highlights. It stimulates appetite and conveys warmth.
*   **Secondary (Forest Green):** Used for "freshness" indicators, vegetarian markers, and success states.
*   **Neutral (Warm Cream):** Serves as the global background color. It is softer on the eyes than pure white and reinforces the "organic" brand narrative.
*   **Accent (Dark Brown):** Used for primary typography and deep borders. It provides high-contrast legibility without the harshness of pure black.
*   **Surface:** Use a slightly lighter or darker tint of the Warm Cream for cards to create subtle differentiation.

## Typography

This design system utilizes a pairing of **DM Sans** for headings and **Plus Jakarta Sans** for body and labels. 

Headings should be treated with a "serif-adjacent" mindset: tight tracking and bold weights that feel authoritative yet friendly. Body text uses the rounded terminals of Plus Jakarta Sans to maintain a soft, approachable character. For mobile, headline sizes are scaled down to ensure they don't break across too many lines, while body text remains large and legible (minimum 16px) to accommodate all age groups within the community.

## Layout & Spacing

The layout follows a **fluid-to-fixed model**. On mobile, it uses a 4-column grid with 16px margins. On desktop, it transitions to a 12-column grid capped at 1280px wide to maintain readability.

Spacing is generous to reflect a "homey" and unhurried experience. Avoid dense information clusters. 
*   **Vertical Rhythm:** Use the `lg` (48px) spacing between major sections and `md` (24px) between groups of items (like cards).
*   **Internal Padding:** Components like cards and modals should use at least `md` (24px) padding to ensure the content doesn't feel cramped against the rounded corners.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Soft Ambient Shadows**. 

Instead of traditional drop shadows that create a "floating" effect, use shadows that feel like soft light hitting an object on a table. Shadows should have a large blur radius (16px to 24px) and very low opacity (approx 5-8%), tinted with the Dark Brown accent color to keep them warm. 

Surface containers use subtle shifts in the background color—moving from the Warm Cream background to a slightly lighter "Off-White" surface for cards—to create a natural sense of hierarchy without the need for heavy borders.

## Shapes

The shape language is characterized by **Generous Curvature**. 

Standard components (buttons, small cards) utilize a 16px radius (`rounded-lg`). Larger containers like primary product cards or modals utilize a 24px radius (`rounded-xl`). This extreme roundedness mimics the soft profiles of clay pottery and organic ingredients. Interactive elements should never have sharp corners, as roundness is the primary visual signifier of the brand's friendly and safe nature.

## Components

### Buttons
Primary buttons are solid Terracotta Orange with Dark Brown or White text. They use high padding (12px vertical, 32px horizontal) and are fully rounded (pill-shaped) or use the 16px radius. Secondary buttons should use a Forest Green outline or a soft tint of the primary color.

### Cards
Product and Chef cards are the centerpiece. Use a 24px corner radius. Images must be top-down, featuring natural textures. Content within the card should be centered or left-aligned with significant breathing room (24px padding).

### Chips/Tags
Used for food categories (e.g., "Vegan," "Spicy," "Baker"). These should be small, pill-shaped, and use a low-opacity fill of the Secondary Forest Green or Terracotta Orange.

### Input Fields
Inputs should have a thick 2px border in a muted version of the Accent Dark Brown or a soft cream fill. The focus state should transition the border to Terracotta Orange with a subtle glow.

### Iconography
All icons are 2px line-weight strokes with rounded ends. Icons should be housed in a circular background with a very soft tint (10% opacity) of the icon's color to create a "stamp" effect.

### Selection Controls
Checkboxes and radio buttons should be oversized and use the Primary color for the selected state. Radio buttons should always be circular to match the overall shape language.