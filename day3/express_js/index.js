const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/about", (req, res) => {
  res.send("I am Mohit");
});

app.get("/contact", (req, res) => {
  res.send("Contact Me");
});



const port = 3000;
app.listen(port, () => {
  console.log(`Server is now running at port ${port}`);
});