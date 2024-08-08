const Categories= require('../models/categoryModel');

const getCategories = async (req, res) => {
    try {
        const categories = await Categories.find({});
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}  

const getCategory = async (req, res) => {
    try {
        const {id} = req.params;
        const category = await Categories.findById(id);
        res.status(200).json(category);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}


const postCategories = async (req, res) => {
    try {
        const categories = await Categories.create(req.body);
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateCategory = async (req, res) => {
    try{
        const {id} = req.params;
        const categories = await Categories.findByIdAndUpdate(id, req.body);
        if(!categories){
        return res.status(404).json({message: `${id} cannot be found`});
        }
        res.status(200).json(categories);
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

const deleteCategory = async(req, res) => {
    try{
        const {id} = req.params;
        const  category = await Categories.findByIdAndDelete(id);
        if(!category){
            return res.status(404).json({message: `Cannot find ID number ${id}`});
        }
        res.status(200).json(category);

    } catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getCategories,
    postCategories,
    getCategory,
    updateCategory,
    deleteCategory
}