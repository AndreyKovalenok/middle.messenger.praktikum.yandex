const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                modules: true,
                plugins: [
                  require("autoprefixer"),
                  require("postcss-nested"),
                  require("precss"),
                  require("postcss-sorting"),
                  require("postcss-modules")({
                    scopeBehaviour: "global", // can be 'global' or 'local',
                  }),
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "static/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
};
