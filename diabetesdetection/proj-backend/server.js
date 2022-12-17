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

// const patientResultsTemplate = new mongoose.Schema({
//     Patient:{
//         type:String,
//         required: true
//     }
// });
  
// const Product = mongoose.model('metrics', patientResultsTemplate);
// app.get('/products', function(req, res) {
//     Product.find({}, function(err, products) {
//       if (err) return console.error(err);
//       res.send(products);
//     });
//   });

app.listen(4000, ()=> console.log("Server Is Up & Running"));

