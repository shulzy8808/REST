const express = require('express');
const Category = require('../models/categoryModel.js');
const {getCategories, postCategories, getCategory, updateCategory, deleteCategory} = require('../controllers/categorycontroller.js')
const categoryRouter = express.Router();



categoryRouter.post('/categories', postCategories)
// Retrieving all information from the database
categoryRouter.get('/categories', getCategories);

// Retrieving infromation with ID
categoryRouter.get('/categories/:id', getCategory);

categoryRouter.put('/categories/:id', updateCategory);
categoryRouter.delete('/categories/:id', deleteCategory);


module.exports = categoryRouter;