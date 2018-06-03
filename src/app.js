const express = require('express');
const morgan = require('morgan');
const path = require('path');

const serverRenderer = require('./../dist/serverRenderer.js').default;

const app = express();

const PUBLIC_PATH = path.join(__dirname, '../public');
const PORT = 3000;

app.use(morgan('tiny'));
app.use(express.static(PUBLIC_PATH));
app.use(serverRenderer());
app.listen(PORT, () => console.log(`Listening port number ${PORT}`));
