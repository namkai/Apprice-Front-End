'use strict';
require('dotenv').config();
var express = require ("express");
var app = express ();
const bodyParser = require ("body-parser");
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const PORT = process.env.PORT || 8000;


var routes = require ("./routes/index");

// app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(expressSession({secret:process.env.COOKIE_SECRET}));
// ## CORS middleware
// For more info see: https://gist.github.com/cuppster/2344435
//
// see: http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-nodejs
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);


    //routes for the api (database)
app.use("/api/users", routes.users);
app.use("/api/lists", routes.lists);
app.use("/api/products", routes.products);
app.use("/api/stores", routes.stores);
app.use("/api/type_tags", routes.type_tags);
app.use("/api/filter_tags", routes.filter_tags);
app.use("/api/users_lists", routes.users_lists);
app.use("/api/lists_products", routes.lists_products);
app.use("/api/stores_products", routes.stores_products);
app.use("/api/products_type_tags", routes.products_type_tags);
app.use("/api/products_filter_tags", routes.products_filter_tags);
app.use("/api/users_filter_tags", routes.users_filter_tags);
app.use("/api/appriceme", routes.appriceme)

app.get('/', function(req, res){
    res.render("index", {req});
    // res.send('hello world')
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error(req.path + 'Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

app.listen(PORT, function(){
    console.log(`The server is fully operational on ${PORT}`);
});

module.exports = app;
