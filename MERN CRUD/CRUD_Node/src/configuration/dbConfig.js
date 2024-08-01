const mongoose = require("mongoose");

//const connectedToMongoDB = async () => {
  
    await mongoose.connect("mongodb://localhost:27017/crud_db");
    console.log("connected to mongoDB")
    mongoose.connection.on("connected", () => {
      console.log("connected to mongodb")
    })
    mongoose.connection.on("error", (error) => {
      console.error(`mongodb connected erro:${error}`)
    })
   

module.exports = mongoose; 