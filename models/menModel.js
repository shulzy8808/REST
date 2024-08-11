const mongoose = require("mongoose");

const MenswearSchema = mongoose.Schema(
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
})

const Menswear = mongoose.model("Menswear", MenswearSchema);
module.exports = Menswear