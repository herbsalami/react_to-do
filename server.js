'use strict';

const logger = require('morgan');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

const app = express();
const PORT = process.argv[2] || process.env.port || 3000;

app.listen(PORT);
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger(isDev ? 'dev' : 'common'));
app.use(bodyParser.json());

app.use('/', require('./routes/index'));
app.use('/tasks', require('./routes/tasks'));

app.use((err, req, res, next) => {
  console.error(err, next);
  res.status(500).send('Something broke!');
});

