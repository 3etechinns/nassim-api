'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const Account = require('../account/account.model'); // without curly brackets

exports.register = (req, res) => {
	console.log(`req.body.email in auth.controller: ${req.body.email}`)
	Account.find({	email: req.body.email })
		.then(exists => {
			console.log(`exists in Account.find(): ${exists}`)
			console.log(`exists === true: ${exists === true}`);
			if (exists !== '') {
				res.status(307).json({
					message: 'Account already exists.'
				});
				return;
			} else {
				let newAccount = new Account();
				newAccount.email = req.body.email;
				newAccount.hashPassword(password)
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
			}
		})
		.catch(err => {
			res.status(500).json({
				message: 'Something happened during the registration process.',
				data: err
			})
		});
}

exports.login = (req, res) => {
	Account.findOne({ email: req.body.email })
		.then(account => {
			if (!account) {
				res.status(404).json({
					message: 'User not found.'
				});
				return;
			} else if (!account.comparePasswords(req.body.password)) { // passwords don't match
				res.status(401).json({
					message: 'Incorrect email or password.'
				});
				return;
			} else {
				let user = {
					userId: user._id,
					email: user.email
				};
				let token = jwt.sign(user, JWT_SECRET);
				res.status(201).json({
					message: 'Token has been generated.',
					data: {
						token: token,
						email: user.email,
						userId: user._id 
					}
				});
			}
		})
		.catch(err => {
			res.status(500).json({
				message: 'Something happened during the login process.'
			})
		});
}