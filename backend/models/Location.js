const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
    {},
    {
        strict:false,
        collection:"locations"
    }
);

module.exports = mongoose.model("Location",locationSchema);