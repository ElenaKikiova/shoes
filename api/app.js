const express = require("express");
const app = express();
const { run } = require("./mongodbSetup");
 
// middleware
app.use(express.json());
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

run();
 
module.exports = app;