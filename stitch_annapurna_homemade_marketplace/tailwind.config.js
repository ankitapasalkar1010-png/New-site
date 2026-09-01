/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "on-secondary-container": "#217128",
              "secondary-fixed": "#a3f69c",
              "primary-fixed-dim": "#ffb596",
              "surface-container-low": "#faf3e9",
              "inverse-on-surface": "#f7f0e6",
              "on-tertiary-fixed-variant": "#59422c",
              "on-primary": "#ffffff",
              "tertiary-fixed": "#ffdcbe",
              "on-surface-variant": "#594238",
              "error-container": "#ffdad6",
              "outline": "#8c7166",
              "surface-bright": "#fff8f0",
              "error": "#ba1a1a",
              "outline-variant": "#e0c0b3",
              "primary-container": "#c74e00",
              "surface": "#fff8f0",
              "on-error": "#ffffff",
              "tertiary-container": "#8b6f56",
              "on-tertiary-fixed": "#291806",
              "surface-container-highest": "#e8e2d8",
              "on-secondary": "#ffffff",
              "on-error-container": "#93000a",
              "surface-dim": "#e0d9d0",
              "background": "#fff8f0",
              "primary": "#9f3d00",
              "surface-tint": "#a33e00",
              "secondary": "#1b6d24",
              "surface-container": "#f4ede3",
              "on-primary-container": "#fffbff",
              "tertiary-fixed-dim": "#e2c0a3",
              "primary-fixed": "#ffdbcd",
              "surface-variant": "#e8e2d8",
              "surface-container-high": "#eee7dd",
              "on-tertiary-container": "#fffbff",
              "on-primary-fixed-variant": "#7c2e00",
              "on-tertiary": "#ffffff",
              "on-background": "#1e1b16",
              "on-secondary-fixed": "#002204",
              "inverse-primary": "#ffb596",
              "on-surface": "#1e1b16",
              "secondary-fixed-dim": "#88d982",
              "on-primary-fixed": "#360f00",
              "on-secondary-fixed-variant": "#005312",
              "secondary-container": "#a0f399",
              "surface-container-lowest": "#ffffff",
              "inverse-surface": "#33302a",
              "tertiary": "#705740"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "sm": "12px",
              "xl": "80px",
              "xs": "4px",
              "margin-mobile": "16px",
              "lg": "48px",
              "gutter": "20px",
              "md": "24px",
              "base": "8px",
              "margin-desktop": "64px"
      },
      "fontFamily": {
              "label-md": [
                      "Plus Jakarta Sans"
              ],
              "body-md": [
                      "Plus Jakarta Sans"
              ],
              "headline-xl": [
                      "DM Sans"
              ],
              "headline-lg-mobile": [
                      "DM Sans"
              ],
              "headline-md": [
                      "DM Sans"
              ],
              "label-sm": [
                      "Plus Jakarta Sans"
              ],
              "body-lg": [
                      "Plus Jakarta Sans"
              ],
              "headline-lg": [
                      "DM Sans"
              ]
      },
      "fontSize": {
              "label-md": [
                      "14px",
                      {
                              "lineHeight": "20px",
                              "letterSpacing": "0.01em",
                              "fontWeight": "600"
                      }
              ],
              "body-md": [
                      "16px",
                      {
                              "lineHeight": "24px",
                              "fontWeight": "400"
                      }
              ],
              "headline-xl": [
                      "48px",
                      {
                              "lineHeight": "56px",
                              "letterSpacing": "-0.02em",
                              "fontWeight": "700"
                      }
              ],
              "headline-lg-mobile": [
                      "28px",
                      {
                              "lineHeight": "36px",
                              "fontWeight": "700"
                      }
              ],
              "headline-md": [
                      "24px",
                      {
                              "lineHeight": "32px",
                              "fontWeight": "600"
                      }
              ],
              "label-sm": [
                      "12px",
                      {
                              "lineHeight": "16px",
                              "fontWeight": "500"
                      }
              ],
              "body-lg": [
                      "18px",
                      {
                              "lineHeight": "28px",
                              "fontWeight": "400"
                      }
              ],
              "headline-lg": [
                      "32px",
                      {
                              "lineHeight": "40px",
                              "letterSpacing": "-0.01em",
                              "fontWeight": "700"
                      }
              ]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
