const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim:true,
  },
  ingredients: {
    type: String,
    required: true,
    trim:true,
  },
  recipe: {
    type: String,
    required: true,
    trim:true,
  },
  image: {
    type: String,
    trim:true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('recipes', UsersSchema);