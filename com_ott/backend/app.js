require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const tmdbRoutes = require("./routes/tmdb");
const userRoutes = require("./routes/user");
const collectionRoutes = require("./routes/collection");
const userAuthorization = require("./middleware/userAuthorization");
const path = require("path");

app.use(express.static("../client/build"));

app.use(cors());
app.use(express.json());

app.use("/api", tmdbRoutes);

app.use("/authorization", userRoutes);

app.use(userAuthorization);
app.use("/user", collectionRoutes);

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
);

module.exports = app;
