'use strict';
const mongoose = require('mongoose');
const Transaction = require('./transaction.model');

exports.getAllTransactions = (req, res) => {
	Transaction.find()
	.exec((err, data) => {
		if (err) {
			console.log(err);
			return res.status(400);
		}
		return res.status(200).send(data);
	})
}