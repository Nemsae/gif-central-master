const express = require('express');
const router = new express.Router();
const GifBackground = require('../models/GifBackground');

router.route('/')
.put((req, res) => {
  console.log('req.query:', req.query);
  console.log('req.body:', req.body);
})
.get((req, res) => {
  console.log('get');
});

module.exports = router;
