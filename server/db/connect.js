const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://aimTaskUser:test1234@cluster0-306uy.mongodb.net/aimTask?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => console.log('Successfully connected to the database'))
  .catch((err) =>
    console.log('Could not connect to the database. Exiting now...', err)
  );
