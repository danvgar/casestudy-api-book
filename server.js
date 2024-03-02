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