'use strict';
const mongoose = require('mongoose');
const Stock = require('./stock.model');

exports.getAllStocks = (req, res) => {
	Stock.find()
	.exec((err, data) => {
		if (err) {
			console.log(err);
			return res.status(400);
		}
		return res.status(200).send(data);
	})
}