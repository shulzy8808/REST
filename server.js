require('dotenv').config();
const cors = require('cors')
const express = require('express');
const  mongoose = require('mongoose');
const categoryRouter = require('./routes/categoryRoutes.js');
const sportswearRouter = require('./routes/sportswearRouter.js');
const errorMiddleware = require('./middleware/errorMiddleware.js');
const menswearRouter = require("./routes/menswearRouter.js");
const womenswearRouter = require("./routes/womenswearRouter.js");

const app = express();

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT 

const corsOptions = {
    origin: process.env.FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
//Middleware 
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('I just changed the port')
})

// Create
app.use("/api", categoryRouter);

//Retrieve
app.use('/api', sportswearRouter);
app.use('/api',categoryRouter);
app.use('/api', menswearRouter);
app.use('/api', womenswearRouter);

app.use(errorMiddleware);

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('Connected to Database')
    app.listen(PORT, () => {
        console.log(`Connect on port ${PORT}`)
    })    
}).catch((error) => {
    console.log(error)
})
