'use strict';

const mongoose = require('mongoose');

const db = (connectionString, opts) => {
  mongoose.connect(connectionString, opts)
    .then(() => console.log('Connected to database...'));
}

module.exports = db;