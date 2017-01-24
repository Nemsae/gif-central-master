const express = require('express');

const Search = require('../models/Search');

const router = new express.Router();

router.route('/')
.get((req, res) => {
  Search.gifSearch(req.query, (err, data) => {
    res.status(err ? 400 : 200).send(err || data);
  });
});

module.exports = router;
