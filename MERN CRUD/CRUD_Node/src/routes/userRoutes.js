const express = require("express");

const UserController = require("../controller/userController");
const userController = require("../controller/userController");

const router = express.Router();
router.post("/", userController.createUser)
module.exports = router;