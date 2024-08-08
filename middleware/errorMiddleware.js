const errorMiddleware = (err, req, res, next) => {
        console.log("Testing Error");
        res.json({message: err.message, stack: err.});
}


module.exports = errorMiddleware;