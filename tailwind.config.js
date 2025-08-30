/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C8A64B',
          blue: '#0A2540',
          black: '#0B0B0B',
          grey: '#8A8F98',
        },
        gold: '#d4a964', // Keep existing for compatibility
        graytext: '#B0B0B0', // Keep existing for compatibility
      },
      spacing: {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
        10: '40px',
        14: '56px',
        20: '80px',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        md: '0 4px 6px rgba(0,0,0,0.1)',
        lg: '0 10px 15px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
};
