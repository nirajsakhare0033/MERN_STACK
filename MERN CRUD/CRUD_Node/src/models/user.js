const mongoose = require("./cofiguration/dbConfig")

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  phone:String

})
const User = mongoose.model("User", userSchema)

module.exports = User;
