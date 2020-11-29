const express = require('express');
require('./db/connect')
const usersRoutes = require('./routes/userRoutes')
const recipesRoutes = require('./routes/recipesRoutes')

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.json())
app.use('/uploads',express.static('uploads'))
app.use(usersRoutes)
app.use(recipesRoutes)

port = process.env.PORT || 5000

app.listen(port, ()=> console.log(`App is running on port ${port}`))