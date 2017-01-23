const express = require('express');
const Search = require('../models/Search');
const router = new express.Router();

router.route('/')
.get((req, res) => {
  console.log('req.query:', req.query);
  Search.gifSearch(req.query);
});

module.exports = router;
