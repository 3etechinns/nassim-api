'use strict';
require('dotenv').config();
const express = require('express');
const router = express.Router();
const { login, register } = require('./auth.controller');

router.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); // can use specific domain
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
router.post('/register', register);
router.post('/login', login);

module.exports = router;