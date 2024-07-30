// 1. Create routes folder and put your routes in a seperate file
// 2. Create instance of express.Router()
// 3. Instead of app.method change that to "router.method"
// 4. Export router
// 5. Import router
// 6. use the (app.use) built-in middleware and provide your routes.

import express from "express";
import router from "./routes/router.js"

const app = express();

app.use('/routers', router)

app.listen(1000, () => console.log("working..")) 