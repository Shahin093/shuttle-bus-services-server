const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const BusBooking = require('./model/busBooking');




// verify jwt 
function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ message: `UnAuthorized access` });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
        if (err) {
            return res.status(403).send({ message: 'Forbidden access' })
        }
        req.decoded = decoded;
        next();
    });
}



const verifyAdmin = async (req, res, next) => {
    const requester = req.decoded.email;
    const requesterAccount = await userCollection.findOne({ email: requester });
    if (requesterAccount.role === 'admin') {
        next();
    } else {
        res.status(403).send({ message: 'forbidden' })
    }
}

// booking router 
const busBookingRouter = require('./routes/busBooking.route');
// user router 
const userRouter = require('./routes/user.route');

const busCollection = require('./routes/busCollection.route');
const buses = require('./routes/buses.route');
// const port = 3000

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});
//busBooking route Posting and Getting to Database 
app.use('/api/v1/busBooking', busBookingRouter);

// bus  <== create ==> update ==> Delete ==> 
app.use('/api/v1/bus', buses)


// bus collection routing 
app.use('/api/v1/busCollection', busCollection)

// bus slots routing 
// app.use('/api/v1/busCollection/slots', busCollection)

// user create 
app.use('/api/v1/user', userRouter);



module.exports = app;