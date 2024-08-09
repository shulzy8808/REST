const Categories= require('../models/categoryModel');
const asyncHandler = require('express-async-handler');

const getCategories = asyncHandler( async (req, res) => {
    try {
        const categories = await Categories.find({});
        res.status(200).json(categories);
    } catch (error) {
        throw new Error(error.message)
    }
}  )

const getCategory = asyncHandler( async (req, res) => {
    try {
        const {id} = req.params;
        const category = await Categories.findById(id);
        res.status(200).json(category);
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
        }
})


const postCategories = async (req, res) => {
    try {
        const categories = await Categories.create(req.body);
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateCategory = asyncHandler (async (req, res) => {
    try{
        const {id} = req.params;
        const categories = await Categories.findByIdAndUpdate(id, req.body);
        if(!categories){
            res.status(404);
            throw new Error(`Cannot find ID number ${id}`);
            }
        res.status(200).json(categories);
    } catch(error) {
        throw new Error(error.message);
    }
})

const deleteCategory = asyncHandler (async(req, res) => {
    try{
        const {id} = req.params;
        const  category = await Categories.findByIdAndDelete(id);
        if(!category){
            res.status(404);
            throw new Error(`Cannot find ID number ${id}`);
            }
        res.status(200).json(category);
    } catch(error){
     throw new Error(error.message);
    }
})

module.exports = {
    getCategories,
    postCategories,
    getCategory,
    updateCategory,
    deleteCategory
}