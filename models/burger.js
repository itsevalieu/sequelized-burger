var orm = require('../config/orm.js');

//create the code that'll call the ORM functions using burger specific input for the ORM
//module.exports = burger ; at end

var burger = {
	selectAll: function(callback) {
		orm.selectAll("burgers", function(response) {
			callback(response);
		});
	},
	insertOne: function(cols, vals, callback){
		orm.insertOne("burgers", cols, vals, function(response) {
			callback(response);
		});
	},
	updateOne: function(colVal, condition, callback){
		orm.updateOne("burgers", colVal, condition, function(response) {
			callback(response);
		});
	}
};

module.exports = burger;