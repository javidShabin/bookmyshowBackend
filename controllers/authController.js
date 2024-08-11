const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  // find user using email
  const user = await User.findOne({ email: email });
  // if user is not fond send error as response
  if (!user) {
    return res.status(401).send("Unauthorised status");
  }
  // if have user existes check password
  const passwordsMatch = bcrypt.compareSync(password, user.password);

  if (passwordsMatch) {
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.SECRET_KEY
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.ENVIRONMENT === "Development" ? false : true,
      maxAge: 1 * 60 * 60 * 100,
    });
    res.send("Logged in..!");
  } else {
    res.status(401).send("Unauthorised accsess!");
  }
};

const verifyLogin = async (req, res) => {
    if (req.cookies.token) {
        res.send("Logged in")
    }else{
        res.status(401).send("Not logged in")
    }
}

module.exports = {
  login,
  verifyLogin
};
