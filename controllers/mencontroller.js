const Menswear = require("../models/menModel");
const asyncHandler = require("express-async-handler");

const getMenswear = asyncHandler (async (req, res) => {
    try {
        const menswear = await Menswear.find({});
        res.status(200).json(menswear);
    } catch (error) {
        throw new Error(error.message);
    }
})
const getMenwear = asyncHandler( async (req, res) => {
    try {
        const {id} = req.params;
        const menswear = await Menswear.findById(id);
        res.status(200).json(menswear);
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
        }
})

const postMenswear = asyncHandler (async (req, res) => {
    try{
        const createMenswear = await Menswear.create(req.body);
        res.status(200).json(createMenswear);
    }catch(error){
        throw new Error(error.message);
    }
})
const updateMenswear = asyncHandler (async (req, res) => {
    try{
        const {id} = req.params;
        const menswear = await Menswear.findByIdAndUpdate(id, req.body);
        if(!menswear){
            res.status(404);
            throw new Error(`Cannot find ID number ${id}`);
            }
        res.status(200).json(menswear);
    } catch(error) {
        throw new Error(error.message);
    }
})

const deleteMenswear = asyncHandler (async(req, res) => {
    try{
        const {id} = req.params;
        const  menswear = await Menswear.findByIdAndDelete(id);
        if(!menswear){
            res.status(404);
            throw new Error(`Cannot find ID number ${id}`);
            }
        res.status(200).json(menswear);
    } catch(error){
     throw new Error(error.message);
    }
})

module.exports = {
    getMenswear,
    getMenwear,
    postMenswear,
    updateMenswear,
    deleteMenswear
}