'use strict';
const mongoose = require('mongoose');

// TODO
// reference Account _id
const Portfolio = mongoose.Schema({
  account: mongoose.Schema.Types.ObjectId,
	date: Date,
	portfolioValue: Number,
  holdings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Holding'
  }]
});

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

/*
Scenarios

portfolio value

100000000 transactions
according to date
100 aapl
10 aapl
calculate current value in real-time

TODO:
look up Indexing

*/