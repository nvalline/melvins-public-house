const router = require('express').Router();
const eventRoutes = require('./events');
const specialRoutes = require('./specials');

// Route handler
router.use('/events', eventRoutes);
router.use('/specials', specialRoutes);

module.exports = router;
