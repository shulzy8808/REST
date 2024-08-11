const express = require('express');
const womenswearRouter = express.Router(); 
const { getWomenswear, getWomenwear, postWomenswear, updateWomenswear, deleteWomenswear} = require('../controllers/womencontroller.js');


womenswearRouter.get("/womenswear", getWomenswear);
womenswearRouter.get("/womenswear/:id", getWomenwear);
womenswearRouter.post("/womenswear", postWomenswear);
womenswearRouter.put("/womenswear/:id", updateWomenswear);
womenswearRouter.delete("/womenswear/:id", deleteWomenswear);


module.exports = womenswearRouter;