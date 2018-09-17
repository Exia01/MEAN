let UserController = require("../controllers/User.js");
let path = require("path");

module.exports =(app)=>{
// ********************************************************
// Base Controller
// ********************************************************
	app.get("/user",UserController.root);
	app.get("/api/users",UserController.all);
	app.post("/api/users",UserController.create);
	app.get("/api/users/:id",UserController.findById);
	app.put("/api/users/:id",UserController.update);
	app.delete("/api/users/:id",UserController.destroy);
// ********************************************************
// Angular
// ********************************************************
	app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}