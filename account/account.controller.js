'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Account = require('./account.model');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

// Only allowed for administrator role
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

// TODO
// addAccount() === register()
	// createPortfolio() assigned to Account
// getAccount()
// sign in
// verify token
// add Portfolio _id reference in register
