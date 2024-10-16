const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const bookRoutes = require('./Routes/Book');
const userRoutes = require('./Routes/User');

const app = express();

// Connecting to MongoDB Database //
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// CORS //
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Middleware : interpret JSON data from requests //
app.use(express.json());

// Middlewares : routes //
app.use('/api/books', bookRoutes);
app.use('/api/auth', userRoutes);

// Middleware : images //
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;