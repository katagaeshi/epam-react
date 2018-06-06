const serverConfig = require('./webpack.config.server');
const clientConfig = require('./webpack.config.client');

const mode = process.env.NODE_ENV;

module.exports = [
  serverConfig(mode),
  clientConfig(mode),
];
