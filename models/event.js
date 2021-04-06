const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
	eventTitle: {
		type: String,
		required: true
	},
	eventDate: {
		type: Date
		//* required: true
	},
	eventLocation: {
		type: String
	},
	eventType: {
		type: String,
		required: true
	},
	eventHomeTeam: {
		type: String
	},
	eventAwayTeam: {
		type: String
	}
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
