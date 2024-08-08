const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 4000;

app.use(cors())
app.use(express.json())


// Create server
app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`)
})