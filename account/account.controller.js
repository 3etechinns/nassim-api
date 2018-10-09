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

// (note 1) http response to axios in frontend Account component
exports.googleSignIn = (req, res) => {
	console.log('googleSignIn');
	// only executes if authentication passes
	return res.status(200).json(req.user);
	// redirect to '/home'
}

exports.register = (req, res) => {
	
}

// TODO
// addAccount() === register()
	// createPortfolio() assigned to Account
// getAccount()
// sign in
// verify token
// add Portfolio _id reference in register
