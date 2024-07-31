import express from 'express'
import connectDB from './db/connectDB.js';
import { insertmanyDoc} from './models/Movies.js'
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
console.clear();
connectDB(DATABASE_URL)

insertmanyDoc()
app.listen(port, () => {
  console.log(`server listing on this port ${port}`)
})