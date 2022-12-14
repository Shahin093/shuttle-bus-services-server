const express = require('express');
const busCollection = require('../controller/busCollection.controller');

const router = express.Router();

router.route('/')
    .get(busCollection.getBusCollection)
    .post(busCollection.createBusCollection)
router.route('/slots')
    .get(busCollection.getBySignleSlot);



// var datetime = new Date();
// console.log(datetime.toISOString().slice(0,10));

module.exports = router;