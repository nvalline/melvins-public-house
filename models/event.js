const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
	eventTitle: {
		type: String,
		required: true
	},
	startDate: {
		type: Date
		//* required: true
	},
	endDate: {
		type: Date
		//* required: true
	},
	location: {
		type: String
	},
	eventType: {
		type: String,
		required: true
	},
	otherType: {
		type: String
	},
	homeTeam: {
		type: String
	},
	awayTeam: {
		type: String
	}
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
