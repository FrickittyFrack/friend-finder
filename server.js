
// Require Express
var express = require("express");

// Require Path
var path = require("path");

// Set app variable
var app = express();

// Set port
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For client-side CSS/Javascript files
app.use(express.static(path.join(__dirname, "/app/public")));

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
