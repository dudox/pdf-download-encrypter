// Require express and body-parser
const express = require("express");
const bodyParser = require("body-parser");
var multer = require('multer');
var upload = multer();
const repo = "/var/www/book/";
const file = "/var/www/book/file/";

const exec = require("child_process").exec;

// Initialize express and define a port
const app = express();
const PORT = 3000;

// Tell express to use body-parser's JSON parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(upload.array()); 
app.use(express.static('public'));



app.post("/deploy", (req, res) => {
    exec("cd " + repo + " && git pull");
    res.json("worked");
    console.log(`Deployed to server`);
});

app.post("/download", (req, res) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
    let name = req.body.name.replace(/ /g,'').toLowercase();
    exec("cd " + repo + "&& sh encrypt.sh "+ req.body.key+ " "+ name, (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (err) {
            console.log(err);
        }
    });

    //res.json(req.body.name);
    res.json({"status": "success","key":req.body.key,"file_name":name});
    console.log(req.body.name);
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
