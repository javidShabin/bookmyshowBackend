require('dotenv').config()
const express = require("express");
const movieRouter = require('./routes/movieRouter')
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/movies', movieRouter)

// Connect backend with database
async function main() {
  await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
}
main().then(() => console.log("Connected")).catch(err => console.log(err))


// Create server
app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
