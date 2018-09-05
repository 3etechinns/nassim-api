'use strict';
const mongoose = require('mongoose');
const Portfolio = require('./portfolio.model');

exports.getAllPortfolios = (req, res) => {
	Portfolio.find()
	.exec((err, data) => {
		if (err) {
			console.log(err);
			return res.status(400);
		}
		return res.status(200).send(data);
	});
}