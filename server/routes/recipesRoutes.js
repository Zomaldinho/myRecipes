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
  let { title, ingredients, recipe } = req.body;
  let { path } = req.file;
  let rec = new Recipe({
    title,
    ingredients,
    recipe,
    image: path,
  });
  rec
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.get('/', (req, res) => {
  Recipe.find()
    .sort('-date')
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Unable to get data'));
});

router.get('/recipe/:id', (req, res) => {
  let id = req.params.id;
  Recipe.findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.delete('/delete/:id', (req, res) => {
  Recipe.findByIdAndRemove(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Unable to delete recipe'));
});

router.post('/edit/:id', (req, res) => {
  const { title, ingredients, recipe } = req.body;
  if (!title || !ingredients || !recipe) {
    return res
      .status(400)
      .json('You can not submit empty Title and/or Description');
  }
  Recipe.findByIdAndUpdate(req.params.id, {
    $set: { title, ingredients, recipe, date: Date.now() },
  }, {new:true})
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
