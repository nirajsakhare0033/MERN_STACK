const express = require("express");
//const {connectedToMongoDB} = require("./configuration/dbConfig");
const bodyParser = require("body-parser")
const app = express();
const PORT = process.env.PORT || 5000;
const userRoutes = require("../src/routes/userRoutes")
 app.use(bodyParser.json());
 app.listen(PORT,() => {
  console.log(`server is running on http://localhost:${PORT}`);
 })
// connectedToMongoDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`server is running on http://localhost:${PORT}`);
//   });
// });
app.use("/api/user", userRoutes);