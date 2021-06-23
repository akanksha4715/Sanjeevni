const express=require("express");
const app=express();

app.set('view engine','ejs');
app.set('views','Views');

const home=require('./routes/homeroutes');
const err_routes=require('./routes/404');
app.use(home);
app.use(err_routes);
app.listen(3000);