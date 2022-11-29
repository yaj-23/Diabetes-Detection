const mongoose = require('mongoose');

const sendMetricsTemplate = new mongoose.Schema({
    gender:{
        type:String, 
        required: true
    },
    age:{
        type:String,
        required: true 
    },
    urea:{
        type:String, 
        required: true
    },
    crea:{
        type:String, 
        required: true
    },
    hba1c:{
        type:String, 
        required: true
    },
    chol:{
        type:String, 
        required: true
    },
    tg:{
        type:String,
        required: true
    },
    hdl:{
        type:String, 
        required: true
    },
    ldl:{
        type:String, 
        required: true
    },
    vldl:{
        type:String, 
        required: true
    },
    bmi:{
        type:String, 
        required: true
    }
});

module.exports = mongoose.model('metrics', sendMetricsTemplate)

