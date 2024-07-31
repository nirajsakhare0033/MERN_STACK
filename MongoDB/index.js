import express from 'express'
import connectDB from './db/connectDB.js';
//import { insertmanyDoc} from './models/Movies.js'
//single doc
//import { singleDoc } from './models/singalDoc.js';
//find doc with filed
import { findDocwithField } from './models/findDocWithFiled.js';
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
console.clear();
connectDB(DATABASE_URL)
//movie.js
//insertmanyDoc()
//singleDoc.js
// singleDoc();
//findDocWithFiled.js
findDocwithField();

app.listen(port, () => {
  console.log(`server listing on this port ${port}`)
})