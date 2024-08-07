const express = require("express");
const userController = require('../controller/userController.js')

const router = express.Router();
//post method url
router.post("/user", userController.createUser)
//get method url
router.get("/get", userController.getAllUsers)

module.exports = router;