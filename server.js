require('dotenv').config();
const express = require('express');
const  mongoose = require('mongoose');
const  Product = require('./models/productModel');
const Category = require('./models/categoryModel.js');
const router = require('./routes/categoryRoutes.js');
const productRouter = require('./routes/productRoutes.js');
const errorMiddleware = require('./middleware/errorMiddleware.js');


const app = express();

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT 

//Middleware 
app.use(express.json());

app.get('/', (req, res) => {
    throw new Error("fake Error");
    //res.send('I just changed the port')
})
app.use(errorMiddleware);

// Create
app.use('/api', productRouter)
app.use("/api", router);



//Retrieve
app.use('/api', productRouter);
app.use('/api',router);

//Retrieve by ID
app.use('/api', productRouter)

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('Connected to Database')
    app.listen(PORT, () => {
        console.log(`Connect on port ${PORT}`)
    })    
}).catch((error) => {
    console.log(error)
})
