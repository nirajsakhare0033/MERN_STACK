const express = require("express");
const userRoutes = require("./src/routes/userRouter.js")
//updated
const bodyParser = require("body-parser")
const app = express();
const PORT = process.env.PORT || 3000;
//const {connectedToMongoDB} = require("./src/config/dbConfig.js");

// connectedToMongoDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server running on ${PORT} No.`);
//   });
// });
//updated
app.use(bodyParser.json())
app.listen(PORT, () => {
  console.log(`Server running on ${PORT} No.`);
});

app.use("/", userRoutes)
