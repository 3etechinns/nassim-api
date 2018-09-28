'use strict';
const mongoose = require('mongoose');

// TODO
// reference Account _id
const Portfolio = mongoose.Schema({
	date: Date,
	totalValue: Number,
  totalValueChange: Number,
  holdings: []
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