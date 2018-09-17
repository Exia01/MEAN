let MeanBEController = require("../controllers/MeanBE.js");
let path = require("path");

module.exports =(app)=>{
// ********************************************************
// Base Controller
// ********************************************************
	app.get("/meanBE",MeanBEController.root);
	app.get("/api/meanBEs",MeanBEController.all);
	app.post("/api/meanBEs",MeanBEController.create);
	app.get("/api/meanBEs/:id",MeanBEController.findById);
	app.put("/api/meanBEs/:id",MeanBEController.update);
	app.delete("/api/meanBEs/:id",MeanBEController.destroy);
// ********************************************************
// Angular
// ********************************************************
	app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}