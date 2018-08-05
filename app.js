'use strict';

const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

require('./lib/storage/db')('mongodb://localhost:27017/admin', { useNewUrlParser: true });

// app.use('/users', require('./routes/users'));

app.listen(3000, () => console.log('Http server started at port 3000...'));