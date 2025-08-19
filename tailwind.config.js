/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  prefix: 'tw-', // 👈 all utilities must start with tw-
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
