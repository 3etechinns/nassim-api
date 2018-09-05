'use strict';
const mongoose = require('mongoose');

const Stock = mongoose.Schema({
	date: Date,
	symbol: String,
	name: String,
	price: Number,
});

module.exports = mongoose.model('Stock', Stock, 'stock');

/*
date
price
type
name
symbol
*/