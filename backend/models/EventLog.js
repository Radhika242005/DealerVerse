const mongoose = require("mongoose");

const eventLogSchema = new mongoose.Schema(
  {},
  { strict: false, collection: "eventLogs" }
);

module.exports = mongoose.model("EventLog", eventLogSchema);