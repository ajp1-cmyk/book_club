const Book = require("../models/book.model.js");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    console.log(req.params);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createBook = async (req, res) => {
  try {
    console.log(req.body);
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);

    if (!book) {
      return res.status(404).json({ message: "book not found" });
    }

    const updatedBook = await Book.findById(id);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteBook =  async (req, res) => {
	try {
	  const { id } = req.params;
	  const book = await Book.findByIdAndDelete(id);

	  if (!book) {
		return res.status(404).json({ message: "book not found" });
	  }
	  res.status(200).json(book);
	} catch (error) {
	  res.status(500).json({ message: error.message }).send("book deleted !!!");
	}
  }



module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
}
