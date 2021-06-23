const exp=require('express');
const Router=exp.Router();

const homecon=require('../controller/homecon');

Router.get('/sanjeevni',homecon.showhome);
module.exports=Router;