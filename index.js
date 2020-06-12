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
app.use(bodyParser.urlencoded({ extended: false }));


app.post("/deploy", (req, res) => {
    exec("cd " + repo + " && git pull");
    res.json("worked");
    console.log(`Deployed to server`);
});

app.post("/download", (req, res) => {
    exec("cd " + repo + "&& pdftk main.pdf output protected.pdf owner_pw 12345 user_pw "+req.body.key, (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (err) {
            console.log(err);
        }
    });


    //res.json(req.body.name);
    exec("cd " + repo + " && ./encrypt.sh");
    res.json("success");
    console.log(req.body.name);
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
