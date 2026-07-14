'use strict';
const express = require('express');
const app = express();
// Define the port and host for the Node.js app
const PORT = 3000;
const HOST = '0.0.0.0';
// Define a simple API endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Node.js API is running!' });
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Start the server and listen on the defined port
app.listen(PORT, HOST, () => {
    console.log(`Node.js server running on http://${HOST}:${PORT}`);
});
