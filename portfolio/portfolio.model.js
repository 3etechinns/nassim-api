'use strict';
const mongoose = require('mongoose');

const Portfolio = mongoose.Schema({
	date: Date,
	totalValue: Number,
	totalValueChange: Number
})

module.exports = mongoose.model('Portfolio', Portfolio, 'portfolio');

/*
date
Securities
  - price per share
  - quantity
  - value (price * quantity)
  - change
    - time horizon
total
  - value
  - change
    - time horizon
*/