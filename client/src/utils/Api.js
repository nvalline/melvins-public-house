// dependencies
import axios from 'axios';

export const Api = {
	// GET all events
	getEvents: function () {
		return axios.get('/api/events');
	},
	// Save event to DB
	saveEvent: function (eventData) {
		return axios.post('/api/events', eventData);
	}
	// Update event in DB with given id
	// Delete event in DB with given id
};
