const User = require('../models/user.js')

class UserService {
  async createUser(name, email, phone) {
    const newUser = new User({ name, email, phone });
    return await newUser.save();
   
  }
}

module.exports = new UserService();