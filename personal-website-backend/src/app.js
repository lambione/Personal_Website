const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Import routes
const routes = require('./routes');
app.use('/', routes); // Prefix all routes with `/api`

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
