const Booking = require("../models/Booking");

// Get all bookings
exports.getBookings = async (req, res) => {

    try {

        const bookings = await Booking.find();

        res.json(bookings);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update booking
exports.updateBooking = async (req, res) => {

    try {

        const booking = await Booking.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        res.json(booking);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};