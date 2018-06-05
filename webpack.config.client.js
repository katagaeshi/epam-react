/* eslint-disable no-console */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/template.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = (env) => {
  const processEnv = (env && env.NODE_ENV) || 'production';
  console.log('NODE_ENV: ', processEnv);

  return {
    entry: './public/app.jsx',
    resolve: {
      extensions: ['.js', '.jsx', '.css'],
      modules: [
        path.resolve(__dirname, './'),
        path.resolve(__dirname, './node_modules'),
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
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
      HtmlWebpackPluginConfig,
      new MiniCssExtractPlugin({
        filename: './css/[name].css',
      }),
    ],
  };
};
