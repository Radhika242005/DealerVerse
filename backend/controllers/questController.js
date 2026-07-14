const EventLog = require("../models/EventLog");

exports.getQuests = async (req, res) => {

    try {

        const bookings = await EventLog.countDocuments({
            action_code: "BOOKING_CREATED"
        });

        const discounts = await EventLog.countDocuments({
            action_code: "DISCOUNT_APPROVED"
        });

        const credits = await EventLog.countDocuments({
            action_code: "CREDIT_APPROVED"
        });

        res.json({

            bookings,

            discounts,

            credits

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};