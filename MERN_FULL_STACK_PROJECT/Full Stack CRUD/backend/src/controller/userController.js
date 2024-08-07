const userServices = require('../services/userServices.js');
const UserService = require('../services/userServices.js')

class userController {
  async createUser(req, res){
    try {
      const {name, email, phone} = req.body;
      const saveUser = await UserService.createUser(name, email, phone)
      res.json(saveUser);
      console.log(saveUser)
    } catch (error) {
      res.status(500).json({error:error.message})
    }
  }

  async getAllUsers(req, res){
    try {
      const users = await userServices.getAllUsers();
      res.json(users);
    } catch (error) {
      
    }

  }
}

module.exports = new userController()