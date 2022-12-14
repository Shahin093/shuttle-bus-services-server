
const { default: mongoose } = require("mongoose");


const busBookingSchema = mongoose.Schema({

    bus_name: {
        type: String,
        required: true
    },

    static_district: {
        type: String,
        required: true,
        enum: {
            values: [
                "Dhaka",
                "Cumilla",
                "Feni",
                "Chittagong"
            ],
            message: "Static District can not be {VALUE}, must be available"
        }
    },
    district_from: {
        type: Array,
        required: true,
        // enum: {
        //     values: [
        // "Dhaka",
        // "Cumilla",
        // "Feni",
        // "Chittagong"
        //     ],
        //     message: "District_From can not be {VALUE}, must be available"
        // }
    },

    district_to: {
        type: Array,
        required: true,
        // enum: {
        //     values: [
        //         "Dhaka",
        //         "Cumilla",
        //         "Feni",
        //         "Chittagong"
        //     ],
        //     message: "to can not be {VALUE}, must be available"
        // }
    },
    seat: {
        type: Number,
        required: [true, "Please provide Seat Number."],
    },
    driver_staff: {
        type: Number,
        required: [true, 'Please provide an driver_staff']
    },

    amount: {
        type: Number,
        required: true
    },
    slot: {
        type: Array,
        required: true,
        // enum: {
        //     values: [
        // "9:00 AM",
        //     "10:00 AM",
        //     "11:00 AM",
        //     "12:00 PM",
        //     "1:00 PM",
        //     "2:00 PM",
        //     "3:00 PM",
        //     "4:00 PM",
        //     "5:00 PM",
        //     "6:00 PM",
        //     "7:00 PM",
        //     "8:00 PM",
        //     "9:00 PM",
        //     "10:00 PM"],

        //     message: "slot value can not be {VALUE}, must be available"
        // }
    },
    img: {
        type: String,

    },
    break: {
        type: Number,
        required: true
    },
    owl: {
        type: Number,
        required: [true, 'Please provide litre of owl -?']
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: [
                "active",
                "inactive",
                "servicing",
                "waiting..."
            ],
            message: "to can not be {VALUE}, must be available"
        }
    },

}, {
    timestamps: true,
});

// SCHEMA ---> MODEL  --> QUERY

// Creating Model 
const BusBooking = mongoose.model('BusBooking', busBookingSchema)
module.exports = BusBooking;