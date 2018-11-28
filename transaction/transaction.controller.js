'use strict';
const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId; 
const Transaction = require('./transaction.model');


exports.getAllTransactions = (req, res) => { 
	// get only that Account's transactions
	Transaction.find({account: ObjectId(req.user.userId)})
	.exec((err, data) => {
		if (err) {
			console.log(err);
			return res.status(400);
		}
		return res.status(200).send(data);
	});
}



// ??? how to get user id?
exports.createTransaction = (req, res) => {
	const requiredFields = ['account','date', 'type', 'symbol', 'name', 'price', 'quantity', 'totalValue'];
	requiredFields.map(field => {
		if (!(field in req.body)) {
			const message = `Missing \`${field}\` in request body.`;
			console.error(message);
			res.status(400).send(message);
			return;
		}
	});
	Transaction.create({
		account: req.body.account,
		date: req.body.date,
		type: req.body.type,
		symbol: req.body.symbol,
		name: req.body.name,
		price: req.body.price,
		quantity: req.body.quantity,
		totalValue: req.body.totalValue
	}, (err, data) => {
		if (err) {
			handleError(err);
			return;
		} else {
			res.status(201).json({
				transaction: data
			});
			return;
		}
	});
}

/*
getTransactions(): Array
+ getTransactionsWithRange(dateRange) - Array.filter() get transactions within a date range
+ getValueWithRange(dateRage) - get net transaction value within a date range
*/