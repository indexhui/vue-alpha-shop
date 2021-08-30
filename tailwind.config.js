module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['"Noto Sans TC"'],
    },
    extend: {
      spacing: {
        "1040": "65rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
