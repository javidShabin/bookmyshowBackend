
const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Get all user
const getAllUser = async (req, res) => {
    const user = await User.find({})
    res.json(user)
}

// Ad user
const addUser = async (req, res) => {
    const userData = req.body
    const hash = bcrypt.hashSync(userData.password, saltRounds);
    const user = new User({
        ...userData,
        password: hash
    })
    await user.save()
    res.json(user)
}

module.exports = {
    getAllUser,
    addUser
}