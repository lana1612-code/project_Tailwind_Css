/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    },
    extend: {
      screens: {
        '2md': '970px',
        '3md': '1171px',
      },
      colors: {
        primary: '#7E3AF2',
        primary_text: '#111928',
        secondary_text: '#6B7280',
      },
    },
  },
  plugins: [],
}



