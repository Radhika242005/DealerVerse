const express = require("express");

const router = express.Router();

const { getDepartmentBattle } = require("../controllers/departmentController");

router.get("/", getDepartmentBattle);

module.exports = router;