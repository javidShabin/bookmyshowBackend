const Movie = require('../models/movieModel')

// Get all movies
const getAllMovies = (req, res) => {
    res.send("get all movies")
}
// Get movie by Id
const getMovieById = (req, res) => {
    res.send("get movie")
}
// Add movie
const addMovie = (req, res) => {
    res.send("add movie")
}
// Update movie
const updateMovie = (req, res) => {
    res.send("update movie")
}
// Delete movie
const deleteMovie = (req, res) => {
    res.send("delete movie")
}

module.exports = {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
}