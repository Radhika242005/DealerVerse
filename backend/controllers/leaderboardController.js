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
                            "DISCOUNT_ESCALATED",
                            "DISCOUNT_APPROVED",
                            "CREDIT_ADDED",
                            "CREDIT_APPROVED"
                        ]
                    }
                }
            },

            {
                $addFields: {

                    xp: {

                        $switch: {

                            branches: [

                                {
                                    case: {
                                        $eq: [
                                            "$action_code",
                                            "BOOKING_CREATED"
                                        ]
                                    },
                                    then: 20
                                },

                                {
                                    case: {
                                        $eq: [
                                            "$action_code",
                                            "DISCOUNT_CREATED"
                                        ]
                                    },
                                    then: 15
                                },

                                {
                                    case: {
                                        $eq: [
                                            "$action_code",
                                            "DISCOUNT_ESCALATED"
                                        ]
                                    },
                                    then: 20
                                },

                                {
                                    case: {
                                        $eq: [
                                            "$action_code",
                                            "DISCOUNT_APPROVED"
                                        ]
                                    },
                                    then: 30
                                },

                                {
                                    case: {
                                        $eq: [
                                            "$action_code",
                                            "CREDIT_ADDED"
                                        ]
                                    },
                                    then: 25
                                },

                                {
                                    case: {
                                        $eq: [
                                            "$action_code",
                                            "CREDIT_APPROVED"
                                        ]
                                    },
                                    then: 40
                                }

                            ],

                            default: 0

                        }

                    }

                }

            },

            {

                $group: {

                    _id: "$username",

                    department: {

                        $first: "$department"

                    },

                    totalXP: {

                        $sum: "$xp"

                    }

                }

            },

            {

                $sort: {

                    totalXP: -1

                }

            },

            {

                $limit: 10

            }

        ]);

        res.json(leaderboard);

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

}