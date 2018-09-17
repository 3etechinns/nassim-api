'use strict';
const express = require('express');
const router = express.Router();
const controller = require('./transaction.controller');

router.get('/all', controller.getAllTransactions);
router.poset('/all', controller.createTransaction);

module.exports = router;