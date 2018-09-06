'use strict';
const mongoose = require('mongoose');
const Transaction = require('./transaction.model');

exports.getAllTransactions = (req, res) => { // get only user's transactions
	Transaction.find()
	.exec((err, data) => {
		if (err) {
			console.log(err);
			return res.status(400);
		}
		return res.status(200).send(data);
	});
}

/*
getTransactions(): Array
+ getTransactionsWithRange(dateRange) - Array.filter() get transactions within a date range
+ getValueWithRange(dateRage) - get net transaction value within a date range
+ addTransaction()
*/