const express = require("express");
const userController = require('../controller/userController.js')

const router = express.Router();
//post method url
router.post("/user", userController.createUser)
//get method url
router.get("/get", userController.getAllUsers)
//get method by id
router.get("/:id", userController.getUserById)

module.exports = router;