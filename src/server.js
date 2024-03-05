// ********************
// DEPENDENCIES
// ********************
const express = require('express'); // For server HTTP req
const { MongoClient, ObjectID } = require('mongodb'); // For MongoDB connection. 
const cors = require('cors'); // For CORS headers
const dotenv = require('dotenv'); // For environment variables
const router = require('/src/routes/books')

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


// SETUP
// ABOUT - 
// --
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors()); // Use CORS Headers


// MONGO DB SETUP
// ABOUT - These values must match the MongoDB database to run successfully
// --
const CONNECTION_STRING = process.env.DB_URL; // Get MongoDB connection URL
const DB_NAME = 'books_db'; // Set MongoDB database name
const COLLECTION_NAME = 'books_collection'; // Set MongoDB collection name


// Connect to database
MongoClient.connect(CONNECTION_STRING)
  .then(client => {
    console.log('Successfully connected to Database')
    const db = client.db(DB_NAME)
    const collection = db.collection(COLLECTION_NAME)
    const PORT = process.env.PORT || 3000;

    // Utilizing express.Router() class for mountable routes
    app.use('/books', router(db)) 

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error(err))

  // Export app for testing
  module.exports = app