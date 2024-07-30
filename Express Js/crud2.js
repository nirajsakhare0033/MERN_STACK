import express from "express";
const app = express();
//ugly code
app.get("/student", (req, res) => {
  res.send("getting data");
});

app.post("/student", (req, res) => {
  res.send("posting data");
});

app.put("/student", (req, res) => {
  res.send("puting data");
});

app.delete("/student", (req, res) => {
  res.send("deleteing data");
});

//Refacctor ugly code

app
  .route("/students")
  .get((req, res) => res.send("get method working"))
  .post((req, res) => res.send("post method working"))
  .put((req, res) => res.send("put method working"))
  .delete((req, res) => res.send("delete method working"));

app.listen(1000, () => console.log("server is working..."));
