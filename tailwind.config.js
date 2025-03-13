/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: () => ({
        'white': '#fff',
        'black': '#000',
        'grey' : 'rgba(51,51,51)'
      }),
      spacing: {
        'space' : 'clamp(20px, 10.41vw, 200px)',
        '20' : 'clamp(10px, 1.04vw, 20px)',
        '100' : 'clamp(50px, 5.2vw, 100px)',

      },
      fontSize: {
        '14' : 'clamp(12px, 0.72vw, 14px)',
        '15' : 'clamp(13px, 0.784vw, 15px)'
      }

    },
  },
  plugins: [],
}

