// modules required
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Book = require("./models/book.model.js");
const bookRoute = require("./routes/book.route.js");


//database
mongoose
  .connect(
    "mongodb+srv://aj008p1:%40bhi9575@bookdb.5dstg.mongodb.net/?retryWrites=true&w=majority&appName=BookDB"
  )
  .then(() => console.log("Connected to BookDB database!"))
  .catch((e) => {
    console.log("connection failed !!!");
    console.log(e);
  });


// configuring middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// routes
app.use('/api/books',bookRoute);


// port used / server running
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
