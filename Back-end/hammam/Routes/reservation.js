const express = require('express');
const router = express.Router();
const reservationController = require('../Controllers/reservationController');

router.post('/addreservation/:idClient',reservationController.addreser);
router.post('/creatHamum',reservationController.CreatHamam)


module.exports = router;