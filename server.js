//Dependencies
//===============================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var PORT = 3000;

//Set up Express App to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//For the form override to use delete
app.use(methodOverride("_method"));

// Set Handlebars as the default templating engine.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Static directory
app.use(express.static(process.cwd() + "/public"));

//Routes
//===============================
require("./controllers/burgers_controller.js")(app);

//Listener
//===============================
app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});
