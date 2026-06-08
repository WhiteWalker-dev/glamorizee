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
        "surface-container-lowest": "#ffffff",
        "tertiary-fixed-dim": "#e2c195",
        "primary-container": "#faf8f5",
        "secondary-fixed-dim": "#c8c6c5",
        "surface-container-high": "#f1e6dd",
        "inverse-surface": "#352f29",
        "on-primary-container": "#727270",
        "on-error": "#ffffff",
        "background": "#fff8f4",
        "on-secondary-fixed": "#1b1c1c",
        "on-tertiary-container": "#886d47",
        "primary": "#5e5e5c",
        "on-tertiary-fixed-variant": "#594320",
        "outline-variant": "#c5c7c1",
        "tertiary": "#735a36",
        "outline": "#757873",
        "on-secondary-container": "#636262",
        "surface-container-low": "#fdf2e8",
        "surface-variant": "#ece1d7",
        "inverse-primary": "#c8c6c4",
        "surface-container": "#f7ece3",
        "tertiary-container": "#fff7f1",
        "secondary": "#5f5e5e",
        "on-primary-fixed-variant": "#474745",
        "on-background": "#201b15",
        "primary-fixed": "#e4e2df",
        "error-container": "#ffdad6",
        "inverse-on-surface": "#faefe5",
        "surface": "#fff8f4",
        "on-tertiary-fixed": "#281800",
        "on-primary-fixed": "#1b1c1a",
        "tertiary-fixed": "#ffddb0",
        "surface-tint": "#5e5e5c",
        "surface-container-highest": "#ece1d7",
        "on-surface-variant": "#454843",
        "on-error-container": "#93000a",
        "surface-dim": "#e3d8cf",
        "primary-fixed-dim": "#c8c6c4",
        "on-secondary-fixed-variant": "#474746",
        "secondary-fixed": "#e5e2e1",
        "on-tertiary": "#ffffff",
        "on-secondary": "#ffffff",
        "surface-bright": "#fff8f4",
        "error": "#ba1a1a",
        "on-surface": "#201b15",
        "secondary-container": "#e2dfde",
        "on-primary": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "section-gap": "80px",
        "margin-desktop": "64px",
        "base": "8px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "container-padding": "40px"
      },
      fontFamily: {
        "label-md": ["Montserrat"],
        "label-lg": ["Montserrat"],
        "headline-lg": ["Playfair Display"],
        "display-md": ["Playfair Display"],
        "body-md": ["Montserrat"],
        "headline-lg-mobile": ["Playfair Display"],
        "body-lg": ["Montserrat"],
        "display-lg": ["Playfair Display"]
      },
      fontSize: {
        "label-md": ["10px", {"lineHeight": "1.5", "letterSpacing": "0.1em", "fontWeight": "500"}],
        "label-lg": ["12px", {"lineHeight": "1.5", "letterSpacing": "0.15em", "fontWeight": "600"}],
        "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "500"}],
        "display-md": ["48px", {"lineHeight": "1.2", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "500"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "0.01em", "fontWeight": "300"}],
        "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "400"}]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
