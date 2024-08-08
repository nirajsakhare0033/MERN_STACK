const User = require("../models/user.js");

class UserService {
  async createUser(name, email, phone) {
    const newUser = new User({ name, email, phone });
    return await newUser.save();
  }

  async getAllUsers() {
    return await User.find();
  }

  async getUserById(userId) {
    return await User.findById(userId);
  }

  // put method
  async updateUser(userId, updatedData) {
    return await User.findByIdAndUpdate(userId, updatedData, { new: true });
  }
}

module.exports = new UserService();
