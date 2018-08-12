'use strict';

const { Router } = require('express');
const { google } = require('googleapis');
const router = Router();

router.get('/', (req, res) => {

  console.log(req.cookies);
  
  res.status(200).send({});
});

module.exports = router;