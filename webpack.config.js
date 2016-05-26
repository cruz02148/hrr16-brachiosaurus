var glob = require("glob");
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/source/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './source/index.js',
    './source/scripts/components/app.jsx',
    './source/scripts/components/banner.jsx',
    './source/scripts/components/footer.jsx',
    './source/scripts/components/header.jsx',
    './source/scripts/components/prompt.jsx'
    // glob.sync("./source/scripts/**/*.jsx")
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, include: __dirname + '/source', loader: "babel-loader"}
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + '/client'
  },
  plugins: [HTMLWebpackPluginConfig]
};
