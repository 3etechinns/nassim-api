'use strict';
const mongoose = require('mongoose');
const Portfolio = require('./portfolio.model');

exports.getPortfolio = (req, res) => {
	Portfolio.find()
	.exec((err, data) => {
		if (err) {
			console.log(err);
			return res.status(400);
		}
		return res.status(200).send(data);
	});
}
// account?
exports.createPortfolio = (req, res) => {
	const requiredFields = ['date', 'totalValue', 'symbol', 'name', 'quantity'];
	requiredFields.map(field => {
		if (!(field in req.body)) {
			const message = `Missing \`${field}\` in request body.`;
			console.error(message);
			res.status(400).send(message);
			return;
		}
	});
	// holdings can contain many different symbols...
	Portfolio.create({
		date: req.body.date,
		totalValue: req.body.totalValue,
		totalValueChange: 0,
		holdings: [{
			symbol: req.body.symbol,
			name: req.body.name,
			quantity: req.body.quantity
		}]
	}, (err, data) => {
		if (err) {
			handleError(err);
			return;
		} else {
			res.status(201).json({
				portfolio: data
			});
			return;
		}
	})
}

exports.updatePortfolio = (req, res) => {
	Portfolio.updateOne({});
}
/*
+ getPortfolioValueChange(dateRange) - get change in portfolio value within a date range
+ getSecurityValue(quantity) - price * quantity
+ getSecurityValueChange(dateRange) - get change in security value within a date range
*/