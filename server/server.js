const express = require('express');
require('./db/connect')

const app = express();
app.use(express.json())
port = process.env.PORT || 5000

app.listen(port, ()=> console.log(`App is running on port ${port}`))