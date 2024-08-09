const Products = require('../models/productModel.js');

const getProducts = async (req, res) =>{
    try{
        const product = await Products.find({})
        res.status(200).json(product);
    }
    catch(error){
        throw new Error (error.message);
    }
}

const getProduct = async (req, res) =>{
    try{
        const {id} = req.params;
        console.log (id);
        const product = await Products.findById(id);
        res.status(200).json(product);
    }catch(error){
        throw new Error(error.message);
}
}
module.exports = {
    getProducts,
    getProduct
}