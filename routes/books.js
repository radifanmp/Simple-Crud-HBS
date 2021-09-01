const express = require("express");
var router = express.Router();
const dbConnection = require("../config/db");

// Display Data Books
router.get("/", function (req, res, next) {
  dbConnection.query(
    `SELECT * FROM books ORDER BY id Desc`,
    function (err, rows) {
      if (err) {
        req.flash("error", err);
        res.render("books", { data: "" });
      } else {
        res.render("books", { data: rows });
      }
    }
  );
});

module.exports = router;
