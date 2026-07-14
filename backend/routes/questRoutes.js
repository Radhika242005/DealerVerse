const express = require("express");

const router = express.Router();

const { getQuests } = require("../controllers/questController");

router.get("/", getQuests);

module.exports = router;