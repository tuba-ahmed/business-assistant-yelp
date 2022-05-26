/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const mongoConnection = require('../../../config/dbConnection');

const alertSchema = new mongoose.Schema({
	customer_email: {
		type: String,
	},
	customer_name: {
		type: String,
	},
	rating: {
		type: Number,
	},
	review: {
		type: String,
	},
});

const insightSchema = new mongoose.Schema({
	insight_text: {
		type: String,
	},
	insight_type: {
		type: String,
	},
});

const summarySchema = new mongoose.Schema({
	engagement: {
		type: Number,
	},
	engagement_trend: {
		type: String,
	},
	negative_change: {
		type: Number,
	},
	negative_metric: {
		type: Number,
	},
	negative_trend: {
		type: String,
	},
	positive_change: {
		type: Number,
	},
	positive_metric: {
		type: Number,
	},
	positive_trend: {
		type: String,
	},
});

const businessSchema = new mongoose.Schema({
	business_id: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	name: {
		type: String,
	},
	alerts: [alertSchema],
	categories: {
		type: String,
		trim: true,
	},
	city: {
		type: String,
	},
	competitor_trend: {
		type: String,
	},
	insights: [insightSchema],
	review_trend: {
		type: String,
	},
	summary: summarySchema,
}, {
	timestamps: true,
});

// Ensure virtual fields are serialised.
businessSchema.set('toJSON', {
	virtuals: true,
});

const Business = mongoConnection.model('business_overview', businessSchema);
module.exports = Business;