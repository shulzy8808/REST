const Sportswear = require('../models/sportModel.js');
const asyncHandler = require("express-async-handler");

const getSportswear = asyncHandler (async (req, res) =>{
    try{
        const sportswear = await Sportswear.find({})
        res.status(200).json(sportswear);
    }
    catch(error){
        throw new Error (error.message);
    }
})

const getSportwear = asyncHandler ( async (req, res) =>{
    try{
        const {id} = req.params;
        console.log (id);
        const sportswear = await Sportswear.findById(id);
        res.status(200).json(sportswear);
    }catch(error){
        throw new Error(error.message);
}}
)

const postSportswear = asyncHandler (async (req, res) => {
    try{
        const createsportswear = await Sportswear.create(req.body);
        res.status(200).json(createsportswear);
    }catch(error){
        throw new Error(error.message);
    }
})
const updateSportswear = asyncHandler (async (req, res) => {
    try{
        const {id} = req.params;
        const sportswear = await Sportswear.findByIdAndUpdate(id, req.body);
        if(!sportswear){
            res.status(404);
            throw new Error(`Cannot find ID number ${id}`);
            }
        res.status(200).json(sportswear);
    } catch(error) {
        throw new Error(error.message);
    }
})

const deleteSportswear = asyncHandler (async (req, res) => {
    try{
        const {id} = req.params;
        const sportswear = await Sportswear.findByIdAndDelete(id);
        if(!sportswear){
            res.status(404);
            throw new Error(`Cannot find ${id} number`);
        }
        res.status(200).json(sportswear);
    }catch(error) {
        throw new Error(error.message);
    }
})
module.exports = {
    getSportswear,
    getSportwear, 
    postSportswear,
    deleteSportswear,
    updateSportswear
}