module.exports = {
  node: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      borderColor: ['responsive', 'hover', 'focus', 'focus-within', 'active'],
      borderWidth: ['responsive', 'first', 'hover', 'focus', 'active'],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
