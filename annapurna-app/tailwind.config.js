/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Full Annapurna Material Design 3 token set — copied 1:1 from screen Tailwind config blocks
        "primary":                   "#9f3d00",
        "on-primary":                "#ffffff",
        "primary-container":         "#c74e00",
        "on-primary-container":      "#fffbff",
        "primary-fixed":             "#ffdbcd",
        "primary-fixed-dim":         "#ffb596",
        "on-primary-fixed":          "#360f00",
        "on-primary-fixed-variant":  "#7c2e00",
        "inverse-primary":           "#ffb596",

        "secondary":                 "#1b6d24",
        "on-secondary":              "#ffffff",
        "secondary-container":       "#a0f399",
        "on-secondary-container":    "#217128",
        "secondary-fixed":           "#a3f69c",
        "secondary-fixed-dim":       "#88d982",
        "on-secondary-fixed":        "#002204",
        "on-secondary-fixed-variant":"#005312",

        "tertiary":                  "#705740",
        "on-tertiary":               "#ffffff",
        "tertiary-container":        "#8b6f56",
        "on-tertiary-container":     "#fffbff",
        "tertiary-fixed":            "#ffdcbe",
        "tertiary-fixed-dim":        "#e2c0a3",
        "on-tertiary-fixed":         "#291806",
        "on-tertiary-fixed-variant": "#59422c",

        "surface":                   "#fff8f0",
        "surface-dim":               "#e0d9d0",
        "surface-bright":            "#fff8f0",
        "surface-container-lowest":  "#ffffff",
        "surface-container-low":     "#faf3e9",
        "surface-container":         "#f4ede3",
        "surface-container-high":    "#eee7dd",
        "surface-container-highest": "#e8e2d8",
        "surface-variant":           "#e8e2d8",
        "surface-tint":              "#a33e00",
        "on-surface":                "#1e1b16",
        "on-surface-variant":        "#594238",
        "inverse-surface":           "#33302a",
        "inverse-on-surface":        "#f7f0e6",

        "background":                "#fff8f0",
        "on-background":             "#1e1b16",

        "error":                     "#ba1a1a",
        "on-error":                  "#ffffff",
        "error-container":           "#ffdad6",
        "on-error-container":        "#93000a",

        "outline":                   "#8c7166",
        "outline-variant":           "#e0c0b3",

        // Role card accent colors (from choose_your_role inline hex)
        "seller-card":               "#FFF1E8",
        "buyer-card":                "#EAF6E9",
      },
      borderRadius: {
        "DEFAULT": "0.25rem",   // 4px
        "lg":      "0.5rem",    // 8px
        "xl":      "0.75rem",   // 12px
        "2xl":     "1.5rem",    // 24px — card standard
        "card":    "1.5rem",    // alias for 2xl (used in seller dashboard)
        "full":    "9999px",
      },
      spacing: {
        "xs":             "4px",
        "base":           "8px",
        "sm":             "12px",
        "gutter":         "20px",
        "md":             "24px",
        "lg":             "48px",
        "xl":             "80px",
        "margin-mobile":  "16px",
        "margin-desktop": "64px",
      },
      fontFamily: {
        "headline-xl":       ["DM Sans", "sans-serif"],
        "headline-lg":       ["DM Sans", "sans-serif"],
        "headline-lg-mobile":["DM Sans", "sans-serif"],
        "headline-md":       ["DM Sans", "sans-serif"],
        "body-lg":           ["Plus Jakarta Sans", "sans-serif"],
        "body-md":           ["Plus Jakarta Sans", "sans-serif"],
        "label-md":          ["Plus Jakarta Sans", "sans-serif"],
        "label-sm":          ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        "headline-xl":        ["48px", { lineHeight: "56px",  letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg":        ["32px", { lineHeight: "40px",  letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px",                            fontWeight: "700" }],
        "headline-md":        ["24px", { lineHeight: "32px",                            fontWeight: "600" }],
        "body-lg":            ["18px", { lineHeight: "28px",                            fontWeight: "400" }],
        "body-md":            ["16px", { lineHeight: "24px",                            fontWeight: "400" }],
        "label-md":           ["14px", { lineHeight: "20px",  letterSpacing: "0.01em",  fontWeight: "600" }],
        "label-sm":           ["12px", { lineHeight: "16px",                            fontWeight: "500" }],
      },
      boxShadow: {
        // Soft ambient shadow (from static screens)
        "soft":    "0 8px 24px rgba(112, 87, 64, 0.08)",
        "ambient": "0 8px 24px -4px rgba(112, 87, 64, 0.08), 0 4px 8px -2px rgba(112, 87, 64, 0.04)",
        "card":    "0 4px 16px rgba(112, 87, 64, 0.06)",
        "nav":     "0 -4px 16px rgba(51, 48, 42, 0.05)",
        "primary-glow": "0 4px 16px rgba(159, 61, 0, 0.3)",
        "secondary-glow": "0 8px 24px rgba(27, 109, 36, 0.2)",
      },
      keyframes: {
        "fade-in": {
          "0%":   { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%":   { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in":  "fade-in 0.3s ease-out forwards",
        "slide-up": "slide-up 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scale-in 0.25s ease-out forwards",
      },
    },
  },
  plugins: [],
}
