const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(bodyParser.json());

// Information Collection Endpoint
app.post('/collect-info', (req, res) => {
    // Handle form submissions and store data in your preferred way
    const customerData = req.body;
    // Store data securely
    // Respond with success or error message
    res.json({ message: 'Data collected successfully.' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



