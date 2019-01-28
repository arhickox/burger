//requires
var mysql = require("mysql");

//Database Connection Info
var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "",
  database: "burgers_db"
});

//connection error catcher
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export
module.exports = connection;
