require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/data");





const app = express();

connectToDB();

const PORT = process.env.PORT || 3000; 

//middleware -> express.json()
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});


