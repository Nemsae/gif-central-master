const router = require('express').Router();

router.use('/searches', require('./searches'));
router.use('/background', require('./background'));

module.exports = router;
