const router = require('express').Router();
const specialsController = require('../../controllers/specialsController');

// matches with '/api/specials'
router
	.route('/')
	.get(specialsController.findAll)
	.post(specialsController.create);

// matches with '/api/specials/:id'
router
	.route('/:id')
	.get(specialsController.findById)
	.put(specialsController.update)
	.delete(specialsController.remove);

module.exports = router;
