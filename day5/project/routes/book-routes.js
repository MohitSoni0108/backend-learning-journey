const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");
const router = express.Router();


router.post("/add", addNewBook); // When a POST request hits /add, run the addNewBook logic
router.get("/get", getAllBooks);     // Handles fetching all books (and searching)
router.get("/get/:id", getSingleBookById); // Handles fetching one specific book
router.put("/update/:id", updateBook);       // UPDATE (PUT is used for updating data)
router.delete("/delete/:id", deleteBook); // DELETE
module.exports = router;