'use strict';
const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId; 

const Portfolio = require('./portfolio.model');
const Transaction = require('../transaction/transaction.model');

exports.getPortfolio = (req, res) => {
	Transaction.find({account: ObjectId(req.user.userId)})
			.exec((err, data) => {
				if (err) {
					console.log(err);
					return res.status(400);
				}
				let queryResult = {};
				data.forEach((val, i) => {
					console.log(val);
					// get all values of val.symbol
					// get count of each value of val.symbol
					let key = val.symbol;
					if (!queryResult[key]) {
						queryResult[key] = {
							totalValue: val.totalValue,
							totalQuantity: val.quantity,
							counter: 1,
							transactions: new Array(val)
						}
					} else {
						queryResult[key].totalValue += val.totalValue;
						queryResult[key].totalQuantity += val.quantity;
						queryResult[key].counter += 1;
						queryResult[key].transactions.push(val);
					}
				});
				return res.status(200).send(queryResult);
			})
}
// TODO
// change this to:
// upon Register(), create empty portfolio
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