const mongoose = require("mongoose");

const connectedToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/crud_db")
    console.log("Connected successfully to database")
    
  } catch (error) {
    console.error(`connection error to database {error}`  )
    
  }
}

module.exports = {mongoose, connectedToMongoDB}