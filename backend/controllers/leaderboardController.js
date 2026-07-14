const EventLog = require("../models/EventLog");

exports.getLeaderboard = async (req, res) => {

    try {

        const leaderboard = await EventLog.aggregate([

            {
                $match: {
                    action_code: {
                        $in: [
                            "BOOKING_CREATED",
                            "DISCOUNT_CREATED",
                            "DISCOUNT_APPROVED",
                            "DISCOUNT_ESCALATED",
                            "CREDIT_ADDED",
                            "CREDIT_APPROVED"
                        ]
                    }
                }
            },

            {
                $group: {
                    _id: "$username",
                    department: { $first: "$department" },
                    totalActions: { $sum: 1 }
                }
            },

            {
                $sort: {
                    totalActions: -1
                }
            },

            {
                $limit: 10
            }

        ]);

        res.json(leaderboard);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};