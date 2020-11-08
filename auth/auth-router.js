const router = require('express').Router();
const bcrypt = require('bcrypt');
const Users = require('./auth-model');
const jwt = require('jsonwebtoken');
require('dotenv').config();
router.post('/register', async (req, res, next) => {
	try {
		const { username, password } = req.body;

		const newUser = await Users.add({
			username,
			password: await bcrypt.hash(password, 14),
		});

		res.status(201).json(newUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/login', (req, res, next) => {
	const { username, password } = req.body;
	Users.findBy({ username: username })
		.then(([user]) => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = jwt.sign(
					{
						userID: user.id,
					},
					process.env.JWT_SECRET
				);
				res.status(200).json(token);
			} else {
				res.status(401).json({ message: 'Invalid credentials.' });
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// router.post('/login', (req, res) => {
// 	const { username, password } = req.body;
// 	if (username && password) {
// 		Users.findBy({ username: username })
// 			.then(([user]) => {
// 				if (user && bcrypt.compareSync(password, user.password)) {
// 					const token = generateToken(user);
// 					res.status(200).json(token);
// 				} else {
// 					res.status(401).json({ error: 'invalid credentials' });
// 				}
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 				res.status(500).json({ error: 'unable to log in' });
// 			});
// 	} else {
// 		res.status(400).json({ error: 'login requires a username and a password' });
// 	}
// });

function generateToken(user) {
	const payload = {
		username: user.username,
	};

	const options = {
		expiresIn: '1d',
	};
	return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = router;
