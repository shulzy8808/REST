const mongoose = require("mongoose");

const categorySchema = mongoose.Schema (
    {
        name:{
            type: String,
            require: true
        },
        img:{
            type: String,
            require: true
        }
    } ,
    {
        timstamps: true
    }
)

const Category = mongoose.model("Category", categorySchema)

module.exports =  Category