const userServices = require("../services/userServices.js");

class userController {
  async createUser(req, res) {
    try {
      const { name, email, phone } = req.body;
      const saveUser = await userServices.createUser(name, email, phone);
      res.json(saveUser);
      console.log(saveUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await userServices.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get user by ID
  async getUserById(req, res) {
    const userId = req.params.id;
    try {
      const user = await userServices.getUserById(userId);
      if (!user)
        return res.status(404).json({ error: "user not found in database" });
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  }

  // Put method
  async updateUser(req, res) {
    const userId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedUser = await userServices.updateUser(userId, updatedData);
      if (!updatedUser)
        return res.status(404).json({ error: "user not found in database" });
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new userController();
