const express = require('express');
const router = express.Router();
const sendMetricsTemplateCopy = require('../models/SendMetrics')

router.post('/sendMetrics', (request, response) => {
    const sentMetrics = new sendMetricsTemplateCopy({
        gender:request.body.gender,
        age:request.body.age,
        urea:request.body.urea,
        crea:request.body.crea,
        hba1c:request.body.hba1c,
        chol:request.body.chol,
        tg:request.body.tg,
        hdl:request.body.hdl,
        ldl:request.body.ldl,
        vldl:request.body.vldl,
        bmi:request.body.bmi
    });
    sentMetrics.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    });
})

module.exports = router;

