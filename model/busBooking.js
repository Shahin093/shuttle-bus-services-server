
const { default: mongoose } = require("mongoose");


const busBookingSchema = mongoose.Schema({

    bus_name: {
        type: String,
        required: [true, "Please provide a name for this product."],
        trim: true,
        unique: [true, "Name must be unique"],
        minLength: [3, "Name must be least 3 character"],
        maxLength: [100, "Name is too large"]
    },
    district_from: {
        type: String,
        required: [true, "Please provide a name for this product."],
        trim: true,
    },
    district_to: {
        type: String,
        required: [true, "Please provide a name for this product."],
        trim: true,
    },
    slot: {
        type: String,
        required: true,
        enum: {
            values: ["9:00",
                "10:00",
                "11:00",
                "12:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00"],

            message: "slot value can not be {VALUE}, must be available"
        }
    },
    seat: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },


    // driver_staff: {
    //     type: Number,
    //     required: true
    // },


    CreateAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt: {
        type: Date,
        default: Date.now
    },
    // img: {
    //     type: String,
    //     required: true,
    // }

}, {
    timestamps: true,
});

// SCHEMA ---> MODEL  --> QUERY

// Creating Model 
const BusBooking = mongoose.model('BusBooking', busBookingSchema)
module.exports = BusBooking;