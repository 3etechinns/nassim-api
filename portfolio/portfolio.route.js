'use strict';
const express = require('express');
const router = express.Router();
const controller = require('./portfolio.controller');

router.get('/', controller.getPortfolio);
router.post('/', controller.createPortfolio)
router.patch('/', controller.updatePortfolio);

module.exports = router;