var mysql = require('mysql');
var con = mysql.createConnection({
  host: "mysql.allisonobourn.com",
  database: "csc337world",
  user: "csc337traveler",
  password: "packmybags",
  debug: "true"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
