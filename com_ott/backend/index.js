import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";


//files
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"

//configrations
dotenv.config()
connectDB()

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

const PORT = process.env.PORT || 3000

//routes
// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message); // Log the error
  res.status(500).json({ message: 'Something went wrong!' });
});

app.use("/api", userRoutes)



app.listen(PORT, () => {
  console.log(`Server is running on this port: ${PORT}`)
  console.log("is working")
})



