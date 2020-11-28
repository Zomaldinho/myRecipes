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
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  }
});

module.exports = mongoose.model('recipes', UsersSchema);