'use strict';

var express = require ("express");
var app = express ();
const bodyParser = require ("body-parser");
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const PORT = 8000;

var routes = require ("./routes/index");

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(expressSession({secret:'thisisafuckinsecret'}));


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

app.get('/', function(req, res){
    res.render("index", {req});
    // res.send('hello world')
});

app.listen(PORT, function(){
    console.log(`The server is fully operational on ${PORT}`);
});

module.exports = app;
