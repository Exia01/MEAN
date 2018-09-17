var express = require("express");

var app = express();

app.set("views", __dirname + "/views");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/static"));

var users_array = [
  { name: "Meggie", email: "Meggss@codingdojo.com" },
  { name: "Jay", email: "jay@codingdojo.com" },
  { name: "Brendan", email: "brendan@codingdojo.com" }
];

app.get("/", function(request, response) {
  response.render("users", { users: users_array });
});

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/users", function(request, response) {
  ;
  console.log(users_array);
  response.redirect("/");
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
