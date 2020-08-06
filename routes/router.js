const express = require('express');
const router = express.Router();

router.get('', function(request, response) {
    response.render('index');
});


router.get('/appointment-booking', function(request, response) {
    response.render('appointment-booking');
});

module.exports = router;