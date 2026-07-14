const express = require("express");

const router = express.Router();

const { getEmployee } = require("../controllers/employeeController");

router.get("/", getEmployee);

module.exports = router;