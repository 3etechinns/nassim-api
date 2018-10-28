'use strict';
const express = require('express');
const router = express.Router();
const controller = require('./transaction.controller');
const { verifyToken } = require('../auth/auth.verification');

router.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); // can use specific domain
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
router.get('/all/:token', verifyToken, controller.getAllTransactions);
router.post('/all/:token', verifyToken, controller.createTransaction);

module.exports = router;