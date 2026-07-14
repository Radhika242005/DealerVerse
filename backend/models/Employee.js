const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    department:{
        type:String,
        required:true
    },

    role:{
        type:String,
        default:"Sales Executive"
    },

    xp:{
        type:Number,
        default:0
    },

    coins:{
        type:Number,
        default:0
    },

    level:{
        type:Number,
        default:1
    },

    bookings:{
        type:Number,
        default:0
    }

});

module.exports = mongoose.model("Employee", employeeSchema);