const express=require("express");

const router=express.Router();

const {departmentAnalytics}=require("../controllers/analyticsController");

router.get("/department",departmentAnalytics);

module.exports=router;