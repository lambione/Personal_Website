const express = require('express');
const router = express.Router();

// Import specific route files
const userRoutes = require('./strava');

// Define route endpoints
router.use('/strava', userRoutes); // Example endpoint: /api/users

module.exports = router;
