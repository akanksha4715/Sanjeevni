const exp=require('express');
const Router =exp.Router();
const errcon = require('../controller/err_pg');

Router.get('*',errcon.pagenotfound);
module.exports=Router;
