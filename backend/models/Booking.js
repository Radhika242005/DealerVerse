const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    bookingId: {
        type: String,
        required: true
    },

    customer: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: "Booking Created"
    },

    xp: {
        type: Number,
        default: 20
    }

});

module.exports = mongoose.model("Booking", bookingSchema);