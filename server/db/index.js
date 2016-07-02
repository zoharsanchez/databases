// server/db/index.js uses the mysql npm module to connect to the database server running on your computer

var mysql = require('mysql');

exports.connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'zochar',
  database: 'chat'
});

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connectiong: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// });
