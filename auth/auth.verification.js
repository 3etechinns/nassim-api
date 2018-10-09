'use strict';
require('dotenv').config();
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

exports.verifyToken = (req, res, next) => {
	const token = req.headers.authorization || req.params.token;
	if (!token) {
		res.status(401).json({
			message: 'Token is not provided.'
		});
		return;
	} else {
		jwt.verify(token, JWT_SECRET, (err, decode) => {
			if(err) {
				res.status(500).json({
					message: 'Invalid token.'
				});
				return;
			} else {
				req.user = decode;
				next();
			}
		})
	}
}