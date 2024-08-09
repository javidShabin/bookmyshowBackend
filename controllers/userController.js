
const User = require('../models/userModel')

// Get all user
const getAllUser = async (req, res) => {
    const user = await User.find({})
    res.json(user)
}

// Ad user
const addUser = async (req, res) => {
    const userData = req.body
    const user = new User(userData)
    await user.save()
    res.json(user)
}

module.exports = {
    getAllUser,
    addUser
}