'use strict';

const { Router } = require('express');
const { google } = require('googleapis');
const router = Router();

router.get('/google', (req, res) => {

  const client = new google.auth.OAuth2(
    '568097666308-5slbremnc6o703h7rjsidtluot37acck.apps.googleusercontent.com',
    'iT-f7kSo-Z5suvj_RaD4B9C5',
    'http://localhost:3001/auth/google/redirect',
  );

  const scopes = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ];

  const url = client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });

  res.redirect(url);
});

router.get('/google/redirect', (req, res) => {

  console.log(req.query);

  res.redirect(`http://localhost:3000/login/#code=${req.query.code}`);
});

module.exports = router;