/**
 * Simple server using Express.js
 */
 const express = require("express");
 const app = express();
 
 app.get("/", function (req, res) {
   res.send("Hello World!");
 });
 
 app.get("/api/user", function (req, res) {
  res.status(200).json({'users': ['user1', 'user2', 'user3']});
});
 const server = app.listen(3000, function () {});