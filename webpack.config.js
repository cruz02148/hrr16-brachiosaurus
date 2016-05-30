const HtmlWebpackPlugin = require('html-webpack-plugin');
const source = `${__dirname}/source/`;
const build = `${__dirname}/client/`;

module.exports = {
  entry: source,
  output: {
    path: build,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: source,
        loaders: ['eslint-loader', 'babel?presets[]=es2015,presets[]=react'],
      }
      // {
      //   test: /\.css$/,
      //   include: `${__dirname}/source`,
      //   loaders: ['isomorphic-style-loader', 'css-loader', 'postcss-loader'],
      // }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${source}index.html`,
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    })
  ],
};
