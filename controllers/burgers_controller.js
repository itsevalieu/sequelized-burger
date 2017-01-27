var db = require("../models");
var express = require("express");
var router = express.Router();
//create the router for the app

router.get("/", function(request, response) {
	response.redirect("/index");
});

router.get("/index", function(request, response) {
	db.Burger.findAll({}).then(function(allBurgers) {
		var burgerObj = {
			burgers: allBurgers
		};
		response.render("index", burgerObj);
		console.log("Finding all burgers working!");
	});
});

router.post("/index/insert", function(request, response) {
	db.Burger.create({
		burger_name: request.body.burger_name,
		devoured: request.body.devoured
	}).then(function(){
		console.log("Created new burger!");
		response.redirect("/");
	});
});

router.put("/index/update/:id", function(request, response) {
	db.Burger.update({devoured: 1}, {
		where: {
			id: request.params.id
		}
	}).then(function(updates){
		response.redirect("/");
	});
});

module.exports = router;