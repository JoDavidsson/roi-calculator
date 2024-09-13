module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#FFFFFF',
        accent: '#FD9D2E',
        'text-dark': '#111111',
        'text-light': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': '48px',
        'h2': '36px',
        'h3': '24px',
        'body': '16px',
      },
      spacing: {
        'small': '8px',
        'medium': '16px',
        'large': '32px',
      },
      borderRadius: {
        'default': '8px',
      },
    },
  },
  plugins: [],
}