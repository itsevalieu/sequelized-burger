//Dependencies
//===============================
var mysql = require('mysql');

//MySQL connection set up
//===============================
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'codemore1',
	database: 'burgers_db'
});

connection.connect(function(err){
	if(err) {
		console.log('Error connection: ' + err.stack);
		return;
	}
	console.log('Connected as ID ' + connection.threadId);
});

module.exports = connection;