const express=require('express');
const router=express.Router();
const signupcon=require("../controller/signupcon");
router.get('/signup',signupcon.showsignuppage);
module.exports=router;