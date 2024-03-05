// ********************
// DEPENDENCIES
// ********************
const express = require('express');
const { MongoDB, ObjectID } = require('mongodb');

// Utilizing express.Router() class for mountable routes
const router = express.Router()

// ********************
// Routes / Endpoints
// ********************

router.get('/', (req, res) => {
    try {
        collection
            .find()
            .toArray()
            .then(data => {
                res.json(data)
            })
    }
    catch (err) {
        console.error(err);
    };
});

// 1. GET /books: 
// Retrieve a list of all books. 
// Implement pagination to limit the number of books returned per request.
router.get('/books', (req, res) => {
    try {
        collection
            .find()
            .toArray()
            .then(data => {
                res.json(data)
            })
    }
    catch (err) {
        console.error(err);
    };
});

// 2. GET /books/{id}: 
// Retrieve details of a specific book by ID.
router.get('/books/:id', (req, res) => {
    try {
        res.json(data);
        res.render('index.ejs',)
    }
    catch (err) {
        console.error(err);
    };
});

// 3. POST /books: 
// Add a new book to the collection. 
// Implement input validation to ensure all required fields are provided (`title`, `author`, `publicationYear`), and `publicationYear` should be a valid year in the past.
router.post('/books', (req, res) => {
    try {
        collection
            .insertOne(req.body) // Insert req.body as a doc into the collection
            .then(result => {
                console.log(`Book "${req.body.title}" added.`)
            })
    }
    catch (err) {
        console.error(err)
    }
})

// 4. PUT /books/{id}: 
// Update details of a specific book by ID. 
// Allow partial updates, and ensure validation is applied to the input data.
router.put('/books/:id', (req, res) => {
    try {

    }
    catch (err) {
        console.error(err)
    }
})

// 5. DELETE /books/{id}: 
// Delete a specific book by ID.
router.delete('/books/:id', (req, res) => {
    try {
        collection
            .deleteOne({ _id: ObjectId(bookID) });
        res.redirect('/')
    }
    catch (err) {
        console.error(err)
    }
})

// 6. GET /books/search?q={query}: 
// Implement search functionality to allow users to search for books by title or author.
router.get('book/search', (req, res) => {
    try {

    }
    catch (err) {
        console.error(err)
    }
})

// 7. GET /books/stats: 
// Provide statistics about the collection of books, including the total number of books, the earliest and latest publication years, and any other relevant metrics you think are appropriate.
router.get('books/stats', (req, res) => {
    try {

    }
    catch (err) {
        console.error(err)
    }
})

module.exports = router