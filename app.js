const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const BusBooking = require('./model/busBooking');

// booking router 
const busBookingRouter = require('./routes/busBooking.route');
// user router 
const userRouter = require('./routes/user.route');
// const port = 3000

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});
//busBooking route Posting and Getting to Database 
app.use('/api/v1/busBooking', busBookingRouter);


// user create 
app.use('/api/v1/user', userRouter);

module.exports = app;