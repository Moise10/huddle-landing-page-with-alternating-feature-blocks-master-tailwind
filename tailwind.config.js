module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      boxShadow:{
        '3xl': 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      },
      backgroundImage:{
        'desktop':' url(./dist/images/bg-hero-desktop.svg)'
      }
    },
  },
  plugins: [],
}
