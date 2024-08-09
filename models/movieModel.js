const mongoose = require("mongoose");

// Schema for movie
const movieSchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  description: String
});
const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie