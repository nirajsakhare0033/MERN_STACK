const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const {connectedToMongoDB} = require("./src/config/dbConfig.js");

connectedToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT} No.`);
  });
});
