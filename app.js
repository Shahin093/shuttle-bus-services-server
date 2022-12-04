const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const BusBooking = require('./model/busBooking');
const busBookingRouter = require('./routes/busBooking.route');
// const port = 3000

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});
//busBooking route Posting and Getting to Database 
app.use('/api/v1/busBooking', busBookingRouter);


module.exports = app;