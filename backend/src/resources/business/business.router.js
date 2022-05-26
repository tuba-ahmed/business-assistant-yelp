const express = require('express');

const router = express.Router();

const {
	getBusinessOverview
} = require('./business.controller');

router.route('/get-business-overview/:businessId').get(getBusinessOverview);

module.exports = router;