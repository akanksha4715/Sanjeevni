const express=require('express');
const router=express.Router();
const logincon=require("../controller/logincon");
router.get('/login',logincon.showloginpage);
module.exports=router;