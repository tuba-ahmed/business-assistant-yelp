var express = require('express');
var router = express.Router();

router.route('/login').post(async (req, res) => {
	const {
		email,
		password,
	} = req.body;

	if (email === 'joe.davis@gmail.com' && password === 'joe') {
		res.status(200).send({
			data: {
				user: {
					email,
					password,
					businesses: [],
				},
				token: "jwtToken",
			},
		});
	}
});
module.exports = router;