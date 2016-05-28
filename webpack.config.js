const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/source/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './source/index.js',
    './source/scripts/components/app.jsx',
    './source/scripts/components/header.jsx',
    './source/scripts/components/prompt.jsx'
    // './source/scripts/styles/style.css'
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, include: `${__dirname}/source`, loader: 'eslint-loader' },
      { test: /\.jsx?$/, include: `${__dirname}/source`, loader: 'babel-loader' }
      // { test: /\.css$/, include: `${__dirname}/source`, loader: 'style-loader!css-loader' }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/client`,
  },
  plugins: [HTMLWebpackPluginConfig],
};
