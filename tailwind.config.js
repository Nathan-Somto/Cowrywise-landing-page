/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  
  theme: {

    colors:{
      'blackOlive':'#3D3D3D',
      'raisinBlack':'#262626',
      'eerieBlack':'#1E1E1E',
      'Onyx':'393939',
    'black':'#000'
    },
    extend: {
      animation: {
        'spin-slow': 'spin 1.2s linear infinite',
      }}
  },
  plugins: [],
}
