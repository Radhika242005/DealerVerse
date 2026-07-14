const EventLog = require("../models/EventLog");

exports.getDepartmentBattle = async (req, res) => {

    try {

        const xpMap = {
            BOOKING_CREATED: 20,
            DISCOUNT_CREATED: 15,
            DISCOUNT_ESCALATED: 20,
            DISCOUNT_APPROVED: 30,
            CREDIT_ADDED: 25,
            CREDIT_APPROVED: 40
        };

        const events = await EventLog.find({
            action_code: {
                $in: Object.keys(xpMap)
            }
        });

        const departments = {};

        events.forEach(event => {

            const dept = event.department;

            if (!departments[dept])
                departments[dept] = 0;

            departments[dept] += xpMap[event.action_code];

        });

        const result = Object.keys(departments).map(dept => ({
            department: dept,
            xp: departments[dept]
        }));

        result.sort((a, b) => b.xp - a.xp);

        res.json(result);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};