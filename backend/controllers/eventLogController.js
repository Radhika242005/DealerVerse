const EventLog = require("../models/EventLog");

exports.getEventLogs = async (req, res) => {
  try {
    const logs = await EventLog.find({

    action_code: {

        $in: [

            "BOOKING_CREATED",

            "DISCOUNT_CREATED",

            "DISCOUNT_APPROVED",

            "DISCOUNT_ESCALATED",

            "CREDIT_ADDED",

            "CREDIT_APPROVED",

            "BOOKING_MARKED_PENDING_BOOKING"

        ]

    }

}).limit(100);

    res.json(logs);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }
};