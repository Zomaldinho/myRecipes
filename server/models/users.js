const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim:true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  password: {
    type: String,
    required: true,
    trim:true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('users', UsersSchema);