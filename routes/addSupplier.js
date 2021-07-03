const express=require('express');
const router=express.Router();
const addcon=require('../controller/addSuppcon');
router.get('/addSupplier',addcon.showAddSupplierpage);
module.exports=router;