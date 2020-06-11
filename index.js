// Require express and body-parser
const express = require("express");
const bodyParser = require("body-parser");
const repo = "/var/www/book/";

const exec = require("child_process").exec;

// Initialize express and define a port
const app = express();
const PORT = 3000;

// Tell express to use body-parser's JSON parsing

app.use(bodyParser.json());

app.post("/deploy", (req, res) => {
<<<<<<< HEAD
  exec("cd " + repo + " && git pull");
  res.json("worked");
  console.log(`Deployed to server`);
});
=======
        
    exec('cd ' + repo + ' && git pull');
     res.json("worked");
    console.log(`Deployed to server`)


});

app.post('/download', (req, res ) => {

});

>>>>>>> 66d2685ed31e42164a8281413d9a2ba4d73cd3bd

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
