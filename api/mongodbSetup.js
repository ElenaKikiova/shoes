
const mongoose = require("mongoose");
const uri = "mongodb+srv://stu2101321039:yDf7AtBufveLnYn4@cluster0.hdp2ubq.mongodb.net/TheShoeBase?retryWrites=true&w=majority";

async function connect() {
  try {
    console.log("You successfully connected to TheShoeBase MongoDB database!");
    await mongoose.connect(uri);
  } 
  catch (error) {
    console.log("MongoDB Error!", error);
  }
}


module.exports = {connect};