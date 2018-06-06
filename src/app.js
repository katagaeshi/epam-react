const express = require('express');
const morgan = require('morgan');
// const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const webpackConfig = require('./../webpack.config');

const compiler = webpack(webpackConfig);

// const serverRenderer = require('./../dist/serverRenderer.js').default;

const app = express();

// const PUBLIC_PATH = path.join(__dirname, '../dist');
const PORT = 3000;

app.use(morgan('tiny'));
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));
// app.use(serverRenderer());


app.listen(PORT, () => console.log(`Listening port number ${PORT}`));
