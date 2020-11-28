const express = require('express');
const Recipe = require('../models/recipes');
const multer = require('multer');
const router = express.Router();
let upload = multer({ dest: 'uploads/' });

router.post('/recipe/create', upload.single('recipeImg'), (req,res)=>{

})
