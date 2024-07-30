import express from 'express';
const app = express();
//HTTP METHODS
//GET == Retrive Data
//POST == create/Insert Data
//PUT == completely update data
//PATCH == partially update data
//DELETE == Delete data
//ALL == Any http Request method


app.get('/', (req, res) => {
  res.send("<h1>Welcome to CRUD OPERATION</h1>")
})
//advance routing
//String pattern--not using
app.get('/ab?cd', (req, res) => {
  res.send("If the user hit (acd) or (abcd) then this will work")
})


//Regex
app.get(/x/, (req,res) => {
  res.send("If the path is x it will provide and")
})



app.listen(1000, () => console.log("server up ....😊😊😊"));