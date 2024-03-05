// ********************
// Placeholder Data 
// ********************
// ABOUT - For testing purposes, can be removed or commented out once database is running successfully
// const books = [
//   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925 },
//   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publicationYear: 1960 },
//   { id: 3, title: '1984', author: 'George Orwell', publicationYear: 1949 }
// ];



// ********************
// DEPENDENCIES
// ********************
const express = require('express'); // For server HTTP req
const bodyParser = require('body-parser'); // For parsing req into JSON
const MongoClient = require('mongodb').MongoClient; // For MongoDB connection. 
const cors = require('cors'); // For CORS headers
const dotenv = require('dotenv'); // For environment variables

const app = express(); // Initialize express



// ********************
// CONFIG & SETUP
// ********************

// ENVIRONMENT VARIABLES SETUP
// ABOUT - Connect to environment variables for connection string security. 
// --
dotenv.config({
  // Replace file path string for environment variables.
  path: '.env', 
});

// HTML / JS TEMPLATING SETUP
// ABOUT - Using EJS and Frontend for testing and demonstration purposes
// --
app.set('view engine', 'ejs') // Set view engine to EJS

// MONGO DB SETUP
// ABOUT - These values must match the MongoDB database to run successfully
// --
const CONNECTION_STRING = process.env.DB_URL; // Get MongoDB connection URL
const DB_NAME = 'books_db'; // Set MongoDB database name
const COLLECTION_NAME = 'books_collection'; // Set MongoDB collection name

// BODY-PARSER SETUP
// ABOUT - Used to parse request bodies into JSON. Do not need to adjust
// --
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()); // Parse requests into JSON

// CORS SETUP
// ABOUT - 
// --
app.use(cors()); // Use CORS Headers


// ********************
// Database
// ********************

MongoClient.connect(CONNECTION_STRING)
  .then(client => {
    console.log('Successfully connected to Database')
    const db = client.db(DB_NAME)
    const collection = db.collection(COLLECTION_NAME)

    // ********************
    // Routes / Endpoints
    // ********************

    // Initial rendering EJS view to frontend for demo and testing purposes
    app.get('/', (req, res) => {
      db.collection(COLLECTION_NAME)
        .find()
        .toArray()
        .then(data => {
          res.render('index.ejs', { books: data })
          // console.log(data);
        })
        .catch(err => console.log(err))
    })

    // 1. GET /books: 
    // Retrieve a list of all books. 
    // Implement pagination to limit the number of books returned per request.
    app.get('/books', (req, res) => {
      // console.log(req.body);
    })

    // 2. GET /books/{id}: 
    // Retrieve details of a specific book by ID.
    app.get('/books/:id', (req, res) => {
      // console.log(req.body);
    })

    // 3. POST /books: 
    // Add a new book to the collection. 
    // Implement input validation to ensure all required fields are provided (`title`, `author`, `publicationYear`), and `publicationYear` should be a valid year in the past.
    app.post('/books', (req, res) => {
      // console.log(req.body);
      collection.insertOne(req.body) // Insert req.body as a doc into the collection
        .then(result => {
          console.log(`Book "${req.body.title}" added.`)
          res.redirect('/'); // After successful submission of form, refresh the page. 
        })
        .catch(error => console.error(error))
    })

    // 4. PUT /books/{id}: 
    // Update details of a specific book by ID. 
    // Allow partial updates, and ensure validation is applied to the input data.
    app.put('/books/:id', (req, res) => {
      // console.log(req.body);
    })

    // 5. DELETE /books/{id}: 
    // Delete a specific book by ID.
    app.delete('/books/:id', (req, res) => {
      // console.log(req.body);
    })

    // 6. GET /books/search?q={query}: 
    // Implement search functionality to allow users to search for books by title or author.
    app.get('book/search', (req, res) => {
      // console.log(req.body);
    })

    // 7. GET /books/stats: 
    // Provide statistics about the collection of books, including the total number of books, the earliest and latest publication years, and any other relevant metrics you think are appropriate.
    app.get('books/stats', (req, res) => {
      // console.log(req.body);
    })


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
  })
  .catch(err => console.log(err))


//   Output Requirements:
// // - The API should be RESTful and follow best practices.
// // - Implement pagination for listing books.
// // - Implement proper input validation for POST and PUT endpoints.
// // - Implement search functionality using query parameters.
// // - Include comprehensive error handling and appropriate status codes.
// // - Write clean, well-structured, and maintainable code.
// // - Include thorough documentation and comments.

// Evaluation Criteria:
// // - Correctness and completeness of API implementation.
// // - Implementation of pagination, search, and statistics functionality.
// // - Quality of code (readability, maintainability, efficiency).
// // - Adherence to RESTful principles and best practices.
// // - Error handling, input validation, and edge cases handling.
// // - Documentation quality and completeness.

// Submission:
// // - The candidate should deliver the completed project via email the next day.
// // - The submission should be a compressed folder containing the project files.
// // - Include a README file with instructions on how to run the application locally.
// // - Ensure the project is well-organized and easy to understand.
// // - Database dump file

// Additional Notes:
// // - Utilize asynchronous programming paradigms where appropriate.
// // - Implement unit tests to ensure the reliability of the API.
// // - Consider scalability and performance optimizations.
// // - You can include any additional features or improvements you think are appropriate to showcase your skills.