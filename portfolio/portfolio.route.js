'use strict';
const express = require('express');
const router = express.Router();
const controller = require('./portfolio.controller');

router.get('/all', controller.getAllPortfolios);
router.get('/update-one', controller.updateOnePortfolio);

module.exports = router;