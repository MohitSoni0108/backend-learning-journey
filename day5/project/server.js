// 1. IMPORT DEPENDENCIES
require("dotenv").config();// This line tells Node to look at our .env file and load those variables into memory.
const express = require("express");// This pulls in the Express framework so we can build a web server easily.
const connectToDB = require("./database/db"); // NEW: Import the database function[cite: 7]
const bookRoutes = require("./routes/book-routes"); // Import the routes

// 2. INITIALIZE THE APP /SERVER
const app = express(); // This line actually creates our application. 'app' is now an object containing all of Express's magic

const PORT = process.env.PORT || 3000;//"|| 3000" means "if the .env file is missing, default to port 3000


connectToDB(); //connect to datatbase


// 3. MIDDLEWARE (The Translator)
app.use(express.json()); // express.json() acts as a translator, instantly converting that raw data into a readable JavaScript Object


// Connect the pipeline: any URL starting with /api/books goes to bookRoutes[cite: 7]
app.use("/api/books", bookRoutes);




// 5. TURN ON THE SERVER
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});