'use strict';
const mongoose = require('mongoose');
const Portfolio = require('./portfolio.model');

exports.getAllPortfolios = (req, res) => { // get only Account's portfolio(s)
	Portfolio.find()
	.exec((err, data) => {
		if (err) {
			console.log(err);
			return res.status(400);
		}
		return res.status(200).send(data);
	});
}

exports.createPortfolio = (req, res) => {
	Portfolio.create()
}

exports.updateOnePortfolio = (req, res) => {
	Portfolio.updateOne({});
}
/*
+ getPortfolioValueChange(dateRange) - get change in portfolio value within a date range
+ getSecurityValue(quantity) - price * quantity
+ getSecurityValueChange(dateRange) - get change in security value within a date range
*/