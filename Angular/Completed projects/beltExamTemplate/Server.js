const express    = require("express");
const session    = require("express-session");
const flash      = require("express-flash");
const bodyParser = require("body-parser");
const mongoose   = require("mongoose");
const bcrypt     = require("bcrypt");
const path       = require("path");
const app        = express();
const port       = 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/client/dist"));
app.use(express.json());
app.use(flash());
app.set("views",path.join(__dirname,"./views"));
app.set("view engine","ejs");
app.use(session({
	secret:"hideme",
	resave:false,
	saveUninitialized:true,
	cookie:{maxAge:5000}
}));

require("./config/Mongoose.js");
require("./config/Routes.js")(app);

app.listen(port,()=>{
	console.log("Listening on: "+port);
});