/* eslint-disable no-console */

const path = require('path');

module.exports = {
  name: 'client',
  target: 'web',
  entry: [
    '../public/app.jsx',
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      path.resolve(__dirname, '../'),
      path.resolve(__dirname, '../node_modules'),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, '../dist/'),
  },
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    port: 9000,
    stats: 'errors-only',
    watchContentBase: true,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
};
