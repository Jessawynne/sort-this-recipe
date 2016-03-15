'use strict';

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server Running');
});

mongoose.connect('mongodb://localhost:27017/sort-this-recipe', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Sort This Recipe server running on port: ${PORT}`);
  });
});
