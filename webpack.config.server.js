/* eslint-disable no-console */

const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = (env) => {
  console.log('chosen env: ', env);
  if (!env) {
    console.log('production is set by default');
  }
  const processEnv = env || 'production';
  console.log('NODE_ENV: ', processEnv);

  return {
    name: 'server',
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
        include: /styles/,
        use: [{
          loader: 'css-loader/locals',
          options: {
            modules: true,
            localIdentName: '[name]',
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

    plugins: [
      new webpack.NamedModulesPlugin(),
    ],
  };
};
