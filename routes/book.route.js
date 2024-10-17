const express = require('express');
const router = express.Router();
const Book = require("../models/book.model.js");
const {getBooks,getBook,createBook,updateBook,deleteBook} = require("../controllers/book.controller.js");

// for all books
router.get("/", getBooks);

// for one book
router.get("/:id", getBook);

// post or create book
router.post("/",createBook);

// update a book
router.put("/:id", updateBook);

// delete a book
router.delete(":/id", deleteBook);

module.exports = router;
