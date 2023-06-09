/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xxs: '9px',
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      mxl: '24px',
      xxl: '28px',
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      'main-color': '#F0C23A',
      'disabled-color': '#87712D',
      'grey-65': '#656565',
      'grey-44': '#444444',
      'grey-97': '#979797',
      'grey-2D': '#2D2D2D',
      'grey-C9': '#C9C8C8',
      'bg-color': '#1f1f1f',
      'bg-disabled': '#87712D',
    },
    extend: {},
  },
  plugins: [],
};
