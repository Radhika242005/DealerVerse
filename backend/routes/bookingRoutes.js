const express = require("express");

const router = express.Router();

const {

    getBookings,

    updateBooking

} = require("../controllers/bookingController");

router.get("/", getBookings);

router.put("/:id", updateBooking);

module.exports = router;