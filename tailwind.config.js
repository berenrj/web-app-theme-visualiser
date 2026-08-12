/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Add installed font names to start of these arrays, 
      // fontFamily property names are the classNames e.g. font-content / font-banner
      fontFamily: {
        banner: ['Rock Salt', 'Rubik', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Rubik', 'Asap', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        content: ['Rubik', 'Asap', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}

