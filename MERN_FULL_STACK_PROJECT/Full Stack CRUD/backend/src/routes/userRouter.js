const express = require("express");
const userController = require("../controller/userController.js");

const router = express.Router();

// Post method URL
router.post("/user", userController.createUser);

// Get method URL
router.get("/get", userController.getAllUsers);

// Get method by ID
router.get("/:id", userController.getUserById);

// Put method (should be PATCH if partially updating)
router.patch("/:id", userController.updateUser);

module.exports = router;
