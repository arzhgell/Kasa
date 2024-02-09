/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6060',
        grey: '#F6F6F6',
      },
      boxShadow: {
        'inner-bottom': 'inset 10px -70px 25px -29px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        hero: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('assets/illustrations/hero.svg')",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg-[url('*')])/,
    },
  ],
};
