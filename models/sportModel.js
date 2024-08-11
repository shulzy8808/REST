const mongoose = require('mongoose');

const sportswearSchema = mongoose.Schema(
    { 
        name: {
            type: String,
            required: true,
         },
         img: {
            type: String,
            required: true
         },
         price: {
            type: Number,
            require: true
         }
    },
    {
        timestamps: true
    }
)

const Sportswear = mongoose.model('Sportswear', sportswearSchema);

module.exports = Sportswear;