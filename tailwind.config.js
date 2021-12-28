module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.3s',
      },
      keyframes: {
        fadeIn: {
          '0%, 100%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backgroundImage: (theme) => ({
        'window-image': "url('/images/windows11.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
