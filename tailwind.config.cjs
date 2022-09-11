module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-2': 'repeat(2, minmax(0, auto))'
      }
    }
  },
  plugins: [],
}
