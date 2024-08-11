const express = require('express');
const { getSportswear, getSportwear, postSportswear, deleteSportswear, updateSportswear} = require('../controllers/sportcontroller');
const  sportswearRouter = express.Router();


sportswearRouter.get('/sportswear', getSportswear);
sportswearRouter.get('/sportswear/:id', getSportwear);
sportswearRouter.post("/sportswear", postSportswear);
sportswearRouter.put("/sportswear/:id", deleteSportswear);
sportswearRouter.delete('/sportswear/:id', updateSportswear);

module.exports = sportswearRouter;