const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const sendMetricsTemplateCopy = require("../models/SendMetrics");
const scsa = require("../models/patientResults");
const dbCon = require('../server');


router.post("/sendMetrics", (request, response) => {
  const sentMetrics = new sendMetricsTemplateCopy({
    gender: request.body.gender,
    age: request.body.age,
    urea: request.body.urea,
    crea: request.body.crea,
    hba1c: request.body.hba1c,
    chol: request.body.chol,
    tg: request.body.tg,
    hdl: request.body.hdl,
    ldl: request.body.ldl,
    vldl: request.body.vldl,
    bmi: request.body.bmi,
  });
  sentMetrics
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});


const patientResultsTemplate = new mongoose.Schema({
  Patient:{
      type:String,
      required: true
  }
});

const Product = mongoose.model('tests', patientResultsTemplate);

router.get('/patientResult', function(req, res) {
  Product.find({}, function(err, products) {
    if (err) return console.error(err);
    res.send(products);
  });
});


module.exports = router;
