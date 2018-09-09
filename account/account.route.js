'use strict';
const express = require('express');
const router = express.Router();
const controller = require('./.controller');

router.get('/all', controller.getAllAccounts);