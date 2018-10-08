'use strict';
const mongoose = require('mongoose');

const Transaction = mongoose.Schema({
	account: mongoose.Schema.Types.ObjectId,
	date: { type: Date, index: true }
	type: String,
	symbol: String,
	name: String,
	price: Number,
	quantity: Number,
	totalValue: Number
});

module.exports = mongoose.model('Transaction', Transaction, 'transaction');
/*
date
type: [buy/sell]
security
quantity
price per share
total value
*/