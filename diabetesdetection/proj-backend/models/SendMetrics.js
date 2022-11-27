const mongoose = require('mongoose');

const sendMetricsTemplate = new mongoose.Schema({
    gender:{
        type:String, 
        required: true
    },
    age:{
        type:String, 
    },
    urea:{
        type:String, 
    },
    crea:{
        type:String, 
    },
    hba1c:{
        type:String, 
    },
    chol:{
        type:String, 
    },
    hdl:{
        type:String, 
    },
    ldl:{
        type:String, 
    },
    vldl:{
        type:String, 
    },
    bmi:{
        type:String, 
    }
});

module.exports = mongoose.model('metrics', sendMetricsTemplate)

