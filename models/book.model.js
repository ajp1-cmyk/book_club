const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter book name"],
    },

    author: {
      type: String,
      required: [true, "Please enter author name"],
    },
    pages: {
      type: Number,
      required: true,
      default: 42,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
