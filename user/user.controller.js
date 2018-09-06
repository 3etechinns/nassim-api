'use strict';
const mongoose = require('mongoose');
const User = require('./user.model');

exports.getAllUsers = (req, res) => {
	User.find()
	.exec((err, data) => {
		if (err) {
			console.log(err);
			return res.status(400);
		}
		return res.status(200).send(data);
	});
}
/*
+ addUser()
+ getUser()
+ getAll()
*/