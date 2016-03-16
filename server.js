'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.render('index');
});

mongoose.connect('mongodb://localhost:27017/sort-this-recipe', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Sort This Recipe server running on port: ${port}`);
  });
});

