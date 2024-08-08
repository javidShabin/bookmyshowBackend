const express = require('express');
const app = express();
const PORT = 4000;

// Create server
app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`)
})