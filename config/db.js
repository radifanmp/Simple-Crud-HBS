// Import Mysql
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db_books",
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Database is Connected");
  }
});

module.exports = connection;
