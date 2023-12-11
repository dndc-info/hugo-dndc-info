/** @type {import('tailwindcss').Config} */

// Modify your tailwind.config.js
const disabledCss = {
  img: false,
}

module.exports = {
  content: ['./**/*.html', './**/*.md'],
  theme: {
    extend: {
      typography: {
        DEFAULT: { css: disabledCss },
        sm: { css: disabledCss },
        lg: { css: disabledCss },
        xl: { css: disabledCss },
        '2xl': { css: disabledCss },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}