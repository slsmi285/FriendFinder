//Dependcies Require packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//Express Configuration, sets up the basic properties for express server
var app = express();

//sets an initial port, to be used later in the listener
var PORT = process.env.PORT || 8086;

//bodyparser makes it easy for the server to interpret data sent to it - standard format
app.use(bodyParser.urlencoded({ extended: true }));
//parse application/json
app.use(bodyParser.json());

//Router - gives server a map of how to respond when users visit or request data from various URLS
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



//Listener, below starts the server
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
