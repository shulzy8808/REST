const express = require('express');
const menswearRouter = express.Router(); 
const {getMenswear,  getMenwear, postMenswear, updateMenswear, deleteMenswear} = require('../controllers/mencontroller.js');


menswearRouter.get("/menswear", getMenswear);
menswearRouter.get("/menswear/:id", getMenwear);
menswearRouter.post("/menswear", postMenswear);
menswearRouter.put("/menswear/:id", updateMenswear);
menswearRouter.delete("/menswear/:id", deleteMenswear);


module.exports = menswearRouter;