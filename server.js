const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static('client'))


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.set("debug", true);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/happnen");

var db = mongoose.connection

db.on("error", (err) => {
  console.log("Mongoose Error", err)
})

db.once("open", () => {
  console.log("Mongoose Connection Successful")
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
