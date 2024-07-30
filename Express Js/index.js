//create folder
//npm init -y
//npm i express
//create instance express
//provide port :1000
//basic route
//install nodemon

// import express from 'express';
// const app = express();
//you dont have to worry about this code for now
// app.get("/", (req, res) => {
//   res.send("welcome to express.js");
// })


// app.listen(1000, () => console.log("server working..."));

////////////////////////////////////////////////////////////////////
/*
import express from "express";
const app = express();
//Basic Routing
app.get("/", (req, res) => {
  res.send("<h1>HOME</h1>")
})

app.get("/about", (req, res) => {
  res.send("<h1>about section</h1>")
})

app.get("/contact", (req, res) => {
  res.send("<h1>Constact us page practice make man perfect </h1>")
})

app.listen(1000, () => console.log("Server Up !...."));

*/


//🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️
/*
//important
//Query String
//is the part of url(?) is pass data one or more & 
import express from 'express';
const app = express();

app.get('/product', (req, res) => {
 const { category, id} = req.query;
 res.send(`product category: ${category} & Product ID: ${id}`)
})


app.listen(1000, () => console.log("Server Up!"));
*/
//🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️

/*
//Sending JSON Data
//sending data backend to frontend 
//🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️

import express from 'express';
import product from './products.js';
const app = express();

app.get('/products' , (req, res) => {
  res.json(product);
})

app.listen(1000, () => console.log("Server UP!."));
//🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️
*/


//middleware of the json in this there is 3 parameter
//🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️

/*
import express from 'express';

const app = express();

function userCred (req, res, next) { 
  console.log('username: "(alex)')
  console.log('email: (add@gmail.com)')
next();

}
app.use(userCred)
app.get("/", (req, res)=>{
  res.send("<h1>hello admin</h1>")
})

app.listen(1000, () => console.log("Server Up!"));

*/


//🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️

import express from 'express';

const app = express();
app.use(express.static('./'))
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(),'./index.html'))
})
app.listen(1000, () => {
  console.log("Server Up!")
});

/*
{"_id":{"$oid":"552786262cec76ed95fd61eb"},"client":"127.0.0.1","keyUpdates":0,"lockStats":{"timeAcquiringMicros":{"r":0,"w":3},"timeLockedMicros":{"r":0,"w":75}},"millis":0,"ns":"school2.student_grades","numYield":0,"op":"insert","ts":{"$date":"2012-11-20T20:03:00.829Z"},"user":""},
{"_id":{"$oid":"552786262cec76ed95fd61ec"},"client":"127.0.0.1","keyUpdates":0,"lockStats":{"timeAcquiringMicros":{"r":0,"w":3},"timeLockedMicros":{"r":0,"w":15}},"millis":0,"ns":"school2.student_grades","numYield":0,"op":"insert","ts":{"$date":"2012-11-20T20:03:00.830Z"},"user":""},
{"_id":{"$oid":"552786262cec76ed95fd61ed"},"client":"127.0.0.1","keyUpdates":0,"lockStats":{"timeAcquiringMicros":{"r":0,"w":2},"timeLockedMicros":{"r":0,"w":15}},"millis":0,"ns":"school2.student_grades","numYield":0,"op":"insert","ts":{"$date":"2012-11-20T20:03:00.830Z"},"user":""},
{"_id":{"$oid":"552786262cec76ed95fd61ee"},"client":"127.0.0.1","keyUpdates":0,"lockStats":{"timeAcquiringMicros":{"r":0,"w":2},"timeLockedMicros":{"r":0,"w":16}},"millis":0,"ns":"school2.student_grades","numYield":0,"op":"insert","ts":{"$date":"2012-11-20T20:03:00.829Z"},"user":""},
{"_id":{"$oid":"552786262cec76ed95fd61ef"},"client":"127.0.0.1","keyUpdates":0,"lockStats":{"timeAcquiringMicros":{"r":0,"w":2},"timeLockedMicros":{"r":0,"w":16}},"millis":0,"ns":"school2.student_grades","numYield":0,"op":"insert","ts":{"$date":"2012-11-20T20:03:00.830Z"},"user":""},
{"_id":{"$oid":"552786262cec76ed95fd61f0"},"client":"127.0.0.1","keyUpdates":0,"lockStats":{"timeAcquiringMicros":{"r":0,"w":2},"timeLockedMicros":{"r":0,"w":15}},"millis":0,"ns":"school2.student_grades","numYield":0,"op":"insert","ts":{"$date":"2012-11-20T20:03:00.830Z"},"user":""},
{"_id":{"$oid":"552786262cec76ed95fd61f1"},"client":"127.0.0.1","keyUpdates":0,"lockStats":{"timeAcquiringMicros":{"r":0,"w":2},"timeLockedMicros":{"r":0,"w":15}},"millis":0,"ns":"school2.student_grades","numYield":0,"op":"insert","ts":{"$date":"2012-11-20T20:03:00.830Z"},"user":""},
{"_id":{"$oid":"552786262cec76ed95fd61f2"},"client":"127.0.0.1","keyUpdates":0,"lockStats":{"timeAcquiringMicros":{"r":0,"w":2},"timeLockedMicros":{"r":0,"w":15}},"millis":0,"ns":"school2.student_grades","numYield":0,"op":"insert","ts":{"$date":"2012-11-20T20:03:00.831Z"},"user":""},
{"_id":{"$oid":"552786262cec76ed95fd61f3"},"client":"127.0.0.1","keyUpdates":0,"lockStats":{"timeAcquiringMicros":{"r":0,"w":3},"timeLockedMicros":{"r":0,"w":15}},"millis":0,"ns":"school2.student_grades","numYield":0,"op":"insert","ts":{"$date":"2012-11-20T20:02:53.472Z"},"user":""},
{"_id":{"$oid":"552786262cec76ed95fd61f4"},"client":"127.0.0.1","keyUpdates":0,"lockStats":{"timeAcquiringMicros":{"r":0,"w":4},"timeLockedMicros":{"r":0,"w":15}},"millis":0,"ns":"school2.student_grades","numYield":0,"op":"insert","ts":{"$date":"2012-11-20T20:03:00.831Z"},"user":""},
{"_id":{"$oid":"552786262cec76ed95fd61f5"},"client":"127.0.0.1","keyUpdates":0,"lockStats":{"timeAcquiringMicros":{"r":0,"w":4},"timeLockedMicros":{"r":0,"w":82}},"millis":0,"ns":"school2.student_grades","numYield":0,"op":"insert","ts":{"$date":"2012-11-20T20:03:05.959Z"},"user":""},
,
{"_id":{"$oid":"552786262cec76ed95fd61f7"},"client":"127.0.0.1","keyUpdates":0,"lockStats":{"timeAcquiringMicros":{"r":0,"w":3},"timeLockedMicros":{"r":0,"w":15}},"millis":0,"ns":"school2.student_grades","numYield":0,"op":"insert","ts":{"$date":"2012-11-20T20:03:05.959Z"},"user":""}

*/

