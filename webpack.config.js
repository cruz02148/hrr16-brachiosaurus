const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const target = process.env.npm_lifecycle_event;
const source = `${__dirname}/client/source/`;
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const cssnano = require('cssnano');
const webpack = require('webpack');
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
        loader: ExtractTextPlugin.extract('isomorphic-style', 'css', 'postcss'),
      }
    ],
  },
  postcss: function () {
    return [autoprefixer, cssnano];
  },
  plugins: [
    new WebpackBrowserPlugin(),
    new HtmlWebpackPlugin({
      template: `${source}index.html`,
    }),
    new ExtractTextPlugin("style.css", {
        allChunks: false,
      }
    )
  ],
};

if (target === 'build') {
  config.module.loaders[0].loaders.push('eslint');
  config.output.filename = 'bundle.min.js';
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      }
    })
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
