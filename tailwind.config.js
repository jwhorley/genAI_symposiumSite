/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'burnt-orange': '#bf5700',
        'slate-dark': '#333f48',
        burnt: {
          orange: '#bf5700',
          brown: '#7d4e3a',
        },
        tan: {
          dark: '#c39471',
          medium: '#dcb89d',
          light: '#f0e6d5',
        },
        slate: {
          dark: '#333f48',
          medium: '#2c3e50',
        },
        sky: '#8db4d2',
        navy: '#2b5278',
        gold: '#c6a962',
        green: '#5f8052',
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
