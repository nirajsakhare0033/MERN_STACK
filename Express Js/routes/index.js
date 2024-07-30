import express from "express";
import students from "./router/student.js";
const app = express();

app.use("/students", students);

app.listen(1000, () => console.log("Server is up...!!!"));
