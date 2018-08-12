'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(helmet());

const dbConfig = require('./config/mongodb'); 
const connectionString = `mongodb+srv://${dbConfig.user}:${dbConfig.password}@admin-awyqb.mongodb.net/${dbConfig.database}?retryWrites=true`;

const db = require('./lib/storage/db');
db(connectionString, { useNewUrlParser: true });

app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));

app.listen(3001, () => console.log('Http server started at port 3001...'));