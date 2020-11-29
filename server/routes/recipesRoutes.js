const express = require('express');
const Recipe = require('../models/recipes');
const multer = require('multer');
const router = express.Router();
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  },
});
let upload = multer({ storage });

router.post('/recipe/create', upload.single('recipeImg'), (req, res) => {
  let { title, ingredients, recipe, owner } = req.body;
  let { path } = req.file;
  let rec = new Recipe({
    title,
    ingredients,
    recipe,
    owner,
    image: path,
  });
  rec
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.get('/', (req, res) => {
  Recipe.find()
    .sort('-date')
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Unable to get data'));
});

module.exports = router;
