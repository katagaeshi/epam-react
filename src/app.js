const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const PUBLIC_PATH = path.join(__dirname, '/..', '/public');
const PORT = 3000;

app.use(morgan('tiny'));
app.use(express.static(__dirname + '/../public'));
app.listen(PORT, () => console.log(`Listening port number ${PORT}`));