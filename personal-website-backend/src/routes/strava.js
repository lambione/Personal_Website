const express = require('express');
const router = express.Router();
const userController = require('../controllers/stravaControllers');

// Define user-related routes
router.get('/', userController.getAllUsers);
router.post('/create', userController.createUser);

module.exports = router;