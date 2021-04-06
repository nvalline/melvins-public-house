const router = require('express').Router();
const eventsController = require('../../controllers/eventsController');

// matches with '/api/events'
router.route('/').get(eventsController.findAll).post(eventsController.create);

// matches with /api/events/:id
router
	.route('/:id')
	// .get(eventsController.findById)
	.put(eventsController.update)
	.delete(eventsController.remove);

module.exports = router;
