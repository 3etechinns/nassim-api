'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const portfolioRouter = require('./portfolio/portfolio.route');
const stockRouter = require('./stock/stock.route');
const transactionRouter = require('./transaction/transaction.route');

// app
const app = express();
app.use(bodyParser.json());
app.use('/portfolio', portfolioRouter);
app.use('/stock', stockRouter);
app.use('/transaction', transactionRouter);

// open server
app.listen(8080, () => {
	console.log('Server is running.');
});

// close server