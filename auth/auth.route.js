'use strict';
require('dotenv').config();
const express = require('express');
const router = express.Router();
const { login, register } = require('./auth.controller');

router.post('/auth/register', register);
router.post('/auth/login', login);

module.exports = router;