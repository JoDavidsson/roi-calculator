module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D0D0D',    // Dark background
        secondary: '#FFFFFF',  // Light background
        accent: '#FD9D2E',     // New accent color for buttons
        accentHover: '#E08A1E',// Slightly darker accent for hover states
        textLight: '#FFFFFF',  // Light text on dark backgrounds
        textDark: '#0D0D0D',   // Dark text on light backgrounds
        gray: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          800: '#333333',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'h1': '48px',
        'h2': '36px',
        'h3': '24px',
        'body': '16px',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
}