'use strict';
const express = require('express');
const router = express.Router();
const controller = require('./transaction.controller');

router.get('/all', controller.getAllTransactions);
router.post('/all', controller.createTransaction);

module.exports = router;