// ********************
// Dependencies
// ********************
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

// Connect to Environment Variables
require('dotenv').config({
    path: '.env',
});

// ********************
// Middleware 
// ********************
const app = express();
app.use(bodyParser.json());
app.use(cors());

// ********************
// Database
// ********************

// Connect to MongoDB through dotenv
const connectionString = process.env.DB_URL;

// ********************
// Routes 
// ********************

// 1. GET /books: 
// Retrieve a list of all books. 
// Implement pagination to limit the number of books returned per request.

// 2. GET /books/{id}: 
// Retrieve details of a specific book by ID.

// 3. POST /books: 
// Add a new book to the collection. 
// Implement input validation to ensure all required fields are provided (`title`, `author`, `publicationYear`), and `publicationYear` should be a valid year in the past.

// 4. PUT /books/{id}: 
// Update details of a specific book by ID. 
// Allow partial updates, and ensure validation is applied to the input data.

// 5. DELETE /books/{id}: 
// Delete a specific book by ID.

// 6. GET /books/search?q={query}: 
// Implement search functionality to allow users to search for books by title or author.

// 7. GET /books/stats: 
// Provide statistics about the collection of books, including the total number of books, the earliest and latest publication years, and any other relevant metrics you think are appropriate.


// ********************
// Controllers
// ********************

// ********************
// Models
// ********************

// ********************
// Server Start
// ********************
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});