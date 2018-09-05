'use strict';
const express = require('express');
const router = express.Router();
const controller = require('./portfolio.controller');

router.get('/all', controller.getAllPortfolios);

module.exports = router;