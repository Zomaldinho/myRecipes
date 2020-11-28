const express = require('express');
const bcrybt = require('bcryptjs');
const User = require('../models/users');
const router = express.Router();

router.post('/register', (req, res) => {
  let { name, email, password } = req.body;
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!name || !email || !password || !email.match(mailformat)) {
    return res.status(400).json('Wrong Inputs');
  }
  let user = new User({
    name,
    email,
    password: bcrybt.hashSync(password, 12),
  });
  user
    .save()
    .then((user) =>
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        date: user.date,
      })
    )
    .catch(console.log);
});

router.post('/signin', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json('Empty Inputs');
  }
  User.findOne({ email: email })
    .then((user) => {
      const validPass = bcrybt.compareSync(password, user.password);
      if (validPass) {
        return res.json({
          id: user._id,
          name: user.name,
          email: user.email,
          date: user.date,
        });
      } else {
        return res.status(400).json('Wrong Credentials');
      }
    })
    .catch((err) => res.status(400).json('Unable to get the user'));
});

module.exports = router;
