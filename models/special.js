const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specialSchema = new Schema({
	specialType: {
		type: String,
		required: true
	},
	specialTitle: {
		type: String,
		required: true
	},
	specialDate: {
		type: Date,
		required: true
	}
});

const Special = mongoose.model('Special', specialSchema);

module.exports = Special;
