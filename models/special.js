const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specialSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	startDate: {
		type: Date,
		required: true
	},
	endDate: {
		type: Date,
		required: true
	},
	specialType: {
		type: String,
		required: true
	},
	otherType: {
		type: String
	}
});

const Special = mongoose.model('Special', specialSchema);

module.exports = Special;
