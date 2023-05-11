const express = require("express");
const app = express();
const { run, connect } = require("./mongodbSetup");

const shoeRouter = require("./routes/shoeRoutes");
 
// middleware
app.use(express.json());
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// connect to mongoose

connect();
 
// use routes
app.use("/api/shoes", shoeRouter);

 
module.exports = app;