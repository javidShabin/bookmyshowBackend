const Movie = require('../models/movieModel')

// Get all movies
const getAllMovies = async (req, res) => {
    const movie = await Movie.find({})
    res.json(movie)
}
// Get movie by Id
const getMovieById = async (req, res) => {
    const movie = await Movie.findById(req.params.movieId).exec();
    res.json(movie)
}
// Add movie
const addMovie = async (req, res) => {
    const movieData = req.body
    const movie = new Movie(movieData)
    await movie.save()
    res.json(movie)
}
// Update movie
const updateMovie = (req, res) => {
    res.send("update movie")
}
// Delete movie
const deleteMovie = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.movieId)
    res.send("delete movie")
}

module.exports = {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
}