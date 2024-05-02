const express = require('express');
const app = express();
const http = require('http');
const fs = require("fs");

const filepath = './files/'
const hostname = '192.168.0.245';

app.get('/trivia', (req, res) => {
    fs.readFile(filepath+'trivia.json', (err, data) => {
        if (err) {
            res.status(500).send("Server encountered a file reading error");
        } else {
            res.set('Content-Type', 'application/json');
            res.set('Access-Control-Allow-Origin', '*');
            res.send(data);
        }
    });
});

http.createServer(app);

app.listen(3000, hostname, () => {
    console.log('Server listening on port 3000 of:', hostname);
});