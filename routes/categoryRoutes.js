const express = require('express');
const Category = require('../models/categoryModel.js');
const {getCategories, postCategories, getCategory, updateCategory, deleteCategory} = require('../controllers/categorycontroller.js')
const router = express.Router();



router.post('/categories', postCategories)
// Retrieving all information from the database
router.get('/categories', getCategories);

// Retrieving infromation with ID
router.get('/categories/:id', getCategory);

router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);


module.exports = router;