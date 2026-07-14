const express = require("express");
const router = express.Router();

const { getEventLogs } = require("../controllers/eventLogController");

router.get("/", getEventLogs);

module.exports = router;