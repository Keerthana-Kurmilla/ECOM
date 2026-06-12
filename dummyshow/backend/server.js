const express = require('express');
const connectDb = require('./config/db');
const app = express();
const dotenv = require('dotenv').config()
const cors = require('cors')
const productRoutes = require('./routes/productRoutes')

app.use(cors())
app.use(express.json())

connectDb()
app.use('/api/products',productRoutes)



app.listen(process.env.PORT,()=>{
    console.log("server is running at port 3000")
})