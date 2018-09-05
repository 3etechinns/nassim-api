'use strict';
const mongoose = require('mongoose');

const Transaction = mongoose.Schema({
	date: Date,
	type: String,
	stock: String,
	price: Number,
	quantity: Number,
	totalValue: Number
})

module.exports = mongoose.model('Transaction', Transaction, 'transaction');
/*
date
type: [buy/sell]
security
quantity
price per share
total value
*/