"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var mongoose = require("mongoose");

var routes = require("./server/routes");

var app = express();
var PORT = process.env.PORT || 3001;

var renderRouterMiddleware = require("./server/middleware/renderRoute"); // Define middleware here


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); // Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  var _indexPath = path.join(__dirname, './', 'client', 'build', 'index.html');
} //if still in development


app.use(express.static('client'));
var indexPath = path.join(__dirname, '../', 'client', 'public', 'index.html'); // Add routes, both API and view

app.use(routes);

require('dotenv').config();

require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
});

app.get('*', renderRouterMiddleware); // Connect to the Mongo DB

mongoose.set("debug", true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/happnen");
var db = mongoose.connection;
db.on("error", function (err) {
  console.log("Mongoose Error", err);
});
db.once("open", function () {
  console.log("Mongoose Connection Successful");
}); // Start the API server

app.listen(PORT, function () {
  console.log("\uD83C\uDF0E  ==> API Server now listening on PORT ".concat(PORT, "!"));
});