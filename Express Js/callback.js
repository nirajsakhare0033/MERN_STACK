import express from 'express';
const app = express();

app.get("/double-cb", (req, res, next) => {
  console.log("First callback")
   next();
},
(req,res) => {
  console.log("second callback")
 
}

)

app.listen(1000, () => {
  console.log("server up!...")
})