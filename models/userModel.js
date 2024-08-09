const mongoose = require('mongoose')

// User schema
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String
})
const User = mongoose.model("user", userSchema)
module.exports = User