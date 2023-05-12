const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require('cors');
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json())
const { connect } = require("./mongodbSetup");

const shoeRouter = require("./routes/shoeRoutes");
const brandRouter = require("./routes/brandRoutes");
 
// middleware
app.use(express.json());
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// connect to mongoose

connect();
 
// use routes
app.use("/api/shoes", shoeRouter);
app.use("/api/brands", brandRouter);

 
module.exports = app;