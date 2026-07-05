// 1. IMPORT MONGOOSE
const mongoose = require("mongoose"); //[cite: 3]

// 2. DEFINE THE BLUEPRINT (SCHEMA)
const BookSchema = new mongoose.Schema({
  title: {
    type: String, // The title must be text
    required: [true, "Book title is required"], // It cannot be left empty
    trim: true, // If a user types "  Harry Potter  ", it automatically removes the extra spaces
    maxLength: [100, "Book title can not be more than 100 characters"], // Prevents database abuse
  },
  author: {
    type: String, 
    required: [true, "Author name is required"],
    trim: true, 
  },
  year: {
    type: Number, // The year must be a number, not text
    required: [true, "Publication year is required"], 
    min: [1000, "Year must be atleast 1000"], // Logical check: No books from the year 5!
    // Logical check: new Date().getFullYear() gets the current year automatically. 
    // This prevents someone from saving a book published in the future.
    max: [new Date().getFullYear(), "Year cannot be in the future"], 
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically saves the exact timestamp when the book is added
  },
});

// 3. EXPORT THE MODEL
// We compile the schema into a Model named "Book" and export it.
module.exports = mongoose.model("Book", BookSchema); 