'use strict';
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const Account = require('../account/account.model'); // without curly brackets

exports.register = (req, res) => {
	console.log(`req.body.email in auth.controller: ${req.body.email}`)

	Account.findOne({	email: req.body.email }, (err, account) => {
		if (err) {
			res.status(500).json({message: "Something happened while registering."});
			return;
		}
		if (account) {
			res.status(307).json({
					message: 'Account already exists.'
			});
			return;
		}
		let newAccount = new Account();
		newAccount.email = req.body.email;
		newAccount.hashPassword(req.body.password)
					.then(hashed => {
							newAccount.password = hashed;
							newAccount.save()
									.then(account => {
											res.status(201).json({
													message: 'The account has been created.',
													data: account
											});
									})
									.catch(err => {
											res.status(500).json({
													message: 'Something happened while saving account.'
											});
									});
					})
					.catch(err => {
							res.status(500).json({
									message: 'Something happened while encrypting password.'
							});
					});
	});
}

exports.login = (req, res) => {
	Account.findOne({ email: req.body.email }, (err, account) => {
		if (err) {
			res.status(500).json({message: "Something happened while logging in."});
			return;
		}  
		if (!account) {
			res.status(404).json({
				message: 'User not found.'
			});
			return;
		} 
		if (!account.comparePasswords(req.body.password)) {
			res.status(401).json({
				message: 'Incorrect email or password.'
			});
			return;
		}
		let user = {
			userId: account._id,
			email: account.email
		};
		let token = jwt.sign(user, JWT_SECRET);
		res.status(200).json({
			message: 'Token has been generated.',
			data: {
				token: token,
				email: account.email,
				userId: account._id 
			}
		});
	})
}