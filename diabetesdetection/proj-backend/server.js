const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrl = require('./routes/routes');
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
  });

app.use(express.json());

app.use(cors()); 

app.use('/app', routesUrl)



app.listen(4000, ()=> console.log("Server Is Up & Running"));

