const Book = require("../models/book");

// 1. CREATE: Add a new book 
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newBookFormData) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

// 2. READ: Get All Books 
const getAllBooks = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }
    const allBooks = await Book.find(query);
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of books fetched successfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found in collection",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

// 3. READ: Get a Single Book by ID
const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const bookDetailsByID = await Book.findById(getCurrentBookID);
    if (!bookDetailsByID) {
      return res.status(404).json({
        success: false,
        message: "Book with the current ID is not found!",
      });
    }
    res.status(200).json({
      success: true,
      data: bookDetailsByID,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

// 4. UPDATE: Modify an existing book
const updateBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body; // The new details (e.g., new title or year)
    const getCurrentBookID = req.params.id; // The ID of the book we want to change

    // Mongoose logic: Find it by ID and update it with the new form data
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookID,
      updatedBookFormData,
      { new: true } // LOGIC: Tells MongoDB to return the NEW updated data, not the old data
    );

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

// 5. DELETE: Erase a book from existence
const deleteBook = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id; // The ID from the URL
    
    // Mongoose logic: Find the book by its ID and delete it instantly[cite: 1]
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);

    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

module.exports = {
  addNewBook,
  getAllBooks,
  getSingleBookById,
  updateBook,
  deleteBook,
};