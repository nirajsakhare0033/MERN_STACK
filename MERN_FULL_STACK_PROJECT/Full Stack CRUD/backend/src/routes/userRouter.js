const express = require("express");
const userController = require('../controller/userController.js')

const router = express.Router();
router.post("/user", userController.createUser)

module.exports = router;