'use strict';
const mongoose = require('mongoose');
const Account = require('./account.model');

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
/*
+ addAccount()
+ getAccount()
+ getAll()
*/