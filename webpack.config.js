/* eslint-disable no-console */

const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  const processEnv = (env && env.NODE_ENV) || 'production';
  console.log('NODE_ENV: ', processEnv);

  return {
    entry: './public/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist',
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
        test: /\.js$/,
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
    ],
  };
};
