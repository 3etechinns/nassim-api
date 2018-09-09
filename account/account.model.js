'use strict';
const mongoose = require('mongoose');

const Account = mongoose.Schema({
	date: Date,
	email: String,
	password: String,
	cash: Number,
	assets: Number,
	portfolios: Array,
	transactions: Array
})

module.exports = mongoose.model('Account', Account, 'account');

/*
date
email
password
cash
assets under management
Portfolios
Transactions
*/