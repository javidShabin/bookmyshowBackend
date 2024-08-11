require('dotenv').config()
const express = require("express");
const movieRouter = require('./routes/movieRouter')
const userRouter = require('./routes/userRouter')
const authRouter = require('./routes/authRouter')
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const app = express();
const PORT = 4000;

app.use(cors({
    credentials: true,
    origin: true
}));
app.use(express.json());
app.use(cookieParser())

app.use('/movies', movieRouter)
app.use('/useres', userRouter)
app.use('/auth', authRouter)

// Connect backend with database
async function main() {
  await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
}
main().then(() => console.log("Connected")).catch(err => console.log(err))


// Create server
app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
