const path = require("path");

module.exports = {
  entry: "./src/app/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      handlebars: "handlebars/dist/handlebars.min.js",
      entities: path.resolve(__dirname, "src/entities/"),
      features: path.resolve(__dirname, "src/features/"),
      pages: path.resolve(__dirname, "src/pages/"),
      shared: path.resolve(__dirname, "src/shared/"),
      app: path.resolve(__dirname, "src/app/"),
    },
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
