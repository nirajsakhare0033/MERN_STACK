const mongoose = require("mongoose");

const connectedToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/crud_db");
    console.log("connected to mongoDB")
  } catch (error) {
    console.log(error)
  }
}
module.exports = {mongoose, connectedToMongoDB}