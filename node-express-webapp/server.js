'use strict';
const express = require('express');
// Constants
const PORT = 3001;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello FS2025 DevOps Course! This is my custom Web-App :-)');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);