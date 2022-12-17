const mongoose = require('mongoose');

const patientResultsTemplate = new mongoose.Schema({
    Patient:{
        type:String,
        required: true
    }
});

//mongoose.model('as', patientResultsTemplate);
