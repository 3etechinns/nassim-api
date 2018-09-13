'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Account = require('./account.model');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

exports.getAllAccounts = (req, res) => {
	Account.find()
	.exec((err, data) => {
		if (err) {
			console.log(err);
			return res.status(400);
		}
		return res.status(200).send(data);
	});
}

exports.googleSignIn = (req, res) => {
	// passport strategy
	passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
    callbackURL: "http://localhost:3000"
  },
		function(accessToken, refreshToken, profile, cb) {
			Account.findOrCreate({ googleId: profile.id }, function (err, user) {
				return cb(err, user);
			});
		}
	));
}
/*
+ addAccount()
+ getAccount()
+ getAll()
*/