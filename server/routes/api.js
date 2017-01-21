const router = require('express').Router();

router.use('/searches', require('./searches'));

module.exports = router;
