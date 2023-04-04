const { Schema, model } = require('mongoose');

const ArtworkSchema = new Schema({
  //name: { type: String, required: true },
  title: { type: String, required: true},
  description: { type: String, required: true},
  creator: { type: String, required: true },
  image: { type: String, required: true },
  tags: { type: Array, default: null },
  date: { type: Date, default: Date.now }
});

module.exports = model('Artwork', ArtworkSchema);
