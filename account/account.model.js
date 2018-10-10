'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Account = mongoose.Schema({
	date: Date,
	email: String,
	password: String,
	cash: Number,
	assets: Number,
	portfolios: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Portfolio'
	}],
	transactions: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Transaction'
	}],
	holdings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Holding'
  }]
});

Account.methods.validatePassword = function(password) {
	return bcrypt.compare(password, this.password);
}

Account.methods.hashPassword = function(password) {
	return bcrypt.hash(password, 10);
}

Account.methods.comparePasswords = function(password) {
	return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('Account', Account, 'account'); // without curly brackets when requiring

/*
date
email
password
cash
assets under management
Portfolios
Transactions
*/