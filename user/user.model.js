'use strict';
const mongoose = require('mongoose');

const User = mongoose.Schema({
	date: Date,
	email: String,
	password: String,
	cash: Number,
	assets: Number,
	portfolios: Array,
	transactions: Array
})

module.exports = mongoose.model('User', User, 'user');

/*
date
email
password
cash
assets under management
Portfolios
Transactions
*/