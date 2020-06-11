// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")
const secret = "@dm1n..12345";
const repo = "/var/www/book/";

const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;


// Initialize express and define a port
const app = express()
const PORT = 3000

// Tell express to use body-parser's JSON parsing

app.use(bodyParser.json())

app.post("/deploy", (req, res) => {
        
    exec('cd ' + repo + ' && git pull');
    console.log(`Deployed to server`)


})


// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))