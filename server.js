'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// model
const Account = require('./account/account.model');
const Portfolio = require('./portfolio/portfolio.model');
const Stock = require('./stock/stock.model');
const Transaction = require('./transaction/transaction.model');

// routes
const accountRouter = require('./account/account.route');
const portfolioRouter = require('./portfolio/portfolio.route');
const stockRouter = require('./stock/stock.route');
const transactionRouter = require('./transaction/transaction.route');
// app
const app = express();
app.use(bodyParser.json());
app.use('/account', accountRouter);
app.use('/portfolio', portfolioRouter);
app.use('/stock', stockRouter);
app.use('/transaction', transactionRouter);

let server;
function runServer(dbUrl, port=process.env.PORT) {
	return new Promise((resolve, reject) => {
		// Connect database
		mongoose.connect(dbUrl, { useNewUrlParser: true }, err => { // useNewUrlParser to avoid deprecation warning
			if (err) {
				return reject(err);
			}
			// Start server
			server = app.listen(port, () => {
				console.log(`Listening on port ${port}...`);
				resolve();
			})
			.on('error', err => { // keeps db available for server reconnect
				mongoose.disconnect();
				reject(err);
			})
		})
	})
}
function closeServer() {
	return new Promise((resolve, reject) => {
		console.log('Closing server...');
		server.close((err) => {
			if (err) {
				reject(err);
			}
			resolve();
		})
	})
}

if (require.main === module) {
	console.log('Called directly.');
	runServer(process.env.DATABASE_URL).catch(err => console.error(err));
} else {
	console.log('Required as a module.');
}
module.exports = { app, runServer, closeServer };