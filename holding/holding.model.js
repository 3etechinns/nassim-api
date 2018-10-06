'use strict';
const mongoose = require('mongoose');

const Holding = mongoose.Schema({
	symbol: String,
	name: String,
	quantity: Number,
	price: Number,
	holdingValue: Number
});

module.exports = mongoose.model('Holding', Holding, 'holding');
