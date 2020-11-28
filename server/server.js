const express = require('express');
require('./db/connect')
const usersRoutes = require('./routes/userRoutes')

const app = express();
app.use(express.json())
app.use(usersRoutes)

port = process.env.PORT || 5000

app.listen(port, ()=> console.log(`App is running on port ${port}`))