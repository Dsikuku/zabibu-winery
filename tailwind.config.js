/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Tell Tailwind where to look for class names
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // All files in the app directory
    "./src/**/*.{js,ts,jsx,tsx,mdx}",      // All files in the src directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // All UI components
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",       // Any data or helper files
  ],
  theme: {
    extend: {
      // 2. Define your brand variables here so they work everywhere
      colors: {
        'zabibu-dark': '#1a1415',
        'zabibu-vine': '#4a0e0e',
        'zabibu-gold': '#c5a059',
        'zabibu-stone': '#f4f1ee',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}