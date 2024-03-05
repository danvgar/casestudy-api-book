// ********************
// DEPENDENCIES
// ********************
const express = require('express'); // For server HTTP req
const { MongoClient, ObjectID } = require('mongodb'); // For MongoDB connection. 
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


// JSON PARSING SETUP
// ABOUT - Used to parse request bodies into JSON.
// --
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// CORS SETUP
// ABOUT - 
// --
app.use(cors()); // Use CORS Headers



// ********************
// Database
// ********************

// Connect to database
MongoClient.connect(CONNECTION_STRING)
  .then(client => {
    console.log('Successfully connected to Database')
    const db = client.db(DB_NAME)
    const collection = db.collection(COLLECTION_NAME)
    const PORT = process.env.PORT || 3000;

    // app.use()

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error(err))