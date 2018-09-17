var express = require("express");

var app = express();

app.set("views", __dirname + "/views");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/static"));

app.get("/cars", function(request, response) {
  response.render("cars");
});
app.get("/cats", function(request, response) {
  response.render("cats");
});
app.get("/form", function(request, response) {
  response.render("form");
});
app.get("/", function(request, response) {
  response.render("index");
});

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/users", function(request, response) {
  users_array.push(request.body);
  console.log(users_array);
  response.redirect("/");
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
