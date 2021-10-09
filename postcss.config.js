module.exports = {
  modules: true,
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    require('precss'),
    require('postcss-sorting'),
    require("postcss-modules")({
      scopeBehaviour: "global", // can be 'global' or 'local',
    }),
  ]
} 