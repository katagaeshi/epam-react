/* eslint-disable no-console */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  console.log('chosen env: ', env);
  if (!env) {
    console.log('production is set by default');
  }

  const processEnv = env || 'production';
  console.log('NODE_ENV: ', processEnv);

  return {
    name: 'client',
    target: 'web',

    entry: [
      'webpack-hot-middleware/client',
      './public/app.jsx',
    ],

    resolve: {
      extensions: ['.js', '.jsx', '.css'],
      modules: [
        path.resolve(__dirname, './'),
        path.resolve(__dirname, './node_modules'),
      ],
    },

    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'bundle.js',
      publicPath: path.resolve(__dirname, 'dist/'),
    },

    mode: 'development',

    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 9000,
      stats: 'errors-only',
      watchContentBase: true,
    },

    module: {
      rules: [{
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
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
      new webpack.EnvironmentPlugin({
        NODE_ENV: processEnv,
      }),
      new MiniCssExtractPlugin({
        filename: './css/[name].css',
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};
