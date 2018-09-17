'use strict';
const mongoose = require('mongoose');
const Transaction = require('./transaction.model');

exports.getAllTransactions = (req, res) => { // get only Account's transactions
	Transaction.find()
	.exec((err, data) => {
		if (err) {
			console.log(err);
			return res.status(400);
		}
		return res.status(200).send(data);
	});
}

exports.createTransaction = (req, res) => {
	Transaction.create({
		date: req.body.date,
		type: req.body.type,
		symbol: req.body.symbol,
		name: req.body.name,
		price: req.body.price,
		quantity: req.body.quantity,
		totalValue: (req.body.price * req.body.quantity)
	}).save();
}

/*
getTransactions(): Array
+ getTransactionsWithRange(dateRange) - Array.filter() get transactions within a date range
+ getValueWithRange(dateRage) - get net transaction value within a date range
*/