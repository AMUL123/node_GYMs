const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/GYM'; // Replace 'GYM' with your database name

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB is disconnected');
});

// Export the database connection
module.exports = db;
