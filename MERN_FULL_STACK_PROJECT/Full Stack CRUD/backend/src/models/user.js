const mongoose = require('../config/dbConfig.js')

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  phone:String
})

const User = mongoose.model("User", userSchema)

module.exports = User;