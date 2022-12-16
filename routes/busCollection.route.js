const express = require('express');
const busCollection = require('../controller/busCollection.controller');

const router = express.Router();

// main route 
router.route('/')
    .get(busCollection.getBusCollection)
    .post(busCollection.createBusCollection);

// sloting filters route 
router.route('/slots')
    .get(busCollection.getBySignleSlot);

// update and delete route 
router.route('/:id')
    .patch(busCollection.busCollectionUpdatedById)
    .delete(busCollection.busCollectonDeletedById);



// var datetime = new Date();
// console.log(datetime.toISOString().slice(0,10));

module.exports = router;