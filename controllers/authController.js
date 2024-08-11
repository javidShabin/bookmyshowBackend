const bcrypt = require('bcrypt')
const User = require("../models/userModel");
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const {email, password} = req.body;
    // find user using email
    const user = await User.findOne({email: email})
    // if user is not fond send error as response
    if (!user) {
        return res.status(401).send("Unauthorised status")
    }
    // if have user existes check password
    const passwordsMatch = bcrypt.compareSync(password, user.password);
    
    if (passwordsMatch) {
        const token = jwt.sign({_id: user._id, email: user.email}, process.env.SECRET_KEY);
        res.json(token)
    }else{
        res.status(401).send("Unauthorised accsess!")
    }
}

module.exports = {
    login
}