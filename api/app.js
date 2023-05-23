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
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'process.env') })

const authRouter = require("./routes/authRoutes");
const shoeRouter = require("./routes/shoeRoutes");
const brandRouter = require("./routes/brandRoutes");
const categoryRouter = require("./routes/categoryRoutes");
 
// middleware
app.use(express.json());
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// connect to mongoose

connect();
 
// use routes
app.use("/api", authRouter);
app.use("/api/shoes", shoeRouter);
app.use("/api/brands", brandRouter);
app.use("/api/categories", categoryRouter);

 
module.exports = app;