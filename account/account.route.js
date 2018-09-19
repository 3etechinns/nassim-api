'use strict';
const express = require('express');
const router = express.Router();
const controller = require('./account.controller');
const passport = require('passport');

// Allow CORS; can be put in server for broader access
router.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); // can use specific domain
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
router.get('/all', controller.getAllAccounts);
router.get('/auth/google', passport.authenticate('google'), controller.googleSignIn);

// how to go to '/home' in the backend


/*
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
*/

module.exports = router;