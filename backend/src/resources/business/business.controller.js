const Business = require('./business.model');

const BusinessController = {};

BusinessController.getBusinessOverview = async (req, res) => {
	try {
		const {
			businessId,
		} = req.params;
		const business = await Business.findOne({
			business_id: businessId,
		});
		res.status(200).json({
			data: business,
		});
	} catch (e) {
		// console.error(e);
	}
};

module.exports = BusinessController;