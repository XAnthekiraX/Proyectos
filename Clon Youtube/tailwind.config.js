/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      display: ['responsive', 'hover', 'focus'],
      width: ['responsive', 'hover', 'focus'],
      height: ['responsive', 'hover', 'focus'],
      colors: {
        'alto': {
          '50': '#f7f7f7',
          '100': '#ededed',
          '200': '#d9d9d9',
          '300': '#c8c8c8',
          '400': '#adadad',
          '500': '#999999',
          '600': '#888888',
          '700': '#7b7b7b',
          '800': '#676767',
          '900': '#545454',
          '950': '#363636',
        },
        borderRadius: {
          'rounded':{
            
          },
        },
      },
    },
    
  },
  plugins: [],
}

