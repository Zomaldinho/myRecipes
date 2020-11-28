const express = require('express');
const bcrybt = require('bcryptjs');
const User = require('../models/users');
const router = express.Router();

router.post('/register', (req, res) => {
  let { name, email, password } = req.body;
  let user = new User({
    name,
    email,
    password: bcrybt.hashSync(password, 12),
  });
  user
    .save()
    .then((data) => res.json(data))
    .catch(console.log);
});

module.exports = router
