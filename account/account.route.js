'use strict';
const express = require('express');
const router = express.Router();
const controller = require('./account.controller');

router.get('/all', controller.getAllAccounts);

module.exports = router;