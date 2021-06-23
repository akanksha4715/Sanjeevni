const express=require("express");
const app=express();

const err_routes=require('./routes/404');
app.use(err_routes);
app.listen(3000);