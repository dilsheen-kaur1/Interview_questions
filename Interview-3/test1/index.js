const logger = require('./logger');
const express = require('express');
const app = express()

app.use(logger);

const port = 3000;
app.listen((port)=> console.log('on 3000'));
