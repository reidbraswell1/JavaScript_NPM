console.log("---Begin start.js---");
// Modules
// Lodash
//import lodash from 'lodash';
// dayjs
//const dayjs = require("dayjs");
import dayjs from 'dayjs';
// express
//const express = require("express");
import express from 'express';
// body-parser
//const bodyParser = require('body-parser');
import bodyParser from 'body-parser';

import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
console.log(`__dirname=${__dirname}`);

// Express
const app = express();

// Create application/x-www-form-urlencoded parser  
let urlencodedParser = bodyParser.urlencoded({ extended: false, type: "urlencoded" });

// View engine setup specify the view engine for HTML pages
app.set("view engine", "ejs");

// Set a static directory for HTML pages to refer to project specific style sheets
app.use("/styles", express.static(__dirname + "../../styles"));
// Respond to GET request at url "/index"
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
// Respond to POST request at url "/process-form"
app.post("/process-form", urlencodedParser, function (req, res) {
  res.status(200);
  let myDate = dayjs(`${req.body.date}T${req.body.time}`,'YYYY-MM-DDTHH:MM');
  let formattedDate = myDate.format("MM-DD-YYYY (ddd)  MMMM DD, YYYY");
  let formattedTime = myDate.format("hh:mm:ss A");
  console.log(`Date = ${req.body.date}`);
  console.log(`Time = ${req.body.time}`);
  res.render("response", {
    title: "Response",
    date: formattedDate,
    time: formattedTime,
  })
});
// Render a html page for an invalid url path
app.use(function(req,res){
  res.status(404);
  res.render("invalidUrlPath", {
    title: "Invalid URL",
    message: `URL Not Found ${req.url}`,
  });
});
// Listen for connections on port 3000
app.listen(3000, () => console.log("Server listening on port 3000"));
