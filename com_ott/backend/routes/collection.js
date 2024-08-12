const express = require("express");
const router = express.Router();
const {
  allCollection,
  addCollection,
  deleteCollection,
} = require("../controllers/collectionController");

router.get("/collection", allCollection);

router.post("/collection", addCollection);

router.delete("/collection/:id", deleteCollection);

module.exports = router;
