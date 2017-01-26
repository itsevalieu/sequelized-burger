module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	});
	return Burger;
};

// var burger = {
// 	selectAll: function(callback) {
// 		// orm.selectAll("burgers", function(response) {
// 		// 	callback(response);
// 		// });
// 	},
// 	insertOne: function(cols, vals, callback){
// 		// orm.insertOne("burgers", cols, vals, function(response) {
// 		// 	callback(response);
// 		// });
// 	},
// 	updateOne: function(colVal, condition, callback){
// 		// orm.updateOne("burgers", colVal, condition, function(response) {
// 		// 	callback(response);
// 		// });
// 	}
// };

// module.exports = burger;