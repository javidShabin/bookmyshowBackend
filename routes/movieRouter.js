const express = require('express');
const { getAllMovies, getMovieById, addMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const router = express.Router()
// Get all movies
router.get('/', getAllMovies)
// Get movie By Id
router.get('/:movieId', getMovieById)
// Add movie
router.post('/', addMovie)
// Update movie
router.patch('/:movieId', updateMovie)
// Delete movie
router.delete('/:movieId', deleteMovie)

module.exports = router