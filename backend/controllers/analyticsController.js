const EventLog=require("../models/EventLog");

exports.departmentAnalytics=async(req,res)=>{

const data=await EventLog.aggregate([

{

$group:{

_id:"$department",

count:{$sum:1}

}

},

{

$sort:{count:-1}

}

]);

res.json(data);

}