// server/app.js
const express = require('express');
const cors = require('cors');
const isAuth = require('./middlewares/is-auth');
require('dotenv').config();

const app = express();

// Middleware to handle CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to check authentication
app.use(isAuth);

module.exports = app;
