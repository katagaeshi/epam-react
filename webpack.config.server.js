/* eslint-disable no-console */

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env) => {
  const processEnv = (env && env.NODE_ENV) || 'production';
  console.log('NODE_ENV: ', processEnv);

  return {
    target: 'node',
    entry: path.resolve(__dirname, './src/serverRenderer.jsx'),
    externals: [nodeExternals()],
    resolve: {
      extensions: ['.js', '.jsx', '.css'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'serverRenderer.js',
      libraryTarget: 'commonjs2',
    },
    mode: processEnv,
    module: {
      rules: [{
        test: /\.css$/,
        use: [{
          loader: 'css-loader/locals',
          options: {
            modules: true,
            localIdentName: '[name]-[hash:5]',
          },
        }],
      }, {
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
};
