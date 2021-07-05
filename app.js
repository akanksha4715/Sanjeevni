const express=require("express");
const app=express();
const session = require('express-session')
const path = require('path');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const mongoconnectionstring = 'mongodb+srv://akto300247:akto300247@cluster0.wpu0f.mongodb.net/sanjeevani';
app.set('view engine','ejs');
app.set('views','Views');
app.use(express.static(path.join(__dirname,'public')));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
    store : store,
  })
  );

const home=require('./routes/homeroutes');
const err_routes=require('./routes/404');
const loginroutes=require('./routes/login');
const signuproutes=require('./routes/signup');
const supplierRoutes=require('./routes/addSupplier');
const User = require('./model/login;');

app.use((req, res, next) => {
    if (!req.session.user) {
      return next();
    }
    User.findById(req.session.user._id)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  });
app.use(home);
app.use(loginroutes);
app.use(signuproutes);
app.use(supplierRoutes);
app.use(err_routes);
app.listen(3000);