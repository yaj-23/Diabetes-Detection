const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrl = require('./routes/routes');
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Databse Connected"));

app.use(express.json());

app.use(cors()); 

app.use('/app', routesUrl)

app.listen(4000, ()=> console.log("Server Is Up & Running"));