var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'chill',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    console.log('error connecting to db');
  } else {
    console.log('niiiice you are connected');
  }
});

connection.query('SELECT * from messages', function(err, rows, fields) {
  if (!err) {
    console.log('The solution is: ', rows, fields);
  } else {
    console.log('Error');
  }
});

connection.end(function(err) {
  console.log('the connection ended peacefully');
});