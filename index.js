console.log("---Begin start.js---");
const express = require("express");
const dayjs = require("dayjs");

// Express
const app = express();
const bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser  
let urlencodedParser = bodyParser.urlencoded({ extended: false });  

dayjs("2018-08-08"); // parse

let myDate = dayjs().format("YYYY-MM-DDTHH:mm:ss A"); // display
console.log(`The Current Date is ${myDate}`);

/*
let http = require('http');
let fs = require('fs');
function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}
http.createServer(onRequest).listen(5000);
*/
// View engine setup
app.set("view engine", "ejs");
app.use("/styles", express.static(__dirname + "/styles"));
app.get("/index", function (req, res) {
  try {
    res.status(200);
    res.render("index", {
      title: "NPM Node JS Exercise",
      heading: "NPM Node JS Exersise",
    });
  } catch (error) {
    res.status(500);
    res.send(
      `A server error occurred while handling your request error = ${error}`
    );
  }
});
app.post("/process_post", urlencodedParser, function (req, res) {
  // Prepare output in JSON format
  console.log(req.body.date);
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
})
app.use(function(req,res){
  res.status(404);
  res.render("invalidUrlPath", {
    title: "Invalid URL",
    message: `URL Not Found ${req.url}`,
  });
});
app.listen(3000, () => console.log("Server listening on port 3000"));
