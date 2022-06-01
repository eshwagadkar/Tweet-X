const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/App.js",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
};
