const webpack = require('webpack');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const source = `${__dirname}/client/source/`;
const build = process.argv.indexOf('--build') !== -1;
const config = {
  entry: source,
  output: {
    path: `${__dirname}/client/build/`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: source,
        loaders: ['babel?presets[]=es2015,presets[]=react'],
      },
      {
        test: /\.css$/,
        include: source,
        loaders: ['isomorphic-style-loader', 'css-loader', 'postcss-loader'],
      }
    ],
  },
  plugins: [
    new WebpackBrowserPlugin(),
    new HtmlWebpackPlugin({
      template: `${source}index.html`,
    })
  ],
};

if (build) {
  config.module.loaders[0].loaders.push('eslint');
  config.output.filename = 'bundle.min.js';
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  );
  config.plugins[1].options.minify = {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    html5: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeRedundantAttributes: true,
  };
}

module.exports = config;
