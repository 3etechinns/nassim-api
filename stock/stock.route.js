'use strict';
const express = require('express');
const router = express.Router();
const controller = require('./stock.controller');

router.get('/all', controller.getAllStocks);

module.exports = router;