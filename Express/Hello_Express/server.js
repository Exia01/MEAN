// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
// invoke express and store the result in the variable app
var app = express();
// use app's get method and pass it the base route '/' and a callback

// This sets the location where express will look for the ejs views
app.set("views", __dirname + "/views");
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set("view engine", "ejs");

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));

app.get("/", function(request, response) {
  // hard-coded user data
  var users_array = [
    { name: "Michael", email: "michael@codingdojo.com" },
    { name: "Jay", email: "jay@codingdojo.com" },
    { name: "Brendan", email: "brendan@codingdojo.com" },
    { name: "Andrew", email: "andrew@codingdojo.com" }
  ];
  response.render("users", { users: users_array });
});
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
});
