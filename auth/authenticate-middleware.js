const { json } = require('express');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	const token = req.headers.token;
	if (token) {
		jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: 'Thou shalt not pass!' });
			} else {
				req.jwt = decodedToken;
				next();
			}
		});
	} else {
		res.status(401).json({ message: 'Thou shalt not pass!' });
	}
};
