const mongoose = require('mongoose');

const gifBackgroundSchema = new mongoose.Schema({
  imageUrl: { type: String },
});

const GifBackground = mongoose.model('GifBackground', gifBackgroundSchema);

module.exports = GifBackground;
