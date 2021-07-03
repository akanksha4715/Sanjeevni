const express=require("express");
const app=express();
const path = require('path');
app.set('view engine','ejs');
app.set('views','Views');
app.use(express.static(path.join(__dirname,'public')));

const home=require('./routes/homeroutes');
const err_routes=require('./routes/404');
const loginroutes=require('./routes/login');
const signuproutes=require('./routes/signup');
const supplierRoutes=require('./routes/addSupplier');
app.use(home);
app.use(loginroutes);
app.use(signuproutes);
app.use(supplierRoutes);
app.use(err_routes);
app.listen(3000);