const Womenswear = require("../models/womenModel");
const asyncHandler = require("express-async-handler");

const getWomenswear = asyncHandler (async (req, res) => {
    try {
        const womenswear = await Womenswear.find({});
        res.status(200).json(womenswear);
    } catch (error) {
        throw new Error(error.message);
    }
})
const getWomenwear = asyncHandler( async (req, res) => {
    try {
        const {id} = req.params;
        const womenwear = await Womenswear.findById(id);
        res.status(200).json(womenwear);
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
        }
})

const postWomenswear = asyncHandler (async (req, res) => {
    try{
        const createWomenswear = await Womenswear.create(req.body);
        res.status(200).json(createWomenswear);
    }catch(error){
        throw new Error(error.message);
    }
})
const updateWomenswear = asyncHandler (async (req, res) => {
    try{
        const {id} = req.params;
        const womenswear = await Womenswear.findByIdAndUpdate(id, req.body);
        if(!womenswear){
            res.status(404);
            throw new Error(`Cannot find ID number ${id}`);
            }
        res.status(200).json(womenswear);
    } catch(error) {
        throw new Error(error.message);
    }
})

const deleteWomenswear = asyncHandler (async(req, res) => {
    try{
        const {id} = req.params;
        const  womenswear = await Womenswear.findByIdAndDelete(id);
        if(!womenswear){
            res.status(404);
            throw new Error(`Cannot find ID number ${id}`);
            }
        res.status(200).json(womenswear);
    } catch(error){
     throw new Error(error.message);
    }
})

module.exports = {
    getWomenswear,
    getWomenwear,
    postWomenswear,
    updateWomenswear,
    deleteWomenswear
}