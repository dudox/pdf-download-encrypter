// Require express and body-parser
const express = require("express");
const bodyParser = require("body-parser");
const repo = "/var/www/book/";
const file = "/var/www/book/file/";

const exec = require("child_process").exec;

// Initialize express and define a port
const app = express();
const PORT = 3000;

// Tell express to use body-parser's JSON parsing

app.use(bodyParser.json());

app.post("/deploy", (req, res) => {
    exec("cd " + repo + " && git pull");
    res.json("worked");
    console.log(`Deployed to server`);
});

app.post("/download", (req, res) => {
    // exec("cd " + repo + " && ./encrypt.sh ./file/");
    exec("sh encrypt.sh", (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
    //res.json(req.body.name);
    console.log(req.body.name);
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
