var connection = require('./connection.js');

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
	selectAll: function(table, callback){
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(error, result){
			if(error) {
				throw error;
			}
			callback(result);
		});
	},
	insertOne: function(table, cols, vals, callback){
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		connection.query(queryString, vals, function(error, result){
			if(error) {
				throw error;
			}
			callback(result);
		});
	},
	
	updateOne: function(table, colVal, condition, callback){
		console.log(table, colVal, condition);
		var queryString = "UPDATE " + table + " SET ";
		queryString += objToSql(colVal);
		queryString += " WHERE " + condition;
		connection.query(queryString, function(error, result){
			if(error) {
				throw error;
			}
			callback(result);
		});
	}
};

module.exports = orm;