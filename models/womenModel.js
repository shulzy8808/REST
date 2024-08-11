const mongoose = require("mongoose");

const WomenswearSchema = mongoose.Schema(
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
      required: true
     }
},
{
    timestamps: true
})

const Womenswear = mongoose.model("Womenswear", WomenswearSchema);
module.exports = Womenswear