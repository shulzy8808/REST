const express = require('express');
const Products = require('../models/productModel');
const {getProducts, getProduct} = require('../controllers/productcontroller');
const  productRouter = express.Router();


productRouter.get('/products', getProducts);

productRouter.get('/products/:id', getProduct);

module.exports = productRouter;