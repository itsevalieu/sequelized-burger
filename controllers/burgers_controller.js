var express = require("express");
var burger = require("../models/burger.js");

var app = express();


//create the router for the app

module.exports = function(app) {
	app.get("/", function(request, response) {
		response.redirect("/index");
	});
	app.get("/index", function(request, response) {
		burger.selectAll(function(data) {
			var dataObject = {
				burgers: data
			};
			console.log(dataObject);
			response.render("index", dataObject);
		});
	});
	app.post("/index/insert", function(request, response) {
		burger.insertOne([
			"burger_name", "devoured"
		], [
			request.body.burger_name, 0
		], function() {
			response.redirect("/index");
		});
	});
	app.put("/index/update/:id", function(request, response) {
		var condition = "id = " + request.params.id;
		burger.updateOne({
			devoured: request.body.devoured
		}, condition, function() {
			response.redirect("/index");
		});
	});
};