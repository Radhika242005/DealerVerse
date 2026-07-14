const Employee = require("../models/Employee");
const EventLog = require("../models/EventLog");
const Location = require("../models/Location");

exports.getDashboard = async (req, res) => {

    try{

        const employees = await Employee.countDocuments();

        const events = await EventLog.countDocuments();

        const locations = await Location.countDocuments();

        const departments = await Employee.distinct("department");

        res.json({

            employees,

            events,

            locations,

            departments: departments.length

        });

    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

}